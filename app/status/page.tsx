import { ContentCard } from "@/components/content-card";
import { PageTemplate } from "@/components/page-template";

export default function StatusPage() {
  return (
    <PageTemplate
      eyebrow="Status"
      title="Acompanhe a saude da plataforma e o historico recente de servico."
      description="Aqui a ideia e simular uma pagina de status separada da landing, reforcando a sensacao de produto real."
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <ContentCard title="Resumo atual">
          <p>Sistema operacional: estavel</p>
          <p>Eventos em tempo real: operacional</p>
          <p>Automacoes: operacional</p>
          <p>Billing: monitorado</p>
        </ContentCard>

        <ContentCard title="Historico recente">
          <p>13 maio 2026, 09:10: manutencao preventiva concluida sem impacto em clientes.</p>
          <p>11 maio 2026, 17:42: atraso temporario em eventos processados, ja normalizado.</p>
          <p>08 maio 2026, 07:30: deploy de melhoria visual para dashboards internos.</p>
        </ContentCard>
      </div>
    </PageTemplate>
  );
}
