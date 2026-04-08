import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop";
import Homepage from "./pages/Homepage";
import Solutions from "./pages/Solutions";
import RealEstate from "./pages/RealEstate";
import Dental from "./pages/Dental";
import Legal from "./pages/Legal";
import Ecommerce from "./pages/Ecommerce";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import AIAutomationPlan from "./pages/AIAutomationPlan.tsx";
import AIGrowthScore from "./pages/AIGrowthScore.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/dental" element={<Dental />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/ai-automation-plan" element={<AIAutomationPlan />} />
          <Route path="/ai-growth-score" element={<AIGrowthScore />} />
          {/* Catch-all redirect to homepage */}
          <Route path="*" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
