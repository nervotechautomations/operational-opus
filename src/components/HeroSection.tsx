import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import WorkflowDiagram from "./WorkflowDiagram";

const integrations = ["HubSpot", "Salesforce", "Gmail", "Slack", "Shopify", "Stripe", "Zapier"];

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mono-label mb-4">AI Systems Engineering</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] text-foreground mb-6">
              AI Systems That Automate Sales, Support, and Operations
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              We design and deploy AI agents that capture leads, respond to customers, and automate repetitive workflows across your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="cta" size="xl" onClick={() => navigate("/ai-automation-plan")}>
                Start Your AI Automation Plan
                <ArrowRight size={18} />
              </Button>
              <Button variant="ctaOutline" size="xl">
                See AI Systems
              </Button>
            </div>

            <div>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
                Integrates with
              </p>
              <div className="flex flex-wrap gap-3">
                {integrations.map((name) => (
                  <span
                    key={name}
                    className="text-xs font-mono text-muted-foreground border border-border rounded px-3 py-1.5 bg-card"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <WorkflowDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
