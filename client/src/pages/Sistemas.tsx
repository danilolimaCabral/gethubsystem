import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Globe, Rocket, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Sistemas() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <section className="relative py-20 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Sistemas Próprios</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Plataformas modulares e escaláveis desenvolvidas para resolver dores reais da sua operação. 
            Tecnologia proprietária com suporte dedicado.
          </p>
        </div>
      </section>

      {/* Systems List */}
      <section className="py-20">
        <div className="container flex flex-col gap-24">
          
          {/* CellSync */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Zap className="h-4 w-4" /> Gestão Integrada
              </div>
              <h2 className="text-3xl font-bold mb-4">CellSync</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Sincronização total para sua gestão de estoque e vendas. Elimine erros manuais e tenha controle absoluto da sua operação em tempo real.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Integração multi-canal em tempo real</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Controle de estoque unificado</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Relatórios de performance automatizados</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <a href="https://wa.me/5511999999999?text=Quero%20conhecer%20o%20CellSync" target="_blank" rel="noopener noreferrer">
                  Agendar demonstração <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="order-1 md:order-2 bg-card border border-border rounded-2xl p-8 shadow-2xl shadow-primary/5">
              {/* Placeholder for System UI */}
              <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center border border-border/50">
                <Zap className="h-16 w-16 text-muted-foreground/20" />
              </div>
            </div>
          </div>

          {/* MarketHub */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Globe className="h-4 w-4" /> Marketplaces
              </div>
              <h2 className="text-3xl font-bold mb-4">MarketHub</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Centralize suas vendas em todos os marketplaces. Gerencie anúncios, perguntas e pedidos em um único painel inteligente.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Publicação massiva de anúncios</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Precificação dinâmica e inteligente</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Central de atendimento unificada</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <a href="https://wa.me/5511999999999?text=Quero%20conhecer%20o%20MarketHub" target="_blank" rel="noopener noreferrer">
                  Agendar demonstração <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="order-2 md:order-1 bg-card border border-border rounded-2xl p-8 shadow-2xl shadow-primary/5">
              {/* Placeholder for System UI */}
              <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center border border-border/50">
                <Globe className="h-16 w-16 text-muted-foreground/20" />
              </div>
            </div>
          </div>

          {/* EasySales */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Rocket className="h-4 w-4" /> CRM & Vendas
              </div>
              <h2 className="text-3xl font-bold mb-4">EasySales</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Acelere seu processo comercial. Um CRM focado em velocidade e conversão para times de alta performance.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Pipeline de vendas visual</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Automação de propostas comerciais</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Follow-up automático via WhatsApp</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <a href="https://wa.me/5511999999999?text=Quero%20conhecer%20o%20EasySales" target="_blank" rel="noopener noreferrer">
                  Agendar demonstração <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="order-1 md:order-2 bg-card border border-border rounded-2xl p-8 shadow-2xl shadow-primary/5">
              {/* Placeholder for System UI */}
              <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center border border-border/50">
                <Rocket className="h-16 w-16 text-muted-foreground/20" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Precisa de uma solução personalizada?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Nossa equipe de engenharia pode desenvolver módulos específicos para a sua necessidade.
          </p>
          <Button size="lg" variant="secondary" className="text-primary font-bold" asChild>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              Falar com especialista
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
