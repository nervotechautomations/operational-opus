import { motion } from "framer-motion";
import { Play, MessageCircle, GitBranch } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="mono-label mb-4">Live Preview</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See AI In Action
          </h2>
          <p className="text-muted-foreground">
            Seeing the system increases trust. Here's what our deployed AI looks like.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-surface hover-lift flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Play size={24} className="text-accent" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-2">System Demo</h3>
            <p className="text-sm text-muted-foreground">Watch a live walkthrough of an AI agent handling lead qualification and booking.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card-surface hover-lift flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <MessageCircle size={24} className="text-accent" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-2">Chatbot Preview</h3>
            <p className="text-sm text-muted-foreground">Interact with a sample AI assistant that qualifies leads and answers questions.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="card-surface hover-lift flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <GitBranch size={24} className="text-accent" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-2">Workflow Animation</h3>
            <p className="text-sm text-muted-foreground">See how data flows through an automated pipeline from lead to closed deal.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
