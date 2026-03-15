import { motion } from "framer-motion";
import { Zap, CalendarCheck, TrendingDown, Clock } from "lucide-react";

const outcomes = [
  { icon: Zap, title: "Faster Lead Response", desc: "Automated systems respond instantly to inquiries.", stat: "<30s" },
  { icon: CalendarCheck, title: "More Booked Meetings", desc: "AI follow-ups keep prospects engaged.", stat: "3.2x" },
  { icon: TrendingDown, title: "Lower Operational Costs", desc: "Reduce repetitive administrative tasks.", stat: "-60%" },
  { icon: Clock, title: "24/7 Customer Interaction", desc: "AI agents assist customers anytime.", stat: "Always On" },
];

const OutcomesSection = () => {
  return (
    <section id="outcomes" className="section-padding bg-surface">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="mono-label mb-4">Measured Outcomes</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Businesses Gain From AI Automation
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="card-surface bg-background text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <o.icon size={20} className="text-accent" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">{o.stat}</p>
              <h3 className="text-sm font-semibold text-foreground mb-1">{o.title}</h3>
              <p className="text-xs text-muted-foreground">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
