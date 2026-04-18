"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["700"] });

// ── Types ──────────────────────────────────────────────────────────────────

interface FormState {
  nome: string;
  whatsapp: string;
  instagram: string;
  investimento_atual: string;
  faturamento: string;
  atendimento_leads: string;
  interesse: "combo" | "trafego" | "frio" | "";
}

// ── Constants ──────────────────────────────────────────────────────────────

const PURPLE = "#7C3AED";
const TOTAL_STEPS = 8;
const LABELS = ["A", "B", "C", "D", "E"];

const INVESTIMENTO_OPTS = [
  "Ainda não invisto em tráfego pago",
  "R$500 a R$1.000/mês",
  "R$1.000 a R$5.000/mês",
  "R$5.000 a R$10.000/mês",
  "Acima de R$10.000/mês",
];

const FATURAMENTO_OPTS = [
  "Abaixo de R$10 mil/mês",
  "R$10 mil a R$30 mil/mês",
  "R$30 mil a R$50 mil/mês",
  "R$50 mil a R$100 mil/mês",
  "Acima de R$100 mil/mês",
];

const ATENDIMENTO_OPTS = [
  "WhatsApp do celular, sem controle nenhum",
  "Planilha ou anotações",
  "Já uso algum CRM",
  "Não tenho processo definido",
];

const GROWTH_DATA = [
  { mes: "Set/25", valor: 36, label: "R$36k" },
  { mes: "Out", valor: 55, label: "R$55k" },
  { mes: "Nov", valor: 82, label: "R$82k" },
  { mes: "Dez", valor: 128, label: "R$128k" },
  { mes: "Jan/26", valor: 155, label: "R$155k" },
  { mes: "Fev", valor: 209, label: "R$209k" },
];

// ── Helpers ────────────────────────────────────────────────────────────────

function maskPhone(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

// ── Animation variants ─────────────────────────────────────────────────────

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "60%" : "-60%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-60%" : "60%",
    opacity: 0,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ── Field wrapper ──────────────────────────────────────────────────────────

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      {children}
      {error && <p className="text-red-500 text-sm mt-1.5">{error}</p>}
    </div>
  );
}

// ── Screen 0: Dados ────────────────────────────────────────────────────────

function Screen0({
  form,
  setForm,
  onNext,
}: {
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
  onNext: () => void;
}) {
  const [errs, setErrs] = useState({ nome: "", whatsapp: "", instagram: "" });

  function validate() {
    const e = { nome: "", whatsapp: "", instagram: "" };
    if (!form.nome.trim()) e.nome = "Informe seu nome completo";
    if (form.whatsapp.replace(/\D/g, "").length < 10)
      e.whatsapp = "Informe um WhatsApp válido";
    if (!form.instagram.trim()) e.instagram = "Informe o Instagram da sua marca";
    setErrs(e);
    return !Object.values(e).some(Boolean);
  }

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
        Vamos começar 👋
      </h2>
      <p className="text-gray-500 mb-8">Preencha seus dados para continuar.</p>
      <div className="space-y-5">
        <Field label="Nome completo" error={errs.nome}>
          <input
            type="text"
            value={form.nome}
            onChange={(e) =>
              setForm((f) => ({ ...f, nome: e.target.value }))
            }
            placeholder="Seu nome"
            className="w-full border border-gray-200 rounded-xl px-4 py-4 text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
          />
        </Field>

        <Field label="WhatsApp" error={errs.whatsapp}>
          <input
            type="tel"
            value={form.whatsapp}
            onChange={(e) =>
              setForm((f) => ({ ...f, whatsapp: maskPhone(e.target.value) }))
            }
            placeholder="(85) 99999-9999"
            className="w-full border border-gray-200 rounded-xl px-4 py-4 text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
          />
        </Field>

        <Field label="Instagram da marca" error={errs.instagram}>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg select-none">
              @
            </span>
            <input
              type="text"
              value={form.instagram.replace(/^@/, "")}
              onChange={(e) =>
                setForm((f) => ({
                  ...f,
                  instagram: "@" + e.target.value.replace(/^@/, ""),
                }))
              }
              placeholder="suamarca"
              className="w-full border border-gray-200 rounded-xl pl-8 pr-4 py-4 text-gray-900 text-lg placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
            />
          </div>
        </Field>

        <button
          onClick={() => {
            if (validate()) onNext();
          }}
          className="w-full text-white font-bold py-4 px-8 rounded-xl text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          style={{ backgroundColor: PURPLE }}
        >
          Continuar <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

// ── Question screen (auto-advance) ─────────────────────────────────────────

function QuestionScreen({
  question,
  options,
  selected,
  onSelect,
}: {
  question: string;
  options: string[];
  selected: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8">
        {question}
      </h2>
      <div className="space-y-3">
        {options.map((opt, i) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`w-full text-left px-5 py-4 rounded-xl border-2 flex items-center gap-4 transition-all hover:border-purple-400 hover:bg-purple-50 group ${
              selected === opt
                ? "border-purple-600 bg-purple-50"
                : "border-gray-200 bg-white"
            }`}
          >
            <span
              className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-sm font-bold transition-colors ${
                selected === opt
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-600 group-hover:bg-purple-100 group-hover:text-purple-600"
              }`}
            >
              {selected === opt ? <Check className="w-4 h-4" /> : LABELS[i]}
            </span>
            <span
              className={`text-base font-medium ${
                selected === opt ? "text-purple-900" : "text-gray-700"
              }`}
            >
              {opt}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Info screen ────────────────────────────────────────────────────────────

function InfoScreen({
  title,
  content,
  buttonText,
  onNext,
}: {
  title: string;
  content: string;
  buttonText: string;
  onNext: () => void;
}) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
        {title}
      </h2>
      <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 mb-8">
        {content.split("\n\n").map((para, i) => (
          <p
            key={i}
            className={`text-gray-700 leading-relaxed whitespace-pre-line ${
              i > 0 ? "mt-4" : ""
            }`}
          >
            {para}
          </p>
        ))}
      </div>
      <button
        onClick={onNext}
        className="w-full text-white font-bold py-4 px-8 rounded-xl text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        style={{ backgroundColor: PURPLE }}
      >
        {buttonText} <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}

// ── Social proof screen ────────────────────────────────────────────────────

function ProvaScreen({ onNext }: { onNext: () => void }) {
  const maxVal = Math.max(...GROWTH_DATA.map((d) => d.valor));
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
        Resultado real
      </h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Uma marca de moda feminina premium de Fortaleza entrou com{" "}
        <strong>R$36.866/mês</strong> em setembro de 2025. Em fevereiro de 2026
        faturou <strong>R$209.151</strong>.{" "}
        <span className="font-bold" style={{ color: PURPLE }}>
          Crescimento de 467% em 6 meses
        </span>{" "}
        com tráfego estratégico + CRM.
      </p>

      <div className="bg-gray-50 rounded-2xl p-5 mb-8">
        <div className="flex items-end gap-2 h-40">
          {GROWTH_DATA.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
              <span
                className="text-xs font-bold text-center leading-tight mb-1"
                style={{ color: PURPLE }}
              >
                {d.label}
              </span>
              <motion.div
                className="w-full rounded-t-lg"
                style={{
                  backgroundColor: PURPLE,
                  opacity: 0.5 + (i / (GROWTH_DATA.length - 1)) * 0.5,
                }}
                initial={{ height: 0 }}
                animate={{ height: `${(d.valor / maxVal) * 100}%` }}
                transition={{
                  delay: 0.4 + i * 0.08,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              />
              <span className="text-xs text-gray-500 text-center leading-tight mt-1">
                {d.mes}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full text-white font-bold py-4 px-8 rounded-xl text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        style={{ backgroundColor: PURPLE }}
      >
        Quero isso, continuar <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}

// ── Screen 8: Comprometimento ──────────────────────────────────────────────

function CommitmentScreen({
  onCombo,
  onObjection,
}: {
  onCombo: () => void;
  onObjection: () => void;
}) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
        Investimento
      </h2>
      <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 mb-8">
        <p className="text-gray-700 leading-relaxed">
          Nossa gestão começa a partir de{" "}
          <strong style={{ color: PURPLE }}>R$2.150/mês</strong> nos primeiros 3
          meses (período de implementação e aceleração). A partir do 4º mês,{" "}
          <strong style={{ color: PURPLE }}>R$1.650/mês</strong>.
        </p>
        <p className="text-gray-800 font-semibold mt-4">
          Está disposto a investir para escalar seu faturamento com estratégia e
          previsibilidade?
        </p>
      </div>
      <div className="space-y-3">
        <button
          onClick={onCombo}
          className="w-full text-left px-5 py-4 rounded-xl border-2 border-gray-200 bg-white flex items-center gap-4 transition-all hover:border-purple-400 hover:bg-purple-50 group"
        >
          <span className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-sm font-bold bg-gray-100 text-gray-600 group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors">
            A
          </span>
          <span className="text-base font-medium text-gray-700">
            Sim, quero escalar minha marca 🚀
          </span>
        </button>
        <button
          onClick={onObjection}
          className="w-full text-left px-5 py-4 rounded-xl border-2 border-gray-200 bg-white flex items-center gap-4 transition-all hover:border-gray-300 group"
        >
          <span className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-sm font-bold bg-gray-100 text-gray-600 transition-colors">
            B
          </span>
          <span className="text-base font-medium text-gray-700">
            Não é meu momento agora
          </span>
        </button>
      </div>
    </div>
  );
}

// ── Screen 9: Recuperação ──────────────────────────────────────────────────

function RecoveryScreen({
  onTrafego,
  onFrio,
}: {
  onTrafego: () => void;
  onFrio: () => void;
}) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
        Sem problemas!
      </h2>
      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-8">
        <p className="text-gray-700 leading-relaxed">
          Entendemos. Que tal começar apenas com a{" "}
          <strong>gestão de tráfego?</strong> A partir de{" "}
          <strong style={{ color: PURPLE }}>R$1.650/mês</strong> você já tem
          campanhas estratégicas rodando no Meta Ads com acompanhamento semanal.
        </p>
      </div>
      <div className="space-y-3">
        <button
          onClick={onTrafego}
          className="w-full text-left px-5 py-4 rounded-xl border-2 border-gray-200 bg-white flex items-center gap-4 transition-all hover:border-purple-400 hover:bg-purple-50 group"
        >
          <span className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-sm font-bold bg-gray-100 text-gray-600 group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors">
            A
          </span>
          <span className="text-base font-medium text-gray-700">
            Tenho interesse no tráfego 📈
          </span>
        </button>
        <button
          onClick={onFrio}
          className="w-full text-left px-5 py-4 rounded-xl border-2 border-gray-200 bg-white flex items-center gap-4 transition-all hover:border-gray-300 group"
        >
          <span className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-sm font-bold bg-gray-100 text-gray-600 transition-colors">
            B
          </span>
          <span className="text-base font-medium text-gray-700">
            Não tenho condições no momento
          </span>
        </button>
      </div>
    </div>
  );
}

// ── Screen 10: Confirmação ─────────────────────────────────────────────────

function ConfirmationScreen() {
  return (
    <div className="text-center py-8">
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
        style={{ backgroundColor: "#F3E8FF" }}
      >
        <span className="text-4xl">🔥</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
        Recebido!
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto">
        Nosso time já recebeu suas informações e vai entrar em contato pelo{" "}
        <strong>WhatsApp</strong> em breve com uma análise da sua marca.
      </p>
      <div
        className="mt-8 p-4 rounded-2xl border max-w-sm mx-auto"
        style={{ backgroundColor: "#F3E8FF", borderColor: "#DDD6FE" }}
      >
        <p className="font-semibold text-sm" style={{ color: PURPLE }}>
          Respondemos em até 1h útil 🚀
        </p>
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export default function TrafegoForm() {
  const [screen, setScreen] = useState(0);
  const [dir, setDir] = useState(1);
  const [form, setForm] = useState<FormState>({
    nome: "",
    whatsapp: "",
    instagram: "",
    investimento_atual: "",
    faturamento: "",
    atendimento_leads: "",
    interesse: "",
  });

  function goTo(next: number) {
    setDir(next > screen ? 1 : -1);
    setScreen(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function submitAndFinish(interesse: FormState["interesse"]) {
    const payload = {
      nome: form.nome,
      whatsapp: form.whatsapp,
      instagram: form.instagram,
      investimento_atual: form.investimento_atual,
      faturamento: form.faturamento,
      atendimento_leads: form.atendimento_leads,
      interesse,
      origem: "trafegopago-form",
    };
    try {
      await fetch("https://crm.duacriativa.com.br/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // proceed regardless of network issues
    }
    setForm((f) => ({ ...f, interesse }));
    goTo(9);
  }

  // Screens 0-7 map to progress steps 1-8. Screens 8+ keep step at 8.
  const progressStep = screen < 8 ? screen + 1 : TOTAL_STEPS;
  const progressPct =
    screen >= 9 ? 100 : (progressStep / TOTAL_STEPS) * 100;

  function renderScreen(): ReactNode {
    switch (screen) {
      case 0:
        return <Screen0 form={form} setForm={setForm} onNext={() => goTo(1)} />;

      case 1:
        return (
          <QuestionScreen
            question="Qual é seu investimento atual em anúncios?"
            options={INVESTIMENTO_OPTS}
            selected={form.investimento_atual}
            onSelect={(v) => {
              setForm((f) => ({ ...f, investimento_atual: v }));
              setTimeout(() => goTo(2), 320);
            }}
          />
        );

      case 2:
        return (
          <QuestionScreen
            question="Qual é o faturamento mensal da sua marca?"
            options={FATURAMENTO_OPTS}
            selected={form.faturamento}
            onSelect={(v) => {
              setForm((f) => ({ ...f, faturamento: v }));
              setTimeout(() => goTo(3), 320);
            }}
          />
        );

      case 3:
        return (
          <InfoScreen
            title="Dois tipos de investimento"
            content={`Existem 2 tipos de investimentos quando se fala em Tráfego Pago:\n\n— Verba em anúncios: pago direto à plataforma (Meta/Google)\n— Mão de obra: nossos honorários pela gestão estratégica\n\nÉ como contratar um pintor: você paga a mão de obra dele e também compra as tintas. São custos separados.`}
            buttonText="Entendi, continuar"
            onNext={() => goTo(4)}
          />
        );

      case 4:
        return (
          <QuestionScreen
            question="Como você atende seus leads hoje?"
            options={ATENDIMENTO_OPTS}
            selected={form.atendimento_leads}
            onSelect={(v) => {
              setForm((f) => ({ ...f, atendimento_leads: v }));
              setTimeout(() => goTo(5), 320);
            }}
          />
        );

      case 5:
        return (
          <InfoScreen
            title="O que é CRM?"
            content={`Sabe quando um cliente te chama no WhatsApp, você demora pra responder e ele já comprou da concorrência?\n\nCRM resolve isso. É um sistema que organiza todos os seus leads, manda mensagem automática na hora certa e não deixa nenhuma venda escapar.`}
            buttonText="Faz sentido, continuar"
            onNext={() => goTo(6)}
          />
        );

      case 6:
        return <ProvaScreen onNext={() => goTo(7)} />;

      case 7:
        return (
          <CommitmentScreen
            onCombo={() => submitAndFinish("combo")}
            onObjection={() => goTo(8)}
          />
        );

      case 8:
        return (
          <RecoveryScreen
            onTrafego={() => submitAndFinish("trafego")}
            onFrio={() => submitAndFinish("frio")}
          />
        );

      case 9:
        return <ConfirmationScreen />;

      default:
        return null;
    }
  }

  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ fontFamily: "var(--font-montserrat, sans-serif)" }}
    >
      {/* ── Top bar with progress ── */}
      {screen < 9 && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-4">
            <span
              className={`text-base font-bold text-gray-900 shrink-0 flex items-end gap-0.5 ${unbounded.className}`}
            >
              dua
              <span
                className="inline-block w-1.5 h-1.5 rounded-full mb-1 ml-0.5"
                style={{ backgroundColor: PURPLE }}
              />
            </span>

            <div className="flex-1">
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: PURPLE }}
                  initial={false}
                  animate={{ width: `${progressPct}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </div>

            <span className="text-xs font-semibold text-gray-400 shrink-0 tabular-nums">
              {progressStep}&nbsp;de&nbsp;{TOTAL_STEPS}
            </span>
          </div>
        </div>
      )}

      {/* ── Screen container ── */}
      <div
        className={`flex-1 flex items-center justify-center px-4 pb-8 overflow-hidden ${
          screen < 9 ? "pt-20" : "pt-8"
        }`}
      >
        <div className="w-full max-w-xl relative">
          <AnimatePresence custom={dir} mode="wait">
            <motion.div
              key={screen}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
