import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Globe } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      name: "Contexto Contábil",
      url: "contextocontabil.com.br",
      category: "Site Institucional",
      description: "Site institucional moderno para escritório de contabilidade, focado em captação de leads e apresentação de serviços consultivos.",
      image: "/images/portfolio-contexto-contabil.webp"
    },
    {
      name: "Panificadora Texeira",
      url: "panificadoratexeira.com.br",
      category: "E-commerce Local",
      description: "Plataforma de encomendas online para panificadora tradicional, integrando pedidos diretamente com a produção.",
      image: "/images/portfolio-panificadora.webp"
    },
    {
      name: "Vitrine Global",
      url: "vitrine-global.com",
      category: "Gestão de Importação",
      description: "Plataforma completa de gestão de importação 4.0 com calculadora de custos, rastreamento e suporte 24h.",
      image: "/images/portfolio-vitrine-global.webp"
    },
    {
      name: "Dispara Linea Trading",
      url: "disparalineatrading.com",
      category: "E-commerce Internacional",
      description: "Marketplace premium de tecnologia, pneus e perfumes com vendas B2B para Europa e Brasil.",
      image: "/images/portfolio-disparalinea.webp"
    }
  ];

  return (
    <div className="flex flex-col gap-0">
      <section className="py-20 bg-muted/30">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Nosso Portfólio</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Conheça alguns dos projetos que ajudamos a tirar do papel. De sites institucionais a plataformas complexas.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" asChild>
                    <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer">
                      Visitar Site <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
                <a 
                  href={`https://${project.url}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline inline-flex items-center"
                >
                  {project.url} <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Quer seu projeto aqui?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Vamos construir sua presença digital com a mesma qualidade e velocidade.
          </p>
          <Button size="lg" variant="secondary" className="text-primary font-bold" asChild>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              Iniciar Projeto
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
