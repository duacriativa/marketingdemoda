"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Unbounded } from "next/font/google";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Megaphone,
  Users,
  Brain,
  CheckCircle2,
  ChevronDown,
  Star,
  TrendingUp,
  Zap,
  MessageCircle,
} from "lucide-react";
import type { Variants } from "framer-motion";
import { Suspense, useState } from "react";
import LeadForm from "@/components/LeadForm";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["700", "900"], display: "swap" });

const STATS = [
  { value: "+R$30M", label: "em vendas geradas" },
  { value: "14.7×", label: "crescimento médio em e-commerce" },
  { value: "100%", label: "foco em marcas de moda" },
  { value: "−89%", label: "redução de CPL em clientes ativos" },
];

const PILLARS = [
  {
    icon: Megaphone,
    title: "Social Media Estratégico",
    desc: "Calendário editorial, produção visual e narrativa de marca alinhados ao DNA da sua coleção.",
  },
  {
    icon: BarChart3,
    title: "Tráfego Pago",
    desc: "Campanhas no Meta, Google e TikTok gerenciadas por quem entende de moda — não de qualquer nicho.",
  },
  {
    icon: Users,
    title: "CRM & Comercial",
    desc: "Estrutura ativa de retenção e reativação: fluxo de follow-up, prospecção e gestão no Kommo.",
  },
  {
    icon: Brain,
    title: "Inteligência de Dados",
    desc: "Dashboard com ROAS, CAC e ticket médio em tempo real. Decisões baseadas em número, não em feeling.",
  },
];

const TIMELINE = [
  { week: "Semana 1–2", title: "Imersão na Marca", desc: "Auditoria completa: posicionamento, visual, tom de voz, concorrência e histórico de campanhas." },
  { week: "Semana 3–4", title: "Diagnóstico e Estratégia", desc: "Plano de crescimento customizado com canais, métricas-alvo e cronograma de execução." },
  { week: "Mês 2", title: "Estruturação e Lançamento", desc: "Campanhas no ar, CRM configurado, conteúdo publicado. Todas as peças do motor em funcionamento." },
  { week: "Mês 3+", title: "Otimização Contínua", desc: "Ciclo mensal de análise, ajuste e escala. Reunião estratégica + relatório detalhado todo mês." },
];

const FAQS = [
  {
    q: "Qual o custo de gestão de tráfego pago para marca de moda?",
    a: "Nossos planos de gestão de tráfego pago para marcas de moda começam a partir de R$1.800/mês de honorários de agência. Esse valor é separado da verba de anúncios, que fica diretamente na plataforma (Meta, Google). Trabalhamos com contrato mensal sem fidelidade obrigatória.",
  },
  {
    q: "Qual a diferença entre verba de anúncios e honorários de agência?",
    a: "Verba de anúncios é o dinheiro que vai direto para o Facebook/Google/TikTok para veicular os anúncios — fica na sua conta e você tem controle total. Honorários de agência é o que você paga à Dua pelo planejamento, criação, gestão e otimização das campanhas. São dois custos separados.",
  },
  {
    q: "Como funciona o onboarding com a Dua Criativa?",
    a: "O onboarding dura 4 semanas. Na primeira semana fazemos imersão completa na marca. Na segunda, diagnóstico e estratégia. No segundo mês, toda a estrutura vai ao ar — campanhas, CRM e conteúdo. A partir do terceiro mês entra o ciclo de otimização e escala com reunião mensal.",
  },
  {
    q: "A Dua Criativa atende marcas fora de Fortaleza?",
    a: "Sim. Atendemos marcas de todo o Brasil de forma 100% remota. Nosso processo de imersão, estratégia e relatórios funciona inteiramente online. Temos clientes ativos em Fortaleza, São Paulo, Rio de Janeiro e outras cidades.",
  },
  {
    q: "Quanto tempo leva para ver resultado com tráfego pago?",
    a: "Os primeiros indicadores aparecem já nas primeiras 2 a 4 semanas, quando as campanhas entram na fase de aprendizado das plataformas. Resultados consistentes e escaláveis normalmente se consolidam a partir do segundo ou terceiro mês, após o ciclo completo de otimização.",
  },
  {
    q: "A Dua Criativa também cria lojas virtuais para marcas de moda?",
    a: "Sim, desenvolvemos e-commerces completos para marcas de moda, integrados à estratégia de tráfego e CRM. A loja virtual faz parte do ecossistema DUA LAB, garantindo que design, performance e gestão de tráfego falem a mesma língua.",
  },
];

const CASE = {
  brand: "Metricana",
  segment: "Moda Feminina · E-commerce",
  before: "R$ 77k/mês",
  after: "R$ 1,1M/mês",
  multiplier: "14.7×",
  period: "14 meses",
  quote: "A Dua não é só uma agência. É o time de marketing que eu precisava pra escalar sem perder identidade de marca.",
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-white font-semibold text-base leading-snug group-hover:text-dualime transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-dualime flex-shrink-0 mt-0.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <motion.div
        initial={false}
        animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <p className="text-gray-400 text-sm leading-relaxed pb-5">{a}</p>
      </motion.div>
    </div>
  );
}

export default function DuaLabPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "30%"]
  );
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="min-h-screen bg-duabg text-white selection:bg-dualime selection:text-black">
      {/* Announcement bar */}
      <div className="bg-dualime text-black text-center py-3 px-4 text-sm font-bold tracking-wide relative z-50">
        ⚡ Apenas 3 vagas disponíveis para outubro 2026 — garanta a sua agora
      </div>

      {/* ─── HERO with parallax ─── */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden px-6">
        {/* Parallax background */}
        <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
          <Image
            src="/Prancheta%201%20copiar%209.jpg"
            alt="Bastidor de moda — campanha de fotos"
            fill
            priority
            quality={80}
            className="object-cover object-center scale-110"
          />
          <div className="absolute inset-0 bg-black/72" />
        </motion.div>

        {/* Purple glows */}
        <div
          className="absolute z-[2] pointer-events-none"
          style={{
            top: "-10%", right: "-5%", width: "55vw", height: "70vh",
            background: "radial-gradient(ellipse 60% 70% at 70% 30%, rgba(120,50,220,0.55) 0%, rgba(100,30,200,0.3) 35%, transparent 80%)",
            filter: "blur(70px)", mixBlendMode: "screen",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute z-[2] pointer-events-none"
          style={{
            bottom: "5%", left: "-8%", width: "45vw", height: "55vh",
            background: "radial-gradient(ellipse 55% 65% at 30% 70%, rgba(140,60,230,0.4) 0%, rgba(90,20,180,0.2) 45%, transparent 80%)",
            filter: "blur(80px)", mixBlendMode: "screen",
          }}
          aria-hidden="true"
        />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.025)_1px,transparent_1px)] bg-[size:50px_50px] z-[3]" aria-hidden="true" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-[4]" aria-hidden="true" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="container mx-auto max-w-3xl relative z-10 text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`flex items-end justify-center gap-1 mb-5 ${unbounded.className}`}
          >
            <span className="text-3xl font-bold text-white leading-none">dua</span>
            <span className="w-2.5 h-2.5 rounded-full bg-dualime mb-1 shrink-0" aria-hidden="true" />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 bg-dualime/10 border border-dualime/30 text-dualime text-xs font-bold px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-dualime rounded-full animate-pulse" aria-hidden="true" />
            Método DUA LAB — Especialistas em Moda
          </motion.div>

          {/* Hero headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tighter text-white mb-6"
          >
            <span className="text-dualime">+R$30M</span> em vendas<br />
            gerados para marcas<br />
            <span className="text-dualime">de moda.</span>
          </motion.h1>

          {/* Diagnostic hook question */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-medium"
          >
            Hoje, olhando para o Instagram da sua marca, você sente que ela está sendo percebida exatamente como você gostaria?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-dualime text-duabg font-black px-8 py-4 rounded-xl hover:bg-dualime/90 transition-all w-full sm:w-auto text-base"
              aria-label="Quero que minha marca seja percebida corretamente"
            >
              Quero mudar isso agora
              <ArrowRight size={20} aria-hidden="true" />
            </a>
            <a
              href="#metodo"
              className="flex items-center justify-center gap-2 bg-white/5 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all w-full sm:w-auto text-base"
            >
              Ver o método
              <ChevronDown size={18} aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="py-14 bg-duagrey border-y border-white/5" aria-label="Números da Dua Criativa">
        <div className="container mx-auto max-w-5xl px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {STATS.map((s) => (
              <motion.div key={s.value} variants={fadeUp}>
                <div className={`text-3xl md:text-4xl font-black text-dualime mb-1 ${unbounded.className}`}>
                  {s.value}
                </div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── POSITIONING "Não somos generalistas" ─── */}
      <section className="py-24 px-6 bg-duabg" id="metodo">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Left: copy */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-dualime/10 border border-dualime/20 text-dualime text-xs font-bold px-3 py-1.5 rounded-full mb-5">
                <Zap size={12} aria-hidden="true" />
                Posicionamento
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black text-white mb-5 leading-tight">
                Não somos uma agência<br />
                <span className="text-dualime">generalista.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-400 text-base leading-relaxed mb-5">
                Enquanto agências genéricas aprendem sobre moda enquanto consomem seu budget, a Dua já chegou especializada. Entendemos sazonalidade de coleção, visual de marca feminina, o ciclo de compra do varejo de moda e o que faz uma campanha de lançamento converter.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-400 text-base leading-relaxed mb-8">
                Pensamos como sócio, executamos como time interno. Do posicionamento ao LTV, gerenciamos o ciclo completo da sua marca.
              </motion.p>
              <motion.a
                variants={fadeUp}
                href="#contact"
                className="inline-flex items-center gap-2 bg-dualime text-duabg font-black px-7 py-3.5 rounded-xl hover:bg-dualime/90 transition-all"
              >
                Quero uma reunião estratégica
                <ArrowRight size={18} aria-hidden="true" />
              </motion.a>
            </motion.div>

            {/* Right: differentiators */}
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-4"
              aria-label="Diferenciais da Dua Criativa"
            >
              {[
                "100% focada no segmento de moda e vestuário",
                "Time com experiência em tráfego, social, CRM e e-commerce",
                "Relatório mensal com ROAS, CAC e ticket médio reais",
                "Reunião estratégica mensal incluída em todos os planos",
                "Sem contrato de fidelidade — ficamos pelo resultado",
                "Onboarding estruturado em 30 dias, sem achismo",
              ].map((item, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-dualime flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-300 text-base">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ─── DUA LAB PILLARS ─── */}
      <section className="py-24 px-6 bg-duagrey">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-dualime/10 border border-dualime/20 text-dualime text-xs font-bold px-3 py-1.5 rounded-full mb-5">
              <BarChart3 size={12} aria-hidden="true" />
              Solução completa
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              DUA LAB — Marketing 360°
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Uma equipe dedicada para a sua marca de moda. Todos os canais integrados, um único resultado.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-2 gap-6"
          >
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  variants={fadeUp}
                  className="bg-duabg rounded-2xl p-7 border border-white/8 hover:border-dualime/30 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-dualime/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-dualime/20 transition-colors">
                    <Icon className="w-6 h-6 text-dualime" aria-hidden="true" />
                  </div>
                  <h3 className="font-black text-white text-lg mb-2">{pillar.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mt-12"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-dualime text-duabg font-black text-lg rounded-full hover:brightness-110 transition-all"
            >
              Quero conhecer o DUA LAB
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── CASE DESTAQUE — Metricana ─── */}
      <section className="py-24 px-6 bg-duabg" id="cases" aria-label="Case de sucesso">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-dualime/10 border border-dualime/20 text-dualime text-xs font-bold px-3 py-1.5 rounded-full mb-5">
              <TrendingUp size={12} aria-hidden="true" />
              Case real
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              De R$77k para R$1,1M/mês
            </h2>
            <p className="text-gray-400 text-lg">
              Um crescimento de 14.7× em 14 meses. Com método, não com sorte.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="bg-duagrey rounded-3xl overflow-hidden border border-dualime/20"
          >
            {/* Card header */}
            <div className="bg-dualime px-8 py-5 flex items-center justify-between">
              <div>
                <span className="font-black text-black text-lg">{CASE.brand}</span>
                <span className="ml-3 text-black/60 text-sm font-medium">{CASE.segment}</span>
              </div>
              <div className="bg-black text-dualime rounded-xl px-4 py-2 text-sm font-black">
                {CASE.period}
              </div>
            </div>

            {/* Before / After */}
            <div className="p-8">
              <div className="flex items-center justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Antes</div>
                  <div className="text-2xl md:text-3xl font-black text-gray-500 line-through">{CASE.before}</div>
                  <div className="text-xs text-gray-600 mt-1">Faturamento/mês</div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ArrowRight className="w-8 h-8 text-dualime" aria-hidden="true" />
                  <span className="text-dualime font-black text-xl">{CASE.multiplier}</span>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-400 mb-2 uppercase tracking-widest font-bold">Depois</div>
                  <div className="text-2xl md:text-3xl font-black text-dualime">{CASE.after}</div>
                  <div className="text-xs text-gray-400 mt-1">Faturamento/mês</div>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-duabg rounded-2xl p-6 border border-white/8">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-dualime flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-gray-300 text-base italic leading-relaxed mb-3">
                      "{CASE.quote}"
                    </p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-dualime fill-dualime" aria-hidden="true" />
                      ))}
                      <span className="text-gray-500 text-xs ml-2">— Fundadora, {CASE.brand}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-8 pb-8">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-dualime text-duabg font-black text-base rounded-full hover:brightness-110 transition-all"
              >
                Quero resultados assim para a minha marca
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── ONBOARDING TIMELINE ─── */}
      <section className="py-24 px-6 bg-duagrey">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-dualime/10 border border-dualime/20 text-dualime text-xs font-bold px-3 py-1.5 rounded-full mb-5">
              <CheckCircle2 size={12} aria-hidden="true" />
              Na Prática
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Do onboarding à escala
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Sem achismo. Sem "vamos ver". Um processo claro do primeiro dia até os primeiros resultados.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-5 top-6 bottom-6 w-px bg-dualime/20 md:left-1/2 hidden md:block" aria-hidden="true" />

            <div className="space-y-8">
              {TIMELINE.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`flex gap-6 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`flex-1 bg-duabg rounded-2xl p-6 border border-white/8 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}`}>
                    <div className="inline-flex items-center gap-1.5 bg-dualime/10 text-dualime text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {step.week}
                    </div>
                    <h3 className="text-white font-black text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Center dot (desktop) */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-dualime hidden md:flex items-center justify-center">
                    <span className="font-black text-black text-sm">{i + 1}</span>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ — para SEO e IA ─── */}
      <section className="py-24 px-6 bg-duabg" id="faq" aria-label="Perguntas frequentes sobre marketing para marcas de moda">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Perguntas frequentes
            </h2>
            <p className="text-gray-400 text-lg">
              Tudo que você precisa saber antes de conversar com a gente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            {FAQS.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA FORM ─── */}
      <section id="contact" className="py-24 bg-dualime text-duabg text-center px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
              Sua marca merece<br />vender mais.
            </h2>
            <p className="text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto opacity-80">
              Agende uma reunião estratégica gratuita. Vamos analisar sua marca e mostrar o que é possível.
            </p>
            <div className="max-w-xl mx-auto bg-black text-white p-10 rounded-3xl shadow-2xl text-left">
              <h3 className="text-2xl font-black mb-2">Reunião estratégica gratuita</h3>
              <p className="text-gray-400 text-sm mb-8">
                Preencha os dados e vamos te chamar no WhatsApp em até 1h.
              </p>
              <Suspense
                fallback={
                  <div className="h-40 flex items-center justify-center animate-pulse text-dualime">
                    Carregando...
                  </div>
                }
              >
                <LeadForm clientSlug="dua-criativa" />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER minimal ─── */}
      <footer className="py-10 bg-duabg border-t border-white/8 px-6" aria-label="Rodapé">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className={`flex items-end gap-1 ${unbounded.className}`}>
            <span className="text-xl font-bold text-white">dua</span>
            <span className="w-2 h-2 rounded-full bg-dualime mb-0.5" aria-hidden="true" />
            <span className="text-gray-500 text-xs ml-1 font-normal">criativa</span>
          </div>
          <p className="text-gray-600 text-xs text-center">
            © {new Date().getFullYear()} Dua Criativa — Agência de Marketing para Moda · Fortaleza, CE
          </p>
          <div className="flex items-center gap-4">
            <a href="/" className="text-gray-500 text-xs hover:text-dualime transition-colors">
              Página principal
            </a>
            <a href="#contact" className="text-gray-500 text-xs hover:text-dualime transition-colors">
              Contato
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
