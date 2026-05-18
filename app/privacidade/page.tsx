import { ContentCard } from "@/components/content-card";
import { PageTemplate } from "@/components/page-template";

export default function PrivacidadePage() {
  return (
    <PageTemplate
      eyebrow="Privacidade"
      title="Privacidade, transparencia e uso responsavel de dados fazem parte do produto."
      description="Esta pagina complementa a percepcao de maturidade da Pulse, simulando uma area institucional dedicada a politicas."
    >
      <div className="grid gap-6">
        <ContentCard title="Coleta de dados">
          <p>
            Coletamos apenas informacoes necessarias para autenticacao, monitoramento operacional e
            melhoria da experiencia de uso.
          </p>
        </ContentCard>
        <ContentCard title="Uso e retencao">
          <p>
            Dados sao utilizados para analise, automacao e suporte ao produto. Politicas de retencao
            devem ser configuradas conforme o contrato e o perfil do cliente.
          </p>
        </ContentCard>
        <ContentCard title="Direitos do usuario">
          <p>
            Clientes podem solicitar exportacao, revisao e exclusao de dados seguindo os canais
            oficiais de atendimento e compliance.
          </p>
        </ContentCard>
      </div>
    </PageTemplate>
  );
}
