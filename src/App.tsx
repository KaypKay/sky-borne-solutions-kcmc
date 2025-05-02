
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import FleetPage from "./pages/FleetPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import BookingPage from "./pages/BookingPage";
import EmergencyPage from "./pages/EmergencyPage";
import CloudSeedingQuotePage from "./pages/CloudSeedingQuotePage";
import CloudSeedingQuoteConfirmation from "./pages/CloudSeedingQuoteConfirmation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="/cloud-seeding-quote" element={<CloudSeedingQuotePage />} />
          <Route path="/cloud-seeding-quote/confirmation" element={<CloudSeedingQuoteConfirmation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
