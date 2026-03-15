import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
const FinalCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="section-padding bg-primary">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-primary-foreground/60 mb-4">
            Next Step
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-10">
            We design practical AI systems that automate revenue generation and operational workflows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              onClick={() => navigate("/ai-automation-plan")}
            >
              Start Your AI Automation Plan
              <ArrowRight size={18} />
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
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
