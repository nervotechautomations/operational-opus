import { motion } from "framer-motion";
import { Target, Mail, MessageSquare, Database, Zap, FileText, Building2 } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Target,
    label: "LEAD_SCORING",
    title: "Lead Acquisition & Scoring Engine",
    desc: "High-fidelity prospecting pipeline with intent-signal analysis, automated qualification matrices, and priority routing.",
    stat: "+38%",
    statLabel: "Sales ROI",
    stack: "PYTHON / LANGCHAIN / PINECONE",
    wide: true,
  },
  {
    icon: Mail,
    label: "OUTBOUND_AGENT",
    title: "Autonomous Outreach Sequencer",
    desc: "Multi-channel message generation with behavioral triggers, A/B variant synthesis, and adaptive send-time optimization.",
    stat: "2–3x",
    statLabel: "Reply rate",
    stack: "GPT-4o / SENDGRID / REDIS",
  },
  {
    icon: MessageSquare,
    label: "CONV_INTEL",
    title: "Conversational Intelligence Units",
    desc: "Real-time NLP agents handling voice and text channels with context-aware dialogue management and CRM handoff.",
    stat: "24/7",
    statLabel: "Availability",
    stack: "WHISPER / VAPI / WEBSOCKET",
  },
  {
    icon: Database,
    label: "CRM_AUTO",
    title: "CRM Synchronization Layer",
    desc: "Bi-directional data pipeline ensuring contact enrichment, interaction logging, and hygiene scoring in real time.",
    stat: "90%",
    statLabel: "Less manual entry",
    stack: "HUBSPOT API / POSTGRES / CRON",
  },
  {
    icon: Zap,
    label: "ASSET_SYNTH",
    title: "Autonomous Asset Synthesis",
    desc: "Automated campaign generation, landing page deployment, and multi-touch nurture sequences from a single brief.",
    stat: "5x",
    statLabel: "Pipeline velocity",
    stack: "NEXT.JS / VERCEL / GPT-4o",
  },
  {
    icon: FileText,
    label: "CONTENT_ENGINE",
    title: "Content Multiplication Engine",
    desc: "Single-input to multi-format asset pipeline producing social, email, blog, and ad copy with brand-voice calibration.",
    stat: "10x",
    statLabel: "Content output",
    stack: "LANGCHAIN / DALL·E / S3",
  },
  {
    icon: Building2,
    label: "VERTICAL_AGENT",
    title: "Industry-Specific Agent Modules",
    desc: "Pre-trained vertical agents for dental intake, real estate nurturing, legal qualification, and e-commerce recovery.",
    stat: "Custom",
    statLabel: "Per vertical",
    stack: "RAG / FINE-TUNE / SUPABASE",
  },
];

const ServiceCard = ({ s, i }: { s: typeof services[0]; i: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: i * 0.06, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`card-premium flex flex-col justify-between group cursor-default ${
        s.wide ? "md:col-span-2" : ""
      }`}
    >
      {/* Top: Icon + Label + Title (always visible) */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/15 transition-colors duration-300">
            <s.icon size={18} className="text-accent" />
          </div>
          <span className="font-mono text-[10px] text-muted-foreground tracking-widest">{s.label}</span>
        </div>
        <h3 className="text-base font-semibold text-foreground mb-1">{s.title}</h3>

        {/* Description — reveal on hover */}
        <motion.div
          initial={false}
          animate={{
            height: hovered ? "auto" : 0,
            opacity: hovered ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <p className="text-sm text-muted-foreground leading-relaxed pt-1 pb-2">{s.desc}</p>
        </motion.div>
      </div>

      {/* Bottom: Stat + Stack */}
      <div className="mt-4 pt-3 border-t border-border/30 flex items-end justify-between gap-4">
        <div>
          <span className="text-2xl font-bold text-foreground">{s.stat}</span>
          <span className="ml-2 text-[10px] font-mono text-muted-foreground">{s.statLabel}</span>
        </div>
        <span className="font-mono text-[9px] text-muted-foreground/60 tracking-wider text-right leading-tight">
          STACK: {s.stack}
        </span>
      </div>
    </motion.div>
  );
};

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
            Systems We Deploy
          </h2>
          <p className="text-lg text-muted-foreground">
            Each module is engineered for a specific operational outcome and integrates with your existing infrastructure.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.label} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
