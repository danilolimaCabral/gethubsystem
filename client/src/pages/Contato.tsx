import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contato() {
  return (
    <div className="flex flex-col gap-0">
      <section className="py-20 bg-muted/30">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Fale Conosco</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Estamos prontos para ouvir seu desafio e propor a melhor solução.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Canais de Atendimento</h2>
              <p className="text-muted-foreground mb-8">
                Escolha a forma mais conveniente para falar com nosso time. Respondemos rápido.
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="bg-card border-border/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">WhatsApp / Telefone</h3>
                    <p className="text-muted-foreground text-sm">(62) 99258-1100 | (62) 9907-0393</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">E-mail</h3>
                    <p className="text-muted-foreground text-sm break-all">contextocontabilidadego@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Localização</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">Av João Luiz de Almeida, 451<br />Setor Crimeia Oeste - Goiânia/GO</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Envie uma mensagem</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome</Label>
                  <Input id="nome" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input id="empresa" placeholder="Nome da empresa" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp</Label>
                <Input id="whatsapp" placeholder="(11) 99999-9999" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem">Mensagem</Label>
                <Textarea id="mensagem" placeholder="Como podemos ajudar?" className="min-h-[120px]" />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
