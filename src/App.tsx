import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import Admissions from "./pages/Admissions";
import About from "./pages/About";
import Board from "./components/Board";
import CampusLife from "./pages/CampusLife";
import Placements from "./pages/Placements";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import GenAIPoweredDataScience from "./pages/GenAIPoweredDataScience";
import GenAIAgenticAi from "./pages/GenAIAgenticAi";
import GenAIsoftwarecloud from "./pages/GenAIsoftwarecloud";
import ScrollToTopButton from "./components/ScrollToTopButton";

const queryClient = new QueryClient();

const ScrollOnNavigation = () => {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scrollBehavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth";
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: scrollBehavior });
    });
  }, [location.pathname, location.search, location.hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollOnNavigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/board" element={<Board />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gen-ai-data-science" element={<GenAIPoweredDataScience />} />
          <Route path="/gen-ai-agentic-aiml" element={<GenAIAgenticAi />} />
          <Route path="/gen-ai-software-cloud" element={<GenAIsoftwarecloud />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTopButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
