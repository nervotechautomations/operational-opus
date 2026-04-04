import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
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
          <h1>Privacy Policy — nervo-tech.com</h1>
          <p><strong>Effective Date:</strong> April 3, 2026</p>
          <p><strong>Business:</strong> Nervo Tech (operated by Cristian A. Dieguez)</p>
          <p><strong>Website:</strong> <a href="https://nervo-tech.com">https://nervo-tech.com</a></p>
          <p><strong>Contact:</strong> <a href="mailto:cristian@nervo-tech.com">cristian@nervo-tech.com</a></p>

          <hr />

          <h2>1. Information We Collect</h2>
          <p>We collect the following information when you interact with our services:</p>
          <ul>
            <li><strong>Phone numbers</strong> provided voluntarily during voice interactions with our AI receptionist</li>
            <li><strong>Name and contact details</strong> captured during appointment scheduling</li>
            <li><strong>Appointment and calendar data</strong> necessary to book and confirm meetings</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use collected information solely for the following purposes:</p>
          <ul>
            <li>Sending appointment confirmation text messages (SMS) to leads who have explicitly requested them</li>
            <li>Scheduling and managing appointments on behalf of our clients</li>
            <li>Improving the performance of our AI voice systems</li>
          </ul>

          <h2>3. SMS Messaging</h2>
          <p>
            By verbally agreeing to receive a confirmation message during a call with our AI voice agent, you consent to receive a one-time SMS appointment confirmation from us. Message and data rates may apply. You may opt out at any time by replying <strong>STOP</strong> to any message. For help, reply <strong>HELP</strong>.
          </p>
          <p>Message frequency: One message per appointment booking.</p>

          <h2>4. We Do Not Sell Your Data</h2>
          <p>We do not sell, rent, trade, or share your personal information with third parties for marketing purposes. Period.</p>

          <h2>5. Data Sharing</h2>
          <p>Your information may be shared only with:</p>
          <ul>
            <li>The real estate agent or business you are scheduling an appointment with</li>
            <li>Third-party service providers necessary to operate our platform (e.g., Twilio for SMS delivery, Google Calendar for scheduling)</li>
          </ul>
          <p>All third-party providers are bound by their own privacy policies and data protection agreements.</p>

          <h2>6. Data Retention</h2>
          <p>We retain personal data only as long as necessary to fulfill the purpose for which it was collected, or as required by law.</p>

          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to your personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Opt out of SMS communications at any time by replying STOP</li>
          </ul>
          <p>To exercise these rights, contact us at the email above.</p>

          <h2>8. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact:</p>
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

export default PrivacyPolicy;
