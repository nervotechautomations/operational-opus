import { motion } from "framer-motion";
import { Clock, AlertTriangle, Database, HeadphonesIcon, Mail } from "lucide-react";

const problems = [
  { icon: Clock, text: "Leads not being followed up quickly enough" },
  { icon: AlertTriangle, text: "Slow response times losing potential customers" },
  { icon: Mail, text: "Manual outreach consuming hours of staff time" },
  { icon: Database, text: "Messy, outdated CRM data creating blind spots" },
  { icon: HeadphonesIcon, text: "Overwhelmed support teams dropping the ball" },
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="mono-label mb-4">The Problem</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Most Businesses Are Losing Opportunities to Slow Processes
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Every delayed response, missed follow-up, and manual task is revenue left on the table. AI systems can now automate these workflows reliably.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-start gap-4 p-5 rounded-lg border border-border bg-background"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded bg-destructive/10 flex items-center justify-center">
                <item.icon size={18} className="text-destructive" />
              </div>
              <p className="text-sm text-foreground font-medium leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
