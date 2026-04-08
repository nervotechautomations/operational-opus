import { useState, useEffect } from "react";
import useReveal from "../hooks/useReveal";
import { NERVO_BLUE, BG_DARK, BG_SECTION, BG_ALT, CALENDLY, DEMO_NUMBER } from "../constants";
import NavBar from "../components/NavBar";
import FooterNav from "../components/FooterNav";

const capabilities = [
  {
    category: "Inbound",
    icon: "📞",
    items: [
      { title: "After-hours voice receptionist", desc: "AI answers calls 24/7. Qualifies leads on buying vs selling, budget range, timeline, and area preferences. Natural conversation, not a phone tree.", tier: 1 },
      { title: "Appointment booking", desc: "Checks your real calendar, offers available time slots, books showings and listing appointments. Sends SMS confirmation to the lead and iMessage summary to you.", tier: 1 },
      { title: "Lead notification", desc: "Instant iMessage or SMS hits your phone within seconds of the call ending — full lead details, qualification score, and recommended next steps.", tier: 1 },
      { title: "Bilingual intake", desc: "Handles calls in both English and Spanish. Natural conversation flow in either language, same qualification process.", tier: 2 },
    ],
  },
  {
    category: "Lead Generation",
    icon: "🔍",
    items: [
      { title: "Reddit intent scraping", desc: "Monitors real estate subreddits for agents complaining about missed leads, buyers asking for agent recommendations, and sellers researching the market.", tier: 1 },
      { title: "Social intent monitoring", desc: "Scrapes Facebook groups, Nextdoor, and local forums for buying and selling signals in your market area.", tier: 2 },
      { title: "Listing alert automation", desc: "Monitors MLS and Zillow feeds. When new listings match a buyer lead's criteria, notifies them instantly via SMS.", tier: 2 },
      { title: "Competitor monitoring", desc: "Tracks competitor agents' new listings, price changes, days on market, and Google reviews. Weekly digest with opportunities.", tier: 2 },
    ],
  },
  {
    category: "Follow-Up",
    icon: "🔄",
    items: [
      { title: "Speed-to-lead sequences", desc: "If a lead doesn't book on the first call, automated SMS and email fires within 5 minutes. Multiple touchpoints over the first 48 hours.", tier: 1 },
      { title: "Open house follow-up", desc: "After an open house, AI calls or texts every sign-in sheet contact within 2 hours with personalized follow-up.", tier: 2 },
      { title: "Long-term nurture", desc: "Monthly market updates, home anniversary check-ins, seasonal touchpoints. Keeps you top-of-mind with your sphere for months and years.", tier: 2 },
      { title: "Market report generation", desc: "Auto-generates branded PDF market reports with local comps data. Agents send these to their sphere to demonstrate expertise.", tier: 2 },
    ],
  },
  {
    category: "Operations",
    icon: "⚙️",
    items: [
      { title: "CRM sync", desc: "Every lead, call, appointment, and follow-up logged to HubSpot, Follow Up Boss, or any CRM. Two-way sync, not batch imports.", tier: 1 },
      { title: "Google review requests", desc: "After closing, automated SMS asks happy clients to leave a Google review. Negative sentiment gets routed privately first.", tier: 1 },
      { title: "Weekly performance digest", desc: "Monday morning summary: calls answered, leads qualified, appointments booked, pipeline value, close rate trends.", tier: 2 },
    ],
  },
];

function VerticalHero() {
  const [vis, setVis] = useState(false);
  useEffect(() => { setTimeout(() => setVis(true), 200); }, []);
  return (
    <section style={{
      position: "relative", minHeight: "90vh",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "140px 24px 80px", background: BG_DARK, overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 50% 50% at 50% 40%, rgba(37,99,235,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)",
        transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 16 }}>
          <span style={{ fontSize: 32 }}>🏠</span>
          <span style={{ fontSize: 13, fontFamily: "'DM Mono', monospace", color: NERVO_BLUE, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Real Estate
          </span>
        </div>
        <h1 style={{
          fontSize: "clamp(36px, 6.5vw, 64px)", fontWeight: 600, color: "#fff",
          lineHeight: 1.06, letterSpacing: "-0.03em", margin: "0 0 8px", maxWidth: 700,
        }}>
          Your AI Sales Agent.
        </h1>
        <p style={{
          fontSize: 14, fontFamily: "'DM Mono', monospace", color: "rgba(37,99,235,0.55)", margin: "0 0 20px",
        }}>
          Answers calls · Qualifies leads · Books showings · Finds prospects · Runs follow-up
        </p>
        <p style={{
          fontSize: "clamp(15px, 2vw, 18px)", fontWeight: 300,
          color: "rgba(255,255,255,0.4)", maxWidth: 520, lineHeight: 1.6, margin: "0 auto 36px",
        }}>
          The first agent to respond wins 78% of deals. Yours responds in under 30 seconds — every call, every night, every weekend.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={`tel:${DEMO_NUMBER}`} style={{
            fontSize: 15, fontWeight: 500, color: "#fff", background: NERVO_BLUE,
            padding: "14px 32px", borderRadius: 28, textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 8,
          }}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M3 5.5C3 4.67 3.67 4 4.5 4H7.2c.36 0 .68.25.75.6l.7 3.5c.07.37-.07.75-.37.97l-1.3.87A11 11 0 0 0 11.06 14l.87-1.3c.22-.3.6-.44.97-.37l3.5.7c.35.07.6.39.6.75V16.5c0 .83-.67 1.5-1.5 1.5A13.5 13.5 0 0 1 3 5.5Z" fill="white"/>
            </svg>
            Call the Demo Now
          </a>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
            fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.8)", background: "transparent",
            border: "1px solid rgba(255,255,255,0.15)", padding: "14px 32px", borderRadius: 28, textDecoration: "none",
          }}>
            Book a Consultation
          </a>
        </div>
        <p style={{ fontSize: 12, fontFamily: "'DM Mono', monospace", color: "rgba(37,99,235,0.4)", marginTop: 16 }}>
          (352) 316-7981 · live demo · 24/7
        </p>
      </div>
    </section>
  );
}

function ROISection() {
  const [ref, vis] = useReveal(0.3);
  return (
    <section ref={ref} style={{
      padding: "100px 24px", background: BG_SECTION,
      display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
    }}>
      <div style={{
        opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)", maxWidth: 520, marginBottom: 48,
      }}>
        <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 600, color: "#fff", letterSpacing: "-0.025em", margin: "0 0 12px" }}>
          The math is simple.
        </h2>
        <p style={{ fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.38)", lineHeight: 1.6 }}>
          Industry data shows what missed calls actually cost real estate agents.
        </p>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: 16, maxWidth: 800, width: "100%",
      }}>
        {[
          { value: "6+", label: "missed calls / week", sub: "industry average after hours" },
          { value: "$8,500", label: "avg commission", sub: "per closed transaction" },
          { value: "$10,200", label: "lost / month", sub: "at 20% close rate" },
          { value: "$350", label: "your AI agent", sub: "per month, all-in" },
        ].map((m, i) => (
          <div key={i} style={{
            opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(16px)",
            transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${0.1 * (i + 1)}s`,
            background: "rgba(255,255,255,0.025)", border: "0.5px solid rgba(255,255,255,0.06)",
            borderRadius: 14, padding: "28px 20px",
          }}>
            <div style={{
              fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1, marginBottom: 6,
              color: i === 3 ? "#34d399" : "#fff",
            }}>{m.value}</div>
            <div style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.55)", marginBottom: 3 }}>{m.label}</div>
            <div style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: "rgba(37,99,235,0.5)" }}>{m.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CapabilitySection({ data, index }) {
  const [ref, vis] = useReveal();
  const bg = index % 2 === 0 ? BG_ALT : BG_SECTION;
  return (
    <section ref={ref} style={{ padding: "100px 24px", background: bg }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 10, marginBottom: 32,
          opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
        }}>
          <span style={{ fontSize: 24 }}>{data.icon}</span>
          <h3 style={{ fontSize: 20, fontWeight: 600, color: "#fff", margin: 0 }}>{data.category}</h3>
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16,
        }}>
          {data.items.map((item, i) => (
            <div key={i} style={{
              opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(16px)",
              transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${0.08 * (i + 1)}s`,
              background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.06)",
              borderRadius: 14, padding: "24px 20px", position: "relative",
            }}>
              {item.tier === 1 && (
                <div style={{
                  position: "absolute", top: 12, right: 12,
                  fontSize: 9, fontFamily: "'DM Mono', monospace", fontWeight: 500,
                  color: "#34d399", background: "rgba(52,211,153,0.1)",
                  padding: "2px 8px", borderRadius: 8, letterSpacing: "0.04em", textTransform: "uppercase",
                }}>Core</div>
              )}
              <h4 style={{ fontSize: 14, fontWeight: 600, color: "#fff", margin: "0 0 6px", paddingRight: item.tier === 1 ? 40 : 0 }}>{item.title}</h4>
              <p style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.35)", lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const [ref, vis] = useReveal();
  return (
    <section ref={ref} style={{
      padding: "120px 24px", background: BG_DARK,
      display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
    }}>
      <div style={{
        opacity: vis ? 1 : 0, transform: vis ? "scale(1)" : "scale(0.96)",
        transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
        background: "rgba(255,255,255,0.025)", border: "1px solid rgba(37,99,235,0.15)",
        borderRadius: 20, padding: "44px 36px", maxWidth: 420, width: "100%",
      }}>
        <h3 style={{ fontSize: 18, fontWeight: 600, color: "#fff", margin: "0 0 4px" }}>Your AI Sales Agent</h3>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", margin: "0 0 24px" }}>For real estate professionals</p>
        <div style={{ fontSize: 44, fontWeight: 600, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>$1,500</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginTop: 4, marginBottom: 24 }}>one-time setup</div>
        <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.07)", paddingTop: 24, marginBottom: 28 }}>
          <div style={{ fontSize: 36, fontWeight: 600, color: "#fff", letterSpacing: "-0.02em" }}>
            $350<span style={{ fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.3)" }}>/mo</span>
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>managed service · support · optimization</div>
        </div>
        <div style={{ textAlign: "left", marginBottom: 24 }}>
          {["24/7 voice receptionist", "Calendar booking + SMS confirmations", "iMessage lead alerts", "Reddit lead gen monitoring", "Follow-up automation", "CRM sync + Google reviews", "Weekly performance reports", "Monthly optimization"].map((f, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 10, padding: "5px 0",
              fontSize: 13, color: "rgba(255,255,255,0.55)",
            }}>
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M3 7l3 3 5-5" stroke={NERVO_BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {f}
            </div>
          ))}
        </div>
        <a href={`tel:${DEMO_NUMBER}`} style={{
          display: "block", width: "100%", padding: "14px 0", background: NERVO_BLUE, color: "#fff",
          fontSize: 15, fontWeight: 500, borderRadius: 12, textDecoration: "none", textAlign: "center", marginBottom: 10,
        }}>Call the Demo: (352) 316-7981</a>
        <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
          display: "block", width: "100%", padding: "14px 0",
          background: "transparent", border: "1px solid rgba(255,255,255,0.1)",
          color: "rgba(255,255,255,0.6)", fontSize: 14, fontWeight: 500, borderRadius: 12,
          textDecoration: "none", textAlign: "center",
        }}>Book a Consultation</a>
      </div>
    </section>
  );
}

export default function RealEstate() {
  return (
    <div style={{
      background: BG_DARK, color: "#fff",
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      minHeight: "100vh", overflowX: "hidden",
    }}>
      <NavBar />
      <VerticalHero />
      <ROISection />
      {capabilities.map((cap, i) => (
        <CapabilitySection key={cap.category} data={cap} index={i} />
      ))}
      <PricingSection />
      <FooterNav />
    </div>
  );
}
