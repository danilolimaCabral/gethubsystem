import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

export default function FAQ() {
  const faqCategories = [
    {
      category: "Sistemas Próprios",
      questions: [
        {
          q: "Quais sistemas a GetHubSystem oferece?",
          a: "Oferecemos três sistemas principais: CellSync (gestão de assistências técnicas), MarketHub (marketplace completo) e EasySales (CRM e gestão de vendas). Todos são sistemas proprietários desenvolvidos internamente com foco em performance e usabilidade."
        },
        {
          q: "Os sistemas são personalizáveis?",
          a: "Sim! Nossos sistemas possuem módulos configuráveis e podem ser adaptados às necessidades específicas do seu negócio. Oferecemos customizações de interface, fluxos de trabalho e integrações com outros sistemas."
        },
        {
          q: "Como funciona o suporte técnico?",
          a: "Oferecemos suporte técnico via WhatsApp, e-mail e sistema de tickets. Nosso time responde em até 4 horas úteis para questões gerais e em até 1 hora para problemas críticos. Também oferecemos treinamento inicial completo para sua equipe."
        },
        {
          q: "Qual o tempo de implementação?",
          a: "A implementação básica leva de 7 a 15 dias úteis, incluindo configuração, migração de dados (se necessário) e treinamento da equipe. Projetos com customizações complexas podem levar até 30 dias."
        },
        {
          q: "Os sistemas funcionam em nuvem ou local?",
          a: "Nossos sistemas são 100% cloud (nuvem), garantindo acesso de qualquer lugar, backups automáticos e atualizações constantes sem interrupção do serviço."
        }
      ]
    },
    {
      category: "Site em 48h com IA",
      questions: [
        {
          q: "Como funciona a criação de site em 48h?",
          a: "Utilizamos inteligência artificial para acelerar o desenvolvimento. Você fornece o briefing (conteúdo, identidade visual, referências) e nossa IA cria a estrutura base. Nossa equipe então refina, ajusta e entrega um site profissional em até 48 horas."
        },
        {
          q: "O site é responsivo (mobile)?",
          a: "Sim! Todos os sites são desenvolvidos com design responsivo, garantindo perfeita visualização em smartphones, tablets e desktops. Testamos em diversos dispositivos antes da entrega."
        },
        {
          q: "Posso fazer alterações depois da entrega?",
          a: "Sim! Oferecemos 2 rodadas de ajustes gratuitos após a entrega. Alterações adicionais podem ser solicitadas com valores sob consulta. Também oferecemos planos de manutenção mensal."
        },
        {
          q: "O site vem com hospedagem?",
          a: "Sim! O primeiro ano de hospedagem está incluso no pacote. Após esse período, você pode renovar conosco ou migrar para outro provedor (fornecemos todos os arquivos)."
        },
        {
          q: "Posso ter e-commerce no site?",
          a: "Sim! Podemos integrar funcionalidades de e-commerce com gateways de pagamento (Mercado Pago, PagSeguro, etc.), gestão de estoque e painel administrativo. O prazo pode se estender para 5-7 dias dependendo da complexidade."
        },
        {
          q: "Vocês fazem SEO?",
          a: "Sim! Todos os sites são entregues com otimização básica de SEO (meta tags, URLs amigáveis, sitemap, velocidade). Para estratégias avançadas de SEO, oferecemos consultoria separada."
        }
      ]
    },
    {
      category: "Consultoria de Importação",
      questions: [
        {
          q: "Como funciona a consultoria de importação?",
          a: "Auxiliamos em todo o processo: desde a busca de fornecedores confiáveis na China/Ásia, negociação, documentação, logística internacional, desembaraço aduaneiro até a entrega no Brasil. Atuamos como seu parceiro estratégico."
        },
        {
          q: "Quanto tempo leva uma importação?",
          a: "O prazo médio é de 45 a 60 dias (da compra até a entrega no Brasil), considerando produção, transporte marítimo e desembaraço. Importações urgentes via aéreo podem levar 15-20 dias, mas com custo maior."
        },
        {
          q: "Qual o valor mínimo para importar?",
          a: "Recomendamos importações a partir de USD 5.000 para que os custos fixos (frete, impostos, taxas) sejam diluídos e a operação seja viável financeiramente."
        },
        {
          q: "Vocês garantem a qualidade dos produtos?",
          a: "Trabalhamos apenas com fornecedores verificados e, quando solicitado, realizamos inspeção de qualidade antes do embarque (QC - Quality Control). Isso reduz drasticamente o risco de problemas."
        },
        {
          q: "Quais impostos incidem na importação?",
          a: "Os principais são: Imposto de Importação (II), IPI, PIS, COFINS e ICMS. A alíquota total varia de 30% a 60% dependendo do produto. Fazemos o cálculo detalhado antes de você fechar negócio."
        },
        {
          q: "Preciso ter CNPJ para importar?",
          a: "Sim, importações comerciais exigem CNPJ ativo e Radar Siscomex (habilitação para importar). Auxiliamos no processo de habilitação se você ainda não tiver."
        }
      ]
    },
    {
      category: "Geral",
      questions: [
        {
          q: "Quais formas de pagamento vocês aceitam?",
          a: "Aceitamos PIX, transferência bancária, boleto e cartão de crédito (parcelamento em até 12x). Para projetos acima de R$ 10.000, oferecemos condições especiais de pagamento."
        },
        {
          q: "Vocês atendem todo o Brasil?",
          a: "Sim! Nossos serviços são 100% remotos, atendemos clientes em todo o território nacional. Para projetos grandes, podemos agendar reuniões presenciais em Goiânia/GO."
        },
        {
          q: "Como faço para solicitar um orçamento?",
          a: "Entre em contato via WhatsApp (62) 99258-1100, e-mail ou pelo formulário de contato do site. Respondemos em até 4 horas úteis com um orçamento detalhado e sem compromisso."
        },
        {
          q: "Vocês oferecem garantia?",
          a: "Sim! Todos os nossos serviços têm garantia de 90 dias contra defeitos de desenvolvimento/implementação. Para sistemas, oferecemos SLA (acordo de nível de serviço) com tempo de resposta garantido."
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Perguntas Frequentes
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Tire suas dúvidas sobre nossos serviços. Se não encontrar a resposta que procura, entre em contato!
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            {faqCategories.map((category, idx) => (
              <div key={idx} className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, qIdx) => (
                    <AccordionItem
                      key={qIdx}
                      value={`${idx}-${qIdx}`}
                      className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="text-left font-semibold hover:text-primary py-5">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container text-center max-w-2xl">
          <MessageCircle className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ainda tem dúvidas?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Nossa equipe está pronta para ajudar! Entre em contato e responderemos em até 4 horas úteis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://wa.me/5562992581100" target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:contextocontabilidadego@gmail.com">
                Enviar E-mail
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
