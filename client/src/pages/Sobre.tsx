import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Globe2, Users } from "lucide-react";

export default function Sobre() {
  return (
    <div className="flex flex-col gap-0">
      <section className="py-20 bg-muted/30">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Sobre a GetHubSystem</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Somos uma empresa de tecnologia focada em acelerar negócios através de sistemas inteligentes e consultoria estratégica.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Nossa Missão</h2>
            <p className="text-lg text-muted-foreground">
              Acreditamos que a tecnologia não deve ser uma barreira, mas sim um acelerador. Nossa missão é democratizar o acesso a sistemas de alta performance e processos de importação eficientes para empresas que querem crescer.
            </p>
            <p className="text-lg text-muted-foreground">
              Combinamos expertise técnica em desenvolvimento de software com conhecimento prático de mercado e comércio exterior.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex flex-col items-center text-center gap-3">
              <Code2 className="h-8 w-8 text-primary" />
              <h3 className="font-bold">Tecnologia Própria</h3>
              <p className="text-sm text-muted-foreground">Desenvolvemos nossas próprias ferramentas.</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex flex-col items-center text-center gap-3">
              <Globe2 className="h-8 w-8 text-primary" />
              <h3 className="font-bold">Visão Global</h3>
              <p className="text-sm text-muted-foreground">Conectamos seu negócio ao mundo.</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex flex-col items-center text-center gap-3 col-span-2">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="font-bold">Foco no Cliente</h3>
              <p className="text-sm text-muted-foreground">Atendimento consultivo e próximo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold">Agilidade</h3>
              <p className="text-muted-foreground">Entregamos valor rápido. O mercado não espera.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold">Transparência</h3>
              <p className="text-muted-foreground">Jogamos limpo. Sem letras miúdas ou custos ocultos.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold">Inovação</h3>
              <p className="text-muted-foreground">Buscamos sempre a melhor solução tecnológica.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">Vamos conversar?</h2>
          <Button size="lg" asChild>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              Falar com a equipe <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
