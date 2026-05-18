import { ContentCard } from "@/components/content-card";
import { PageTemplate } from "@/components/page-template";

export default function DocumentacaoPage() {
  return (
    <PageTemplate
      eyebrow="Documentacao"
      title="Tudo o que o time precisa para configurar, medir e evoluir a operacao."
      description="Uma pagina pensada para documentacao institucional, mantendo a mesma linguagem visual da Pulse."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ContentCard title="Onboarding">
          <p>Configure workspace, usuarios e primeiras automacoes em poucos passos.</p>
        </ContentCard>
        <ContentCard title="Eventos">
          <p>Mapeie eventos de produto, acompanhe funis e conecte sinais relevantes.</p>
        </ContentCard>
        <ContentCard title="Governanca">
          <p>Defina acessos, rotinas de auditoria e criterios de visibilidade por equipe.</p>
        </ContentCard>
      </div>
    </PageTemplate>
  );
}
