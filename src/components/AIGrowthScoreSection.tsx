import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gauge, Zap, UserCheck, MessageSquare, TrendingUp, Target } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const features = [
  { icon: Target, text: "Lead capture automation" },
  { icon: UserCheck, text: "Lead qualification systems" },
  { icon: Zap, text: "Follow-up automation" },
  { icon: MessageSquare, text: "Customer communication workflows" },
  { icon: TrendingUp, text: "Growth optimization" },
];

const ScoreGauge = () => {
  const score = 42;
  const circumference = 2 * Math.PI * 85;
  const offset = circumference - (score / 100) * circumference;

  // Tick marks
  const ticks = Array.from({ length: 40 }, (_, i) => {
    const angle = (i / 40) * 360 - 90;
    const rad = (angle * Math.PI) / 180;
    const isMajor = i % 5 === 0;
    const inner = isMajor ? 68 : 72;
    const outer = 76;
    return {
      x1: 100 + inner * Math.cos(rad),
      y1: 100 + inner * Math.sin(rad),
      x2: 100 + outer * Math.cos(rad),
      y2: 100 + outer * Math.sin(rad),
      isMajor,
    };
  });

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-56 h-56 md:w-64 md:h-64">
        <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
          {/* Tick marks */}
          {ticks.map((t, i) => (
            <line
              key={i}
              x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
              stroke={t.isMajor ? "hsl(var(--muted-foreground) / 0.3)" : "hsl(var(--muted-foreground) / 0.12)"}
              strokeWidth={t.isMajor ? 1.2 : 0.6}
            />
          ))}

          {/* Background track — thin */}
          <circle
            cx="100" cy="100" r="85"
            fill="none"
            stroke="hsl(var(--border) / 0.4)"
            strokeWidth="2"
          />

          {/* Score arc — thin, electric */}
          <motion.circle
            cx="100" cy="100" r="85"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
          />

          {/* Glow arc (duplicate, blurred) */}
          <motion.circle
            cx="100" cy="100" r="85"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
            opacity={0.2}
            filter="blur(4px)"
          />

          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--accent))" />
              <stop offset="100%" stopColor="hsl(var(--glow-secondary))" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="font-mono text-[9px] text-muted-foreground tracking-[0.2em] uppercase">Efficiency Index</p>
          <motion.p
            className="text-5xl font-extrabold text-foreground mt-1 tabular-nums"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            42
          </motion.p>
          <p className="text-xs text-muted-foreground font-mono">/ 100</p>
        </div>
      </div>

      {/* Scale bar */}
      <div className="flex items-center gap-px mt-6 w-full max-w-[16rem]">
        <div className="h-1 flex-1 rounded-full bg-destructive/25" />
        <div className="h-1 flex-1 rounded-full bg-accent/30" />
        <div className="h-1 flex-1 rounded-full bg-success/30" />
      </div>
      <div className="flex justify-between w-full max-w-[16rem] mt-2">
        <span className="font-mono text-[9px] text-muted-foreground tracking-wider">MANUAL</span>
        <span className="font-mono text-[9px] text-muted-foreground tracking-wider">AUTOMATED</span>
        <span className="font-mono text-[9px] text-muted-foreground tracking-wider">OPTIMIZED</span>
      </div>
    </div>
  );
};

const AIGrowthScoreSection = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [3, -3]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-3, 3]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-section" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="mono-label mb-4">System Diagnostic</p>
            <h2 className="heading-section text-foreground mb-5">
              Run a{" "}
              <span className="gradient-text">Systemic Efficiency</span>{" "}
              Audit.
            </h2>
            <p className="text-lg text-muted-foreground mb-3 leading-relaxed">
              Discover how automated your marketing, lead management, and customer communication systems are.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              Most businesses still rely on manual processes for lead response, qualification, and follow-ups. Our diagnostic analyzes your workflows and identifies where autonomous systems could improve efficiency, response speed, and revenue generation.
            </p>

            <ul className="space-y-3 mb-10">
              {features.map((f, i) => (
                <motion.li
                  key={f.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/15 flex items-center justify-center flex-shrink-0">
                    <f.icon size={15} className="text-accent" />
                  </div>
                  <span className="text-sm text-foreground">{f.text}</span>
                </motion.li>
              ))}
            </ul>

            <Button
              variant="cta"
              size="lg"
              onClick={() => navigate("/ai-growth-score")}
              className="group shadow-lg shadow-accent/20"
            >
              <Gauge size={18} className="mr-1" />
              Run Efficiency Audit
            </Button>
            <p className="text-[10px] text-muted-foreground mt-3 font-mono tracking-wider">ESTIMATED_TIME: 30 SECONDS</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
            onMouseMove={handleMouseMove}
            style={{ perspective: 800 }}
          >
            <motion.div
              style={isMobile ? {} : { rotateX, rotateY }}
              className="w-full max-w-sm"
            >
              <div className="absolute -inset-4 rounded-3xl" style={{ background: "radial-gradient(ellipse at center, hsl(var(--accent) / 0.06), transparent 70%)" }} />
              <div className="relative card-glass p-8 lg:p-10 glow-subtle">
                <div className="flex items-center gap-2 mb-6">
                  <span className="pulse-dot" />
                  <span className="font-mono text-[10px] text-success uppercase tracking-wider">DIAGNOSTIC_ACTIVE</span>
                </div>
                <ScoreGauge />
                <div className="mt-8 pt-5 border-t border-border/30 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-lg font-bold text-foreground tabular-nums">6</p>
                    <p className="font-mono text-[9px] text-muted-foreground tracking-wider">VECTORS</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground tabular-nums">3</p>
                    <p className="font-mono text-[9px] text-muted-foreground tracking-wider">QUICK_WINS</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-accent">High</p>
                    <p className="font-mono text-[9px] text-muted-foreground tracking-wider">AI_POTENTIAL</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIGrowthScoreSection;
