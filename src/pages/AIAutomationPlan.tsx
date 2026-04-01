import { useState, useEffect } from "react";
import { CAL_EMBED_URL } from "@/components/CalBookingDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle2, Zap, Bot, BarChart3, Shield, Download, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TOTAL_STEPS = 7;

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

const SelectableCard = ({
  selected,
  onClick,
  children,
  multi = false,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  multi?: boolean;
}) => (
  <button
    onClick={onClick}
    className={`w-full text-left px-5 py-4 rounded-lg border transition-all duration-300 text-sm font-medium ${
      selected
        ? "border-accent bg-accent/5 text-foreground"
        : "border-border bg-[hsl(0_0%_10%)] text-muted-foreground hover:border-muted-foreground/40"
    }`}
    style={selected ? { boxShadow: '0 0 16px -4px hsl(220 70% 55% / 0.35)' } : undefined}
  >
    <span className="flex items-center gap-3">
      <span
        className={`flex-shrink-0 w-5 h-5 ${multi ? 'rounded' : 'rounded-full'} border-2 flex items-center justify-center transition-all duration-300 ${
          selected ? "border-accent bg-accent" : "border-border"
        }`}
      >
        {selected && (
          multi
            ? <CheckCircle2 className="w-3.5 h-3.5 text-accent-foreground" />
            : <span className="w-2 h-2 rounded-full bg-accent-foreground" />
        )}
      </span>
      {children}
    </span>
  </button>
);

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
      case 6: return true;
      case 7: return answers.name.trim() !== "" && answers.email.trim() !== "";
      default: return false;
    }
  };

  const next = () => {
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
    } else {
      setPhase("analyzing");
      setAnalysisProgress(0);
    }
  };

  const back = () => {
    if (step > 1) setStep(step - 1);
  };

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

  const getOpportunities = () => {
    const opps: { id: string; title: string; desc: string }[] = [];
    const goal = answers.automationGoal;
    const lost = answers.lostOpportunity;

    if (goal.includes("qualification") || lost.includes("qualified")) {
      opps.push({ id: "CF-01", title: "AI Lead Qualification System", desc: "Automatically prioritizes high-intent prospects and routes them to the right workflow." });
    }
    if (goal.includes("Follow-ups") || lost.includes("follow-ups")) {
      opps.push({ id: "CF-02", title: "AI Follow-Up Automation", desc: "Ensures every lead receives timely and personalized follow-ups." });
    }
    if (goal.includes("inquiries") || goal.includes("support") || lost.includes("response") || lost.includes("support")) {
      opps.push({ id: "CF-03", title: "AI Customer Response Agent", desc: "Responds instantly to inquiries, answers questions, and captures new leads 24/7." });
    }
    if (goal.includes("Appointment") || lost.includes("scheduling")) {
      opps.push({ id: "CF-04", title: "AI-Powered Appointment Scheduling", desc: "Eliminates back-and-forth by letting AI handle booking and reminders." });
    }
    if (goal.includes("Marketing") || lost.includes("content")) {
      opps.push({ id: "CF-05", title: "AI Content Generation Engine", desc: "Produces marketing copy, social posts, and outreach at scale." });
    }
    if (goal.includes("Lead generation")) {
      opps.push({ id: "CF-06", title: "AI Lead Generation System", desc: "Identifies and captures qualified prospects through intelligent targeting." });
    }
    if (goal.includes("Internal") || lost.includes("operational")) {
      opps.push({ id: "CF-07", title: "AI Workflow Automation", desc: "Streamlines internal processes to free up your team's time." });
    }

    if (opps.length === 0) {
      opps.push(
        { id: "CF-01", title: "AI Lead Qualification System", desc: "Automatically prioritizes high-intent prospects and routes them to the right workflow." },
        { id: "CF-02", title: "AI Follow-Up Automation", desc: "Ensures every lead receives timely and personalized follow-ups." },
        { id: "CF-03", title: "AI Customer Response Agent", desc: "Responds instantly to inquiries, answers questions, and captures new leads 24/7." },
      );
    }

    return opps;
  };

  const NavBar = () => (
    <nav className="border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="section-container flex items-center justify-between h-16">
        <a href="/" className="font-bold text-xl tracking-tight text-foreground">
          <span className="font-mono text-accent">▲</span> Nervo
          <span className="text-muted-foreground font-normal">Tech</span>
        </a>
        <span className="mono-label hidden sm:block">DIAGNOSTIC_WIZARD</span>
      </div>
    </nav>
  );

  // Analyzing screen
  if (phase === "analyzing") {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <NavBar />
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-md w-full text-center">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-8 animate-pulse">
              <Bot className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-3" style={{ letterSpacing: '-0.02em' }}>
              Synthesizing Diagnostic Report…
            </h1>
            <p className="text-muted-foreground text-sm mb-8 font-mono">
              Evaluating responses against automation benchmarks
            </p>
            <Progress value={analysisProgress} className="h-2 bg-muted mb-3" />
            <p className="text-xs text-muted-foreground font-mono">
              {analysisProgress < 30
                ? "MAPPING_BUSINESS_MODEL…"
                : analysisProgress < 60
                ? "IDENTIFYING_BOTTLENECKS…"
                : analysisProgress < 90
                ? "GENERATING_RECOMMENDATIONS…"
                : "FINALIZING_REPORT…"}
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
        <NavBar />
        <div className="flex-1 flex items-center justify-center px-6 py-16">
          <div className="max-w-2xl w-full">
            <div className="text-center mb-10">
              <motion.div
                className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-mono font-medium mb-6"
                animate={{ boxShadow: ['0 0 0px hsl(220 70% 55% / 0)', '0 0 20px hsl(220 70% 55% / 0.3)', '0 0 0px hsl(220 70% 55% / 0)'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <CheckCircle2 className="w-4 h-4" />
                ANALYSIS_COMPLETE
              </motion.div>

              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
                Your AI Automation Opportunities
              </h1>
              <p className="text-muted-foreground text-base max-w-xl mx-auto">
                Based on your responses, there are several areas where AI automation could significantly improve efficiency and revenue generation.
              </p>
            </div>

            <p className="mono-label mb-4">POTENTIAL_AUTOMATION_SYSTEMS</p>

            <div className="grid gap-4 mb-10">
              {opportunities.map((opp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="card-surface relative flex items-start gap-4"
                >
                  <span className="absolute top-4 right-4 font-mono text-xs text-muted-foreground/60">
                    {opp.id}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i === 0 ? <Zap className="w-5 h-5 text-accent" /> : i === 1 ? <BarChart3 className="w-5 h-5 text-accent" /> : <Bot className="w-5 h-5 text-accent" />}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{opp.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{opp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="card-surface mb-8">
              <p className="text-sm text-muted-foreground">
                The next step is to review these opportunities together and design a tailored automation plan for your business.
              </p>
            </div>

            <p className="mono-label mb-4">SCHEDULE_DISCOVERY_SESSION</p>
            <div className="rounded-xl overflow-hidden border border-border bg-[hsl(0_0%_6%)] mb-8">
              <iframe
                src={`${CAL_EMBED_URL}?embed=true&theme=dark`}
                className="w-full border-0"
                style={{ minHeight: '600px', colorScheme: 'dark' }}
                title="Schedule a discovery session"
                allow="payment"
              />
            </div>

            <div className="flex justify-center">
              <Button
                variant="ctaOutline"
                size="xl"
                className="gap-2"
                onClick={() => window.open("#", "_blank")}
              >
                <Download className="w-5 h-5" />
                Download Overview
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center font-mono">
              FREE_30_MIN_SESSION · NO_OBLIGATION
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Form steps
  const progressPercent = Math.round((step / TOTAL_STEPS) * 100);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavBar />

      {/* Progress */}
      <div className="section-container pt-6">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
          <span className="font-mono">STEP_{step}_OF_{TOTAL_STEPS}</span>
          <span className="font-mono">{progressPercent}%</span>
        </div>
        <Progress value={progressPercent} className="h-1.5 bg-muted" />
      </div>

      {/* Content */}
      <div className="flex-1 flex items-start justify-center px-6 py-10 md:py-16">
        <div className="max-w-xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {step === 1 && (
                <div>
                  <div className="mb-10">
                    <p className="mono-label mb-3">SYSTEMIC_AUTOMATION_DIAGNOSTIC</p>
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3" style={{ letterSpacing: '-0.02em' }}>
                      Systemic Automation Diagnostic
                    </h1>
                    <p className="text-muted-foreground">
                      Answer a few quick questions and we'll identify where AI automation can improve your revenue, efficiency, and customer communication.
                    </p>
                  </div>
                  <h2 className="text-lg font-semibold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
                    What best describes your business model?
                  </h2>
                  <div className="grid gap-3">
                    {businessTypes.map((type) => (
                      <SelectableCard key={type} selected={answers.businessType === type} onClick={() => selectSingle("businessType", type)}>
                        {type}
                      </SelectableCard>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-2" style={{ letterSpacing: '-0.02em' }}>
                    How many new inquiries or leads does your business receive each month?
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6 font-mono">IMPACT_ESTIMATION</p>
                  <div className="grid gap-3">
                    {leadVolumes.map((vol) => (
                      <SelectableCard key={vol} selected={answers.leadVolume === vol} onClick={() => selectSingle("leadVolume", vol)}>
                        {vol}
                      </SelectableCard>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-2" style={{ letterSpacing: '-0.02em' }}>
                    Identify Primary Operational Latency
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6 font-mono">SELECT_HIGHEST_IMPACT_AREA</p>
                  <div className="grid gap-3">
                    {lostOpportunities.map((item) => (
                      <SelectableCard key={item} selected={answers.lostOpportunity === item} onClick={() => selectSingle("lostOpportunity", item)}>
                        {item}
                      </SelectableCard>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-2" style={{ letterSpacing: '-0.02em' }}>
                    Which systems manage your leads and customer communication?
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6 font-mono">SELECT_ALL_APPLICABLE</p>
                  <div className="grid gap-3">
                    {currentTools.map((tool) => (
                      <SelectableCard key={tool} selected={answers.tools.includes(tool)} onClick={() => toggleTool(tool)} multi>
                        {tool}
                      </SelectableCard>
                    ))}
                  </div>
                </div>
              )}

              {step === 5 && (
                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-2" style={{ letterSpacing: '-0.02em' }}>
                    What would you most like AI to automate?
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6 font-mono">PRIORITY_SELECTION</p>
                  <div className="grid gap-3">
                    {automationGoals.map((goal) => (
                      <SelectableCard key={goal} selected={answers.automationGoal === goal} onClick={() => selectSingle("automationGoal", goal)}>
                        {goal}
                      </SelectableCard>
                    ))}
                  </div>
                </div>
              )}

              {step === 6 && (
                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-2" style={{ letterSpacing: '-0.02em' }}>
                    Approximate monthly revenue?
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6 font-mono">OPTIONAL_CALIBRATION</p>
                  <div className="grid gap-3">
                    {revenueRanges.map((range) => (
                      <SelectableCard key={range} selected={answers.revenue === range} onClick={() => selectSingle("revenue", range)}>
                        {range}
                      </SelectableCard>
                    ))}
                  </div>
                </div>
              )}

              {step === 7 && (
                <div>
                  <h2 className="text-lg font-semibold text-foreground mb-2" style={{ letterSpacing: '-0.02em' }}>
                    Where should we send your automation roadmap?
                  </h2>
                  <p className="text-sm text-muted-foreground mb-8 font-mono">DELIVERY_CONFIGURATION</p>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Name <span className="text-destructive">*</span>
                      </label>
                      <Input placeholder="John Smith" value={answers.name} onChange={(e) => setAnswers((prev) => ({ ...prev, name: e.target.value }))} className="bg-card" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <Input type="email" placeholder="john@company.com" value={answers.email} onChange={(e) => setAnswers((prev) => ({ ...prev, email: e.target.value }))} className="bg-card" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                      <Input placeholder="Acme Inc." value={answers.company} onChange={(e) => setAnswers((prev) => ({ ...prev, company: e.target.value }))} className="bg-card" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">
                        Phone <span className="text-muted-foreground font-normal font-mono text-xs">(OPTIONAL)</span>
                      </label>
                      <Input type="tel" placeholder="+1 (555) 000-0000" value={answers.phone} onChange={(e) => setAnswers((prev) => ({ ...prev, phone: e.target.value }))} className="bg-card" />
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
            {step > 1 ? (
              <Button variant="ghost" onClick={back} className="gap-2 font-mono text-xs">
                <ArrowLeft className="w-4 h-4" />
                BACK
              </Button>
            ) : (
              <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono text-xs">
                ← BACK_TO_SITE
              </a>
            )}

            <div className="flex flex-col items-end gap-2">
              {step === 7 ? (
                <Button
                  onClick={next}
                  disabled={!canProceed()}
                  className="gap-2 font-semibold text-accent-foreground font-mono"
                  size="lg"
                  style={{
                    background: 'linear-gradient(135deg, hsl(220 70% 55%), hsl(240 60% 50%))',
                    boxShadow: canProceed() ? '0 0 20px -4px hsl(220 70% 55% / 0.4)' : 'none',
                  }}
                >
                  Synthesize Custom Roadmap
                </Button>
              ) : (
                <Button variant="cta" onClick={next} disabled={!canProceed()} className="gap-2 font-mono text-xs">
                  CONTINUE
                  <ArrowRight className="w-4 h-4" />
                </Button>
              )}
              {step === 7 && (
                <p className="text-xs text-muted-foreground flex items-center gap-1.5 font-mono">
                  <Shield className="w-3 h-3" />
                  PRIVACY_GUARANTEED
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <CalBookingDialog open={calOpen} onOpenChange={setCalOpen} />
    </div>
  );
};

export default AIAutomationPlan;
