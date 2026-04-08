import { useState, useEffect } from "react";
import useReveal from "../hooks/useReveal";
import { NERVO_BLUE, BG_DARK, BG_SECTION, BG_ALT, CALENDLY } from "../constants";
import NavBar from "../components/NavBar";
import FooterNav from "../components/FooterNav";

const capabilities = [
  {
    category: "Inbound",
    icon: "📞",
    items: [
      { title: "After-hours patient intake", desc: "AI answers calls 24/7. Collects patient info, insurance details, reason for visit, and urgency level. Warm, natural conversation — not a robotic phone tree.", tier: 1 },
      { title: "Appointment scheduling", desc: "Checks your real schedule, offers available slots, books hygiene visits, consultations, and emergency appointments. Sends SMS confirmation to the patient.", tier: 1 },
      { title: "New patient notification", desc: "Instant iMessage or SMS hits your phone within seconds — full patient details, insurance info, and appointment type booked.", tier: 1 },
      { title: "Bilingual intake", desc: "Handles calls in both English and Spanish. Same intake process, natural conversation flow in either language.", tier: 2 },
    ],
  },
  {
    category: "Patient Retention",
    icon: "🔄",
    items: [
      { title: "Appointment reminders", desc: "48hr, 24hr, and 2hr reminders via SMS reduce no-shows by up to 40%. Patients can confirm, reschedule, or cancel with a reply.", tier: 1 },
      { title: "No-show recovery", desc: "If a patient misses their appointment, AI calls within 30 minutes to reschedule. Recovers lost revenue automatically.", tier: 1 },
      { title: "Waitlist fill", desc: "When a cancellation opens a slot, AI texts patients on the waitlist to fill it. Keeps your chair time productive.", tier: 2 },
      { title: "Recall system", desc: "Automated 6-month hygiene recall reminders. Tracks who's overdue and runs outreach sequences until they book.", tier: 2 },
    ],
  },
  {
    category: "Growth",
    icon: "🔍",
    items: [
      { title: "Google review generation", desc: "After appointments, automated SMS asks happy patients to leave a Google review. Negative sentiment gets routed privately first.", tier: 1 },
      { title: "New patient follow-up", desc: "After first visit, AI sends personalized follow-up: treatment reminders, care instructions, and next appointment prompt.", tier: 2 },
      { title: "Referral program automation", desc: "Tracks patient referrals, sends thank-you messages, and manages referral incentives automatically.", tier: 2 },
      { title: "Social intent monitoring", desc: "Monitors local Facebook groups and Nextdoor for people asking about dentist recommendations in your area.", tier: 2 },
    ],
  },
  {
    category: "Operations",
    icon: "⚙️",
    items: [
      { title: "PMS / CRM sync", desc: "Every patient interaction, appointment, and follow-up logged to Dentrix, Eaglesoft, Open Dental, or your PMS. Two-way sync.", tier: 1 },
      { title: "Insurance verification assist", desc: "Collects insurance details during intake so your team can verify before the appointment — no back-and-forth.", tier: 2 },
      { title: "Weekly performance digest", desc: "Monday morning summary: calls answered, patients scheduled, no-shows recovered, reviews generated, recall completion rate.", tier: 2 },
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
          <span style={{ fontSize: 32 }}>🦷</span>
          <span style={{ fontSize: 13, fontFamily: "'DM Mono', monospace", color: NERVO_BLUE, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Dental
          </span>
        </div>
        <h1 style={{
          fontSize: "clamp(36px, 6.5vw, 64px)", fontWeight: 600, color: "#fff",
          lineHeight: 1.06, letterSpacing: "-0.03em", margin: "0 0 8px", maxWidth: 700,
        }}>
          Your AI Front Desk.
        </h1>
        <p style={{
          fontSize: 14, fontFamily: "'DM Mono', monospace", color: "rgba(37,99,235,0.55)", margin: "0 0 20px",
        }}>
          Handles intake · Confirms appointments · Fills cancellations · Recovers no-shows
        </p>
        <p style={{
          fontSize: "clamp(15px, 2vw, 18px)", fontWeight: 300,
          color: "rgba(255,255,255,0.4)", maxWidth: 520, lineHeight: 1.6, margin: "0 auto 36px",
        }}>
          Your front desk can't answer during a procedure. Your AI can — 24/7, with the same warmth and professionalism your patients expect.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
            fontSize: 15, fontWeight: 500, color: "#fff", background: NERVO_BLUE,
            padding: "14px 32px", borderRadius: 28, textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 8,
          }}>
            Book a Consultation
          </a>
        </div>
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
          No-shows and missed calls cost dental practices more than most realize.
        </p>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: 16, maxWidth: 800, width: "100%",
      }}>
        {[
          { value: "15%", label: "avg no-show rate", sub: "industry average" },
          { value: "$200+", label: "per empty chair hour", sub: "lost production value" },
          { value: "$50K+", label: "lost / year", sub: "from no-shows alone" },
          { value: "$350", label: "your AI front desk", sub: "per month, all-in" },
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
        <h3 style={{ fontSize: 18, fontWeight: 600, color: "#fff", margin: "0 0 4px" }}>Your AI Front Desk</h3>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", margin: "0 0 24px" }}>For dental practices</p>
        <div style={{ fontSize: 44, fontWeight: 600, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>$1,500</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginTop: 4, marginBottom: 24 }}>one-time setup</div>
        <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.07)", paddingTop: 24, marginBottom: 28 }}>
          <div style={{ fontSize: 36, fontWeight: 600, color: "#fff", letterSpacing: "-0.02em" }}>
            $350<span style={{ fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.3)" }}>/mo</span>
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>managed service · support · optimization</div>
        </div>
        <div style={{ textAlign: "left", marginBottom: 24 }}>
          {["24/7 patient intake", "Appointment scheduling + SMS confirmations", "No-show recovery calls", "Waitlist fill automation", "Recall system (6-month hygiene)", "Google review generation", "Weekly performance reports", "Monthly optimization"].map((f, i) => (
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
        <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
          display: "block", width: "100%", padding: "14px 0", background: NERVO_BLUE, color: "#fff",
          fontSize: 15, fontWeight: 500, borderRadius: 12, textDecoration: "none", textAlign: "center",
        }}>Book a Consultation</a>
      </div>
    </section>
  );
}

export default function Dental() {
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
