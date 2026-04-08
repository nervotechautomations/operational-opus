import { useState, useEffect } from "react";
import useReveal from "../hooks/useReveal";
import { NERVO_BLUE, BG_DARK, BG_SECTION, BG_ALT, CALENDLY } from "../constants";
import NavBar from "../components/NavBar";
import FooterNav from "../components/FooterNav";

const industryScreens = [
  {
    icon: "🏠", vertical: "Real Estate", glow: "30% 50%",
    agentTitle: "Your AI Sales Agent",
    agentRole: "Answers calls · Qualifies leads · Books showings · Finds prospects · Runs follow-up",
    headline: "Every missed call\nis a lost commission.",
    description: "The first agent to respond wins 78% of deals. Your AI Sales Agent works around the clock — answering calls, qualifying buyers and sellers, booking appointments, scraping Reddit for warm leads, and running follow-up that never drops the ball.",
    capabilities: ["Voice Receptionist", "Lead Qualification", "Appointment Booking", "Reddit Lead Gen", "Follow-Up Sequences", "CRM Sync"],
    costWithout: "$10,200", costLabel: "lost revenue / month",
    link: "/real-estate",
  },
  {
    icon: "🦷", vertical: "Dental", glow: "70% 50%",
    agentTitle: "Your AI Front Desk",
    agentRole: "Handles intake · Confirms appointments · Fills cancellations · Recovers no-shows",
    headline: "Your front desk can't answer\nduring a procedure.",
    description: "Dental practices lose $50K–$180K annually to no-shows and missed calls. Your AI Front Desk handles patient intake, confirms appointments, fills cancellation gaps from a waitlist, and captures every after-hours inquiry.",
    capabilities: ["Patient Intake", "Appointment Reminders", "No-Show Recovery", "Waitlist Fill", "Recall System", "Review Generation"],
    costWithout: "$50K+", costLabel: "lost to no-shows / year",
    link: "/dental",
  },
  {
    icon: "⚖️", vertical: "Legal", glow: "30% 50%",
    agentTitle: "Your AI Intake Coordinator",
    agentRole: "Qualifies prospects · Routes by case type · Books consultations · Sends updates",
    headline: "A missed intake call\nis a missed retainer.",
    description: "Law firms lose high-value clients to slow response times. Your AI Intake Coordinator qualifies callers on case type, urgency, and jurisdiction — routing the right leads to the right attorney instantly.",
    capabilities: ["Intake Qualification", "Case Routing", "Consultation Booking", "Status Updates", "Follow-Up Nurture", "Review Requests"],
    costWithout: "$5K+", costLabel: "lost retainers / month",
    link: "/legal",
  },
  {
    icon: "🛒", vertical: "E-Commerce", glow: "70% 50%",
    agentTitle: "Your AI Customer Agent",
    agentRole: "Recovers carts · Handles support · Runs post-purchase · Generates reviews",
    headline: "70% of your carts\nare abandoned.",
    description: "Most never come back. Your AI Customer Agent recovers abandoned carts, handles support queries instantly, runs post-purchase sequences, generates reviews, and re-engages lapsed customers with personalized campaigns.",
    capabilities: ["Cart Recovery", "Order Status AI", "Post-Purchase Sequences", "Review Generation", "Win-Back Campaigns", "Cross-Sell"],
    costWithout: "70%+", costLabel: "cart abandonment rate",
    link: "/ecommerce",
  },
];

function Hero() {
  const [vis, setVis] = useState(false);
  useEffect(() => { setTimeout(() => setVis(true), 200); }, []);
  return (
    <section style={{
      position: "relative", minHeight: "100vh",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "120px 24px 80px", background: BG_DARK, overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 50% 50% at 50% 40%, rgba(37,99,235,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      {[
        { top: "8%", left: "12%", d: 0 }, { top: "15%", left: "78%", d: 0.7 },
        { top: "70%", left: "5%", d: 1.2 }, { top: "80%", left: "90%", d: 0.3 },
        { top: "45%", left: "95%", d: 1.8 }, { top: "6%", left: "45%", d: 0.5 },
      ].map((st, i) => (
        <div key={i} style={{
          position: "absolute", top: st.top, left: st.left, width: 2, height: 2, borderRadius: "50%",
          background: "rgba(255,255,255,0.4)", animation: `twinkle 3s ease-in-out ${st.d}s infinite`,
        }} />
      ))}
      <div style={{
        opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)",
        transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)",
      }}>
        <p style={{
          fontSize: 13, fontFamily: "'DM Mono', monospace", color: NERVO_BLUE,
          letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20,
        }}>AI Automation Agency</p>
        <h1 style={{
          fontSize: "clamp(36px, 6.5vw, 68px)", fontWeight: 600, color: "#fff",
          lineHeight: 1.06, letterSpacing: "-0.03em", margin: "0 0 20px", maxWidth: 740,
        }}>
          Hire AI that already<br />knows your industry.
        </h1>
        <p style={{
          fontSize: "clamp(15px, 2.2vw, 19px)", fontWeight: 300,
          color: "rgba(255,255,255,0.42)", maxWidth: 520, lineHeight: 1.6, margin: "0 auto 40px",
        }}>
          Purpose-built agents for real estate, dental, legal, and e-commerce — trained on your workflows, running 24/7, managed by us.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/solutions" style={{
            fontSize: 15, fontWeight: 500, color: "#fff", background: NERVO_BLUE,
            padding: "14px 32px", borderRadius: 28, textDecoration: "none", transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = 0.85)}
          onMouseLeave={(e) => (e.target.style.opacity = 1)}>
            See What We Build
          </a>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
            fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.8)", background: "transparent",
            border: "1px solid rgba(255,255,255,0.15)", padding: "14px 32px", borderRadius: 28,
            textDecoration: "none", transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.35)"; e.target.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.15)"; e.target.style.color = "rgba(255,255,255,0.8)"; }}>
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

function IndustryScreen({ data, index }) {
  const [ref, vis] = useReveal();
  const bg = index % 2 === 0 ? BG_SECTION : BG_ALT;
  return (
    <section ref={ref} style={{
      minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", textAlign: "center", padding: "100px 24px",
      background: bg, position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse 40% 50% at ${data.glow}, rgba(37,99,235,0.05) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />
      <div style={{
        opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
        maxWidth: 640, position: "relative", zIndex: 1,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 14 }}>
          <span style={{ fontSize: 28 }}>{data.icon}</span>
          <span style={{
            fontSize: 12, fontFamily: "'DM Mono', monospace", color: NERVO_BLUE,
            letterSpacing: "0.12em", textTransform: "uppercase",
          }}>{data.vertical}</span>
        </div>
        <h2 style={{
          fontSize: "clamp(32px, 5.5vw, 56px)", fontWeight: 600, color: "#fff",
          lineHeight: 1.08, letterSpacing: "-0.03em", margin: "0 0 8px", whiteSpace: "pre-line",
        }}>{data.headline}</h2>
        <p style={{
          fontSize: 13, fontFamily: "'DM Mono', monospace", color: "rgba(37,99,235,0.55)",
          margin: "0 0 20px",
        }}>{data.agentTitle}</p>
        <p style={{
          fontSize: 17, fontWeight: 300, color: "rgba(255,255,255,0.4)", lineHeight: 1.65, margin: "0 0 32px",
        }}>{data.description}</p>
      </div>

      <div style={{
        opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s",
        display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center", maxWidth: 560,
        marginBottom: 32, position: "relative", zIndex: 1,
      }}>
        {data.capabilities.map((c, i) => (
          <span key={i} style={{
            fontSize: 11, fontFamily: "'DM Mono', monospace", color: "rgba(37,99,235,0.65)",
            background: "rgba(37,99,235,0.07)", padding: "6px 14px", borderRadius: 20,
          }}>{c}</span>
        ))}
      </div>

      <div style={{
        opacity: vis ? 1 : 0, transform: vis ? "scale(1)" : "scale(0.96)",
        transition: "all 0.6s cubic-bezier(0.16,1,0.3,1) 0.25s",
        display: "flex", gap: 16, alignItems: "center", justifyContent: "center",
        marginBottom: 36, position: "relative", zIndex: 1,
      }}>
        <div style={{
          background: "rgba(255,255,255,0.025)", border: "0.5px solid rgba(255,255,255,0.06)",
          borderRadius: 14, padding: "16px 24px", textAlign: "center",
        }}>
          <div style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", color: "rgba(255,255,255,0.2)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>
            Without agent
          </div>
          <div style={{ fontSize: 24, fontWeight: 600, color: "#E24B4A" }}>{data.costWithout}</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>{data.costLabel}</div>
        </div>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7 4l6 6-6 6" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <div style={{
          background: "rgba(37,99,235,0.06)", border: "0.5px solid rgba(37,99,235,0.15)",
          borderRadius: 14, padding: "16px 24px", textAlign: "center",
        }}>
          <div style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", color: "rgba(37,99,235,0.5)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>
            With agent
          </div>
          <div style={{ fontSize: 24, fontWeight: 600, color: "#34d399" }}>$350</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>/month</div>
        </div>
      </div>

      <div style={{
        opacity: vis ? 1 : 0, transition: "opacity 0.5s 0.35s", position: "relative", zIndex: 1,
      }}>
        <a href={data.link} style={{
          fontSize: 15, fontWeight: 500, color: NERVO_BLUE, textDecoration: "none",
          display: "inline-flex", alignItems: "center", gap: 6,
        }}>
          See what your agent can do
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4l4 4-4 4" stroke={NERVO_BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
}

function DifferentiatorSection() {
  const [ref, vis] = useReveal();
  const items = [
    { title: "Pre-trained on your vertical", desc: "Not a generic chatbot. Every agent ships knowing your industry's terminology, workflows, and objections." },
    { title: "Full-stack, not point tools", desc: "Prospecting, qualification, follow-up, CRM sync, content — integrated pipelines, not disconnected features." },
    { title: "Managed service", desc: "We run the system. You buy outcomes — not software you have to configure and maintain yourself." },
    { title: "Intent-signal intelligence", desc: "Finds people actively looking for your service — not just demographics on a spreadsheet." },
  ];
  return (
    <section ref={ref} style={{
      padding: "100px 24px", background: BG_DARK,
      display: "flex", flexDirection: "column", alignItems: "center",
    }}>
      <div style={{
        opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)", textAlign: "center", maxWidth: 480, marginBottom: 56,
      }}>
        <p style={{
          fontSize: 12, fontFamily: "'DM Mono', monospace", color: NERVO_BLUE,
          letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14,
        }}>Why Nervo Tech</p>
        <h2 style={{
          fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 600, color: "#fff",
          letterSpacing: "-0.025em", margin: 0,
        }}>Not another AI tool.<br />A team member.</h2>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 16, maxWidth: 960, width: "100%",
      }}>
        {items.map((item, i) => (
          <div key={i} style={{
            opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)",
            transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${0.1 * (i + 1)}s`,
            background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.06)",
            borderRadius: 14, padding: "28px 24px",
          }}>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: "#fff", margin: "0 0 8px" }}>{item.title}</h3>
            <p style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.35)", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PricingSection() {
  const [ref, vis] = useReveal();
  return (
    <section id="pricing" ref={ref} style={{
      padding: "120px 24px", background: BG_SECTION,
      display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
    }}>
      <div style={{
        opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)", maxWidth: 480, marginBottom: 48,
      }}>
        <p style={{
          fontSize: 12, fontFamily: "'DM Mono', monospace", color: NERVO_BLUE,
          letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 14,
        }}>Pricing</p>
        <h2 style={{
          fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 600, color: "#fff",
          letterSpacing: "-0.025em", margin: "0 0 12px",
        }}>Hire your agent.</h2>
        <p style={{ fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.38)", lineHeight: 1.6 }}>
          One setup fee to build and deploy. One monthly retainer for management, optimization, and support.
        </p>
      </div>
      <div style={{
        opacity: vis ? 1 : 0, transform: vis ? "scale(1)" : "scale(0.96)",
        transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s",
        background: "rgba(255,255,255,0.025)", border: "1px solid rgba(37,99,235,0.15)",
        borderRadius: 20, padding: "44px 36px", maxWidth: 420, width: "100%",
      }}>
        <div style={{ fontSize: 13, fontFamily: "'DM Mono', monospace", color: "rgba(255,255,255,0.3)", marginBottom: 6 }}>Setup</div>
        <div style={{ fontSize: 44, fontWeight: 600, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>$1,500</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginTop: 4, marginBottom: 24 }}>one-time · custom build for your business</div>
        <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.07)", paddingTop: 24, marginBottom: 28 }}>
          <div style={{ fontSize: 13, fontFamily: "'DM Mono', monospace", color: "rgba(255,255,255,0.3)", marginBottom: 6 }}>Then</div>
          <div style={{ fontSize: 36, fontWeight: 600, color: "#fff", letterSpacing: "-0.02em" }}>
            $350<span style={{ fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.3)" }}>+/mo</span>
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>managed service · support · optimization</div>
        </div>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", lineHeight: 1.6, marginBottom: 24, fontStyle: "italic" }}>
          Final pricing scales with the number of capabilities and integrations. We scope it together on a call.
        </p>
        <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
          display: "block", width: "100%", padding: "14px 0", background: NERVO_BLUE, color: "#fff",
          fontSize: 15, fontWeight: 500, borderRadius: 12, textDecoration: "none", textAlign: "center",
        }}>Book a Consultation</a>
      </div>
    </section>
  );
}

function TechBar() {
  return (
    <div style={{
      padding: "28px 24px", background: BG_DARK,
      display: "flex", justifyContent: "center", gap: 36, flexWrap: "wrap",
      borderTop: "0.5px solid rgba(255,255,255,0.04)", borderBottom: "0.5px solid rgba(255,255,255,0.04)",
    }}>
      {["Built on Vapi", "Powered by Claude AI", "Twilio SMS", "Google Calendar", "n8n Workflows", "HubSpot CRM"].map((t) => (
        <span key={t} style={{
          fontSize: 11, fontFamily: "'DM Mono', monospace", color: "rgba(255,255,255,0.18)",
          letterSpacing: "0.08em", textTransform: "uppercase",
        }}>{t}</span>
      ))}
    </div>
  );
}

function CTASection() {
  const [ref, vis] = useReveal(0.3);
  return (
    <section ref={ref} style={{
      padding: "120px 24px", background: BG_SECTION,
      display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(37,99,235,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)", position: "relative", zIndex: 1,
      }}>
        <h2 style={{
          fontSize: "clamp(26px, 5vw, 44px)", fontWeight: 600, color: "#fff",
          letterSpacing: "-0.03em", margin: "0 0 14px",
        }}>Let's build yours.</h2>
        <p style={{
          fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.38)",
          maxWidth: 440, margin: "0 auto 36px", lineHeight: 1.6,
        }}>
          Tell us about your business. We'll map exactly which AI agent capabilities will move the needle — and what the ROI looks like.
        </p>
        <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 18, fontWeight: 600, color: "#fff", background: NERVO_BLUE,
          padding: "18px 40px", borderRadius: 32, textDecoration: "none",
        }}>Book a Free Consultation</a>
        <p style={{
          fontSize: 12, fontFamily: "'DM Mono', monospace", color: "rgba(37,99,235,0.45)", marginTop: 14,
        }}>30 minutes · no obligation · we'll scope it live</p>
      </div>
    </section>
  );
}

export default function Homepage() {
  return (
    <div style={{
      background: BG_DARK, color: "#fff",
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      minHeight: "100vh", overflowX: "hidden",
    }}>
      <NavBar />
      <Hero />
      <div id="industries">
        {industryScreens.map((ind, i) => (
          <IndustryScreen key={ind.vertical} data={ind} index={i} />
        ))}
      </div>
      <DifferentiatorSection />
      <TechBar />
      <PricingSection />
      <CTASection />
      <FooterNav />
    </div>
  );
}
