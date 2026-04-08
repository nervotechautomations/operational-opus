import { BG_DARK, NERVO_BLUE } from "../constants";
import NavBar from "../components/NavBar";
import FooterNav from "../components/FooterNav";

export default function Terms() {
  return (
    <div style={{
      background: BG_DARK, color: "#fff",
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      minHeight: "100vh", overflowX: "hidden",
    }}>
      <NavBar />
      <section style={{ padding: "140px 24px 80px", maxWidth: 720, margin: "0 auto" }}>
        <h1 style={{ fontSize: 36, fontWeight: 600, color: "#fff", letterSpacing: "-0.03em", marginBottom: 32 }}>
          Terms of Service
        </h1>
        <div style={{ fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
          <p style={{ marginBottom: 24 }}>
            <strong style={{ color: "#fff" }}>Last updated:</strong> April 2026
          </p>
          <p style={{ marginBottom: 24 }}>
            Welcome to Nervo Tech. By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
          </p>
          <h2 style={{ fontSize: 20, fontWeight: 600, color: "#fff", margin: "32px 0 12px" }}>Services</h2>
          <p style={{ marginBottom: 24 }}>
            Nervo Tech provides AI automation services including voice AI, lead generation, follow-up automation, and CRM integration for businesses. Services are provided on a managed basis with setup fees and monthly retainers as agreed upon during consultation.
          </p>
          <h2 style={{ fontSize: 20, fontWeight: 600, color: "#fff", margin: "32px 0 12px" }}>Limitation of Liability</h2>
          <p style={{ marginBottom: 24 }}>
            Nervo Tech shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amounts paid by you in the twelve months preceding the claim.
          </p>
          <h2 style={{ fontSize: 20, fontWeight: 600, color: "#fff", margin: "32px 0 12px" }}>Contact</h2>
          <p>
            For questions about these Terms, contact us at{" "}
            <a href="mailto:cristian@nervo-tech.com" style={{ color: NERVO_BLUE, textDecoration: "none" }}>cristian@nervo-tech.com</a>.
          </p>
        </div>
      </section>
      <FooterNav />
    </div>
  );
}
