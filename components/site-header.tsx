import Link from "next/link";

const navLinks = [
  { label: "Produto", href: "/#benefits" },
  { label: "Preços", href: "/#pricing" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Contato", href: "/contato" },
];

export function SiteHeader() {
  return (
    <header className="shell relative z-20 pt-6">
      <div className="glass-card flex items-center justify-between px-5 py-4 text-sm text-white/70">
        <Link href="/" className="flex items-center gap-3 transition hover:text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan/15 text-cyan shadow-glow">
            P
          </div>
          <div>
            <p className="font-semibold text-white">Pulse</p>
            <p className="text-xs text-white/50">Operating system for modern SaaS growth</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
