"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const DUA_WA = "5585989011558";

const FATURAMENTO_OPTIONS = [
  "Menos de R$ 15k/mês",
  "R$ 15k – R$ 50k/mês",
  "R$ 50k – R$ 150k/mês",
  "Acima de R$ 150k/mês",
];

const MODELO_OPTIONS = [
  "E-commerce próprio",
  "Instagram/WhatsApp",
  "Marketplace (Shopee, Mercado Livre)",
  "Loja física + online",
  "Atacado",
];

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function trackPixelLead(faturamento: string) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      content_category: faturamento,
      content_name: "dua-criativa-form",
    });
  }
}

export default function LeadForm({ clientSlug }: { clientSlug: string }) {
  const searchParams = useSearchParams();
  const isDuaCriativa = clientSlug === "dua-criativa";

  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    email: "",
    instagram: "",
    faturamento: "",
    modelo: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const utmSource = searchParams.get("utm_source") || "";
    const utmMedium = searchParams.get("utm_medium") || "";
    const utmCampaign = searchParams.get("utm_campaign") || "";
    if (utmSource || utmMedium || utmCampaign) {
      // store UTMs if needed
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          clientSlug,
          source: window.location.href,
        }),
      });

      if (!res.ok) throw new Error("Erro ao enviar");

      setSuccess(true);

      if (isDuaCriativa) {
        trackPixelLead(form.faturamento);
        const msg = encodeURIComponent(
          `Olá! Me chamo ${form.name} e acabei de preencher o formulário da Dua Criativa.\n\nFaturamento: ${form.faturamento}\nModelo de venda: ${form.modelo}\n\nQuero agendar minha reunião estratégica!`
        );
        setTimeout(() => {
          window.open(`https://wa.me/${DUA_WA}?text=${msg}`, "_blank");
        }, 1500);
      }
    } catch {
      setError("Ops! Tente novamente ou nos chame no WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">🎉</div>
        <h4 className="text-xl font-black text-dualime mb-2">
          {isDuaCriativa ? "Perfeito! Abrindo seu WhatsApp…" : "Recebemos seu contato!"}
        </h4>
        <p className="text-gray-400 text-sm">
          {isDuaCriativa
            ? "Nosso time vai confirmar em até 1h."
            : "Entraremos em contato em breve."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Nome */}
      <div>
        <label className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wide">
          Nome completo *
        </label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Seu nome"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-dualime transition-colors"
        />
      </div>

      {/* WhatsApp */}
      <div>
        <label className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wide">
          WhatsApp *
        </label>
        <input
          type="tel"
          name="whatsapp"
          required
          value={form.whatsapp}
          onChange={handleChange}
          placeholder="(85) 99999-9999"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-dualime transition-colors"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wide">
          E-mail *
        </label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="seu@email.com"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-dualime transition-colors"
        />
      </div>

      {/* Instagram — apenas se NÃO for Dua Criativa */}
      {!isDuaCriativa && (
        <div>
          <label className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wide">
            Instagram da marca
          </label>
          <input
            type="text"
            name="instagram"
            value={form.instagram}
            onChange={handleChange}
            placeholder="@suamarca"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-dualime transition-colors"
          />
        </div>
      )}

      {/* Faturamento */}
      <div>
        <label className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wide">
          Faturamento mensal *
        </label>
        <select
          name="faturamento"
          required
          value={form.faturamento}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-dualime transition-colors"
        >
          <option value="" disabled className="bg-black">
            Selecione...
          </option>
          {FATURAMENTO_OPTIONS.map((o) => (
            <option key={o} value={o} className="bg-black">
              {o}
            </option>
          ))}
        </select>
      </div>

      {/* Modelo */}
      <div>
        <label className="block text-xs font-bold text-gray-400 mb-1 uppercase tracking-wide">
          Modelo de venda *
        </label>
        <select
          name="modelo"
          required
          value={form.modelo}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-dualime transition-colors"
        >
          <option value="" disabled className="bg-black">
            Selecione...
          </option>
          {MODELO_OPTIONS.map((o) => (
            <option key={o} value={o} className="bg-black">
              {o}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-dualime text-duabg font-black text-lg rounded-xl hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading
          ? "Enviando..."
          : isDuaCriativa
          ? "Quero minha reunião gratuita →"
          : "Solicitar Orçamento →"}
      </button>

      <p className="text-gray-600 text-xs text-center">
        🔒 Seus dados estão seguros. Sem spam.
      </p>
    </form>
  );
}
