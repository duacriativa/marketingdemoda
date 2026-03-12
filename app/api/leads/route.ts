import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, whatsapp, email, faturamento, modelo, source } = body;

    // Extrair UTMs da URL de origem
    let utmSource = "-";
    let utmMedium = "-";
    let utmCampaign = "-";
    if (source) {
      try {
        const url = new URL(source);
        utmSource = url.searchParams.get("utm_source") || "-";
        utmMedium = url.searchParams.get("utm_medium") || "-";
        utmCampaign = url.searchParams.get("utm_campaign") || "-";
      } catch {
        // URL inválida, mantém "-"
      }
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "suporte@duacriativa.com",
        pass: process.env.DUA_SMTP_PASS,
      },
    });

    const emailBody = `Qual é o seu nome?
${name}

Qual o seu WhatsApp?
${whatsapp}

Informe seu melhor e-mail
${email}

Qual o seu faturamento mensal?
${faturamento}

Qual o seu modelo de venda?
${modelo}

---
UTMs:
Source: ${utmSource}
Medium: ${utmMedium}
Campaign: ${utmCampaign}`;

    await transporter.sendMail({
      from: "Dua Criativa <suporte@duacriativa.com>",
      to: "suporte@duacriativa.com",
      subject: "Respostas do Formulário",
      text: emailBody,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json({ error: "Erro ao enviar" }, { status: 500 });
  }
}
