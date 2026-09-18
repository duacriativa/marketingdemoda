"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { Unbounded } from "next/font/google";
import Image from "next/image";
import { Suspense } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Megaphone,
  Users,
  Brain,
  CheckCircle2,
  ChevronDown,
  Star,
  TrendingUp,
  ImageIcon,
} from "lucide-react";
import LeadForm from "@/components/LeadForm";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700", "900"], display: "swap", variable: "--font-playfair" });
const unbounded = Unbounded({ subsets: ["latin"], weight: ["700"], display: "swap" });

// ─── Paleta
// Claro: bg #F5F5F0  texto #0A0A0A  secondário #6B6B6B  borda #E2E2DC
// Escuro: bg #000000  texto #FFFFFF  secondário #9CA3AF
// Lime:   #CCFF00

// ─── Dados de prova social
// Adicione seus prints em /public/provas/ e liste aqui
const PROOF_IMAGES = [
  { src: "/provas/prova-1.jpg", caption: "R$ 300k em 1 mês — cliente de moda feminina CE" },
  { src: "/provas/prova-2.jpg", caption: "ROAS 6.2× em 90 dias — varejo SP" },
  { src: "/provas/prova-3.jpg", caption: "−89% no CPL — atacado moda praia CE" },
  { src: "/provas/prova-4.jpg", caption: "Vendemos 4k em 1h após campanha" },
  { src: "/provas/prova-5.jpg", caption: "1000 pedidos em 48h — e-commerce moda" },
  { src: "/provas/prova-6.jpg", caption: "R$ 12k gerados em 10 minutos" },
];

const PILLARS = [
  { num: "01", icon: Megaphone, title: "Social Media", desc: "Calendário editorial, produção visual e narrativa de marca alinhados ao DNA da sua coleção." },
  { num: "02", icon: BarChart3, title: "Tráfego Pago", desc: "Meta, Google e TikTok gerenciados por quem entende de moda — não de qualquer nicho." },
  { num: "03", icon: Users, title: "CRM & Comercial", desc: "Fluxo ativo de retenção: reativação de leads, follow-up e prospecção no Kommo." },
  { num: "04", icon: Brain, title: "Inteligência de Dados", desc: "Dashboard com ROAS, CAC e ticket médio. Decisões baseadas em número, nunca em feeling." },
];

const TIMELINE = [
  { num: "01", week: "Semana 1–2", title: "Imersão na Marca", desc: "Auditoria completa: posicionamento, visual, tom de voz, concorrência e histórico de campanhas." },
  { num: "02", week: "Semana 3–4", title: "Diagnóstico e Estratégia", desc: "Plano de crescimento com canais, métricas-alvo e cronograma. Sem achismo, sem \"vamos ver\"." },
  { num: "03", week: "Mês 2", title: "Estruturação e Lançamento", desc: "Campanhas no ar, CRM configurado, conteúdo publicado. Todas as peças do motor em funcionamento." },
  { num: "04", week: "Mês 3+", title: "Otimização e Escala", desc: "Ciclo mensal: análise, ajuste, escala. Reunião estratégica + relatório detalhado todo mês." },
];

const FAQS = [
  { q: "Qual o custo de gestão de tráfego pago para marca de moda?", a: "Nossos planos de gestão de tráfego pago para marcas de moda começam a partir de R$1.800/mês de honorários de agência — separados da verba de anúncios, que fica na sua conta. Trabalhamos com contrato mensal sem fidelidade obrigatória." },
  { q: "Qual a diferença entre verba de anúncios e honorários de agência?", a: "Verba de anúncios é o valor que vai direto para o Facebook/Google — fica na sua conta e você tem controle total. Honorários de agência é o que você paga à Dua pelo planejamento, criação, gestão e otimização. São dois custos separados." },
  { q: "Como funciona o onboarding com a Dua Criativa?", a: "O onboarding dura 4 semanas. Na primeira fazemos imersão completa. Na segunda, diagnóstico e estratégia. No segundo mês, toda a estrutura vai ao ar. A partir do terceiro mês entra o ciclo de otimização com reunião mensal." },
  { q: "A Dua Criativa atende marcas fora de Fortaleza?", a: "Sim. Atendemos marcas de todo o Brasil 100% remoto. Nosso processo de imersão, estratégia e relatórios funciona inteiramente online. Temos clientes ativos em Fortaleza, São Paulo, Rio de Janeiro e outras cidades." },
  { q: "Quanto tempo leva para ver resultado com tráfego pago?", a: "Primeiros indicadores aparecem nas 2 a 4 primeiras semanas, durante o aprendizado das plataformas. Resultados consistentes e escaláveis se consolidam a partir do segundo ou terceiro mês, após o ciclo completo de otimização." },
  { q: "A Dua Criativa também cria lojas virtuais para marcas de moda?", a: "Sim, desenvolvemos e-commerces completos para marcas de moda, integrados à estratégia de tráfego e CRM. A loja virtual faz parte do ecossistema DUA LAB — design, performance e gestão de tráfego na mesma linguagem." },
];

// ─── Variantes de animação
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

// ─── Componentes auxiliares
function Label({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.15em] uppercase ${dark ? "text-dualime" : "text-[#0A0A0A]/50"}`}>
      {children}
    </span>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E2E2DC]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-[#0A0A0A] font-semibold text-base leading-snug group-hover:text-black transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#0A0A0A]/40 flex-shrink-0 mt-0.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <motion.div
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <p className="text-[#6B6B6B] text-[15px] leading-relaxed pb-5">{a}</p>
      </motion.div>
    </div>
  );
}

function ProofCard({ src, caption }: { src: string; caption: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <div className="relative aspect-[9/16] bg-white/5 rounded-2xl overflow-hidden border border-white/10">
        {failed ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/20">
            <ImageIcon size={28} aria-hidden="true" />
            <span className="text-xs text-center px-4 leading-relaxed">
              Adicione o print em<br />
              <code className="text-white/30 text-[10px]">/public{src}</code>
            </span>
          </div>
        ) : (
          <img
            src={src}
            alt={caption}
            onError={() => setFailed(true)}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </div>
      <p className="text-[#9CA3AF] text-xs leading-snug px-1">{caption}</p>
    </div>
  );
}

// ─── Página principal
export default function DuaLabPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "28%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "12%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <main className={`min-h-screen bg-[#F5F5F0] text-[#0A0A0A] selection:bg-dualime selection:text-black ${playfair.variable}`}>

      {/* ── Announcement bar */}
      <div className="bg-dualime text-black text-center py-3 px-4 text-sm font-bold tracking-wide">
        ⚡ Apenas 3 vagas disponíveis para outubro 2026 — garanta a sua agora
      </div>

      {/* ══════════════════════════════════════════
          SEÇÃO 1 — HERO (escuro, parallax)
      ══════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex flex-col justify-end pb-20 overflow-hidden bg-black px-6 pt-6">
        {/* Parallax bg */}
        <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
          <Image src="/Prancheta%201%20copiar%209.jpg" alt="Campanha de moda" fill priority quality={80} className="object-cover object-center scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        </motion.div>

        {/* Glow decorativo */}
        <div className="absolute top-0 right-0 w-[50vw] h-[60vh] pointer-events-none z-[1]"
          style={{ background: "radial-gradient(ellipse at 75% 20%, rgba(120,50,220,0.45) 0%, transparent 70%)", filter: "blur(80px)", mixBlendMode: "screen" }}
          aria-hidden="true" />

        {/* Conteúdo do hero */}
        <motion.div style={{ y: contentY, opacity: heroOpacity }} className="relative z-10 container mx-auto max-w-5xl">
          {/* Logo */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className={`flex items-end gap-1 mb-8 ${unbounded.className}`}>
            <span className="text-2xl font-bold text-white">dua</span>
            <span className="w-2 h-2 rounded-full bg-dualime mb-0.5" aria-hidden="true" />
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            {/* Headline principal */}
            <div className="flex-1">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}>
                <Label dark>Método DUA LAB · Especialistas em Moda</Label>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="mt-4 text-[clamp(2.6rem,7vw,5.5rem)] font-black leading-[1.02] tracking-tighter text-white"
              >
                Hoje, sua marca<br />
                está sendo percebida<br />
                do jeito <span className="text-dualime">certo?</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="mt-5 text-[17px] text-white/70 max-w-lg leading-relaxed"
              >
                Somos a agência que pensa como sócia, executa como time interno e estrutura marcas de moda para escalar sem improviso.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-dualime text-black font-black px-7 py-4 rounded-xl hover:bg-white transition-colors text-base min-h-[52px] touch-manipulation"
                  aria-label="Agendar reunião estratégica gratuita">
                  Quero mudar isso agora
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a href="#metodo"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-7 py-4 rounded-xl hover:bg-white/8 transition-colors text-base min-h-[52px] touch-manipulation">
                  Ver o método
                  <ChevronDown size={16} aria-hidden="true" />
                </a>
              </motion.div>
            </div>

            {/* Stat flutuante */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="flex-shrink-0 bg-black/60 backdrop-blur-sm border border-white/10 rounded-3xl p-7 text-center min-w-[180px]"
            >
              <div className="text-5xl font-black text-dualime leading-none">+R$30M</div>
              <div className="text-white/50 text-sm mt-2 leading-snug">em vendas geradas<br />para marcas de moda</div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          SEÇÃO 2 — STATS (claro)
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-[#F5F5F0] px-6" aria-label="Números da Dua Criativa">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { v: "+R$30M", l: "em vendas geradas" },
              { v: "14.7×", l: "crescimento médio em e-commerce" },
              { v: "−89%", l: "redução de CPL em clientes ativos" },
              { v: "100%", l: "foco em marcas de moda" },
            ].map((s) => (
              <motion.div key={s.v} variants={fadeUp} className="text-center md:text-left">
                <div className={`text-4xl md:text-5xl font-black text-[#0A0A0A] leading-none ${playfair.variable} font-[family-name:var(--font-playfair)]`}>
                  {s.v}
                </div>
                <div className="text-[#6B6B6B] text-sm mt-2 leading-snug">{s.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEÇÃO 3 — POSICIONAMENTO (escuro, editorial)
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-black px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            {/* Coluna esquerda — big statement */}
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
              <motion.div variants={fadeUp}>
                <Label dark>Posicionamento</Label>
              </motion.div>
              <motion.h2 variants={fadeUp}
                className={`mt-4 text-[clamp(2rem,5vw,3.5rem)] font-black text-white leading-[1.08] tracking-tight ${playfair.variable} font-[family-name:var(--font-playfair)]`}>
                Não somos uma agência generalista.
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-6 text-white/60 text-[16px] leading-relaxed">
                Enquanto agências genéricas aprendem sobre moda enquanto consomem seu budget, a Dua já chegou especializada. Entendemos sazonalidade de coleção, visual de marca feminina, o ciclo de compra do varejo de moda e o que faz uma campanha de lançamento converter.
              </motion.p>
              <motion.p variants={fadeUp} className="mt-4 text-white/60 text-[16px] leading-relaxed">
                Pensamos como sócio, executamos como time interno. Do posicionamento ao LTV, gerenciamos o ciclo completo da sua marca.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8">
                <a href="#contact"
                  className="inline-flex items-center gap-2 bg-dualime text-black font-black px-7 py-3.5 rounded-xl hover:bg-white transition-colors min-h-[52px] touch-manipulation">
                  Quero uma reunião estratégica
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </motion.div>
            </motion.div>

            {/* Coluna direita — checklist */}
            <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
              className="space-y-4 mt-2" aria-label="Diferenciais da Dua Criativa">
              {[
                "100% focada no segmento de moda e vestuário",
                "Time com experiência em tráfego, social, CRM e e-commerce",
                "Relatório mensal com ROAS, CAC e ticket médio reais",
                "Reunião estratégica mensal incluída em todos os planos",
                "Sem contrato de fidelidade — ficamos pelo resultado",
                "Onboarding estruturado em 30 dias, sem achismo",
              ].map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-start gap-3 bg-white/4 rounded-xl px-5 py-4 border border-white/8">
                  <CheckCircle2 className="w-5 h-5 text-dualime flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-white/80 text-[15px] leading-snug">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEÇÃO 4 — DUA LAB MÉTODO (claro, cards numerados)
      ══════════════════════════════════════════ */}
      <section id="metodo" className="py-24 bg-[#F5F5F0] px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut" }} className="mb-14">
            <Label>Solução completa</Label>
            <h2 className={`mt-3 text-[clamp(2rem,5vw,3.5rem)] font-black text-[#0A0A0A] leading-tight tracking-tight ${playfair.variable} font-[family-name:var(--font-playfair)]`}>
              DUA LAB — Marketing 360°
            </h2>
            <p className="mt-3 text-[#6B6B6B] text-[16px] max-w-xl leading-relaxed">
              Todos os canais da sua marca integrados numa única estratégia. Um time dedicado, um único resultado.
            </p>
          </motion.div>

          {/* Grid de pilares numerados */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-4 gap-0 border border-[#E2E2DC] rounded-2xl overflow-hidden">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div key={pillar.num} variants={fadeUp}
                  className={`p-7 flex flex-col gap-4 bg-white hover:bg-[#F5F5F0] transition-colors group ${i < PILLARS.length - 1 ? "border-b md:border-b-0 md:border-r border-[#E2E2DC]" : ""}`}>
                  <div className="flex items-start justify-between">
                    <span className={`text-[2.5rem] font-black text-[#E2E2DC] leading-none ${playfair.variable} font-[family-name:var(--font-playfair)]`}>
                      {pillar.num}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#F5F5F0] group-hover:bg-dualime/10 flex items-center justify-center transition-colors">
                      <Icon className="w-4.5 h-4.5 text-[#0A0A0A]/50 group-hover:text-dualime transition-colors" size={18} aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-black text-[#0A0A0A] text-[15px] leading-snug mb-2">{pillar.title}</h3>
                    <p className="text-[#6B6B6B] text-[13px] leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }} className="mt-10 flex items-center gap-4">
            <a href="#contact"
              className="inline-flex items-center gap-2 bg-black text-white font-black px-7 py-3.5 rounded-xl hover:bg-dualime hover:text-black transition-colors min-h-[52px] touch-manipulation">
              Quero conhecer o DUA LAB
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <p className="text-[#6B6B6B] text-sm">Reunião estratégica · Gratuita · Sem compromisso</p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEÇÃO 5 — PROVAS REAIS (escuro, prints)
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-black px-6" aria-label="Provas de resultado de clientes">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }} className="mb-12">
            <Label dark>Provas reais</Label>
            <h2 className={`mt-3 text-[clamp(2rem,5vw,3.5rem)] font-black text-white leading-tight tracking-tight ${playfair.variable} font-[family-name:var(--font-playfair)]`}>
              Resultados que os clientes<br />
              <span className="text-dualime">mandam no WhatsApp.</span>
            </h2>
            <p className="mt-3 text-white/50 text-[16px] max-w-lg leading-relaxed">
              Dashboards reais, conversas reais. Nada de mockup ou número inventado.
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {PROOF_IMAGES.map((img) => (
              <motion.div key={img.src} variants={fadeUp}>
                <ProofCard src={img.src} caption={img.caption} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.3 }} className="mt-10 text-center">
            <a href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-7 py-4 rounded-xl hover:bg-white hover:text-black transition-colors min-h-[52px] touch-manipulation">
              Quero resultados assim
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEÇÃO 6 — CASE METRICANA (claro, editorial)
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F5F5F0] px-6" id="cases">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }} className="mb-4">
            <Label>Case real</Label>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Números grandes */}
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
              <motion.div variants={fadeUp} className="flex items-start gap-3 mb-6">
                <div>
                  <div className="text-[#6B6B6B] text-sm mb-1">Faturamento antes</div>
                  <div className="text-4xl font-black text-[#0A0A0A]/30 line-through">R$ 77k/mês</div>
                </div>
              </motion.div>
              <motion.div variants={fadeUp}>
                <TrendingUp className="w-8 h-8 text-dualime mb-3" aria-hidden="true" />
                <div className="text-[#6B6B6B] text-sm mb-1">Faturamento depois — 14 meses</div>
                <div className={`text-[clamp(3rem,9vw,6rem)] font-black text-[#0A0A0A] leading-none ${playfair.variable} font-[family-name:var(--font-playfair)]`}>
                  R$ 1,1M<span className="text-dualime">/mês</span>
                </div>
                <div className="mt-3 inline-flex items-center gap-2 bg-[#0A0A0A] text-dualime text-sm font-black px-4 py-2 rounded-full">
                  14.7× em 14 meses
                </div>
              </motion.div>
            </motion.div>

            {/* Quote + info */}
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
              <motion.div variants={fadeUp} className="bg-white border border-[#E2E2DC] rounded-2xl p-8">
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-dualime text-dualime" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-[#0A0A0A] text-[17px] leading-relaxed font-medium mb-6">
                  "A Dua não é só uma agência. É o time de marketing que eu precisava pra escalar sem perder identidade de marca."
                </p>
                <div>
                  <div className="font-bold text-[#0A0A0A] text-sm">Fundadora — Metricana</div>
                  <div className="text-[#6B6B6B] text-xs mt-0.5">Moda Feminina · E-commerce · CE</div>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-6">
                <a href="#contact"
                  className="inline-flex items-center gap-2 bg-black text-white font-black px-7 py-3.5 rounded-xl hover:bg-dualime hover:text-black transition-colors min-h-[52px] touch-manipulation">
                  Quero resultados assim
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEÇÃO 7 — TIMELINE ONBOARDING (escuro)
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-black px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }} className="mb-14">
            <Label dark>Na Prática</Label>
            <h2 className={`mt-3 text-[clamp(2rem,5vw,3.5rem)] font-black text-white leading-tight tracking-tight ${playfair.variable} font-[family-name:var(--font-playfair)]`}>
              Do onboarding à escala.
            </h2>
            <p className="mt-3 text-white/50 text-[16px] max-w-xl leading-relaxed">
              Um processo claro do primeiro dia até os primeiros resultados.
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-4 gap-6">
            {TIMELINE.map((step, i) => (
              <motion.div key={step.num} variants={fadeUp} className="relative">
                {/* Connector line (desktop) */}
                {i < TIMELINE.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-full w-full h-px bg-white/10 z-0" aria-hidden="true" />
                )}
                <div className="relative z-10">
                  <div className={`w-10 h-10 rounded-full bg-dualime flex items-center justify-center mb-4 ${playfair.variable} font-[family-name:var(--font-playfair)]`}>
                    <span className="font-black text-black text-sm">{step.num}</span>
                  </div>
                  <div className="text-dualime/60 text-xs font-bold tracking-wide uppercase mb-1">{step.week}</div>
                  <h3 className="text-white font-black text-[15px] leading-snug mb-2">{step.title}</h3>
                  <p className="text-white/50 text-[13px] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEÇÃO 8 — FAQ (claro)
      ══════════════════════════════════════════ */}
      <section className="py-24 bg-[#F5F5F0] px-6" id="faq" aria-label="Perguntas frequentes sobre marketing para marcas de moda">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }} className="mb-12">
            <Label>Dúvidas</Label>
            <h2 className={`mt-3 text-[clamp(2rem,5vw,3.2rem)] font-black text-[#0A0A0A] leading-tight tracking-tight ${playfair.variable} font-[family-name:var(--font-playfair)]`}>
              Perguntas frequentes
            </h2>
            <p className="mt-3 text-[#6B6B6B] text-[16px] leading-relaxed">
              Tudo que você precisa saber antes de conversar com a gente.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}>
            {FAQS.map((item) => <FAQItem key={item.q} q={item.q} a={item.a} />)}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SEÇÃO 9 — CTA FORM (lime)
      ══════════════════════════════════════════ */}
      <section id="contact" className="py-24 bg-dualime px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Copy lado esquerdo */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55 }}>
              <h2 className={`text-[clamp(2.2rem,5.5vw,3.8rem)] font-black text-black leading-[1.05] tracking-tight ${playfair.variable} font-[family-name:var(--font-playfair)]`}>
                Sua marca merece<br />
                vender mais.
              </h2>
              <p className="mt-5 text-black/60 text-[17px] leading-relaxed max-w-sm">
                Agende uma reunião estratégica gratuita. Vamos analisar sua marca e mostrar o que é possível.
              </p>
              <ul className="mt-8 space-y-3">
                {["Sem custo · Sem compromisso", "Análise real da sua marca", "Resposta em até 1 hora no WhatsApp"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-black/70 text-sm font-medium">
                    <CheckCircle2 size={16} className="text-black flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Formulário */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.1 }}>
              <div className="bg-black rounded-3xl p-8 shadow-2xl">
                <h3 className="text-white text-xl font-black mb-1">Reunião estratégica gratuita</h3>
                <p className="text-white/40 text-sm mb-7">Preencha os dados e vamos te chamar no WhatsApp em até 1h.</p>
                <Suspense fallback={<div className="h-36 flex items-center justify-center animate-pulse text-dualime text-sm">Carregando...</div>}>
                  <LeadForm clientSlug="dua-criativa" />
                </Suspense>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer minimal */}
      <footer className="py-10 bg-black border-t border-white/8 px-6" aria-label="Rodapé">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className={`flex items-end gap-1 ${unbounded.className}`}>
            <span className="text-xl font-bold text-white">dua</span>
            <span className="w-2 h-2 rounded-full bg-dualime mb-0.5 flex-shrink-0" aria-hidden="true" />
            <span className="text-white/30 text-xs ml-1">criativa</span>
          </div>
          <p className="text-white/30 text-xs text-center">
            © {new Date().getFullYear()} Dua Criativa — Agência de Marketing para Moda · Fortaleza, CE
          </p>
          <div className="flex items-center gap-5">
            <a href="/" className="text-white/30 text-xs hover:text-dualime transition-colors">Página principal</a>
            <a href="#contact" className="text-white/30 text-xs hover:text-dualime transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
