import { useState, useEffect } from "react";
import useReveal from "../hooks/useReveal";
import { NERVO_BLUE, BG_DARK, BG_SECTION, BG_ALT, CALENDLY } from "../constants";
import NavBar from "../components/NavBar";
import FooterNav from "../components/FooterNav";

const capabilities = [
  {
    category: "Revenue Recovery",
    icon: "🛒",
    items: [
      { title: "Abandoned cart recovery", desc: "AI triggers personalized SMS and email sequences within minutes of cart abandonment. Dynamic incentives based on cart value and customer history.", tier: 1 },
      { title: "Browse abandonment", desc: "If a visitor views products but doesn't add to cart, AI sends tailored product recommendations and limited-time offers.", tier: 2 },
      { title: "Win-back campaigns", desc: "Re-engages lapsed customers with personalized offers based on purchase history, browsing behavior, and predicted preferences.", tier: 2 },
      { title: "Price drop alerts", desc: "Notifies customers who viewed or carted items when prices drop or items go on sale. Converts window shoppers into buyers.", tier: 2 },
    ],
  },
  {
    category: "Customer Support",
    icon: "💬",
    items: [
      { title: "Order status AI", desc: "Customers can check order status, tracking info, and delivery estimates via SMS or chat. Reduces support ticket volume by up to 40%.", tier: 1 },
      { title: "Returns & exchanges", desc: "AI walks customers through return/exchange process, generates labels, and processes requests — no human intervention needed for standard cases.", tier: 1 },
      { title: "Product recommendations", desc: "Based on browsing history and past purchases, AI suggests relevant products via SMS, email, or on-site chat.", tier: 2 },
      { title: "FAQ automation", desc: "Handles shipping questions, size guides, product comparisons, and policy inquiries instantly. Escalates complex issues to your team.", tier: 2 },
    ],
  },
  {
    category: "Post-Purchase",
    icon: "🔄",
    items: [
      { title: "Order confirmation sequences", desc: "Beyond the receipt — AI sends personalized thank-you, usage tips, care instructions, and cross-sell recommendations over the first 7 days.", tier: 1 },
      { title: "Review generation", desc: "Timed review request SMS after delivery. Routes negative feedback privately first. Generates UGC with product-specific prompts.", tier: 1 },
      { title: "Cross-sell / upsell", desc: "AI identifies complementary products based on what was purchased and sends timed recommendations when customers are most likely to buy again.", tier: 2 },
      { title: "Subscription / replenishment", desc: "For consumable products, AI sends replenishment reminders based on average usage cycles. Converts one-time buyers into repeat customers.", tier: 2 },
    ],
  },
  {
    category: "Operations",
    icon: "⚙️",
    items: [
      { title: "Platform sync", desc: "Integrates with Shopify, WooCommerce, BigCommerce, or your platform. Real-time order, inventory, and customer data sync.", tier: 1 },
      { title: "Inventory alerts", desc: "Monitors stock levels. Sends back-in-stock notifications to customers who wanted out-of-stock items. Alerts you on low inventory.", tier: 2 },
      { title: "Weekly performance digest", desc: "Monday morning summary: carts recovered, revenue recaptured, reviews generated, support tickets deflected, repeat purchase rate.", tier: 2 },
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
          <span style={{ fontSize: 32 }}>🛒</span>
          <span style={{ fontSize: 13, fontFamily: "'DM Mono', monospace", color: NERVO_BLUE, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            E-Commerce
          </span>
        </div>
        <h1 style={{
          fontSize: "clamp(36px, 6.5vw, 64px)", fontWeight: 600, color: "#fff",
          lineHeight: 1.06, letterSpacing: "-0.03em", margin: "0 0 8px", maxWidth: 700,
        }}>
          Your AI Customer Agent.
        </h1>
        <p style={{
          fontSize: 14, fontFamily: "'DM Mono', monospace", color: "rgba(37,99,235,0.55)", margin: "0 0 20px",
        }}>
          Recovers carts · Handles support · Runs post-purchase · Generates reviews
        </p>
        <p style={{
          fontSize: "clamp(15px, 2vw, 18px)", fontWeight: 300,
          color: "rgba(255,255,255,0.4)", maxWidth: 520, lineHeight: 1.6, margin: "0 auto 36px",
        }}>
          70% of your carts are abandoned. Most never come back. Your AI Customer Agent recovers revenue, handles support, and turns one-time buyers into repeat customers.
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
          Abandoned carts and one-time buyers are bleeding your revenue.
        </p>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: 16, maxWidth: 800, width: "100%",
      }}>
        {[
          { value: "70%+", label: "cart abandonment", sub: "industry average" },
          { value: "$260", label: "avg cart value", sub: "left behind" },
          { value: "10-15%", label: "recovery rate", sub: "with AI follow-up" },
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
        <h3 style={{ fontSize: 18, fontWeight: 600, color: "#fff", margin: "0 0 4px" }}>Your AI Customer Agent</h3>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", margin: "0 0 24px" }}>For e-commerce businesses</p>
        <div style={{ fontSize: 44, fontWeight: 600, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>$1,500</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginTop: 4, marginBottom: 24 }}>one-time setup</div>
        <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.07)", paddingTop: 24, marginBottom: 28 }}>
          <div style={{ fontSize: 36, fontWeight: 600, color: "#fff", letterSpacing: "-0.02em" }}>
            $350<span style={{ fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.3)" }}>/mo</span>
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginTop: 4 }}>managed service · support · optimization</div>
        </div>
        <div style={{ textAlign: "left", marginBottom: 24 }}>
          {["Abandoned cart recovery", "Order status AI support", "Post-purchase sequences", "Review generation", "Win-back campaigns", "Platform sync (Shopify, WooCommerce)", "Weekly performance reports", "Monthly optimization"].map((f, i) => (
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

export default function Ecommerce() {
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
