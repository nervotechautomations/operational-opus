import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle2, Zap, Bot, BarChart3, Clock } from "lucide-react";

const TOTAL_STEPS = 6; // 5 quiz steps + 1 contact step

const businessTypes = [
  "SaaS / Technology",
  "Professional Services",
  "Healthcare / Dental",
  "Real Estate",
  "Ecommerce / Retail",
  "Legal Services",
  "Financial Services",
  "Agency / Consulting",
  "Other",
];

const bottlenecks = [
  "Lead follow-up is too slow",
  "Manual data entry and CRM updates",
  "Customer support is overwhelmed",
  "Outbound outreach takes too long",
  "Appointment scheduling is manual",
  "Content creation is a bottleneck",
  "Onboarding new clients is complex",
];

const leadVolumes = [
  "Under 50 leads/month",
  "50–200 leads/month",
  "200–500 leads/month",
  "500–1,000 leads/month",
  "1,000+ leads/month",
];

const currentTools = [
  "HubSpot",
  "Salesforce",
  "Gmail / Google Workspace",
  "Slack",
  "Zapier",
  "Shopify",
  "Stripe",
  "Custom / Internal Tools",
  "None of the above",
];

const timelines = [
  "Immediately — we need this now",
  "Within 30 days",
  "1–3 months",
  "3–6 months",
  "Just exploring options",
];

const AIAutomationPlan = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState({
    businessType: "",
    bottleneck: "",
    leadVolume: "",
    tools: [] as string[],
    timeline: "",
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  const progress = (step / TOTAL_STEPS) * 100;

  const selectSingle = (field: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const toggleTool = (tool: string) => {
    setAnswers((prev) => ({
      ...prev,
      tools: prev.tools.includes(tool)
        ? prev.tools.filter((t) => t !== tool)
        : [...prev.tools, tool],
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 1: return answers.businessType !== "";
      case 2: return answers.bottleneck !== "";
      case 3: return answers.leadVolume !== "";
      case 4: return answers.tools.length > 0;
      case 5: return answers.timeline !== "";
      case 6: return answers.name.trim() !== "" && answers.email.trim() !== "";
      default: return false;
    }
  };

  const next = () => {
    if (step < TOTAL_STEPS) setStep(step + 1);
    else setSubmitted(true);
  };

  const back = () => {
    if (step > 1) setStep(step - 1);
  };

  const OptionButton = ({
    selected,
    onClick,
    children,
  }: {
    selected: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      onClick={onClick}
      className={`w-full text-left px-5 py-4 rounded-lg border transition-all duration-200 text-sm font-medium ${
        selected
          ? "border-accent bg-accent/5 text-foreground ring-1 ring-accent/30"
          : "border-border bg-card text-muted-foreground hover:border-muted-foreground/30 hover:bg-card/80"
      }`}
    >
      <span className="flex items-center gap-3">
        <span
          className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
            selected ? "border-accent bg-accent" : "border-border"
          }`}
        >
          {selected && (
            <span className="w-2 h-2 rounded-full bg-accent-foreground" />
          )}
        </span>
        {children}
      </span>
    </button>
  );

  const CheckboxButton = ({
    selected,
    onClick,
    children,
  }: {
    selected: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      onClick={onClick}
      className={`w-full text-left px-5 py-4 rounded-lg border transition-all duration-200 text-sm font-medium ${
        selected
          ? "border-accent bg-accent/5 text-foreground ring-1 ring-accent/30"
          : "border-border bg-card text-muted-foreground hover:border-muted-foreground/30 hover:bg-card/80"
      }`}
    >
      <span className="flex items-center gap-3">
        <span
          className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
            selected ? "border-accent bg-accent" : "border-border"
          }`}
        >
          {selected && (
            <CheckCircle2 className="w-3.5 h-3.5 text-accent-foreground" />
          )}
        </span>
        {children}
      </span>
    </button>
  );

  // Summary page
  if (submitted) {
    const opportunities = [
      answers.bottleneck.includes("Lead")
        ? "AI Lead Response & Qualification"
        : answers.bottleneck.includes("CRM")
        ? "AI CRM Automation"
        : answers.bottleneck.includes("support")
        ? "AI Customer Support Agent"
        : answers.bottleneck.includes("Outbound")
        ? "AI Outbound & Email Automation"
        : answers.bottleneck.includes("Appointment")
        ? "AI Appointment Scheduling"
        : answers.bottleneck.includes("Content")
        ? "AI Content Engine"
        : "AI Workflow Automation",
      "Automated Lead Nurture Sequences",
      "24/7 AI Chat & Voice Agents",
    ];

    return (
      <div className="min-h-screen bg-background flex flex-col">
        <nav className="border-b border-border bg-background/95 backdrop-blur-sm">
          <div className="section-container flex items-center justify-between h-16">
            <a href="/" className="font-bold text-xl tracking-tight text-foreground">
              <span className="font-mono text-accent">▲</span> Nexus
              <span className="text-muted-foreground font-normal">AI</span>
            </a>
          </div>
        </nav>

        <div className="flex-1 flex items-center justify-center px-6 py-16">
          <div className="max-w-2xl w-full text-center">
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-8">
              <CheckCircle2 className="w-4 h-4" />
              Audit Complete
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your AI Opportunity Summary
            </h1>
            <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
              Based on your answers, we've identified high-impact AI automation
              opportunities for your{" "}
              <span className="text-foreground font-medium">
                {answers.businessType}
              </span>{" "}
              business.
            </p>

            <div className="grid gap-4 mb-12 text-left">
              {opportunities.map((opp, i) => (
                <div
                  key={i}
                  className="card-surface flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    {i === 0 ? (
                      <Zap className="w-5 h-5 text-accent" />
                    ) : i === 1 ? (
                      <BarChart3 className="w-5 h-5 text-accent" />
                    ) : (
                      <Bot className="w-5 h-5 text-accent" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{opp}</p>
                    <p className="text-sm text-muted-foreground">
                      High automation potential identified
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-surface mb-8">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-accent" />
                <p className="font-semibold text-foreground">
                  Estimated implementation: {answers.timeline === "Immediately — we need this now" ? "2–3 weeks" : "3–6 weeks"}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Our team will prepare a detailed automation roadmap tailored to
                your {answers.businessType} workflows.
              </p>
            </div>

            <Button
              variant="cta"
              size="xl"
              className="w-full sm:w-auto"
              onClick={() => window.open("#", "_blank")}
            >
              Book Your AI Consultation
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Free 30-minute strategy session · No obligation
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Nav */}
      <nav className="border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="section-container flex items-center justify-between h-16">
          <a href="/" className="font-bold text-xl tracking-tight text-foreground">
            <span className="font-mono text-accent">▲</span> Nexus
            <span className="text-muted-foreground font-normal">AI</span>
          </a>
          <span className="mono-label hidden sm:block">AI Automation Audit</span>
        </div>
      </nav>

      {/* Progress */}
      <div className="section-container pt-6">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
          <span className="font-mono">
            Step {step} of {TOTAL_STEPS}
          </span>
          <span className="font-mono">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-1.5 bg-muted" />
      </div>

      {/* Content */}
      <div className="flex-1 flex items-start justify-center px-6 py-10 md:py-16">
        <div className="max-w-xl w-full">
          {step === 1 && (
            <div className="animate-fade-up">
              {/* Header only shown on step 1 */}
              <div className="mb-10">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Discover Where AI Can Automate Your Business
                </h1>
                <p className="text-muted-foreground">
                  Answer a few quick questions to identify your highest-impact
                  automation opportunities.
                </p>
                <p className="text-xs text-muted-foreground mt-2 font-mono">
                  ⏱ Most businesses complete this in under 30 seconds
                </p>
              </div>

              <h2 className="text-lg font-semibold text-foreground mb-4">
                What type of business do you operate?
              </h2>
              <div className="grid gap-3">
                {businessTypes.map((type) => (
                  <OptionButton
                    key={type}
                    selected={answers.businessType === type}
                    onClick={() => selectSingle("businessType", type)}
                  >
                    {type}
                  </OptionButton>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-up">
              <h2 className="text-lg font-semibold text-foreground mb-2">
                What's your biggest operational bottleneck?
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Select the area where manual work is costing you the most.
              </p>
              <div className="grid gap-3">
                {bottlenecks.map((item) => (
                  <OptionButton
                    key={item}
                    selected={answers.bottleneck === item}
                    onClick={() => selectSingle("bottleneck", item)}
                  >
                    {item}
                  </OptionButton>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-up">
              <h2 className="text-lg font-semibold text-foreground mb-2">
                What's your monthly lead volume?
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                This helps us estimate the impact of automation.
              </p>
              <div className="grid gap-3">
                {leadVolumes.map((vol) => (
                  <OptionButton
                    key={vol}
                    selected={answers.leadVolume === vol}
                    onClick={() => selectSingle("leadVolume", vol)}
                  >
                    {vol}
                  </OptionButton>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-fade-up">
              <h2 className="text-lg font-semibold text-foreground mb-2">
                What tools do you currently use?
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Select all that apply. We integrate with all of these.
              </p>
              <div className="grid gap-3">
                {currentTools.map((tool) => (
                  <CheckboxButton
                    key={tool}
                    selected={answers.tools.includes(tool)}
                    onClick={() => toggleTool(tool)}
                  >
                    {tool}
                  </CheckboxButton>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="animate-fade-up">
              <h2 className="text-lg font-semibold text-foreground mb-2">
                What's your implementation timeline?
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                When are you looking to deploy AI automation?
              </p>
              <div className="grid gap-3">
                {timelines.map((t) => (
                  <OptionButton
                    key={t}
                    selected={answers.timeline === t}
                    onClick={() => selectSingle("timeline", t)}
                  >
                    {t}
                  </OptionButton>
                ))}
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="animate-fade-up">
              <h2 className="text-lg font-semibold text-foreground mb-2">
                Where should we send your AI automation plan?
              </h2>
              <p className="text-sm text-muted-foreground mb-8">
                We'll prepare a personalized automation roadmap for your
                business.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    placeholder="John Smith"
                    value={answers.name}
                    onChange={(e) =>
                      setAnswers((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="bg-card"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Work Email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    value={answers.email}
                    onChange={(e) =>
                      setAnswers((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className="bg-card"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Company Name
                  </label>
                  <Input
                    placeholder="Acme Inc."
                    value={answers.company}
                    onChange={(e) =>
                      setAnswers((prev) => ({
                        ...prev,
                        company: e.target.value,
                      }))
                    }
                    className="bg-card"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Phone{" "}
                    <span className="text-muted-foreground font-normal">
                      (optional)
                    </span>
                  </label>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={answers.phone}
                    onChange={(e) =>
                      setAnswers((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    className="bg-card"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
            {step > 1 ? (
              <Button variant="ghost" onClick={back} className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            ) : (
              <a
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back to site
              </a>
            )}

            <Button
              variant="cta"
              onClick={next}
              disabled={!canProceed()}
              className="gap-2"
            >
              {step === TOTAL_STEPS ? (
                "Generate My AI Automation Plan"
              ) : (
                <>
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAutomationPlan;
