import { motion } from "framer-motion";
import { Play, MessageCircle, GitBranch } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="mono-label mb-4">Live Preview</p>
          <h2 className="heading-section text-foreground mb-5">
            See AI <span className="gradient-text">In Action</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Seeing the system increases trust. Here's what our deployed AI looks like.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: Play, title: "System Demo", desc: "Watch a live walkthrough of an AI agent handling lead qualification and booking." },
            { icon: MessageCircle, title: "Chatbot Preview", desc: "Interact with a sample AI assistant that qualifies leads and answers questions." },
            { icon: GitBranch, title: "Workflow Animation", desc: "See how data flows through an automated pipeline from lead to closed deal." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-premium flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <item.icon size={28} className="text-accent" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
