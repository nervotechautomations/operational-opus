import { motion } from "framer-motion";

const steps = [
  { label: "Visitor", sub: "Website / Ad" },
  { label: "AI Qualification", sub: "Lead Scoring" },
  { label: "CRM Update", sub: "Auto-Logged" },
  { label: "Appointment", sub: "Auto-Booked" },
  { label: "Follow-Up", sub: "AI Outreach" },
];

const WorkflowDiagram = () => {
  return (
    <div className="relative bg-card border border-border rounded-lg p-8">
      <div className="flex items-center gap-2 mb-8">
        <span className="pulse-dot" />
        <span className="font-mono text-xs text-success uppercase tracking-wider">Live System</span>
      </div>

      <div className="space-y-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
            className="flex items-center gap-4"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded bg-accent/10 border border-accent/20 flex items-center justify-center">
              <span className="font-mono text-xs text-accent font-semibold">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <div className="flex-1 border border-border rounded px-4 py-3 bg-background">
              <p className="text-sm font-semibold text-foreground">{step.label}</p>
              <p className="text-xs text-muted-foreground font-mono">{step.sub}</p>
            </div>
            {i < steps.length - 1 && (
              <motion.div
                className="absolute left-[2.45rem] mt-16"
                style={{ top: `${i * 76 + 60}px` }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Connecting lines */}
      <svg className="absolute left-[2.95rem] top-[5.5rem] h-[calc(100%-7rem)]" width="2" aria-hidden>
        <motion.line
          x1="1" y1="0" x2="1" y2="100%"
          stroke="hsl(var(--border))"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </svg>

      <div className="mt-8 pt-6 border-t border-border">
        <p className="font-mono text-xs text-muted-foreground mb-2">SYSTEM OUTPUT</p>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-2xl font-bold text-foreground">3.2x</p>
            <p className="font-mono text-xs text-muted-foreground">More Bookings</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-foreground">&lt;30s</p>
            <p className="font-mono text-xs text-muted-foreground">Response Time</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-success">24/7</p>
            <p className="font-mono text-xs text-muted-foreground">Uptime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowDiagram;
