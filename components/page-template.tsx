import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";

type PageTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function PageTemplate({
  eyebrow,
  title,
  description,
  children,
}: PageTemplateProps) {
  return (
    <main className="pb-24">
      <section className="shell pt-16">
        <div className="glass-card overflow-hidden p-8 sm:p-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 " />
            Voltar para a landing
          </Link>

          <span className="section-label mt-8 mx-5">{eyebrow}</span>
          <h1 className="mt-6 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">{description}</p>
        </div>
      </section>

      <section className="shell pt-10">{children}</section>
    </main>
  );
}
