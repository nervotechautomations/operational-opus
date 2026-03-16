import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AIGrowthScore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="section-padding">
        <div className="section-container max-w-2xl text-center">
          <p className="mono-label mb-4">AI Growth Score</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Analyze Your Business Automation
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            The diagnostic questionnaire is coming soon. In the meantime, get a personalized AI automation plan.
          </p>
          <Button variant="cta" size="lg" onClick={() => navigate("/ai-automation-plan")}>
            Start Your AI Automation Plan
            <ArrowRight size={18} />
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AIGrowthScore;
