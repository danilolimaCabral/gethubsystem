import { useState } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function FloatingAIRobot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Olá! 👋 Sou o assistente virtual da GetHubSystem. Como posso ajudar você hoje?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadData, setLeadData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const createLeadMutation = trpc.leads.create.useMutation({
    onSuccess: () => {
      toast.success("Obrigado! Entraremos em contato em breve.");
      setShowLeadForm(false);
      setMessages([...messages, 
        { type: "bot", text: "✅ Dados recebidos com sucesso! Nossa equipe entrará em contato em breve. Enquanto isso, fique à vontade para explorar nossos serviços!" }
      ]);
    },
    onError: () => {
      toast.error("Erro ao enviar dados. Tente novamente.");
    },
  });

  const quickOptions = [
    { label: "🖥️ Sistemas Próprios", action: "sistemas", response: "Temos +5 sistemas desenvolvidos internamente: CellSync (gestão de celulares), MarketHub (marketplace), EasySales (CRM de vendas) e mais! Posso te redirecionar para conhecer todos em detalhes." },
    { label: "⚡ Site em 48h com IA", action: "site48h", response: "Criamos sites profissionais em até 48 horas usando inteligência artificial! O processo é rápido: você nos passa as informações, nossa IA cria o design e estrutura, e entregamos pronto para uso. Quer saber mais?" },
    { label: "🌍 Consultoria de Importação", action: "consultoria", response: "Nossa consultoria otimiza até 30% dos custos operacionais em importação! Cuidamos de toda a logística, documentação e negociação com fornecedores. Posso te mostrar casos de sucesso." },
    { label: "💼 Ver Portfólio", action: "portfolio", response: "Já desenvolvemos projetos para diversos segmentos: contabilidade, e-commerce, importação e mais. Vou te mostrar nossos cases de sucesso!" },
    { label: "💬 Falar com Humano", action: "whatsapp", response: "Vou te conectar com um de nossos especialistas no WhatsApp agora mesmo! 📱" }
  ];

  const handleQuickOption = (action: string, response: string) => {
    const option = quickOptions.find(o => o.action === action);
    
    setMessages([...messages, 
      { type: "user", text: option?.label || "" },
      { type: "bot", text: response }
    ]);

    // Actions
    if (action === "whatsapp") {
      setTimeout(() => {
        window.open("https://wa.me/5511999999999?text=Olá! Vim do site e gostaria de mais informações.", "_blank");
      }, 1500);
    } else if (action !== "whatsapp") {
      setTimeout(() => {
        const routes: Record<string, string> = {
          sistemas: "/sistemas",
          site48h: "/site-48h",
          consultoria: "/consultoria",
          portfolio: "/portfolio"
        };
        if (routes[action]) {
          window.location.href = routes[action];
        }
      }, 2500);
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    setMessages([...messages, 
      { type: "user", text: inputValue },
      { type: "bot", text: "Obrigado pela sua mensagem! Para que possamos te atender melhor, por favor preencha seus dados de contato abaixo. 📝" }
    ]);
    
    setLeadData({ ...leadData, service: "Contato Geral" });
    setShowLeadForm(true);
    setInputValue("");
  };

  const handleSubmitLead = () => {
    if (!leadData.name || !leadData.email || !leadData.phone) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    createLeadMutation.mutate({
      name: leadData.name,
      email: leadData.email,
      phone: leadData.phone,
      service: leadData.service,
      message: inputValue || "Contato via chat do robô",
    });
  };

  return (
    <>
      {/* Floating Robot Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 group">
          <button
            onClick={() => setIsOpen(true)}
            className="relative"
            aria-label="Abrir assistente virtual"
          >
            {/* Robot Video */}
            <div className="relative w-24 h-24 rounded-full overflow-hidden animate-float">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{
                  mixBlendMode: "screen",
                  filter: "brightness(1.2) contrast(1.1)"
                }}
              >
                <source src="/videos/ai-robot-animated.mp4" type="video/mp4" />
              </video>
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-primary/50 animate-pulse-slow"></div>
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl"></div>
            </div>
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-background border-2 border-primary/50 text-foreground px-4 py-2 rounded-xl shadow-2xl whitespace-nowrap text-sm font-medium">
                Precisa de ajuda? Clique aqui! 👋
                <div className="absolute top-full right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-primary/50"></div>
              </div>
            </div>

            {/* Notification Badge */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground animate-bounce shadow-lg">
              1
            </div>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[400px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-3rem)] bg-background border-2 border-primary/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300 z-50">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary via-blue-600 to-primary p-4 flex items-center justify-between relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-shimmer"></div>
            </div>
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30 animate-float">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  style={{
                    mixBlendMode: "screen",
                    filter: "brightness(1.3)"
                  }}
                >
                  <source src="/videos/ai-robot-animated.mp4" type="video/mp4" />
                </video>
              </div>
              <div>
                <h3 className="font-bold text-white">Assistente IA</h3>
                <p className="text-xs text-blue-100 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online • Responde em segundos
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-colors relative z-10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-muted/30 to-background">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl shadow-md ${
                    msg.type === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-background border border-border rounded-bl-none"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Options */}
          <div className="p-4 border-t border-border bg-background/95 backdrop-blur">
            <p className="text-xs text-muted-foreground mb-3 font-medium">Escolha uma opção rápida:</p>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {quickOptions.slice(0, 4).map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs h-auto py-2.5 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all font-medium"
                  onClick={() => handleQuickOption(option.action, option.response)}
                >
                  {option.label}
                </Button>
              ))}
            </div>
            <Button
              variant="default"
              size="sm"
              className="w-full font-medium shadow-lg"
              onClick={() => handleQuickOption("whatsapp", quickOptions[4].response)}
            >
              {quickOptions[4].label}
            </Button>
          </div>

          {/* Lead Form or Input */}
          {showLeadForm ? (
            <div className="p-4 border-t border-border bg-background space-y-3">
              <div>
                <Label htmlFor="name" className="text-xs font-medium">Nome Completo *</Label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  value={leadData.name}
                  onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-xs font-medium">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={leadData.email}
                  onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-xs font-medium">Telefone/WhatsApp *</Label>
                <Input
                  id="phone"
                  placeholder="(62) 99999-9999"
                  value={leadData.phone}
                  onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowLeadForm(false)}
                  className="flex-1"
                >
                  Cancelar
                </Button>
                <Button
                  size="sm"
                  onClick={handleSubmitLead}
                  disabled={createLeadMutation.isPending}
                  className="flex-1"
                >
                  {createLeadMutation.isPending ? "Enviando..." : "Enviar"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="p-4 border-t border-border bg-background flex gap-2">
              <Input
                placeholder="Digite sua mensagem..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon" className="shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -250% 0;
          }
          100% {
            background-position: 250% 0;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </>
  );
}
