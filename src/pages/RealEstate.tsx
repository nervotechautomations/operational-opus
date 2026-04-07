import { motion } from "framer-motion";
import { Phone, ArrowRight, UserCheck, CalendarCheck, PhoneIncoming, Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PHONE_NUMBER = "(555) 123-4567";

const steps = [
  {
    icon: PhoneIncoming,
    title: "Lead Calls After Hours",
    description: "Your AI picks up instantly. No voicemail, no hold music, no missed opportunity.",
  },
  {
    icon: UserCheck,
    title: "Lead Gets Qualified",
    description: "The bot asks the right questions: buying or selling, timeline, neighborhood, budget. Then checks your calendar.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Is Booked",
    description: "The lead gets an SMS confirmation. You wake up to a new showing on your calendar.",
  },
];

const stats = [
  "48% of leads go to the first agent who responds",
  "Average response time: under 10 seconds",
  "24/7 — including weekends and holidays",
];

const features = [
  "24/7 AI voice receptionist trained on your business",
  "Google Calendar integration — appointments booked automatically",
  "Instant SMS confirmation sent to every lead",
  "Full call summary delivered to your phone",
  "Setup and onboarding handled entirely by us",
  "Ongoing support and optimization",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const RealEstate = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#2563EB]/30">
      {/* Subtle grid texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />

      {/* NAV */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-16 py-6">
        <Link to="/" className="font-bold text-xl tracking-tight">
          <span className="font-mono text-[#2563EB]">▲</span> Nervo<span className="text-neutral-500 font-normal">Tech</span>
        </Link>
      </nav>

      {/* HERO */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 pt-12 md:pt-20 pb-16 md:pb-28 text-center">
        <motion.div {...fadeUp}>
          <span className="inline-block font-mono text-xs tracking-widest text-[#2563EB] uppercase mb-6 border border-[#2563EB]/20 bg-[#2563EB]/5 rounded-full px-4 py-1.5">
            Real Estate AI Receptionist
          </span>
          <h1 className="text-3xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6 max-w-4xl mx-auto">
            Your Real Estate Business Doesn't Sleep.{" "}
            <span className="text-[#2563EB]">Neither Does Your Receptionist.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Our AI answers every after-hours call, qualifies your leads, and books appointments directly onto your Google Calendar — while you're off the clock.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              size="xl"
              className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-semibold shadow-lg shadow-[#2563EB]/20 group"
              onClick={() => window.location.href = `tel:${PHONE_NUMBER.replace(/\D/g, "")}`}
            >
              <Phone size={18} />
              Call the Demo Now → {PHONE_NUMBER}
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-[#2563EB]/40 text-[#2563EB] hover:bg-[#2563EB]/10 font-medium"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book a Free Consultation
            </Button>
          </div>
          <p className="text-sm text-neutral-500 font-mono">Setup in under a week. No tech skills needed.</p>
        </motion.div>
      </section>

      {/* DEMO EMBED */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 pb-8 md:pb-12">
        <motion.div {...fadeUp} className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/50">
          <iframe
            src="/call-flow-animation.html"
            title="AI Receptionist Demo"
            width="100%"
            height="600"
            frameBorder="0"
            allow="clipboard-write"
            allowFullScreen
            className="w-full h-[350px] md:h-[600px]"
          />
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">
          How It Works
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-neutral-800 rounded-xl p-8 bg-neutral-900/50 hover:border-[#2563EB]/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-5">
                <step.icon size={24} className="text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="relative z-10 border-y border-neutral-800 py-12">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-sm md:text-base text-neutral-300 font-medium"
            >
              {stat}
            </motion.p>
          ))}
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">
          Everything Included
        </motion.h2>
        <div className="space-y-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-4 py-3"
            >
              <div className="w-6 h-6 rounded-full bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={14} className="text-[#2563EB]" />
              </div>
              <span className="text-neutral-300">{feature}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="relative z-10 max-w-xl mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
        <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
          Simple Pricing
        </motion.h2>
        <motion.div
          {...fadeUp}
          className="border border-neutral-800 rounded-2xl p-10 bg-neutral-900/50"
        >
          <p className="text-4xl md:text-5xl font-bold mb-2">$1,500</p>
          <p className="text-neutral-500 text-sm font-mono mb-1">one-time setup</p>
          <p className="text-2xl font-semibold text-[#2563EB] mb-8">$350<span className="text-base text-neutral-400 font-normal">/month</span></p>

          <div className="space-y-3 text-sm text-neutral-400 mb-10">
            {["No hidden fees", "Cancel anytime", "Dedicated support"].map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>

          <Button
            size="xl"
            className="w-full bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-semibold shadow-lg shadow-[#2563EB]/20 group"
          >
            Get Started Today
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-neutral-800 py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-bold text-lg tracking-tight">
            <span className="font-mono text-[#2563EB]">▲</span> Nervo<span className="text-neutral-500 font-normal">Tech</span>
          </span>
          <a href="mailto:hello@nervotech.com" className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors flex items-center gap-2">
            <Mail size={14} /> hello@nervotech.com
          </a>
          <p className="text-xs text-neutral-600 font-mono">© 2026 Nervo Tech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default RealEstate;
