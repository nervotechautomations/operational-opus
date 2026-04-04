import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="section-container py-12 lg:py-20">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to home
        </button>

        <a href="/" className="font-bold text-xl tracking-tight text-foreground mb-12 block">
          <span className="font-mono text-accent">▲</span> Nervo<span className="text-muted-foreground font-normal">Tech</span>
        </a>

        <article className="prose prose-invert prose-sm max-w-3xl
          prose-headings:text-foreground prose-headings:font-bold
          prose-h1:text-3xl prose-h1:md:text-4xl prose-h1:mb-4
          prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-strong:text-foreground
          prose-li:text-muted-foreground
          prose-a:text-accent prose-a:no-underline hover:prose-a:underline
          prose-hr:border-border
        ">
          <h1>Terms and Conditions — nervo-tech.com</h1>
          <p><strong>Effective Date:</strong> April 3, 2026</p>
          <p><strong>Business:</strong> Nervo Tech (operated by Cristian A. Dieguez)</p>
          <p><strong>Website:</strong> <a href="https://nervo-tech.com">https://nervo-tech.com</a></p>
          <p><strong>Contact:</strong> <a href="mailto:cristian@nervo-tech.com">cristian@nervo-tech.com</a></p>

          <hr />

          <h2>1. Acceptance of Terms</h2>
          <p>By using Nervo Tech's services, including our AI voice receptionist and appointment scheduling system, you agree to these Terms and Conditions.</p>

          <h2>2. Description of Service</h2>
          <p>Nervo Tech provides AI-powered voice receptionist and automation services to businesses. Our system:</p>
          <ul>
            <li>Answers inbound calls on behalf of our clients</li>
            <li>Qualifies leads through voice conversation</li>
            <li>Books appointments onto client calendars</li>
            <li>Sends SMS confirmation messages to leads who consent to receive them</li>
          </ul>

          <h2>3. SMS Program Terms</h2>
          <p><strong>Program name:</strong> Nervo Tech Appointment Confirmations</p>
          <p><strong>Description:</strong> One-time SMS appointment confirmation messages sent to individuals who verbally consent during an AI voice call.</p>
          <p><strong>Message frequency:</strong> One message per appointment booking.</p>
          <p><strong>Message and data rates may apply.</strong> Check with your carrier for details.</p>
          <p><strong>To opt out:</strong> Reply <strong>STOP</strong> to any message. You will receive one final confirmation that you have been unsubscribed and will receive no further messages.</p>
          <p><strong>For help:</strong> Reply <strong>HELP</strong> to any message or contact us at <a href="mailto:cristian@nervo-tech.com">cristian@nervo-tech.com</a>.</p>
          <p>Carriers are not liable for delayed or undelivered messages.</p>

          <h2>4. Client Responsibilities</h2>
          <p>Business clients using Nervo Tech services agree to:</p>
          <ul>
            <li>Provide accurate business information for system configuration</li>
            <li>Ensure their use of our services complies with applicable laws</li>
            <li>Not use our services for spam, harassment, or illegal purposes</li>
          </ul>

          <h2>5. Limitation of Liability</h2>
          <p>Nervo Tech is not liable for missed appointments, technical outages, or errors caused by third-party services including but not limited to Twilio, Google Calendar, or Vapi. Our total liability shall not exceed the amount paid for services in the prior 30 days.</p>

          <h2>6. Changes to Terms</h2>
          <p>We reserve the right to update these Terms at any time. Continued use of our services after changes constitutes acceptance of the new Terms.</p>

          <h2>7. Contact</h2>
          <p>
            <strong>Nervo Tech</strong><br />
            Cristian A. Dieguez<br />
            Gainesville, FL<br />
            <a href="mailto:cristian@nervo-tech.com">cristian@nervo-tech.com</a>
          </p>
        </article>
      </div>
    </div>
  );
};

export default Terms;
