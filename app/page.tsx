"use client";

import { ArrowRight, BarChart3, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";

const metrics = [
  { label: "Conversão media", value: "+38%" },
  { label: "Tempo de setup", value: "12 min" },
  { label: "Retenção", value: "94%" },
];

const benefits = [
  {
    title: "Analytics em tempo real",
    text: "Monitore funis, receita e ativação em um painel desenhado para equipes rapidas.",
    icon: BarChart3,
  },
  {
    title: "Automacoes sem friccao",
    text: "Crie jornadas inteligentes com regras visuais e gatilhos que o time entende.",
    icon: Sparkles,
  },
  {
    title: "Workspace modular",
    text: "Combine CRM, onboarding e billing em uma unica camada operacional.",
    icon: Layers3,
  },
  {
    title: "Governança segura",
    text: "Permissões, auditoria e histórico centralizados desde o primeiro cliente.",
    icon: ShieldCheck,
  },
];

const plans = [
  {
    name: "Starter",
    price: "R$ 79",
    description: "Para produtos validando seus primeiros fluxos.",
    features: ["3 automacoes", "1 dashboard", "ate 5 usuarios"],
  },
  {
    name: "Growth",
    price: "R$ 199",
    description: "Para equipes que precisam de operação e visibilidade.",
    features: ["usuarios ilimitados", "alertas avancados", "suporte prioritario"],
    featured: true,
  },
  {
    name: "Scale",
    price: "Sob consulta",
    description: "Para operações com compliance, dados e time dedicado.",
    features: ["SSO", "auditoria completa", "SLA enterprise"],
  },
];

const testimonials = [
  {
    quote: "A Pulse encurtou o caminho entre insight e ação. O time ganhou clareza em uma semana.",
    author: "Marina Costa",
    role: "Head of Growth, Northstar",
  },
  {
    quote: "Parece produto enterprise, mas com experiência leve e elegante para o time inteiro.",
    author: "Rafael Nunes",
    role: "Founder, Framebase",
  },
];

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <span className="section-label">{eyebrow}</span>
      <h2 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300">{text}</p>
    </Reveal>
  );
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <main className="min-h-screen pb-24" />;
  }

  return (
    <main className="pb-24">
      <section className="relative">
        <div className="shell pt-10">
          <div className="grid items-center gap-12 pb-24 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
            <Reveal className="max-w-2xl">
              <span className="section-label">SaaS Landing Page</span>
              <h1 className="mt-7 font-[family-name:var(--font-display)] text-5xl font-semibold leading-none tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Dados, automacoes e operacao em uma interface feita para vender.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Pulse transforma metricas dispersas em decisoes rapidas com um produto que combina
                visual premium, onboarding claro e interacoes pensadas para conversao.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:scale-[1.02]"
                >
                  Testar demo <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#benefits"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
                >
                  Explorar recursos
                </a>
              </div>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {metrics.map((metric, index) => (
                  <Reveal key={metric.label} delay={index * 0.08}>
                    <div className="glass-card px-5 py-4">
                      <p className="text-2xl font-semibold text-white">{metric.value}</p>
                      <p className="mt-1 text-sm text-white/55">{metric.label}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass-card relative overflow-hidden p-4 shadow-glow">
                <div className="absolute inset-x-10 top-0 h-32 rounded-full bg-cyan/20 blur-3xl" />
                <div className="relative rounded-[24px] border border-white/10 bg-ink/70 p-5">
                  <div className="flex items-center justify-between rounded-[20px] border border-white/10 bg-white/5 px-4 py-3">
                    <div>
                      <p className="text-sm text-white/50">Pipeline health</p>
                      <p className="mt-1 text-2xl font-semibold text-white">82%</p>
                    </div>
                    <div className="rounded-full bg-lime/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-lime">
                      Live
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4">
                      <div className="flex items-end gap-3">
                        {[48, 72, 58, 80, 62, 95, 88].map((height, index) => (
                          <div
                            key={height}
                            className="flex-1 rounded-full bg-gradient-to-t from-cyan to-cyan/20"
                            style={{ height: `${height * 1.5}px`, opacity: 0.45 + index * 0.06 }}
                          />
                        ))}
                      </div>
                      <div className="mt-4 flex items-center justify-between text-xs text-white/45">
                        <span>Mon</span>
                        <span>Sun</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4">
                        <p className="text-sm text-white/50">MRR growth</p>
                        <p className="mt-2 text-3xl font-semibold text-white">+24.8%</p>
                        <p className="mt-2 text-sm text-cyan">Compared to last month</p>
                      </div>
                      <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4">
                        <p className="text-sm text-white/50">Top trigger</p>
                        <p className="mt-2 text-lg font-semibold text-white">Activation flow #02</p>
                        <p className="mt-1 text-sm text-white/55">
                          37 users entered the upgrade path today.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="benefits" className="shell pt-12">
        <SectionTitle
          eyebrow="Por que Pulse"
          title="Uma landing page com cara de produto de verdade, nao apenas um mock bonito."
          text="A proposta aqui e mostrar como design, narrativa e motion podem trabalhar juntos para comunicar valor com clareza."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <Reveal key={benefit.title} delay={index * 0.08}>
                <SpotlightCard className="group h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-cyan">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{benefit.text}</p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="shell pt-24">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="glass-card p-8">
            <span className="section-label">Social proof</span>
            <h3 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-semibold text-white">
              Equipes orientadas por crescimento precisam de ritmo, nao de fricção.
            </h3>
            <p className="mt-4 max-w-lg text-slate-300">
              O design da Pulse foi pensado para parecer premium, mas sem perder legibilidade,
              hierarquia e funcao em telas menores.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-white/60 sm:grid-cols-4">
              {["Northstar", "Framebase", "LayerOps", "Cresco"].map((logo) => (
                <div
                  key={logo}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center text-sm font-semibold"
                >
                  {logo}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className="glass-card p-8">
                <p className="text-lg leading-8 text-white">{testimonial.quote}</p>
                <div className="mt-8">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-white/55">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="pricing" className="shell pt-24">
        <SectionTitle
          eyebrow="Pricing"
          title="Planos simples para comunicar valor e maturidade visual."
          text="Uma landing forte tambem precisa tratar plano, posicionamento e decisão de compra com intenção."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.07}>
              <div
                className={`glass-card h-full p-7 ${
                  plan.featured ? "border-cyan/40 bg-cyan/[0.08] shadow-glow" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-white">{plan.name}</p>
                    <p className="mt-2 text-sm text-slate-300">{plan.description}</p>
                  </div>
                  {plan.featured ? (
                    <span className="rounded-full bg-cyan/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan">
                      Popular
                    </span>
                  ) : null}
                </div>
                <p className="mt-8 font-[family-name:var(--font-display)] text-4xl font-semibold text-white">
                  {plan.price}
                </p>
                <ul className="mt-8 space-y-3 text-sm text-slate-300">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Escolher plano
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="faq" className="shell pt-24">
        <SectionTitle
          eyebrow="FAQ"
          title="Uma boa landing tambem responde objeções."
          text="Essa parte ajuda a mostrar maturidade de UX, conteudo e estrutura de informação."
        />

        <div className="mt-10 space-y-4">
          {[
            [
              "Essa landing usa dados reais?",
              "Neste primeiro momento, naão. O foco e construir a melhor apresentação visual do produto. Depois podemos conectar uma demo funcional.",
            ],
            [
              "O que torna esse projeto forte para portfólio?",
              "Ele mostra refinamento, motion, responsividade, hierarquia visual e capacidade de construir interfaces premium com identidade propria.",
            ],
            [
              "Qual o proximo passo depois dessa versão?",
              "Adicionar tema claro, menu mobile, animações mais ricas e uma area de produto com tabs ou comparações interativas.",
            ],
          ].map(([question, answer], index) => (
            <Reveal key={question} delay={index * 0.06}>
              <div className="glass-card px-6 py-5">
                <p className="text-lg font-semibold text-white">{question}</p>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-300">{answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell pt-24">
        <Reveal className="glass-card overflow-hidden p-8 sm:p-10">
          <div className="relative">
            <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-coral/20 blur-3xl" />
            <span className="section-label">Start building</span>
            <h2 className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              A primeira vitrine do seu portfolio ja pode nascer com nivel de produto.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              O caminho agora e transformar esta base em um case completo com responsividade fina,
              animações adicionais e versão publicada.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:scale-[1.02]"
              >
                Publicar projeto
              </a>
              <a
                href="https://github.com"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Ver codigo
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
