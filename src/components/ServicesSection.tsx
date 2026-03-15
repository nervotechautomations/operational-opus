import { motion } from "framer-motion";
import { Target, Mail, MessageSquare, Database, Zap, FileText, Building2 } from "lucide-react";

const services = [
  {
    icon: Target,
    label: "LEAD_SCORING",
    title: "AI Lead Generation & Lead Scoring",
    desc: "Automatically find, qualify, and prioritize high-intent prospects.",
    stat: "+38%",
    statLabel: "Sales ROI improvement",
  },
  {
    icon: Mail,
    label: "OUTBOUND_AGENT",
    title: "AI Outbound & Email Agents",
    desc: "Hyper-personalized outreach systems that generate messages and follow-ups automatically.",
    stat: "2–3x",
    statLabel: "Reply rate increase",
  },
  {
    icon: MessageSquare,
    label: "CHAT_VOICE",
    title: "AI Voice & Chat Agents",
    desc: "Conversational AI that answers questions, captures leads, and books appointments automatically.",
    stat: "24/7",
    statLabel: "Availability",
  },
  {
    icon: Database,
    label: "CRM_AUTO",
    title: "AI CRM Automation",
    desc: "Systems that log interactions, generate follow-ups, assign tasks, and keep CRM data clean.",
    stat: "90%",
    statLabel: "Less manual data entry",
  },
  {
    icon: Zap,
    label: "MARKETING_AUTO",
    title: "AI Marketing Automation",
    desc: "Automated lead capture and nurture workflows that move prospects toward booking or purchasing.",
    stat: "5x",
    statLabel: "Faster pipeline velocity",
  },
  {
    icon: FileText,
    label: "CONTENT_ENGINE",
    title: "AI Content Engines",
    desc: "Turn one piece of content into dozens of marketing assets across social, email, and blog.",
    stat: "10x",
    statLabel: "Content output",
  },
  {
    icon: Building2,
    label: "VERTICAL_AGENT",
    title: "Vertical-Specific AI Agents",
    desc: "Industry-specific automation: dental intake, real estate nurturing, legal intake, ecommerce recovery.",
    stat: "Custom",
    statLabel: "Per industry",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="mono-label mb-4">Systems Catalog</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI Systems We Deploy
          </h2>
          <p className="text-lg text-muted-foreground">
            Each system is engineered for a specific operational outcome and integrates with your existing tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="card-surface hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded bg-accent/10 flex items-center justify-center">
                    <s.icon size={16} className="text-accent" />
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground tracking-widest">{s.label}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-border">
                <span className="text-2xl font-bold text-foreground">{s.stat}</span>
                <span className="ml-2 text-xs font-mono text-muted-foreground">{s.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
