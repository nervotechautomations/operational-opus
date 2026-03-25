import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import AIGrowthScoreSection from "@/components/AIGrowthScoreSection";
import ConversationalSection from "@/components/ConversationalSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import OutcomesSection from "@/components/OutcomesSection";
import DemoSection from "@/components/DemoSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Dot grid texture overlay */}
      <div className="dot-grid-overlay" />
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <AIGrowthScoreSection />
      <ConversationalSection />
      <IndustriesSection />
      <ProcessSection />
      <IntegrationsSection />
      <OutcomesSection />
      <DemoSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
