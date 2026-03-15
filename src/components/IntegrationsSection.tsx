import { motion } from "framer-motion";

const integrations = [
  "Salesforce", "HubSpot", "Gmail", "Slack", "Shopify", "Stripe", "Zapier", "Custom APIs",
];

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="section-padding">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="mono-label mb-4">Compatibility</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Works With Your Existing Tools
          </h2>
          <p className="text-muted-foreground">
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
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="px-6 py-4 border border-border rounded-lg bg-card font-mono text-sm text-muted-foreground hover:text-foreground hover:border-accent/30 transition-colors duration-200"
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
