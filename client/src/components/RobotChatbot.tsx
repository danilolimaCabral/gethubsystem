import { useState } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RobotChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Olá! 👋 Sou o assistente virtual da GetHubSystem. Como posso ajudar você hoje?"
    }
  ]);

  const quickOptions = [
    { label: "🖥️ Conhecer Sistemas", action: "sistemas" },
    { label: "⚡ Site em 48h", action: "site48h" },
    { label: "🌍 Consultoria de Importação", action: "consultoria" },
    { label: "💬 Falar com Humano", action: "whatsapp" }
  ];

  const handleQuickOption = (action: string) => {
    let response = "";
    let link = "";

    switch (action) {
      case "sistemas":
        response = "Temos +5 sistemas próprios: CellSync, MarketHub, EasySales e mais! Vou te redirecionar para conhecer todos.";
        link = "/sistemas";
        break;
      case "site48h":
        response = "Criamos seu site profissional em até 48 horas usando IA! Vou te mostrar como funciona.";
        link = "/site-48h";
        break;
      case "consultoria":
        response = "Nossa consultoria de importação otimiza até 30% dos custos operacionais. Vou te mostrar mais detalhes!";
        link = "/consultoria";
        break;
      case "whatsapp":
        response = "Vou te conectar com um de nossos especialistas no WhatsApp! 📱";
        window.open("https://wa.me/5511999999999?text=Olá! Vim do site e gostaria de mais informações.", "_blank");
        break;
    }

    setMessages([...messages, 
      { type: "user", text: quickOptions.find(o => o.action === action)?.label || "" },
      { type: "bot", text: response }
    ]);

    if (link) {
      setTimeout(() => {
        window.location.href = link;
      }, 2000);
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="relative group"
            aria-label="Abrir chat"
          >
            {/* Robot Image with Animations */}
            <div className="relative w-20 h-20 animate-float">
              <img 
                src="/images/chatbot-robot.png" 
                alt="Assistente Virtual"
                className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
              />
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-slow"></div>
              {/* Notification Badge */}
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
                1
              </div>
            </div>
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-background border border-primary/30 text-foreground px-3 py-2 rounded-lg shadow-xl whitespace-nowrap text-sm">
                Precisa de ajuda? Clique aqui! 👋
              </div>
            </div>
          </button>
        )}

        {/* Chat Window */}
        {isOpen && (
          <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-background border-2 border-primary/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-blue-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 relative animate-float">
                  <img 
                    src="/images/chatbot-robot.png" 
                    alt="Assistente"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white">Assistente Virtual</h3>
                  <p className="text-xs text-blue-100">Online • Responde em segundos</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-background border border-border"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Options */}
            <div className="p-4 border-t border-border bg-background">
              <p className="text-xs text-muted-foreground mb-3">Escolha uma opção:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickOptions.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs h-auto py-2 hover:bg-primary hover:text-primary-foreground transition-all"
                    onClick={() => handleQuickOption(option.action)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </>
  );
}
