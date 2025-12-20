import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Consultoria from "./pages/Consultoria";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Site48h from "./pages/Site48h";
import Sistemas from "./pages/Sistemas";
import Sobre from "./pages/Sobre";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/sistemas" component={Sistemas} />
        <Route path="/site-48h" component={Site48h} />
        <Route path="/consultoria" component={Consultoria} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/contato" component={Contato} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
