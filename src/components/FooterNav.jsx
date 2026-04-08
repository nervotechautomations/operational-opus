import { NERVO_BLUE, BG_DARK } from "../constants";

export default function FooterNav() {
  return (
    <footer style={{
      padding: "44px 24px", background: BG_DARK,
      display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
    }}>
      <a href="/" style={{ fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>
        nervo<span style={{ color: NERVO_BLUE }}>.</span>tech
      </a>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
        {[
          { l: "Solutions", h: "/solutions" }, { l: "Real Estate", h: "/real-estate" },
          { l: "Dental", h: "/dental" }, { l: "Legal", h: "/legal" },
          { l: "E-Commerce", h: "/ecommerce" }, { l: "Privacy", h: "/privacy-policy" },
          { l: "Terms", h: "/terms" },
        ].map((x) => (
          <a key={x.l} href={x.h} style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>{x.l}</a>
        ))}
      </div>
      <p style={{ fontSize: 11, color: "rgba(255,255,255,0.12)", marginTop: 6 }}>
        © 2026 Nervo Tech · cristian@nervo-tech.com · Gainesville, FL
      </p>
    </footer>
  );
}
