"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

// ⚠️ Substitua pelos dados reais dos seus clientes antes de publicar
const CASES = [
  {
    brand: "Marca de Moda Feminina · CE",
    tag: "Meta Ads + Social",
    before: { label: "Faturamento", value: "R$ 18k/mês" },
    after: { label: "Faturamento", value: "R$ 64k/mês" },
    metric: "3,5× em 90 dias",
    quote: "A Dua entendeu nossa marca desde o primeiro dia. Os resultados vieram rápido.",
  },
  {
    brand: "Atacado de Moda · SP",
    tag: "Tráfego Pago",
    before: { label: "ROAS", value: "1.8×" },
    after: { label: "ROAS", value: "6.2×" },
    metric: "Custo por lead ÷ 4",
    quote: "Finalmente uma agência que não precisa de aula sobre o mercado de moda.",
  },
  {
    brand: "E-commerce Moda Praia · RJ",
    tag: "Google + Meta",
    before: { label: "CPA", value: "R$ 320" },
    after: { label: "CPA", value: "R$ 87" },
    metric: "−73% no custo por venda",
    quote: "Triplicamos o faturamento sem triplicar o investimento em mídia.",
  },
];

export default function MiniCases() {
  return (
    <section id="cases" className="py-24 bg-duagrey px-6">
