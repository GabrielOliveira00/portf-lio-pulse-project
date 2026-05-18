import { ReactNode } from "react";

type ContentCardProps = {
  title: string;
  children: ReactNode;
};

export function ContentCard({ title, children }: ContentCardProps) {
  return (
    <div className="glass-card p-7">
      <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300">{children}</div>
    </div>
  );
}
