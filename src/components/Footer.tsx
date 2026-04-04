import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-16">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-bold text-xl tracking-tight"
          >
            <span className="font-mono text-accent">▲</span> Nervo<span className="text-muted-foreground font-normal">Tech</span>
          </motion.div>
          <div className="flex gap-8">
            {["Services", "Industries", "Process", "Integrations"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">Terms</Link>
          </div>
          <p className="text-xs text-muted-foreground font-mono">© 2026 Nervo Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
