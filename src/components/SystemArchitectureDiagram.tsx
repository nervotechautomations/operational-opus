import { motion } from "framer-motion";

interface NodeProps {
  x: number;
  y: number;
  label: string;
  sublabel: string;
  delay: number;
  pulse?: boolean;
}

const DiagramNode = ({ x, y, label, sublabel, delay, pulse }: NodeProps) => (
  <motion.g
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
  >
    {/* Glow behind node */}
    <circle cx={x} cy={y} r="32" fill="hsl(var(--accent) / 0.06)" />
    {/* Node border */}
    <circle
      cx={x} cy={y} r="24"
      fill="hsl(var(--card) / 0.7)"
      stroke="hsl(var(--accent) / 0.3)"
      strokeWidth="1"
    />
    {pulse && (
      <motion.circle
        cx={x} cy={y} r="24"
        fill="none"
        stroke="hsl(var(--accent) / 0.2)"
        strokeWidth="1"
        animate={{ r: [24, 36], opacity: [0.4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
    )}
    {/* Label */}
    <text
      x={x} y={y - 4}
      textAnchor="middle"
      fill="hsl(var(--foreground))"
      fontSize="8"
      fontWeight="600"
      fontFamily="Inter, system-ui, sans-serif"
    >
      {label}
    </text>
    <text
      x={x} y={y + 8}
      textAnchor="middle"
      fill="hsl(var(--muted-foreground))"
      fontSize="6"
      fontFamily="JetBrains Mono, monospace"
    >
      {sublabel}
    </text>
  </motion.g>
);

interface LineProps {
  x1: number; y1: number; x2: number; y2: number;
  delay: number;
}

const DiagramLine = ({ x1, y1, x2, y2, delay }: LineProps) => (
  <motion.line
    x1={x1} y1={y1} x2={x2} y2={y2}
    stroke="hsl(var(--accent) / 0.2)"
    strokeWidth="1"
    strokeDasharray="4 4"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{ delay, duration: 0.8 }}
  />
);

const FlowDot = ({ x1, y1, x2, y2, delay }: LineProps) => (
  <motion.circle
    r="2"
    fill="hsl(var(--accent))"
    initial={{ opacity: 0 }}
    animate={{
      cx: [x1, x2],
      cy: [y1, y2],
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      delay,
      duration: 2.5,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

const SystemArchitectureDiagram = () => {
  const nodes = [
    { x: 200, y: 40, label: "INBOUND", sublabel: "TRAFFIC_IN", delay: 0.5, pulse: true },
    { x: 90, y: 120, label: "VOICE BOT", sublabel: "NLP_ENGINE", delay: 0.7 },
    { x: 310, y: 120, label: "CHAT BOT", sublabel: "MSG_HANDLER", delay: 0.8 },
    { x: 200, y: 200, label: "QUALIFIER", sublabel: "LEAD_SCORE", delay: 0.9, pulse: true },
    { x: 80, y: 280, label: "CRM SYNC", sublabel: "DATA_PIPE", delay: 1.0 },
    { x: 200, y: 280, label: "SCHEDULER", sublabel: "BOOKING_SYS", delay: 1.1 },
    { x: 320, y: 280, label: "OUTREACH", sublabel: "AUTO_EMAIL", delay: 1.2 },
    { x: 200, y: 360, label: "REVENUE", sublabel: "OUTPUT_STREAM", delay: 1.3, pulse: true },
  ];

  const lines = [
    { x1: 200, y1: 64, x2: 90, y2: 96, delay: 0.6 },
    { x1: 200, y1: 64, x2: 310, y2: 96, delay: 0.65 },
    { x1: 90, y1: 144, x2: 200, y2: 176, delay: 0.85 },
    { x1: 310, y1: 144, x2: 200, y2: 176, delay: 0.9 },
    { x1: 200, y1: 224, x2: 80, y2: 256, delay: 1.0 },
    { x1: 200, y1: 224, x2: 200, y2: 256, delay: 1.05 },
    { x1: 200, y1: 224, x2: 320, y2: 256, delay: 1.1 },
    { x1: 80, y1: 304, x2: 200, y2: 336, delay: 1.2 },
    { x1: 200, y1: 304, x2: 200, y2: 336, delay: 1.25 },
    { x1: 320, y1: 304, x2: 200, y2: 336, delay: 1.3 },
  ];

  return (
    <div className="relative">
      {/* Outer glow */}
      <div className="absolute -inset-8 rounded-3xl" style={{ background: "radial-gradient(ellipse at center, hsl(var(--accent) / 0.06), transparent 70%)" }} />

      <div className="relative card-glass rounded-2xl p-6 glow-subtle">
        <div className="flex items-center gap-2 mb-4">
          <span className="pulse-dot" />
          <span className="font-mono text-[10px] text-success uppercase tracking-wider">SYSTEM_LIVE</span>
          <span className="ml-auto font-mono text-[10px] text-muted-foreground">v2.4.1</span>
        </div>

        <svg viewBox="0 0 400 400" className="w-full" style={{ filter: "drop-shadow(0 0 8px hsl(var(--accent) / 0.1))" }}>
          {/* Lines first (behind nodes) */}
          {lines.map((l, i) => (
            <DiagramLine key={`line-${i}`} {...l} />
          ))}

          {/* Flowing data dots */}
          {lines.map((l, i) => (
            <FlowDot key={`dot-${i}`} {...l} delay={l.delay + 1} />
          ))}

          {/* Nodes */}
          {nodes.map((n, i) => (
            <DiagramNode key={`node-${i}`} {...n} />
          ))}
        </svg>

        {/* Bottom stats */}
        <div className="mt-4 pt-4 border-t border-border/30 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-lg font-bold text-foreground">3.2x</p>
            <p className="font-mono text-[9px] text-muted-foreground tracking-wider">THROUGHPUT</p>
          </div>
          <div>
            <p className="text-lg font-bold text-foreground">&lt;30s</p>
            <p className="font-mono text-[9px] text-muted-foreground tracking-wider">LATENCY</p>
          </div>
          <div>
            <p className="text-lg font-bold text-success">99.9%</p>
            <p className="font-mono text-[9px] text-muted-foreground tracking-wider">UPTIME</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemArchitectureDiagram;
