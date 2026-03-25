import { motion } from "framer-motion";

const integrations = [
  "Salesforce", "HubSpot", "Gmail", "Slack", "Shopify", "Stripe", "Zapier", "Custom APIs",
];

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-section" />

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <p className="mono-label mb-4">Compatibility</p>
          <h2 className="heading-section text-foreground mb-5">
            Works With Your <span className="gradient-text">Existing Tools</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No need to replace your current stack. Our AI systems integrate seamlessly.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {integrations.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="px-8 py-5 rounded-2xl border border-border/40 bg-card font-mono text-sm text-muted-foreground hover:text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 cursor-default"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
