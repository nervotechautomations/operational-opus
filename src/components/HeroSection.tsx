import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import SystemArchitectureDiagram from "@/components/SystemArchitectureDiagram";

const integrations = ["HubSpot", "Salesforce", "Gmail", "Slack", "Shopify", "Stripe", "Zapier"];

const HeroSection = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-gradient-radial" />

      {!isMobile && (
        <motion.div
          className="absolute rounded-full blur-3xl opacity-10 w-[600px] h-[600px] top-[-15%] left-[-10%]"
          style={{ background: "hsl(var(--accent))" }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="section-container w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 mb-8"
            >
              <Sparkles size={14} className="text-accent" />
              <span className="font-mono text-xs text-accent tracking-wide">AUTONOMOUS_SYSTEMS</span>
            </motion.div>

            <h1 className="heading-display text-foreground mb-6">
              Architecting{" "}
              <span className="gradient-text">Autonomous</span>{" "}
              Revenue Infrastructure.
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg lg:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              We build high-fidelity voicebots and automated lead-gen engines that scale output without headcount.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <Button variant="cta" size="xl" onClick={() => navigate("/ai-automation-plan")} className="group shadow-lg shadow-accent/20">
                Start Your AI Automation Plan
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button variant="ctaOutline" size="xl" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                See AI Systems
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-3">
                INTEGRATES_WITH
              </p>
              <div className="flex flex-wrap gap-2">
                {integrations.map((name, i) => (
                  <motion.span
                    key={name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.05 }}
                    className="text-xs font-mono text-muted-foreground border border-border/60 rounded-full px-3 py-1.5 bg-card/50 hover:border-accent/30 hover:text-foreground transition-colors duration-300"
                  >
                    {name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* System Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:block"
          >
            <SystemArchitectureDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
