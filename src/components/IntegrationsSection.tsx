import { motion } from "framer-motion";

const integrations = [
  { name: "Salesforce", angle: 0 },
  { name: "HubSpot", angle: 45 },
  { name: "Gmail", angle: 90 },
  { name: "Slack", angle: 135 },
  { name: "Twilio", angle: 180 },
  { name: "Stripe", angle: 225 },
  { name: "Zapier", angle: 270 },
  { name: "Custom API", angle: 315 },
];

const IntegrationsSection = () => {
  const cx = 200;
  const cy = 200;
  const radius = 140;

  return (
    <section id="integrations" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-section" />

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <p className="mono-label mb-4">Connection Protocol</p>
          <h2 className="heading-section text-foreground mb-5">
            <span className="gradient-text">System</span> Connection Map
          </h2>
          <p className="text-lg text-muted-foreground">
            Direct integration channels to your existing operational infrastructure.
          </p>
        </motion.div>

        {/* Connection Map */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <svg viewBox="0 0 400 400" className="w-full h-full absolute inset-0">
              <defs>
                <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--accent) / 0.4)" />
                  <stop offset="100%" stopColor="hsl(var(--glow-secondary) / 0.2)" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Connection lines */}
              {integrations.map((int, i) => {
                const rad = (int.angle * Math.PI) / 180;
                const nx = cx + radius * Math.cos(rad);
                const ny = cy + radius * Math.sin(rad);
                return (
                  <motion.line
                    key={int.name}
                    x1={cx} y1={cy}
                    x2={nx} y2={ny}
                    stroke="url(#lineGlow)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
                    filter="url(#glow)"
                  />
                );
              })}

              {/* Flow dots along lines */}
              {integrations.map((int, i) => {
                const rad = (int.angle * Math.PI) / 180;
                const nx = cx + radius * Math.cos(rad);
                const ny = cy + radius * Math.sin(rad);
                return (
                  <motion.circle
                    key={`dot-${int.name}`}
                    r="2"
                    fill="hsl(var(--accent))"
                    initial={{ opacity: 0 }}
                    animate={{
                      cx: [cx, nx],
                      cy: [cy, ny],
                      opacity: [0, 0.8, 0.8, 0],
                    }}
                    transition={{
                      delay: 1 + i * 0.3,
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                );
              })}

              {/* Center node glow */}
              <circle cx={cx} cy={cy} r="40" fill="hsl(var(--accent) / 0.05)" />
              <circle cx={cx} cy={cy} r="28" fill="hsl(var(--card) / 0.8)" stroke="hsl(var(--accent) / 0.35)" strokeWidth="1" />

              {/* Center label */}
              <text x={cx} y={cy - 5} textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9" fontWeight="700" fontFamily="Inter, system-ui, sans-serif">
                NERVO
              </text>
              <text x={cx} y={cy + 7} textAnchor="middle" fill="hsl(var(--accent))" fontSize="7" fontFamily="JetBrains Mono, monospace">
                CORE
              </text>

              {/* Outer nodes */}
              {integrations.map((int, i) => {
                const rad = (int.angle * Math.PI) / 180;
                const nx = cx + radius * Math.cos(rad);
                const ny = cy + radius * Math.sin(rad);
                return (
                  <motion.g
                    key={`node-${int.name}`}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                  >
                    <circle cx={nx} cy={ny} r="26" fill="hsl(var(--card) / 0.6)" stroke="hsl(var(--border) / 0.5)" strokeWidth="1" />
                    <text
                      x={nx} y={ny + 1}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="hsl(var(--foreground) / 0.85)"
                      fontSize="7"
                      fontWeight="500"
                      fontFamily="JetBrains Mono, monospace"
                    >
                      {int.name.length > 8 ? int.name.substring(0, 7) + "…" : int.name}
                    </text>
                  </motion.g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
