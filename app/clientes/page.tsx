import { ContentCard } from "@/components/content-card";
import { PageTemplate } from "@/components/page-template";

const clients = [
  {
    name: "Northstar",
    summary: "Equipe de growth que reduziu o tempo de analise e melhorou a ativacao.",
  },
  {
    name: "Framebase",
    summary: "Startup SaaS que precisava unificar onboarding, billing e eventos.",
  },
  {
    name: "LayerOps",
    summary: "Operacao orientada a dados com foco em alertas e governanca.",
  },
  {
    name: "Cresco",
    summary: "Produto em expansao que precisava de dashboards claros para o time comercial.",
  },
];

export default function ClientesPage() {
  return (
    <PageTemplate
      eyebrow="Clientes"
      title="Empresas que usam design e dados para crescer com mais consistencia."
      description="Esta pagina mostra como a Pulse se posiciona para atender startups e times digitais com necessidades reais de operacao."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {clients.map((client) => (
          <ContentCard key={client.name} title={client.name}>
            <p>{client.summary}</p>
          </ContentCard>
        ))}
      </div>
    </PageTemplate>
  );
}
