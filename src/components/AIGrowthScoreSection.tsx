import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gauge, Zap, UserCheck, MessageSquare, TrendingUp, Target } from "lucide-react";

const features = [
  { icon: Target, text: "Lead capture automation" },
  { icon: UserCheck, text: "Lead qualification systems" },
  { icon: Zap, text: "Follow-up automation" },
  { icon: MessageSquare, text: "Customer communication workflows" },
  { icon: TrendingUp, text: "Growth optimization" },
];

const ScoreGauge = () => {
  const score = 42;
  const circumference = 2 * Math.PI * 80;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-56 h-56 md:w-64 md:h-64">
        <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
          <circle
            cx="100" cy="100" r="80"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="8"
          />
          <motion.circle
            cx="100" cy="100" r="80"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">AI Growth Score</p>
          <motion.p
            className="text-5xl font-bold text-foreground mt-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            42
          </motion.p>
          <p className="text-sm text-muted-foreground font-mono">/ 100</p>
        </div>
      </div>

      <div className="flex items-center gap-1 mt-6 w-full max-w-[16rem]">
        <div className="h-1.5 flex-1 rounded-full bg-destructive/30" />
        <div className="h-1.5 flex-1 rounded-full bg-accent/40" />
        <div className="h-1.5 flex-1 rounded-full bg-success/40" />
      </div>
      <div className="flex justify-between w-full max-w-[16rem] mt-2">
        <span className="font-mono text-[10px] text-muted-foreground">Manual</span>
        <span className="font-mono text-[10px] text-muted-foreground">Automated</span>
        <span className="font-mono text-[10px] text-muted-foreground">AI Optimized</span>
      </div>
    </div>
  );
};

const AIGrowthScoreSection = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-surface">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mono-label mb-4">Business Diagnostic</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What's Your AI Growth Score?
            </h2>
            <p className="text-lg text-muted-foreground mb-3">
              Discover how automated your marketing, lead management, and customer communication systems are.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              Most businesses still rely on manual processes for lead response, qualification, and follow-ups. Our AI Growth Score analyzes your workflows and identifies where AI systems could improve efficiency, response speed, and revenue generation.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((f, i) => (
                <motion.li
                  key={f.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-7 h-7 rounded bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <f.icon size={14} className="text-accent" />
                  </div>
                  <span className="text-sm text-foreground">{f.text}</span>
                </motion.li>
              ))}
            </ul>

            <Button
              variant="cta"
              size="lg"
              onClick={() => navigate("/ai-growth-score")}
              className="group"
            >
              <Gauge size={18} className="mr-1" />
              Check Your AI Growth Score
            </Button>
            <p className="text-xs text-muted-foreground mt-3 font-mono">Takes about 30 seconds.</p>
          </motion.div>

          {/* Right — Gauge Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="card-surface p-8 lg:p-10 w-full max-w-sm">
              <div className="flex items-center gap-2 mb-6">
                <span className="pulse-dot" />
                <span className="font-mono text-xs text-success uppercase tracking-wider">System Diagnostic</span>
              </div>
              <ScoreGauge />
              <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-lg font-bold text-foreground">6</p>
                  <p className="font-mono text-[10px] text-muted-foreground">Areas Analyzed</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">3</p>
                  <p className="font-mono text-[10px] text-muted-foreground">Quick Wins</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-accent">High</p>
                  <p className="font-mono text-[10px] text-muted-foreground">AI Potential</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIGrowthScoreSection;
