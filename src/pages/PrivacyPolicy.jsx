import { BG_DARK, NERVO_BLUE } from "../constants";
import NavBar from "../components/NavBar";
import FooterNav from "../components/FooterNav";

export default function PrivacyPolicy() {
  return (
    <div style={{
      background: BG_DARK, color: "#fff",
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      minHeight: "100vh", overflowX: "hidden",
    }}>
      <NavBar />
      <section style={{ padding: "140px 24px 80px", maxWidth: 720, margin: "0 auto" }}>
        <h1 style={{ fontSize: 36, fontWeight: 600, color: "#fff", letterSpacing: "-0.03em", marginBottom: 32 }}>
          Privacy Policy
        </h1>
        <div style={{ fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
          <p style={{ marginBottom: 24 }}>
            <strong style={{ color: "#fff" }}>Last updated:</strong> April 2026
          </p>
          <p style={{ marginBottom: 24 }}>
            Nervo Tech ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
          </p>
          <h2 style={{ fontSize: 20, fontWeight: 600, color: "#fff", margin: "32px 0 12px" }}>Information We Collect</h2>
          <p style={{ marginBottom: 24 }}>
            We may collect information you provide directly, such as your name, email address, phone number, and business details when you book a consultation, fill out a form, or contact us. We also collect usage data automatically, including IP address, browser type, and pages visited.
          </p>
          <h2 style={{ fontSize: 20, fontWeight: 600, color: "#fff", margin: "32px 0 12px" }}>How We Use Your Information</h2>
          <p style={{ marginBottom: 24 }}>
            We use your information to provide and improve our services, respond to inquiries, schedule consultations, send relevant communications, and analyze website usage to improve user experience.
          </p>
          <h2 style={{ fontSize: 20, fontWeight: 600, color: "#fff", margin: "32px 0 12px" }}>Contact</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at{" "}
            <a href="mailto:cristian@nervo-tech.com" style={{ color: NERVO_BLUE, textDecoration: "none" }}>cristian@nervo-tech.com</a>.
          </p>
        </div>
      </section>
      <FooterNav />
    </div>
  );
}
