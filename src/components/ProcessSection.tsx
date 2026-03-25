import { motion } from "framer-motion";
import { Search, Cog, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "AI Opportunity Audit",
    desc: "We analyze your workflows and identify where AI can produce immediate ROI.",
  },
  {
    icon: Cog,
    num: "02",
    title: "Automation Deployment",
    desc: "We build and integrate AI agents into your existing systems.",
  },
  {
    icon: TrendingUp,
    num: "03",
    title: "Optimization & Expansion",
    desc: "We monitor performance and expand automation across additional workflows.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-section" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="mono-label mb-4">Implementation</p>
          <h2 className="heading-section text-foreground mb-5">
            Three Steps to{" "}
            <span className="gradient-text">AI-Powered</span> Operations
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative group"
            >
              <div className="card-premium bg-background/50 h-full">
                <span className="font-mono text-5xl font-extrabold text-border/60 group-hover:text-accent/20 transition-colors duration-500">
                  {step.num}
                </span>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mt-6 mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                  <step.icon size={22} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>

              {/* Arrow connector on desktop */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight size={16} className="text-border" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
