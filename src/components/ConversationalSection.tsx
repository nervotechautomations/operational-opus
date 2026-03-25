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
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-section" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="mono-label mb-4">Conversational AI</p>
            <h2 className="heading-section text-foreground mb-6">
              AI Assistants That Handle{" "}
              <span className="gradient-text">Every Conversation</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              These systems operate 24/7 and integrate with your CRM and scheduling platforms.
            </p>

            <div className="space-y-3">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-success flex-shrink-0" />
                  <span className="text-sm text-foreground">{cap}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-premium group"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                  <uc.icon size={20} className="text-accent" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{uc.title}</h3>
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
