import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart3, CheckCircle2, Container, FileText, Globe2, ShieldCheck } from "lucide-react";

export default function Consultoria() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-muted/30">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit">
              <Globe2 className="h-4 w-4" /> Comércio Exterior
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Consultoria de Importação Estratégica
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transforme sua operação de importação em uma vantagem competitiva. Reduza custos, mitigue riscos e ganhe previsibilidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="text-base font-semibold px-8 h-12 shadow-lg shadow-primary/25" asChild>
                <a href="https://wa.me/5511999999999?text=Quero%20falar%20sobre%20consultoria%20de%20importação" target="_blank" rel="noopener noreferrer">
                  Falar com especialista
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
            <img 
              src="/images/consulting-import.jpg" 
              alt="Consultoria de Importação" 
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como atuamos no seu negócio</h2>
            <p className="text-lg text-muted-foreground">
              Uma abordagem 360º para garantir que sua importação seja eficiente e segura.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Diagnóstico & Processos</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Analisamos sua operação atual para identificar gargalos, custos ocultos e oportunidades de melhoria imediata no fluxo.
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <FileText className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Documentação & Compliance</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Orientação completa sobre classificação fiscal, licenças e documentos necessários para evitar multas e atrasos na alfândega.
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <Container className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Logística & Custos</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Planejamento logístico eficiente e análise tributária para reduzir o custo final do produto (Landed Cost).
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que contratar uma consultoria?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Importar sem planejamento pode custar caro. Nossa consultoria traz a expertise necessária para você focar no que importa: vender.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-green-500/10 p-2 rounded-full text-green-500 h-fit">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Redução de Riscos</h4>
                    <p className="text-muted-foreground">Evite multas, apreensões e atrasos por falta de documentação correta.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-500/10 p-2 rounded-full text-blue-500 h-fit">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Previsibilidade Financeira</h4>
                    <p className="text-muted-foreground">Saiba exatamente quanto seu produto vai custar antes mesmo de embarcar.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 bg-purple-500/10 p-2 rounded-full text-purple-500 h-fit">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Eficiência Operacional</h4>
                    <p className="text-muted-foreground">Processos desenhados para fluir sem depender de "apagar incêndios" todo dia.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6">O que entregamos:</h3>
              <ul className="space-y-4">
                {[
                  "Diagnóstico inicial gratuito",
                  "Classificação fiscal (NCM) correta",
                  "Estimativa de custos de importação",
                  "Análise de tratamento administrativo",
                  "Coordenação de embarque",
                  "Acompanhamento do desembaraço",
                  "Relatório de performance"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/50">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-8" size="lg" asChild>
                <a href="https://wa.me/5511999999999?text=Quero%20um%20diagnóstico%20da%20minha%20importação" target="_blank" rel="noopener noreferrer">
                  Solicitar Diagnóstico
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
