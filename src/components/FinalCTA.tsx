import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FinalCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Premium dark gradient background */}
      <div className="absolute inset-0 bg-primary" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 0%, hsl(var(--accent) / 0.3), transparent)`,
        }}
      />

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-primary-foreground/50 mb-4">
            Next Step
          </p>
          <h2 className="heading-section text-primary-foreground mb-6">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-lg text-primary-foreground/60 mb-12">
            We design practical AI systems that automate revenue generation and operational workflows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg shadow-accent/20 group"
              onClick={() => navigate("/ai-automation-plan")}
            >
              Start Your AI Automation Plan
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/5"
            >
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
