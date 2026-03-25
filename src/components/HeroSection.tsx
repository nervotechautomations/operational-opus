import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const integrations = ["HubSpot", "Salesforce", "Gmail", "Slack", "Shopify", "Stripe", "Zapier"];

const HeroSection = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  // Animated counter for stats
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => (prev < 3.2 ? +(prev + 0.1).toFixed(1) : 3.2));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background effects — static gradient on mobile, animated orbs on desktop */}
      <div className="absolute inset-0 bg-gradient-radial" />
      {!isMobile && (
        <>
          <motion.div
            className="absolute rounded-full blur-3xl opacity-20 w-[500px] h-[500px] bg-accent top-[-10%] left-[-10%]"
            animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute rounded-full blur-3xl opacity-20 w-[400px] h-[400px] bg-[hsl(200,84%,50%)] bottom-[-10%] right-[-5%]"
            animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </>
      )}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

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
              <span className="font-mono text-xs text-accent tracking-wide">AI Systems Engineering</span>
            </motion.div>

            <h1 className="heading-display text-foreground mb-6">
              AI Systems That{" "}
              <span className="gradient-text">Automate</span>{" "}
              Your Revenue Engine
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg lg:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              We design and deploy AI agents that capture leads, respond to customers, and automate repetitive workflows across your business.
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
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
                Integrates with
              </p>
              <div className="flex flex-wrap gap-2">
                {integrations.map((name, i) => (
                  <motion.span
                    key={name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.05 }}
                    className="text-xs font-mono text-muted-foreground border border-border/60 rounded-full px-3 py-1.5 bg-card/80 hover:border-accent/30 hover:text-foreground transition-colors duration-300"
                  >
                    {name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Tilting Card — desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:block"
            style={{ perspective: 1000 }}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative"
            >
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-accent/5 rounded-3xl blur-2xl" />

              <div className="relative card-glass rounded-2xl p-8 glow-subtle">
                <div className="flex items-center gap-2 mb-8">
                  <span className="pulse-dot" />
                  <span className="font-mono text-xs text-success uppercase tracking-wider">Live System</span>
                </div>

                {/* Workflow steps */}
                <div className="space-y-3">
                  {[
                    { label: "Visitor", sub: "Website / Ad", num: "01" },
                    { label: "AI Qualification", sub: "Lead Scoring", num: "02" },
                    { label: "CRM Update", sub: "Auto-Logged", num: "03" },
                    { label: "Appointment", sub: "Auto-Booked", num: "04" },
                    { label: "Follow-Up", sub: "AI Outreach", num: "05" },
                  ].map((step, i) => (
                    <motion.div
                      key={step.num}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.12, duration: 0.5 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                        <span className="font-mono text-xs text-accent font-semibold">{step.num}</span>
                      </div>
                      <div className="flex-1 border border-border/40 rounded-xl px-4 py-3 bg-background/80 group-hover:border-accent/20 transition-colors duration-300">
                        <p className="text-sm font-semibold text-foreground">{step.label}</p>
                        <p className="text-xs text-muted-foreground font-mono">{step.sub}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Stats row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="mt-8 pt-6 border-t border-border/40"
                >
                  <p className="font-mono text-xs text-muted-foreground mb-3">SYSTEM OUTPUT</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-2xl font-bold text-foreground">{count}x</p>
                      <p className="font-mono text-[10px] text-muted-foreground">More Bookings</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">&lt;30s</p>
                      <p className="font-mono text-[10px] text-muted-foreground">Response Time</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-success">24/7</p>
                      <p className="font-mono text-[10px] text-muted-foreground">Uptime</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
