import { PageTemplate } from "@/components/page-template";

export default function ContatoPage() {
  return (
    <PageTemplate
      eyebrow="Contato"
      title="Converse com o time e descubra como a Pulse pode apoiar a sua operação."
      description="Uma pagina de contato simples, elegante e alinhada ao estilo da landing principal."
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-card p-7">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
            Fale com a equipe
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
            <p>Email: contato@pulse.dev</p>
            <p>Horario: segunda a sexta, das 9h as 18h</p>
            <p>Tempo medio de resposta: ate 1 dia util</p>
          </div>
        </div>

        <form className="glass-card p-7">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
            Envie uma mensagem
          </h2>
          <div className="mt-6 grid gap-4">
            <label className="grid gap-2 text-sm text-slate-300">
              Nome
              <input
                type="text"
                placeholder="Seu nome"
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-cyan/50"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-300">
              Email
              <input
                type="email"
                placeholder="voce@empresa.com"
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-cyan/50"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-300">
              Mensagem
              <textarea
                rows={6}
                placeholder="Conte um pouco sobre o seu contexto"
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-cyan/50"
              />
            </label>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:scale-[1.02]"
            >
              Enviar mensagem
            </button>
          </div>
        </form>
      </div>
    </PageTemplate>
  );
}
