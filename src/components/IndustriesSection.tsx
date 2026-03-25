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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="mono-label mb-4">Industry Coverage</p>
          <h2 className="heading-section text-foreground mb-5">
            Built for <span className="gradient-text">Your Industry</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="card-premium group"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <ind.icon size={20} className="text-accent" />
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
