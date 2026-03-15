import { motion } from "framer-motion";
import { Bot, Calendar, Headphones, Phone } from "lucide-react";

const useCases = [
  { icon: Bot, title: "Website AI Sales Assistant", desc: "Answers questions and captures leads from website visitors." },
  { icon: Calendar, title: "Appointment Booking Assistant", desc: "Qualifies prospects and schedules meetings automatically." },
  { icon: Headphones, title: "Customer Support Agent", desc: "Handles support requests and routes complex issues." },
  { icon: Phone, title: "Phone Call Automation", desc: "AI-powered call handling for inbound and outbound calls." },
];

const capabilities = [
  "Answer website questions",
  "Capture leads automatically",
  "Qualify potential clients",
  "Guide visitors toward services",
  "Schedule appointments",
  "Handle support requests",
  "Answer incoming calls",
];

const ConversationalSection = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mono-label mb-4">Conversational AI</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              AI Assistants That Handle Customer Conversations
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              These systems operate 24/7 and integrate with your CRM and scheduling platforms.
            </p>

            <div className="space-y-3">
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
                  <span className="text-sm text-foreground">{cap}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="card-surface hover-lift"
              >
                <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center mb-4">
                  <uc.icon size={18} className="text-accent" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{uc.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{uc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversationalSection;
