import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./pages/BlogPost";
import PricingPage from "./pages/PricingPage";
import ZonesPage from "./pages/ZonesPage";
import CityPage from "./pages/CityPage";
import MentionsLegalesPage from "./pages/MentionsLegalesPage";
import PolitiqueConfidentialitePage from "./pages/PolitiqueConfidentialitePage";
import CGVPage from "./pages/CGVPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/blog/stress-au-travail" element={<Navigate to="/blog/neurofeedback-stress-travail" replace />} />
          <Route path="/blog/stress-angoisses-insomnie" element={<Navigate to="/blog/neurofeedback-stress-angoisses-nuits-difficiles" replace />} />
          <Route path="/blog/bien-etre-cancer" element={<Navigate to="/blog/neurofeedback-bien-etre-epreuves-de-vie" replace />} />
          <Route path="/tarifs" element={<PricingPage />} />
          <Route path="/zones" element={<ZonesPage />} />
          <Route path="/:citySlug" element={<CityPage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage />} />
          <Route path="/cgv" element={<CGVPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
