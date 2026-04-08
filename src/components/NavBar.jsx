import { useState, useEffect, useRef } from "react";
import { NERVO_BLUE, CALENDLY } from "../constants";

const industriesData = [
  { icon: "🏠", name: "Real Estate", role: "Your AI Sales Agent", href: "/real-estate",
    capabilities: ["Voice Receptionist","Lead Qualification","Appointment Booking","Reddit Lead Gen","Follow-Up Sequences","CRM Sync"] },
  { icon: "🦷", name: "Dental", role: "Your AI Front Desk", href: "/dental",
    capabilities: ["Patient Intake","Appointment Reminders","No-Show Recovery","Waitlist Fill","Recall System","Review Generation"] },
  { icon: "⚖️", name: "Legal", role: "Your AI Intake Coordinator", href: "/legal",
    capabilities: ["Intake Qualification","Case Routing","Consultation Booking","Status Updates","Follow-Up Nurture","Review Requests"] },
  { icon: "🛒", name: "E-Commerce", role: "Your AI Customer Agent", href: "/ecommerce",
    capabilities: ["Cart Recovery","Order Status AI","Post-Purchase Sequences","Review Generation","Win-Back Campaigns","Cross-Sell"] },
];

const solutionsData = [
  { name: "Voice AI Receptionist", desc: "24/7 call answering + qualification", href: "/solutions#voice" },
  { name: "AI Lead Generation", desc: "Intent scraping + warm outreach", href: "/solutions#leadgen" },
  { name: "Follow-Up Automation", desc: "Speed-to-lead + nurture sequences", href: "/solutions#followup" },
  { name: "CRM + Operations", desc: "Sync, reporting, review requests", href: "/solutions#operations" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const openDropdown = (name) => {
    clearTimeout(dropdownTimeout.current);
    setActiveDropdown(name);
  };
  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: 48,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: (scrolled || activeDropdown) ? "rgba(10,10,15,0.92)" : "transparent",
        backdropFilter: (scrolled || activeDropdown) ? "blur(24px) saturate(180%)" : "none",
        WebkitBackdropFilter: (scrolled || activeDropdown) ? "blur(24px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition: "all 0.35s ease",
      }}>
        <div style={{
          width: "100%", maxWidth: 1080, padding: "0 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <a href="/" style={{ fontSize: 15, fontWeight: 600, color: "#fff", letterSpacing: "-0.02em", textDecoration: "none", zIndex: 2 }}>
            nervo<span style={{ color: NERVO_BLUE }}>.</span>tech
          </a>

          <div className="desktop-nav" style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {["Solutions", "Industries", "Pricing"].map((label) => (
              <div key={label} style={{ position: "relative" }}
                onMouseEnter={() => (label === "Solutions" || label === "Industries") && openDropdown(label)}
                onMouseLeave={closeDropdown}>
                <a href={label === "Pricing" ? "#pricing" : label === "Solutions" ? "/solutions" : "#industries"}
                  style={{
                    fontSize: 12, color: activeDropdown === label ? "#fff" : "rgba(255,255,255,0.55)",
                    textDecoration: "none", letterSpacing: "0.04em", transition: "color 0.2s",
                    padding: "16px 0", display: "inline-block",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#fff")}
                  onMouseLeave={(e) => { if (activeDropdown !== label) e.target.style.color = "rgba(255,255,255,0.55)"; }}>
                  {label}
                </a>
              </div>
            ))}
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{
              fontSize: 12, fontWeight: 500, color: "#fff", background: NERVO_BLUE,
              padding: "6px 16px", borderRadius: 20, textDecoration: "none", transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = 0.85)}
            onMouseLeave={(e) => (e.target.style.opacity = 1)}>
              Book a Consultation
            </a>
          </div>

          <button className="mobile-hamburger" onClick={() => setMobileOpen(!mobileOpen)} style={{
            display: "none", background: "none", border: "none", cursor: "pointer", padding: 8, zIndex: 2,
          }}>
            <div style={{ width: 18, height: 2, background: "#fff", marginBottom: 4, borderRadius: 1,
              transform: mobileOpen ? "rotate(45deg) translate(3px, 3px)" : "none", transition: "all 0.2s" }} />
            <div style={{ width: 18, height: 2, background: "#fff", marginBottom: 4, borderRadius: 1,
              opacity: mobileOpen ? 0 : 1, transition: "opacity 0.2s" }} />
            <div style={{ width: 18, height: 2, background: "#fff", borderRadius: 1,
              transform: mobileOpen ? "rotate(-45deg) translate(3px, -3px)" : "none", transition: "all 0.2s" }} />
          </button>
        </div>
      </nav>

      {activeDropdown && (
        <div
          onMouseEnter={() => openDropdown(activeDropdown)}
          onMouseLeave={closeDropdown}
          style={{
            position: "fixed", top: 48, left: 0, right: 0, zIndex: 99,
            background: "rgba(10,10,15,0.95)", backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            animation: "dropIn 0.2s ease",
          }}>
          <div style={{ maxWidth: 1080, margin: "0 auto", padding: "28px 24px" }}>
            {activeDropdown === "Industries" && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
                {industriesData.map((ind) => (
                  <a key={ind.name} href={ind.href} style={{
                    textDecoration: "none", padding: "20px 16px", borderRadius: 12,
                    background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.05)",
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(37,99,235,0.2)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; }}>
                    <div style={{ fontSize: 24, marginBottom: 10 }}>{ind.icon}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 3 }}>{ind.name}</div>
                    <div style={{ fontSize: 12, color: NERVO_BLUE, fontFamily: "'DM Mono', monospace", marginBottom: 10 }}>{ind.role}</div>
                    <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                      {ind.capabilities.slice(0, 3).map((c) => (
                        <span key={c} style={{
                          fontSize: 10, color: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.04)",
                          padding: "2px 7px", borderRadius: 6,
                        }}>{c}</span>
                      ))}
                      <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)" }}>+{ind.capabilities.length - 3}</span>
                    </div>
                  </a>
                ))}
              </div>
            )}
            {activeDropdown === "Solutions" && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
                {solutionsData.map((sol) => (
                  <a key={sol.name} href={sol.href} style={{
                    textDecoration: "none", padding: "20px 16px", borderRadius: 12,
                    background: "rgba(255,255,255,0.02)", border: "0.5px solid rgba(255,255,255,0.05)",
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(37,99,235,0.2)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; }}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 4 }}>{sol.name}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", lineHeight: 1.5 }}>{sol.desc}</div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {mobileOpen && (
        <div style={{
          position: "fixed", top: 48, left: 0, right: 0, bottom: 0, zIndex: 98,
          background: "rgba(10,10,15,0.98)", backdropFilter: "blur(20px)",
          overflowY: "auto", padding: "24px",
        }}>
          {["Industries", "Solutions", "Pricing"].map((section) => (
            <div key={section} style={{ marginBottom: 8 }}>
              <button onClick={() => setMobileExpanded(mobileExpanded === section ? null : section)} style={{
                width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                background: "none", border: "none", padding: "16px 0",
                borderBottom: "0.5px solid rgba(255,255,255,0.06)", cursor: "pointer",
              }}>
                <span style={{ fontSize: 16, fontWeight: 500, color: "#fff" }}>{section}</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                  style={{ transform: mobileExpanded === section ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                  <path d="M3 4.5l3 3 3-3" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              {mobileExpanded === section && section === "Industries" && (
                <div style={{ padding: "12px 0" }}>
                  {industriesData.map((ind) => (
                    <a key={ind.name} href={ind.href} onClick={() => setMobileOpen(false)} style={{
                      display: "block", padding: "14px 0", textDecoration: "none",
                      borderBottom: "0.5px solid rgba(255,255,255,0.03)",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                        <span style={{ fontSize: 18 }}>{ind.icon}</span>
                        <span style={{ fontSize: 15, fontWeight: 500, color: "#fff" }}>{ind.name}</span>
                      </div>
                      <div style={{ fontSize: 12, color: NERVO_BLUE, fontFamily: "'DM Mono', monospace", paddingLeft: 28 }}>{ind.role}</div>
                    </a>
                  ))}
                </div>
              )}
              {mobileExpanded === section && section === "Solutions" && (
                <div style={{ padding: "12px 0" }}>
                  {solutionsData.map((sol) => (
                    <a key={sol.name} href={sol.href} onClick={() => setMobileOpen(false)} style={{
                      display: "block", padding: "14px 0", textDecoration: "none",
                      borderBottom: "0.5px solid rgba(255,255,255,0.03)",
                    }}>
                      <div style={{ fontSize: 15, fontWeight: 500, color: "#fff", marginBottom: 3 }}>{sol.name}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{sol.desc}</div>
                    </a>
                  ))}
                </div>
              )}
              {mobileExpanded === section && section === "Pricing" && (
                <div style={{ padding: "12px 0" }}>
                  <a href="#pricing" onClick={() => setMobileOpen(false)} style={{
                    display: "block", padding: "14px 0", fontSize: 15, color: "rgba(255,255,255,0.6)", textDecoration: "none",
                  }}>Starting at $1,500 + $350/mo →</a>
                </div>
              )}
            </div>
          ))}
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} style={{
            display: "block", width: "100%", padding: "16px 0", background: NERVO_BLUE, color: "#fff",
            fontSize: 15, fontWeight: 500, borderRadius: 14, textDecoration: "none", textAlign: "center", marginTop: 24,
          }}>Book a Consultation</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}
