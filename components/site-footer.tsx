import Link from "next/link";

const footerGroups = [
  {
    title: "Empresa",
    links: [
      { label: "Manifesto", href: "/manifesto" },
      { label: "Clientes", href: "/clientes" },
      { label: "Contato", href: "/contato" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Documentação", href: "/documentacao" },
      { label: "Status", href: "/status" },
      { label: "Privacidade", href: "/privacidade" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-24 border-t border-white/10 bg-[#02050b]/88 backdrop-blur-md">
      <div className="shell py-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Link href="/" className="flex items-center gap-3 transition hover:text-white">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan/15 text-cyan shadow-glow">
                P
              </div>
              <div>
                <p className="font-semibold text-white">Pulse</p>
                <p className="text-sm text-white/55">Growth operating system for modern SaaS teams</p>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              Projeto de portfolio focado em UI premium, hierarquia visual e interacoes refinadas
              para demonstrar capacidade real de front-end.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/65">
              <a
                href="#"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-oliveira-290719139/"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="mailto:contato@pulse.dev"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                contato@pulse.dev
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                  {group.title}
                </p>
                <div className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block text-sm text-slate-300 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 Pulse. Todos os direitos reservados.</p>
          <p>Criado como case de portfolio front-end com Next.js, Tailwind e Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
