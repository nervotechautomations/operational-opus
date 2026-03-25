import { motion } from "framer-motion";
import { Zap, CalendarCheck, TrendingDown, Clock } from "lucide-react";

const outcomes = [
  { icon: Zap, title: "Faster Lead Response", desc: "Automated systems respond instantly to inquiries.", stat: "<30s", metric: "AVG_RESPONSE_TIME" },
  { icon: CalendarCheck, title: "More Booked Meetings", desc: "AI follow-ups keep prospects engaged.", stat: "3.2x", metric: "CONVERSION_LIFT" },
  { icon: TrendingDown, title: "Lower Operational Costs", desc: "Reduce repetitive administrative tasks.", stat: "-60%", metric: "COST_REDUCTION" },
  { icon: Clock, title: "24/7 Customer Interaction", desc: "AI agents assist customers anytime.", stat: "Always On", metric: "UPTIME_GUARANTEE" },
];

const OutcomesSection = () => {
  return (
    <section id="outcomes" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="mono-label mb-4">Measured Outcomes</p>
          <h2 className="heading-section text-foreground mb-5">
            Real Results From <span className="gradient-text">AI Automation</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-premium text-center group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/15 transition-colors duration-300">
                <o.icon size={24} className="text-accent" />
              </div>

              {/* Verified tag */}
              <p className="font-mono text-[9px] text-accent/70 tracking-[0.15em] uppercase mb-2">
                Verified System Metric
              </p>

              <motion.p
                className="text-4xl font-extrabold text-foreground mb-2 tabular-nums"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              >
                {o.stat}
              </motion.p>

              <h3 className="text-sm font-semibold text-foreground mb-1">{o.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">{o.desc}</p>

              {/* Metric label */}
              <span className="font-mono text-[9px] text-muted-foreground/50 tracking-wider">{o.metric}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
