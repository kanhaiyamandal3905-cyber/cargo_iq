import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import { ParticleBackground, CursorGlow } from "@/components/ParticleBackground";
import Index from "./pages/Index.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";
import CalculatorPage from "./pages/CalculatorPage.tsx";
import MarketplacePage from "./pages/MarketplacePage.tsx";
import AnalysisPage from "./pages/AnalysisPage.tsx";
import CategoryPage from "./pages/CategoryPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="animated-bg min-h-screen relative">
          <ParticleBackground />
          <CursorGlow />
          <Navbar />
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/calculator" element={<CalculatorPage />} />
              <Route path="/marketplace" element={<MarketplacePage />} />
              <Route path="/analysis" element={<AnalysisPage />} />
              <Route path="/categories" element={<CategoryPage />} />
              <Route path="/categories/:slug" element={<CategoryPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <footer className="relative z-10 border-t border-border/50 py-8 text-center">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
                {[
                  { label: "Home", to: "/" },
                  { label: "Price Compare", to: "/products" },
                  { label: "Import Calculator", to: "/calculator" },
                  { label: "Marketplace", to: "/marketplace" },
                  { label: "Analysis", to: "/analysis" },
                  { label: "Categories", to: "/categories" },
                ].map((link) => (
                  <a key={link.to} href={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</a>
                ))}
              </div>
              <div className="neon-text text-xl font-black mb-2">Cargo IQ</div>
              <p className="text-xs text-muted-foreground">Making global trade accessible, transparent, and intelligent. © {new Date().getFullYear()} Cargo IQ</p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
