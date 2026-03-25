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
    <section className="section-padding relative overflow-hidden">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-section" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-16"
        >
          <p className="mono-label mb-4">The Problem</p>
          <h2 className="heading-section text-foreground mb-6">
            Most Businesses Are Losing Opportunities to{" "}
            <span className="gradient-text">Slow Processes</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every delayed response, missed follow-up, and manual task is revenue left on the table.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((item, i) => (
            <div
              key={i}
              className="card-premium flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <item.icon size={18} className="text-destructive" />
              </div>
              <p className="text-sm text-foreground font-medium leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
