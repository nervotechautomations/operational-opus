import { motion } from "framer-motion";
import { Search, Cog, TrendingUp } from "lucide-react";

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
    <section id="process" className="section-padding bg-surface">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="mono-label mb-4">Implementation</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Implement AI in Your Business
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="relative"
            >
              <div className="card-surface bg-background h-full">
                <span className="font-mono text-4xl font-bold text-border">{step.num}</span>
                <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center mt-4 mb-4">
                  <step.icon size={18} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
