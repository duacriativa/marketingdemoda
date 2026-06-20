import { NextRequest, NextResponse, after } from "next/server";
import nodemailer from "nodemailer";

// Janela de deduplicação: mesma combinação whatsapp+interesse enviada de novo
// dentro desse intervalo é tratada como duplo-clique, não um novo lead.
const DEDUPE_WINDOW_MS = 30_000;
const recentSubmissions = new Map<string, number>();

function isDuplicate(key: string): boolean {
  const now = Date.now();
  const lastSeen = recentSubmissions.get(key);
  for (const [k, ts] of recentSubmissions) {
    if (now - ts > DEDUPE_WINDOW_MS) recentSubmissions.delete(k);
  }
  recentSubmissions.set(key, now);
  return lastSeen !== undefined && now - lastSeen < DEDUPE_WINDOW_MS;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      nome,
      whatsapp,
      instagram,
      investimento_atual,
      faturamento,
      atendimento_leads,
      interesse,
      origem,
    } = body;

    const dedupeKey = `${whatsapp}|${interesse}`;
    if (isDuplicate(dedupeKey)) {
      return NextResponse.json({ ok: true, duplicate: true });
    }

    const interesseLabel =
      interesse === "combo"
        ? "✅ Combo (tráfego + CRM)"
        : interesse === "trafego"
          ? "📈 Só tráfego"
          : "❄️ Frio — sem condições no momento";

    const emailBody = `🔥 Novo lead — Formulário Tráfego Pago

Nome: ${nome}
WhatsApp: ${whatsapp}
Instagram: ${instagram}

Investimento atual em anúncios: ${investimento_atual}
Faturamento mensal: ${faturamento}
Como atende leads: ${atendimento_leads}

Interesse: ${interesseLabel}
Origem: ${origem ?? "trafegopago-form"}`;

    // ── Email ──────────────────────────────────────────────────────────────
    // Disparado em background — não bloqueia a resposta ao usuário.
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "suporte@duacriativa.com",
        pass: process.env.DUA_SMTP_PASS,
      },
    });

    after(async () => {
      try {
        await transporter.sendMail({
          from: "Dua Criativa <suporte@duacriativa.com>",
          to: "suporte@duacriativa.com",
          subject: `🔥 Novo lead — ${nome} (${interesse})`,
          text: emailBody,
        });
      } catch (err) {
        console.error("Email send failed:", err);
      }
    });

    // ── CRM ────────────────────────────────────────────────────────────────
    // Também em background — não bloqueia a resposta.
    after(async () => {
      try {
        const crmRes = await fetch(
          "https://renewed-youth-production-7d32.up.railway.app/api/v1/leads",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...body, origem: origem ?? "trafegopago-form" }),
          }
        );
        if (!crmRes.ok) {
          console.error("CRM lead error:", crmRes.status, await crmRes.text());
        }
      } catch (crmErr) {
        console.error("CRM fetch failed:", crmErr);
      }
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Trafego lead error:", error);
    return NextResponse.json({ error: "Erro ao processar" }, { status: 500 });
  }
}
