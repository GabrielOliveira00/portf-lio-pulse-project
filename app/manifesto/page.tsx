import { ContentCard } from "@/components/content-card";
import { PageTemplate } from "@/components/page-template";

export default function ManifestoPage() {
  return (
    <PageTemplate
      eyebrow="Manifesto"
      title="Crescimento nao deveria depender de interfaces confusas e operação fragmentada."
      description="A Pulse nasce com a ideia de que times de SaaS precisam de clareza, ritmo e confiança para transformar dados em decisão."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <ContentCard title="Clareza">
          <p>
            Produtos modernos geram sinais o tempo inteiro. A nossa proposta e organizar esses
            sinais em experiências que ajudam o time a agir com rapidez.
          </p>
        </ContentCard>
        <ContentCard title="Ritmo">
          <p>
            Processos lentos e telas inchadas criam fricção. A Pulse defende interações leves,
            acessiveis e orientadas a contexto para manter a operação fluida.
          </p>
        </ContentCard>
        <ContentCard title="Confiança">
          <p>
            Boas decisões exigem transparência. Por isso o produto combina governança, visibilidade
            e design legivel em todas as etapas.
          </p>
        </ContentCard>
      </div>
    </PageTemplate>
  );
}
