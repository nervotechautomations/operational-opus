import { motion } from "framer-motion";
import { Home, Stethoscope, Scale, ShoppingCart, Wrench, Briefcase } from "lucide-react";

const industries = [
  { icon: Home, name: "Real Estate", desc: "AI lead qualification and automated showing scheduling." },
  { icon: Stethoscope, name: "Dental Clinics", desc: "AI intake assistants and appointment booking automation." },
  { icon: Scale, name: "Law Firms", desc: "Automated client intake and lead qualification." },
  { icon: ShoppingCart, name: "Ecommerce", desc: "AI product recommendations and abandoned cart recovery." },
  { icon: Wrench, name: "Service Businesses", desc: "AI appointment scheduling and lead follow-ups." },
  { icon: Briefcase, name: "Consulting Firms", desc: "AI lead capture and automated outreach systems." },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="mono-label mb-4">Industry Coverage</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI Systems Across Multiple Industries
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="card-surface hover-lift"
            >
              <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center mb-4">
                <ind.icon size={18} className="text-accent" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{ind.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
