import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    // ── Email ──────────────────────────────────────────────────────────────
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "suporte@duacriativa.com",
        pass: process.env.DUA_SMTP_PASS,
      },
    });

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

    await transporter.sendMail({
      from: "Dua Criativa <suporte@duacriativa.com>",
      to: "suporte@duacriativa.com",
      subject: `🔥 Novo lead — ${nome} (${interesse})`,
      text: emailBody,
    });

    // ── CRM ────────────────────────────────────────────────────────────────
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
        const errText = await crmRes.text();
        console.error("CRM lead error:", crmRes.status, errText);
      }
    } catch (crmErr) {
      // CRM não bloqueia — email já foi enviado
      console.error("CRM fetch failed:", crmErr);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Trafego lead error:", error);
    return NextResponse.json({ error: "Erro ao processar" }, { status: 500 });
  }
}
