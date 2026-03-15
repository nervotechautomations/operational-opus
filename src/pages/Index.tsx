import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
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
