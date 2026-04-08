import { useState, useEffect } from "react";
import useReveal from "../hooks/useReveal";
import { NERVO_BLUE, BG_DARK, BG_SECTION, BG_ALT, CALENDLY } from "../constants";
import NavBar from "../components/NavBar";
import FooterNav from "../components/FooterNav";

const solutions = [
  {
    id: "voice",
    icon: "📞",
    label: "Voice AI Receptionist",
    headline: "Every call answered.\nEvery lead qualified.",
    description: "Your AI voice agent picks up after hours, qualifies callers on the criteria that matter to your business, books appointments directly on your calendar, and sends you an instant summary. No missed calls. No voicemail. No delays.",
    capabilities: [
      { title: "24/7 call answering", desc: "AI picks up instantly — nights, weekends, holidays. Never sends a lead to voicemail." },
      { title: "Custom qualification", desc: "Asks your specific questions: budget, timeline, service type, urgency. Trained on your industry's language." },
      { title: "Live calendar booking", desc: "Checks your real availability, offers time slots, books the meeting, and sends SMS confirmation to the lead." },
      { title: "Instant lead alerts", desc: "iMessage or SMS summary hits your phone within seconds of the call ending. Full context, qualification score, next steps." },
      { title: "Bilingual support", desc: "Handle calls in English and Spanish with natural conversation flow in both languages." },
      { title: "CRM logging", desc: "Every call, qualification, and appointment automatically synced to HubSpot, Follow Up Boss, or your CRM of choice." },
    ],
    industries: ["Real Estate", "Dental", "Legal", "E-Commerce"],
    stat: "<30s", statLabel: "average response time",
  },
  {
    id: "leadgen",
    icon: "🔍",
    label: "AI Lead Generation",
    headline: "Find people already\nlooking for you.",
    description: "Your AI scrapes Reddit, forums, and social platforms for people actively searching for the service you provide. It classifies buying intent, drafts contextual replies, and delivers warm leads to your inbox — before your competitors even know they exist.",
    capabilities: [
      { title: "Intent signal scraping", desc: "Monitors Reddit, Facebook groups, Nextdoor, and industry forums for posts that signal buying intent." },
      { title: "Buying intent classification", desc: "AI distinguishes casual mentions from genuine purchase intent. Only surfaces leads worth pursuing." },
      { title: "Contextual reply drafts", desc: "Generates suggested responses tailored to each conversation — not generic templates." },
      { title: "Real-time alerts", desc: "Hot leads delivered to Telegram, iMessage, or Slack the moment they're detected." },
      { title: "Competitor monitoring", desc: "Tracks competitor pricing, reviews, and new listings. Alerts you when opportunities emerge." },
      { title: "CRM pipeline sync", desc: "Every lead logged with source, intent score, and conversation context for follow-up." },
    ],
    industries: ["Real Estate", "Dental", "Legal", "E-Commerce"],
    stat: "24/7", statLabel: "monitoring active",
  },
  {
    id: "followup",
    icon: "🔄",
    label: "Follow-Up Automation",
    headline: "No lead falls\nthrough the cracks.",
    description: "Speed-to-lead wins deals. Your AI fires follow-up sequences within minutes of first contact — SMS, email, voice — and keeps nurturing leads over weeks and months until they convert or opt out. Every touchpoint is personalized and timed.",
    capabilities: [
      { title: "Speed-to-lead sequences", desc: "If a lead doesn't book on the first call, automated follow-up fires within 5 minutes via SMS and email." },
      { title: "Multi-channel outreach", desc: "Coordinates follow-up across SMS, email, and voice calls — each channel reinforcing the others." },
      { title: "Event-triggered follow-up", desc: "Open house sign-ins, form fills, missed calls — each trigger launches a tailored sequence." },
      { title: "Long-term nurture", desc: "Monthly check-ins, seasonal touchpoints, anniversary messages. Keeps you top-of-mind for months." },
      { title: "Appointment reminders", desc: "48hr, 24hr, and 2hr reminders via SMS reduce no-shows and keep your calendar full." },
      { title: "No-show recovery", desc: "If someone misses their appointment, AI calls within 30 minutes to reschedule." },
    ],
    industries: ["Real Estate", "Dental", "Legal"],
    stat: "5 min", statLabel: "to first follow-up",
  },
  {
    id: "operations",
    icon: "⚙️",
    label: "CRM + Operations",
    headline: "Your back office\nruns itself.",
    description: "Every call, lead, appointment, and follow-up gets logged automatically. Weekly performance digests land in your inbox. Google reviews get requested at the right moment. Your CRM stays clean without you touching it.",
    capabilities: [
      { title: "Bi-directional CRM sync", desc: "Real-time two-way sync with HubSpot, Follow Up Boss, Clio, or any CRM. No batch imports, no manual entry." },
      { title: "Google review automation", desc: "Post-transaction review request via SMS. Routes negative feedback privately before it goes public." },
      { title: "Weekly performance digest", desc: "Calls answered, leads qualified, appointments booked, pipeline value — delivered every Monday morning." },
      { title: "Daily schedule briefing", desc: "Morning summary of today's appointments, changes, and prep notes sent to your phone." },
      { title: "Referral tracking", desc: "Tracks which sources send you business, automates thank-you follow-ups, and reports on referral ROI." },
      { title: "Content generation", desc: "AI drafts social posts, blog articles, and email newsletters calibrated to your brand voice." },
    ],
    industries: ["Real Estate", "Dental", "Legal", "E-Commerce"],
    stat: "0", statLabel: "manual data entry",
  },
];

function SolutionScreen({ data, index }) {
  const [ref, vis] = useReveal();
  const bg = index % 2 === 0 ? BG_SECTION : BG_ALT;
  return (
    <section id={data.id} ref={ref} style={{
      padding: "120px 24px", background: bg, position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse 40% 50% at ${index % 2 === 0 ? "30%" : "70%"} 50%, rgba(37,99,235,0.04) 0%, transparent 70%)`,
        pointerEvents: "none",
      }} />
      <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{
          textAlign: "center", marginBottom: 64,
          opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 14 }}>
            <span style={{ fontSize: 28 }}>{data.icon}</span>
            <span style={{ fontSize: 12, fontFamily: "'DM Mono', monospace", color: NERVO_BLUE, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              {data.label}
            </span>
          </div>
          <h2 style={{
            fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 600, color: "#fff",
            lineHeight: 1.08, letterSpacing: "-0.03em", margin: "0 0 16px", whiteSpace: "pre-line",
          }}>{data.headline}</h2>
          <p style={{
            fontSize: 17, fontWeight: 300, color: "rgba(255,255,255,0.4)", lineHeight: 1.65,
            maxWidth: 560, margin: "0 auto 28px",
          }}>{data.description}</p>
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
            {data.industries.map((ind) => (
              <span key={ind} style={{
                fontSize: 11, fontFamily: "'DM Mono', monospace", color: "rgba(255,255,255,0.3)",
                background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.06)",
                padding: "4px 12px", borderRadius: 20,
              }}>{ind}</span>
            ))}
          </div>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16, marginBottom: 48,
        }}>
          {data.capabilities.map((cap, i) => (
            <div key={i} style={{
              opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(16px)",
              transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${0.08 * (i + 1)}s`,
              background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.06)",
              borderRadius: 14, padding: "24px 20px",
            }}>
              <h4 style={{ fontSize: 14, fontWeight: 600, color: "#fff", margin: "0 0 6px" }}>{cap.title}</h4>
              <p style={{ fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,0.35)", lineHeight: 1.55, margin: 0 }}>{cap.desc}</p>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: "center",
          opacity: vis ? 1 : 0, transition: "opacity 0.5s 0.5s",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            background: "rgba(37,99,235,0.06)", border: "0.5px solid rgba(37,99,235,0.12)",
            borderRadius: 14, padding: "16px 28px",
          }}>
            <div style={{ fontSize: 28, fontWeight: 600, color: "#fff", letterSpacing: "-0.02em" }}>{data.stat}</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", textAlign: "left", lineHeight: 1.4 }}>{data.statLabel}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionsHero() {
  const [vis, setVis] = useState(false);
  useEffect(() => { setTimeout(() => setVis(true), 200); }, []);
  return (
    <section style={{
      position: "relative", minHeight: "60vh",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "140px 24px 80px", background: BG_DARK, overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 50% 50% at 50% 40%, rgba(37,99,235,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
      }}>
        <p style={{
          fontSize: 13, fontFamily: "'DM Mono', monospace", color: NERVO_BLUE,
          letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16,
        }}>What We Build</p>
        <h1 style={{
          fontSize: "clamp(34px, 6vw, 60px)", fontWeight: 600, color: "#fff",
          lineHeight: 1.06, letterSpacing: "-0.03em", margin: "0 0 16px", maxWidth: 640,
        }}>
          AI systems that run<br />your revenue engine.
        </h1>
        <p style={{
          fontSize: "clamp(15px, 2vw, 18px)", fontWeight: 300,
          color: "rgba(255,255,255,0.4)", maxWidth: 480, lineHeight: 1.6, margin: "0 auto 36px",
        }}>
          Four integrated capabilities. One managed agent. Every industry we serve gets all of them, pre-trained on their vertical.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          {solutions.map((s) => (
            <a key={s.id} href={`#${s.id}`} style={{
              fontSize: 12, fontFamily: "'DM Mono', monospace", color: "rgba(37,99,235,0.65)",
              background: "rgba(37,99,235,0.07)", padding: "8px 16px", borderRadius: 20,
              textDecoration: "none", transition: "all 0.15s",
            }}
            onMouseEnter={(e) => { e.target.style.background = "rgba(37,99,235,0.12)"; e.target.style.color = NERVO_BLUE; }}
            onMouseLeave={(e) => { e.target.style.background = "rgba(37,99,235,0.07)"; e.target.style.color = "rgba(37,99,235,0.65)"; }}>
              {s.icon} {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCTA() {
  const [ref, vis] = useReveal();
  const verticals = [
    { icon: "🏠", name: "Real Estate", role: "Your AI Sales Agent", href: "/real-estate" },
    { icon: "🦷", name: "Dental", role: "Your AI Front Desk", href: "/dental" },
    { icon: "⚖️", name: "Legal", role: "Your AI Intake Coordinator", href: "/legal" },
    { icon: "🛒", name: "E-Commerce", role: "Your AI Customer Agent", href: "/ecommerce" },
  ];
  return (
    <section ref={ref} style={{
      padding: "100px 24px", background: BG_DARK,
      display: "flex", flexDirection: "column", alignItems: "center",
    }}>
      <div style={{
        textAlign: "center", marginBottom: 48,
        opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
      }}>
        <h2 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 600, color: "#fff", letterSpacing: "-0.025em", margin: "0 0 10px" }}>
          See how it works in your industry.
        </h2>
        <p style={{ fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}>
          Every capability above is pre-trained and customized for your vertical.
        </p>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 16, maxWidth: 900, width: "100%",
      }}>
        {verticals.map((v, i) => (
          <a key={v.name} href={v.href} style={{
            opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(16px)",
            transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${0.1 * (i + 1)}s`,
            background: "rgba(255,255,255,0.025)", border: "0.5px solid rgba(255,255,255,0.06)",
            borderRadius: 14, padding: "28px 24px", textDecoration: "none", textAlign: "center",
            display: "block",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(37,99,235,0.25)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>{v.icon}</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 4 }}>{v.name}</div>
            <div style={{ fontSize: 12, fontFamily: "'DM Mono', monospace", color: NERVO_BLUE }}>{v.role}</div>
          </a>
        ))}
      </div>
    </section>
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
        <h2 style={{ fontSize: "clamp(26px, 5vw, 44px)", fontWeight: 600, color: "#fff", letterSpacing: "-0.03em", margin: "0 0 14px" }}>
          Let's build yours.
        </h2>
        <p style={{
          fontSize: 16, fontWeight: 300, color: "rgba(255,255,255,0.38)",
          maxWidth: 440, margin: "0 auto 36px", lineHeight: 1.6,
        }}>
          Tell us about your business. We'll map exactly which capabilities your agent needs and what the ROI looks like.
        </p>
        <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          fontSize: 18, fontWeight: 600, color: "#fff", background: NERVO_BLUE,
          padding: "18px 40px", borderRadius: 32, textDecoration: "none",
        }}>Book a Free Consultation</a>
        <p style={{ fontSize: 12, fontFamily: "'DM Mono', monospace", color: "rgba(37,99,235,0.45)", marginTop: 14 }}>
          30 minutes · no obligation · we'll scope it live
        </p>
      </div>
    </section>
  );
}

export default function Solutions() {
  return (
    <div style={{
      background: BG_DARK, color: "#fff",
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      minHeight: "100vh", overflowX: "hidden",
    }}>
      <NavBar />
      <SolutionsHero />
      {solutions.map((s, i) => (
        <SolutionScreen key={s.id} data={s} index={i} />
      ))}
      <IndustryCTA />
      <CTASection />
      <FooterNav />
    </div>
  );
}
