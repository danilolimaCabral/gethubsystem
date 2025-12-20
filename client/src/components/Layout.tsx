import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import FloatingAIRobot from "./FloatingAIRobot";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Sistemas", path: "/sistemas" },
    { name: "Site em 48h", path: "/site-48h" },
    { name: "Consultoria", path: "/consultoria" },
    { name: "Portfólio", path: "/portfolio" },
    { name: "Sobre", path: "/sobre" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 md:h-24 items-center justify-between">
          <Link href="/">
            <img 
              src="/images/logo.svg" 
              alt="GetHubSystem" 
              className="h-16 md:h-20 object-contain hover:opacity-90 transition-opacity cursor-pointer"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    isActive(item.path) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <Button asChild size="sm" className="ml-4 font-semibold shadow-lg shadow-primary/20">
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </Button>
          </nav>

          {/* Mobile Nav */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-border/50 bg-background/95 backdrop-blur-xl">
              <div className="flex flex-col gap-8 mt-8">
                <Link href="/">
                  <div className="flex items-center gap-2 font-bold text-xl cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <span>GetHubSystem</span>
                  </div>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link key={item.path} href={item.path}>
                      <span
                        className={`text-lg font-medium transition-colors hover:text-primary cursor-pointer ${
                          isActive(item.path) ? "text-primary" : "text-muted-foreground"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ))}
                  <Button asChild className="mt-4 w-full shadow-lg shadow-primary/20">
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                      Fale Conosco
                    </a>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full overflow-x-hidden">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background py-12 md:py-16">
        <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span>GetHubSystem</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Sistemas próprios, consultoria de importação e criação de sites modernos com entrega em até 48 horas usando IA.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">Soluções</h3>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/sistemas"><span className="hover:text-primary transition-colors cursor-pointer">Sistemas Próprios</span></Link>
              <Link href="/site-48h"><span className="hover:text-primary transition-colors cursor-pointer">Site em 48h (IA)</span></Link>
              <Link href="/consultoria"><span className="hover:text-primary transition-colors cursor-pointer">Consultoria de Importação</span></Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">Empresa</h3>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/sobre"><span className="hover:text-primary transition-colors cursor-pointer">Sobre Nós</span></Link>
              <Link href="/portfolio"><span className="hover:text-primary transition-colors cursor-pointer">Portfólio</span></Link>
              <Link href="/contato"><span className="hover:text-primary transition-colors cursor-pointer">Fale Conosco</span></Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">Contato</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="https://wa.me/5511999999999" className="hover:text-primary transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                WhatsApp Comercial
              </a>
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                contato@gethubsystem.com.br
              </span>
            </div>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GetHubSystem. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacidade</a>
          </div>
        </div>
      </footer>

      {/* Floating AI Robot Assistant */}
      <FloatingAIRobot />
    </div>
  );
}
