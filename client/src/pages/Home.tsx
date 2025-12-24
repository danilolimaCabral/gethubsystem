import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Code2, Globe, LayoutTemplate, Rocket, ShieldCheck, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="flex flex-col gap-0">
      {/* Christmas Banner */}
      <div className="relative w-full bg-[#0B0F1A] border-b border-primary/20 overflow-hidden">
        <div className="container mx-auto py-2 px-4">
          <img 
            src="/images/christmas-banner.png" 
            alt="Feliz Natal - GetHubSystem" 
            className="w-full h-auto max-h-[120px] md:max-h-[200px] object-contain animate-in fade-in slide-in-from-top-4 duration-1000"
          />
        </div>
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      </div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-16 md:pt-0">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Video */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="hidden md:block w-full h-full object-cover opacity-30"
          >
            <source src="/videos/global-trade-3d.mp4" type="video/mp4" />
          </video>
          {/* Mobile Video */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="md:hidden w-full h-full object-cover opacity-30"
          >
            <source src="/videos/global-trade-3d-mobile.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        </div>

        <div className="container relative z-10 flex flex-col items-center text-center gap-8 max-w-4xl px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Tecnologia que impulsiona resultados
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Soluções que <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">conectam</span> e <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">aceleram</span> seu negócio
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Sistemas próprios, consultoria de importação e criação de sites modernos com entrega em até 48 horas usando IA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <Button size="lg" className="text-base font-semibold px-8 h-12 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all" asChild>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                Falar com um consultor
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-base font-semibold px-8 h-12 bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-primary/5 hover:text-primary hover:border-primary/50 transition-all" asChild>
              <Link href="/sistemas">Conhecer os sistemas</Link>
            </Button>
          </div>

          {/* Stats / Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border/10 w-full">
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-bold text-foreground">48h</span>
              <span className="text-sm text-muted-foreground">Entrega de Sites</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-bold text-foreground">+5</span>
              <span className="text-sm text-muted-foreground">Sistemas Próprios</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-bold text-foreground">100%</span>
              <span className="text-sm text-muted-foreground">Foco em Resultado</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-bold text-foreground">IA</span>
              <span className="text-sm text-muted-foreground">Tecnologia Avançada</span>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Section */}
      <section id="sistemas" className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="flex flex-col gap-2 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Nossos Sistemas</h2>
              <p className="text-muted-foreground text-lg">Plataformas modulares desenvolvidas para resolver problemas reais da sua operação.</p>
            </div>
            <Button variant="ghost" className="group text-primary hover:text-primary hover:bg-primary/10" asChild>
              <Link href="/sistemas">
                Ver todos os sistemas <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* System 1 */}
            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Zap className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">CellSync</CardTitle>
                <CardDescription className="text-base">Sincronização total para sua gestão.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Integração em tempo real</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Gestão de estoque unificada</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Relatórios automatizados</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant="secondary"
                  onClick={() => window.location.href = '/contato?sistema=cellsync'}
                >
                  Solicitar teste
                </Button>
              </CardFooter>
            </Card>

            {/* System 2 */}
            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Globe className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">MarketHub</CardTitle>
                <CardDescription className="text-base">Centralize suas vendas em marketplaces.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Multi-canal de vendas</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Precificação inteligente</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Dashboard consolidado</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant="secondary"
                  onClick={() => window.location.href = '/contato?sistema=markethub'}
                >
                  Solicitar teste
                </Button>
              </CardFooter>
            </Card>

            {/* System 3 */}
            <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Rocket className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">EasySales</CardTitle>
                <CardDescription className="text-base">Acelere seu processo comercial.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> CRM simplificado</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Automação de propostas</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Follow-up automático</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant="secondary"
                  onClick={() => window.location.href = '/contato?sistema=easysales'}
                >
                  Solicitar teste
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Site 48h Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-20"></div>
            <video 
              src="/videos/robot-working.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="relative rounded-2xl border border-border/50 shadow-2xl shadow-primary/10 w-full object-cover aspect-video"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border p-4 rounded-xl shadow-xl hidden md:block animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-bold">Site Publicado</p>
                  <p className="text-xs text-muted-foreground">Tempo: 47h 30min</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium w-fit">
              <Code2 className="h-4 w-4" />
              Módulo Acelerado com IA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Site moderno em 48 horas</h2>
            <p className="text-lg text-muted-foreground">
              Você aprova o estilo, nós montamos a estrutura, criamos o conteúdo e colocamos no ar com velocidade. Sem dor de cabeça.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1.5 rounded text-primary">
                  <LayoutTemplate className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Layout Moderno</h4>
                  <p className="text-sm text-muted-foreground">Responsivo e profissional.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1.5 rounded text-primary">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Performance & SEO</h4>
                  <p className="text-sm text-muted-foreground">Otimizado para o Google.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1.5 rounded text-primary">
                  <Rocket className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Entrega Acelerada</h4>
                  <p className="text-sm text-muted-foreground">Pronto em até 2 dias úteis.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-primary/10 p-1.5 rounded text-primary">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-semibold">Conversão</h4>
                  <p className="text-sm text-muted-foreground">Botão WhatsApp e formulários.</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-fit mt-4 shadow-lg shadow-primary/20" asChild>
              <Link href="/site-48h">Quero meu site em 48h</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Consulting Section */}
      <section className="py-24 bg-muted/30 border-y border-border/40">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Consultoria de Importação</h2>
              <p className="text-lg text-muted-foreground">
                Não somos apenas desenvolvedores. Entendemos do seu negócio. Otimize seus processos de importação com nossa consultoria especializada.
              </p>
              
              <ul className="space-y-4 mt-2">
                <li className="flex items-center gap-3 text-foreground/90">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  Diagnóstico completo e organização do processo
                </li>
                <li className="flex items-center gap-3 text-foreground/90">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  Redução significativa de retrabalho e riscos operacionais
                </li>
                <li className="flex items-center gap-3 text-foreground/90">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  Melhor previsibilidade de custos e prazos de entrega
                </li>
                <li className="flex items-center gap-3 text-foreground/90">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  Orientação sobre documentação e compliance
                </li>
              </ul>

              <Button size="lg" variant="outline" className="w-fit mt-4 border-primary/30 hover:bg-primary/5" asChild>
                <Link href="/consultoria">Falar com especialista</Link>
              </Button>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <img 
                src="/images/consulting-import.jpg" 
                alt="Consultoria de Importação" 
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-8">
                <div className="bg-background/80 backdrop-blur-md p-4 rounded-lg border border-border/50">
                  <p className="font-mono text-sm text-primary mb-1">RESULTADOS REAIS</p>
                  <p className="font-bold text-lg">Otimização de até 30% nos custos operacionais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24">
        <div className="container flex flex-col items-center text-center gap-12">
          <div className="max-w-2xl flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Quem confia na GetHubSystem</h2>
            <p className="text-muted-foreground text-lg">
              Empresas que transformaram sua presença digital e operação com nossas soluções.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 w-full">
            {[
              { name: "Contexto Contábil", url: "contextocontabil.com.br", type: "Site Institucional" },
              { name: "Panificadora Texeira", url: "panificadoratexeira.com.br", type: "E-commerce Local" },
              { name: "Vitrine Global", url: "vitrine-global.com", type: "Marketplace" }
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl border border-border/50 bg-card hover:border-primary/50 transition-all duration-300">
                <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary/5 transition-colors">
                  {/* Placeholder for portfolio screenshot */}
                  <Globe className="h-12 w-12 opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all duration-500 transform group-hover:scale-110" />
                </div>
                <div className="p-6 text-left">
                  <p className="text-xs font-mono text-primary mb-2">{item.type}</p>
                  <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.url}</p>
                </div>
              </div>
            ))}
          </div>

          <Button variant="ghost" size="lg" asChild>
            <Link href="/portfolio">Ver portfólio completo <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent"></div>
        
        <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Pronto para acelerar seu negócio?</h2>
            <p className="text-primary-foreground/80 text-lg">
              Fale agora com nossos consultores e descubra como podemos ajudar sua empresa a crescer com tecnologia e inteligência.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" className="text-primary font-bold shadow-xl" asChild>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/contato">Solicitar Orçamento</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
