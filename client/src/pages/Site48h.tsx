import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Clock, Code2, Globe, Layout, Rocket, Zap } from "lucide-react";

export default function Site48h() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit">
              <Clock className="h-4 w-4" /> Entrega Recorde
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Seu site profissional no ar em <span className="text-primary">48 horas</span>.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Sem enrolação. Usamos Inteligência Artificial para acelerar a criação de conteúdo e estrutura, entregando um site moderno, rápido e pronto para vender.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="text-base font-semibold px-8 h-12 shadow-lg shadow-primary/25" asChild>
                <a href="https://wa.me/5511999999999?text=Quero%20meu%20site%20em%2048h" target="_blank" rel="noopener noreferrer">
                  Quero meu site agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-20"></div>
            <video 
              src="/videos/robot-working.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="relative rounded-2xl border border-border/50 shadow-2xl shadow-primary/10 w-full object-cover aspect-video"
            />
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como funciona a mágica?</h2>
            <p className="text-lg text-muted-foreground">
              Um processo otimizado para quem não tem tempo a perder.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <div className="w-24 h-24 rounded-2xl bg-background border border-border shadow-lg flex items-center justify-center text-3xl font-bold text-primary mb-2">
                01
              </div>
              <h3 className="text-xl font-bold">Coleta Rápida</h3>
              <p className="text-muted-foreground">
                Você nos envia logo, cores e um áudio rápido explicando o que faz. Só isso.
              </p>
              <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">Dia 0</span>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <div className="w-24 h-24 rounded-2xl bg-background border border-border shadow-lg flex items-center justify-center text-3xl font-bold text-primary mb-2">
                02
              </div>
              <h3 className="text-xl font-bold">Criação com IA</h3>
              <p className="text-muted-foreground">
                Nossa IA gera textos persuasivos e monta a estrutura visual moderna.
              </p>
              <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">Dia 1</span>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <div className="w-24 h-24 rounded-2xl bg-background border border-border shadow-lg flex items-center justify-center text-3xl font-bold text-primary mb-2">
                03
              </div>
              <h3 className="text-xl font-bold">Entrega & Publicação</h3>
              <p className="text-muted-foreground">
                Ajustes finais, configuração de domínio e seu site está no ar vendendo.
              </p>
              <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">Dia 2</span>
            </div>
          </div>
        </div>
      </section>

      {/* O que está incluso */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">O que está incluso no pacote?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Layout className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Layout Moderno</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Design responsivo que funciona perfeitamente em celulares, tablets e computadores.
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Code2 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Conteúdo com IA</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Textos profissionais e persuasivos (copywriting) gerados e revisados para o seu nicho.
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Rocket className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Alta Performance</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Site otimizado para carregar rápido, essencial para não perder clientes e rankear no Google.
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Foco em Conversão</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Botões de WhatsApp estratégicos, formulários de contato e chamadas para ação claras.
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Páginas Essenciais</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Home, Sobre, Serviços e Contato. Tudo o que sua empresa precisa para passar credibilidade.
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Suporte Técnico</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Garantia de funcionamento e suporte para dúvidas básicas após a entrega.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-24 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">O que precisamos de você?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">1</div>
                  <span>Logo (ou nome da empresa)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">2</div>
                  <span>Telefone / WhatsApp</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">3</div>
                  <span>Descrição breve do serviço (2-5 linhas)</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">4</div>
                  <span>3 diferenciais do seu negócio</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">5</div>
                  <span>Redes sociais (se tiver)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">6</div>
                  <span>Fotos (opcional, temos banco de imagens)</span>
                </li>
              </ul>
            </div>
            <div className="mt-10 text-center">
              <Button size="lg" className="w-full md:w-auto text-lg px-12" asChild>
                <a href="https://wa.me/5511999999999?text=Tenho%20o%20checklist%20e%20quero%20começar" target="_blank" rel="noopener noreferrer">
                  Tenho tudo, vamos começar!
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
