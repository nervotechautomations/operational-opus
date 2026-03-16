import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle2, Zap, Bot, BarChart3, Shield, Download, Calendar } from "lucide-react";

const TOTAL_STEPS = 8;

const businessTypes = [
  "Local service business",
  "Real estate brokerage",
  "Ecommerce brand",
  "Professional services (legal, consulting, accounting)",
  "Healthcare / dental practice",
  "SaaS or technology company",
  "Other",
];

const leadVolumes = [
  "Fewer than 20",
  "20–100",
  "100–500",
  "500+",
];

const lostOpportunities = [
  "Slow response to inquiries",
  "Leads not being qualified properly",
  "Inconsistent follow-ups",
  "Appointment scheduling inefficiencies",
  "Customer support overload",
  "Marketing content production",
  "Internal operational tasks",
];

const currentTools = [
  "CRM (HubSpot, Salesforce, etc.)",
  "Email marketing platform",
  "Scheduling software",
  "Customer support platform",
  "Ecommerce platform",
  "Mostly manual processes",
];

const automationGoals = [
  "Lead generation",
  "Lead qualification",
  "Appointment booking",
  "Customer inquiries or support",
  "Follow-ups and outreach",
  "Marketing content production",
  "Internal workflows",
];

const revenueRanges = [
  "Under $25k",
  "$25k–$100k",
  "$100k–$500k",
  "$500k+",
];

const AIAutomationPlan = () => {
  const [step, setStep] = useState(1);
  const [phase, setPhase] = useState<"form" | "analyzing" | "results">("form");
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [answers, setAnswers] = useState({
    businessType: "",
    leadVolume: "",
    lostOpportunity: "",
    tools: [] as string[],
    automationGoal: "",
    revenue: "",
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
      case 2: return answers.leadVolume !== "";
      case 3: return answers.lostOpportunity !== "";
      case 4: return answers.tools.length > 0;
      case 5: return answers.automationGoal !== "";
      case 6: return true; // revenue is optional
      case 7: return answers.name.trim() !== "" && answers.email.trim() !== "";
      default: return false;
    }
  };

  const next = () => {
    if (step < TOTAL_STEPS - 1) {
      setStep(step + 1);
    } else {
      // Start analyzing phase
      setPhase("analyzing");
      setAnalysisProgress(0);
    }
  };

  const back = () => {
    if (step > 1) setStep(step - 1);
  };

  // Analysis animation
  useEffect(() => {
    if (phase !== "analyzing") return;
    const interval = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase("results"), 400);
          return 100;
        }
        return prev + 4;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [phase]);

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
          {selected && <span className="w-2 h-2 rounded-full bg-accent-foreground" />}
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
          {selected && <CheckCircle2 className="w-3.5 h-3.5 text-accent-foreground" />}
        </span>
        {children}
      </span>
    </button>
  );

  const getOpportunities = () => {
    const opps: { title: string; desc: string }[] = [];
    const goal = answers.automationGoal;
    const lost = answers.lostOpportunity;

    if (goal.includes("qualification") || lost.includes("qualified")) {
      opps.push({
        title: "AI Lead Qualification System",
        desc: "Automatically prioritizes high-intent prospects and routes them to the right workflow.",
      });
    }
    if (goal.includes("Follow-ups") || lost.includes("follow-ups")) {
      opps.push({
        title: "AI Follow-Up Automation",
        desc: "Ensures every lead receives timely and personalized follow-ups.",
      });
    }
    if (goal.includes("inquiries") || goal.includes("support") || lost.includes("response") || lost.includes("support")) {
      opps.push({
        title: "AI Customer Response Agent",
        desc: "Responds instantly to inquiries, answers questions, and captures new leads 24/7.",
      });
    }
    if (goal.includes("Appointment") || lost.includes("scheduling")) {
      opps.push({
        title: "AI-Powered Appointment Scheduling",
        desc: "Eliminates back-and-forth by letting AI handle booking and reminders.",
      });
    }
    if (goal.includes("Marketing") || lost.includes("content")) {
      opps.push({
        title: "AI Content Generation Engine",
        desc: "Produces marketing copy, social posts, and outreach at scale.",
      });
    }
    if (goal.includes("Lead generation")) {
      opps.push({
        title: "AI Lead Generation System",
        desc: "Identifies and captures qualified prospects through intelligent targeting.",
      });
    }
    if (goal.includes("Internal") || lost.includes("operational")) {
      opps.push({
        title: "AI Workflow Automation",
        desc: "Streamlines internal processes to free up your team's time.",
      });
    }

    if (opps.length === 0) {
      opps.push(
        { title: "AI Lead Qualification System", desc: "Automatically prioritizes high-intent prospects and routes them to the right workflow." },
        { title: "AI Follow-Up Automation", desc: "Ensures every lead receives timely and personalized follow-ups." },
        { title: "AI Customer Response Agent", desc: "Responds instantly to inquiries, answers questions, and captures new leads 24/7." },
      );
    }

    return opps;
  };

  // Analyzing screen
  if (phase === "analyzing") {
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

        <div className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-md w-full text-center">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-8 animate-pulse">
              <Bot className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-3">
              Analyzing Your AI Opportunities…
            </h1>
            <p className="text-muted-foreground text-sm mb-8">
              Evaluating your responses against automation benchmarks
            </p>
            <Progress value={analysisProgress} className="h-2 bg-muted mb-3" />
            <p className="text-xs text-muted-foreground font-mono">
              {analysisProgress < 30
                ? "Mapping business model…"
                : analysisProgress < 60
                ? "Identifying bottlenecks…"
                : analysisProgress < 90
                ? "Generating recommendations…"
                : "Finalizing your report…"}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Results screen
  if (phase === "results") {
    const opportunities = getOpportunities();

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
          <div className="max-w-2xl w-full">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CheckCircle2 className="w-4 h-4" />
                Analysis Complete
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your AI Automation Opportunities
              </h1>
              <p className="text-muted-foreground text-base max-w-xl mx-auto">
                Based on your responses, there are several areas where AI automation could significantly improve efficiency and revenue generation in your business.
              </p>
            </div>

            <p className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider font-mono">
              Potential Automation Systems
            </p>

            <div className="grid gap-4 mb-10">
              {opportunities.map((opp, i) => (
                <div key={i} className="card-surface flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i === 0 ? (
                      <Zap className="w-5 h-5 text-accent" />
                    ) : i === 1 ? (
                      <BarChart3 className="w-5 h-5 text-accent" />
                    ) : (
                      <Bot className="w-5 h-5 text-accent" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{opp.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{opp.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-surface mb-8">
              <p className="text-sm text-muted-foreground">
                The next step is to review these opportunities together and design a tailored automation plan for your business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="cta"
                size="xl"
                className="flex-1 gap-2"
                onClick={() => window.open("#", "_blank")}
              >
                <Calendar className="w-5 h-5" />
                Book Your AI Consultation
              </Button>
              <Button
                variant="ctaOutline"
                size="xl"
                className="flex-1 gap-2"
                onClick={() => window.open("#", "_blank")}
              >
                <Download className="w-5 h-5" />
                Download AI Automation Overview
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Free 30-minute strategy session · No obligation
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Form steps
  return (
    <div className="min-h-screen bg-background flex flex-col">
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
          <span className="font-mono">Step {step} of {TOTAL_STEPS - 1}</span>
          <span className="font-mono">{Math.round((step / (TOTAL_STEPS - 1)) * 100)}%</span>
        </div>
        <Progress value={(step / (TOTAL_STEPS - 1)) * 100} className="h-1.5 bg-muted" />
      </div>

      {/* Content */}
      <div className="flex-1 flex items-start justify-center px-6 py-10 md:py-16">
        <div className="max-w-xl w-full">
          {step === 1 && (
            <div className="animate-fade-up">
              <div className="mb-10">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Discover Where AI Can Automate Your Business
                </h1>
                <p className="text-muted-foreground">
                  Answer a few quick questions and we'll identify the areas where AI
                  automation can improve your revenue, efficiency, and customer communication.
                </p>
              </div>

              <h2 className="text-lg font-semibold text-foreground mb-4">
                What best describes your business model?
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
                How many new inquiries or leads does your business receive each month?
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

          {step === 3 && (
            <div className="animate-fade-up">
              <h2 className="text-lg font-semibold text-foreground mb-2">
                Where do most opportunities get lost in your current process?
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Select the area with the biggest impact.
              </p>
              <div className="grid gap-3">
                {lostOpportunities.map((item) => (
                  <OptionButton
                    key={item}
                    selected={answers.lostOpportunity === item}
                    onClick={() => selectSingle("lostOpportunity", item)}
                  >
                    {item}
                  </OptionButton>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-fade-up">
              <h2 className="text-lg font-semibold text-foreground mb-2">
                Which systems currently manage your leads and customer communication?
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Select all that apply.
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
                What would you most like AI to automate in your business?
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Pick the area with the highest priority.
              </p>
              <div className="grid gap-3">
                {automationGoals.map((goal) => (
                  <OptionButton
                    key={goal}
                    selected={answers.automationGoal === goal}
                    onClick={() => selectSingle("automationGoal", goal)}
                  >
                    {goal}
                  </OptionButton>
                ))}
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="animate-fade-up">
              <h2 className="text-lg font-semibold text-foreground mb-2">
                What is your approximate monthly revenue?
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                This is optional but helps us tailor recommendations to your scale.
              </p>
              <div className="grid gap-3">
                {revenueRanges.map((range) => (
                  <OptionButton
                    key={range}
                    selected={answers.revenue === range}
                    onClick={() => selectSingle("revenue", range)}
                  >
                    {range}
                  </OptionButton>
                ))}
              </div>
            </div>
          )}

          {step === 7 && (
            <div className="animate-fade-up">
              <h2 className="text-lg font-semibold text-foreground mb-2">
                Where should we send your AI Automation Plan?
              </h2>
              <p className="text-sm text-muted-foreground mb-8">
                We'll prepare a personalized automation roadmap for your business.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    placeholder="John Smith"
                    value={answers.name}
                    onChange={(e) => setAnswers((prev) => ({ ...prev, name: e.target.value }))}
                    className="bg-card"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    value={answers.email}
                    onChange={(e) => setAnswers((prev) => ({ ...prev, email: e.target.value }))}
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
                    onChange={(e) => setAnswers((prev) => ({ ...prev, company: e.target.value }))}
                    className="bg-card"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Phone <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={answers.phone}
                    onChange={(e) => setAnswers((prev) => ({ ...prev, phone: e.target.value }))}
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

            <div className="flex flex-col items-end gap-2">
              <Button
                variant="cta"
                onClick={next}
                disabled={!canProceed()}
                className="gap-2"
              >
                {step === 7 ? (
                  "Generate My AI Automation Plan"
                ) : (
                  <>
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
              {step === 7 && (
                <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <Shield className="w-3 h-3" />
                  Your information is kept private and used only to generate your AI automation plan.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAutomationPlan;
