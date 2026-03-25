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
    desc: "Conversational AI that answers questions, captures leads, and books appointments.",
    stat: "24/7",
    statLabel: "Availability",
  },
  {
    icon: Database,
    label: "CRM_AUTO",
    title: "AI CRM Automation",
    desc: "Systems that log interactions, generate follow-ups, and keep CRM data clean.",
    stat: "90%",
    statLabel: "Less manual data entry",
  },
  {
    icon: Zap,
    label: "MARKETING_AUTO",
    title: "AI Marketing Automation",
    desc: "Automated lead capture and nurture workflows that move prospects toward booking.",
    stat: "5x",
    statLabel: "Faster pipeline velocity",
  },
  {
    icon: FileText,
    label: "CONTENT_ENGINE",
    title: "AI Content Engines",
    desc: "Turn one piece of content into dozens of marketing assets across channels.",
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
    <section id="services" className="section-padding relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="mono-label mb-4">Systems Catalog</p>
          <h2 className="heading-section text-foreground mb-5">
            AI Systems We Deploy
          </h2>
          <p className="text-lg text-muted-foreground">
            Each system is engineered for a specific operational outcome and integrates with your existing tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="card-premium flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <s.icon size={18} className="text-accent" />
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground tracking-widest">{s.label}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/40">
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
