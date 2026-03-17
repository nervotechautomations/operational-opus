import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Gauge,
  Shield,
  Zap,
  MessageSquare,
  Target,
  TrendingUp,
  Clock,
  CheckCircle2,
  Calendar,
  Video,
  Mail,
  Bell,
} from "lucide-react";

/* ─── Types ─── */
interface Question {
  title: string;
  options: string[];
}

interface ContactInfo {
  name: string;
  email: string;
  company: string;
  phone: string;
}

/* ─── Data ─── */
const questions: Question[] = [
  {
    title: "How do new leads usually contact your business?",
    options: [
      "Phone calls or emails only",
      "Website forms",
      "Forms plus scheduling links",
      "Automated systems capture and route leads instantly",
    ],
  },
  {
    title: "How quickly does your business respond to new inquiries?",
    options: [
      "Within 24 hours",
      "Within a few hours",
      "Within 1 hour",
      "Instantly through automation",
    ],
  },
  {
    title: "How do you determine which leads are most likely to convert?",
    options: [
      "We manually review each inquiry",
      "We use basic filters or intake forms",
      "Our CRM helps prioritize leads",
      "AI scoring automatically prioritizes high-intent leads",
    ],
  },
  {
    title: "How much information do you collect about leads before following up?",
    options: [
      "Name and contact info only",
      "Basic information about their needs",
      "Detailed intake forms or questionnaires",
      "Our system automatically enriches and scores leads",
    ],
  },
  {
    title: "How are follow-ups handled after someone contacts your business?",
    options: [
      "We follow up manually when we can",
      "We use reminders or templates",
      "Automated follow-up sequences",
      "AI generates personalized follow-ups automatically",
    ],
  },
  {
    title: "How do customers get answers to questions about your services?",
    options: [
      "Email or phone only",
      "Staff respond manually",
      "Website chat or support system",
      "AI chat or voice assistants handle inquiries instantly",
    ],
  },
  {
    title: "How often do you test different marketing messages, ads, or offers?",
    options: [
      "Rarely or never",
      "Occasionally",
      "We regularly test variations",
      "Automated systems continuously test and optimize campaigns",
    ],
  },
  {
    title: "How much of your marketing and lead management runs automatically today?",
    options: [
      "Almost everything is manual",
      "Some workflows are automated",
      "Most workflows are automated",
      "We operate with advanced AI-driven growth systems",
    ],
  },
];

// Category mapping: each question maps to a category
const categories = [
  { name: "Lead Capture Automation", icon: Target, questionIdx: 0 },
  { name: "Lead Response Speed", icon: Clock, questionIdx: 1 },
  { name: "Lead Qualification", icon: Shield, questionIdx: [2, 3] },
  { name: "Follow-Up Automation", icon: Zap, questionIdx: 4 },
  { name: "Growth Optimization", icon: TrendingUp, questionIdx: [5, 6, 7] },
];

const maturityStages = [
  { label: "Manual Operations", range: "0–30", min: 0, max: 30 },
  { label: "Basic Automation", range: "30–60", min: 30, max: 60 },
  { label: "Advanced Automation", range: "60–80", min: 60, max: 80 },
  { label: "AI-Optimized Growth", range: "80–100", min: 80, max: 100 },
];

const analysisMessages = [
  "Scanning lead capture infrastructure…",
  "Evaluating response speed systems…",
  "Analyzing follow-up automation…",
  "Calculating AI Growth Score…",
];

/* ─── Scoring ─── */
function calculateScore(answers: Record<number, number>) {
  // Each question: option index 0=1pt, 1=2pt, 2=3pt, 3=4pt → max 32, scaled to 100
  let raw = 0;
  for (let i = 0; i < 8; i++) {
    raw += (answers[i] ?? 0) + 1;
  }
  return Math.round((raw / 32) * 100);
}

function getCategoryScore(answers: Record<number, number>, questionIdx: number | number[]) {
  const idxs = Array.isArray(questionIdx) ? questionIdx : [questionIdx];
  let raw = 0;
  for (const i of idxs) raw += (answers[i] ?? 0) + 1;
  return Math.round((raw / (idxs.length * 4)) * 100);
}

function getMaturityStage(score: number) {
  if (score >= 80) return 3;
  if (score >= 60) return 2;
  if (score >= 30) return 1;
  return 0;
}

function getRecommendations(answers: Record<number, number>) {
  const recs: { title: string; description: string }[] = [];
  if ((answers[0] ?? 0) < 2)
    recs.push({ title: "AI Lead Capture System", description: "Automatically captures, routes, and categorizes inbound leads from every channel." });
  if ((answers[1] ?? 0) < 2)
    recs.push({ title: "Instant Response Automation", description: "Responds to new inquiries within seconds, 24/7, so no lead goes cold." });
  if ((answers[2] ?? 0) < 2 || (answers[3] ?? 0) < 2)
    recs.push({ title: "AI Lead Qualification System", description: "Automatically prioritizes high-intent prospects and routes them to the right workflow." });
  if ((answers[4] ?? 0) < 2)
    recs.push({ title: "AI Follow-Up Automation", description: "Ensures every lead receives timely and personalized follow-ups without manual effort." });
  if ((answers[5] ?? 0) < 2)
    recs.push({ title: "AI Customer Response Agent", description: "Responds instantly to inquiries, answers questions, and captures new leads 24/7." });
  if ((answers[6] ?? 0) < 2 || (answers[7] ?? 0) < 2)
    recs.push({ title: "AI Growth Optimization Engine", description: "Continuously tests ads, funnels, and marketing strategies to maximize ROI." });
  if (recs.length === 0)
    recs.push({ title: "AI Growth Infrastructure", description: "Maintain and expand your advanced automation with continuous optimization systems." });
  return recs;
}

/* ─── Components ─── */
function OptionButton({
  label,
  selected,
  onClick,
  index,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      className={`w-full text-left px-5 py-4 rounded-lg border transition-all duration-200 ${
        selected
          ? "border-accent bg-accent/10 ring-1 ring-accent/30"
          : "border-border bg-card hover:border-accent/40 hover:bg-accent/5"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
            selected ? "border-accent bg-accent" : "border-muted-foreground/30"
          }`}
        >
          {selected && <CheckCircle2 size={12} className="text-accent-foreground" />}
        </div>
        <span className="text-sm text-foreground">{label}</span>
      </div>
    </motion.button>
  );
}

function ScoreGauge({ score, animated }: { score: number; animated: boolean }) {
  const circumference = 2 * Math.PI * 80;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-48 h-48 md:w-56 md:h-56">
        <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
          <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
          <motion.circle
            cx="100" cy="100" r="80"
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={animated ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">AI Growth Score</p>
          <motion.p
            className="text-5xl font-bold text-foreground mt-1"
            initial={{ opacity: 0 }}
            animate={animated ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {score}
          </motion.p>
          <p className="text-sm text-muted-foreground font-mono">/ 100</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ─── */
const AIGrowthScore = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<"intro" | "quiz" | "contact" | "analyzing" | "results">("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [contact, setContact] = useState<ContactInfo>({ name: "", email: "", company: "", phone: "" });
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisMsg, setAnalysisMsgIdx] = useState(0);

  const totalSteps = questions.length;
  const progressPercent = phase === "quiz" ? ((step + 1) / (totalSteps + 1)) * 100 : phase === "contact" ? 100 : 0;

  // Analysis animation
  useEffect(() => {
    if (phase !== "analyzing") return;
    setAnalysisProgress(0);
    setAnalysisMsgIdx(0);
    const interval = setInterval(() => {
      setAnalysisProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase("results"), 400);
          return 100;
        }
        return p + 4;
      });
      setAnalysisMsgIdx((m) => Math.min(m + 1, analysisMessages.length - 1));
    }, 100);
    return () => clearInterval(interval);
  }, [phase]);

  const selectAnswer = (optionIdx: number) => {
    setAnswers((a) => ({ ...a, [step]: optionIdx }));
    // Auto-advance after short delay
    setTimeout(() => {
      if (step < totalSteps - 1) setStep((s) => s + 1);
      else setPhase("contact");
    }, 300);
  };

  const handleSubmit = () => {
    if (!contact.name || !contact.email) return;
    setPhase("analyzing");
  };

  const score = calculateScore(answers);
  const stageIdx = getMaturityStage(score);
  const recommendations = getRecommendations(answers);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <AnimatePresence mode="wait">
        {/* ─── INTRO ─── */}
        {phase === "intro" && (
          <motion.section
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="section-padding"
          >
            <div className="section-container max-w-2xl text-center">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full mb-6">
                <Gauge size={14} />
                <span className="font-mono text-xs font-medium uppercase tracking-wider">System Diagnostic</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Check Your AI Growth Score
              </h1>
              <p className="text-lg text-muted-foreground mb-2">
                Discover how automated your marketing, lead management, and customer communication systems are.
              </p>
              <p className="text-sm text-muted-foreground mb-8 max-w-lg mx-auto">
                Answer a few quick questions and our system will analyze how optimized your business is for AI-driven growth.
              </p>
              <Button variant="cta" size="xl" onClick={() => setPhase("quiz")} className="group">
                Start AI Growth Analysis
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
              </Button>
              <p className="text-xs text-muted-foreground mt-3 font-mono">Takes about 30 seconds.</p>
            </div>
          </motion.section>
        )}

        {/* ─── QUIZ ─── */}
        {phase === "quiz" && (
          <motion.section
            key={`quiz-${step}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="section-padding"
          >
            <div className="section-container max-w-xl">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-muted-foreground">
                    Step {step + 1} of {totalSteps}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {Math.round(progressPercent)}%
                  </span>
                </div>
                <Progress value={progressPercent} className="h-1.5" />
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                {questions[step].title}
              </h2>

              <div className="space-y-3">
                {questions[step].options.map((opt, i) => (
                  <OptionButton
                    key={i}
                    label={opt}
                    selected={answers[step] === i}
                    onClick={() => selectAnswer(i)}
                    index={i}
                  />
                ))}
              </div>

              {step > 0 && (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft size={14} /> Previous question
                </button>
              )}
            </div>
          </motion.section>
        )}

        {/* ─── CONTACT ─── */}
        {phase === "contact" && (
          <motion.section
            key="contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="section-padding"
          >
            <div className="section-container max-w-md">
              <div className="mb-2">
                <Progress value={100} className="h-1.5" />
              </div>
              <p className="font-mono text-xs text-muted-foreground mb-8">All questions completed</p>

              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                Where should we send your AI Growth Score report?
              </h2>
              <p className="text-sm text-muted-foreground mb-8">
                We'll generate a personalized analysis of your automation infrastructure.
              </p>

              <div className="space-y-4">
                <Input
                  placeholder="Name"
                  value={contact.name}
                  onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={contact.email}
                  onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                />
                <Input
                  placeholder="Company Name"
                  value={contact.company}
                  onChange={(e) => setContact((c) => ({ ...c, company: e.target.value }))}
                />
                <Input
                  placeholder="Phone (optional)"
                  value={contact.phone}
                  onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                />
              </div>

              <Button
                variant="cta"
                size="lg"
                className="w-full mt-6"
                onClick={handleSubmit}
                disabled={!contact.name || !contact.email}
              >
                Generate My AI Growth Score
                <ArrowRight size={18} />
              </Button>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                Your information is kept private and used only to generate your AI Growth Score report.
              </p>

              <button
                onClick={() => { setPhase("quiz"); setStep(totalSteps - 1); }}
                className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={14} /> Back to questions
              </button>
            </div>
          </motion.section>
        )}

        {/* ─── ANALYZING ─── */}
        {phase === "analyzing" && (
          <motion.section
            key="analyzing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="section-padding"
          >
            <div className="section-container max-w-md text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                <Gauge size={28} className="text-accent animate-pulse" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                Analyzing Your AI Growth Infrastructure…
              </h2>
              <p className="text-sm text-muted-foreground mb-6 font-mono">
                {analysisMessages[Math.min(analysisMsg, analysisMessages.length - 1)]}
              </p>
              <Progress value={analysisProgress} className="h-1.5 max-w-xs mx-auto" />
            </div>
          </motion.section>
        )}

        {/* ─── RESULTS ─── */}
        {phase === "results" && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Score Hero */}
            <section className="section-padding pb-8">
              <div className="section-container max-w-3xl text-center">
                <p className="mono-label mb-4">Diagnostic Complete</p>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Your AI Growth Score
                </h1>
                <ScoreGauge score={score} animated />
                {/* 1–2 sentence insight */}
                <motion.p
                  className="text-base md:text-lg text-muted-foreground mt-6 max-w-lg mx-auto"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  {score < 30
                    ? "Your business is mostly manual — there's massive room for AI automation to accelerate growth."
                    : score < 60
                    ? "You've started automating, but key gaps are leaving revenue on the table."
                    : score < 80
                    ? "Your automation is solid. A few targeted AI systems could unlock the next level."
                    : "You're highly automated — let's fine-tune for maximum ROI."}
                </motion.p>
              </div>
            </section>

            {/* 👉 BOOKING SECTION — immediately after score */}
            <section className="pb-16 pt-4">
              <div className="section-container max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  <div className="text-center mb-8">
                    <span className="mono-label mb-3 block">Free Consultation</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                      See How to Improve Your AI Growth Score
                    </h2>
                    <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                      Choose a time that works for you and we'll review your AI Growth Score, automation opportunities, and recommended next steps.
                    </p>
                  </div>

                  {/* Trust Row */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
                    {[
                      { icon: Clock, label: "30-minute strategy call" },
                      { icon: Video, label: "Google Meet link included" },
                      { icon: Calendar, label: "Calendar invite sent automatically" },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon size={16} className="text-accent shrink-0" />
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Cal.com Embed Area */}
                  <div className="card-surface border-2 border-dashed border-accent/20 rounded-lg p-8 md:p-12 mb-6">
                    {/* Initialize Cal.com embed here: https://cal.com/docs/embeds */}
                    <div id="cal-embed" className="min-h-[400px] flex items-center justify-center">
                      <div className="text-center">
                        <Calendar size={40} className="text-accent/40 mx-auto mb-4" />
                        <p className="text-sm font-medium text-muted-foreground">
                          Scheduling widget loading…
                        </p>
                        <p className="text-xs text-muted-foreground/60 mt-1">
                          Select a date and time for your free 30-minute consultation
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Post-Booking Info */}
                  <div className="card-surface bg-accent/5 border-accent/10 rounded-lg p-5 mb-6">
                    <p className="text-xs font-semibold text-foreground mb-2">After booking, you'll receive:</p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                      {[
                        { icon: Mail, text: "Email confirmation immediately" },
                        { icon: Video, text: "Google Meet link for the call" },
                        { icon: Bell, text: "Automatic reminder 15 min before" },
                      ].map(({ icon: Icon, text }) => (
                        <div key={text} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Icon size={14} className="text-accent shrink-0" />
                          <span>{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fallback */}
                  <p className="text-xs text-muted-foreground text-center">
                    Having trouble with the scheduler?{" "}
                    <a href="mailto:hello@example.com" className="text-accent hover:underline font-medium">
                      Contact us directly
                    </a>
                  </p>
                </motion.div>
              </div>
            </section>

            {/* Maturity Map */}
            <section className="pb-16">
              <div className="section-container max-w-3xl">
                <h2 className="text-lg font-bold text-foreground mb-6">AI Automation Maturity Map</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {maturityStages.map((stage, i) => (
                    <motion.div
                      key={stage.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                      className={`rounded-lg border p-4 text-center transition-all ${
                        i === stageIdx
                          ? "border-accent bg-accent/10 ring-1 ring-accent/30"
                          : "border-border bg-card"
                      }`}
                    >
                      <p className="font-mono text-[10px] text-muted-foreground mb-1">{stage.range}</p>
                      <p className={`text-xs font-semibold ${i === stageIdx ? "text-accent" : "text-foreground"}`}>
                        {stage.label}
                      </p>
                      {i === stageIdx && (
                        <p className="text-[10px] text-accent font-mono mt-1">← You are here</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Category Breakdown */}
            <section className="pb-16">
              <div className="section-container max-w-3xl">
                <h2 className="text-lg font-bold text-foreground mb-6">Category Breakdown</h2>
                <div className="space-y-4">
                  {categories.map((cat, i) => {
                    const catScore = getCategoryScore(answers, cat.questionIdx);
                    return (
                      <motion.div
                        key={cat.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 + i * 0.1 }}
                        className="card-surface flex items-center gap-4"
                      >
                        <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <cat.icon size={16} className="text-accent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1.5">
                            <p className="text-sm font-medium text-foreground">{cat.name}</p>
                            <span className="font-mono text-xs text-muted-foreground">{catScore}/100</span>
                          </div>
                          <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-accent rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${catScore}%` }}
                              transition={{ duration: 1, delay: 1.8 + i * 0.1 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Recommendations */}
            <section className="pb-16">
              <div className="section-container max-w-3xl">
                <h2 className="text-lg font-bold text-foreground mb-2">Recommended AI Systems</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Based on your responses, your business could improve automation with:
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  {recommendations.map((rec, i) => (
                    <motion.div
                      key={rec.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2 + i * 0.1 }}
                      className="card-surface"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">{rec.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">{rec.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="card-surface mt-4 bg-accent/5 border-accent/20">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Advanced insight:</span>{" "}
                    Businesses looking to reach AI-Optimized Growth often implement AI Growth Infrastructure that continuously tests ads, funnels, and marketing strategies.
                  </p>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section className="pb-16">
              <div className="section-container max-w-3xl text-center">
                <Button variant="ctaOutline" size="lg" onClick={() => navigate("/ai-automation-plan")}>
                  Get Your AI Automation Plan
                  <ArrowRight size={18} />
                </Button>
              </div>
            </section>

            {/* Sticky bottom CTA */}
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 0.4 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-t border-border py-3 px-4"
            >
              <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-foreground hidden sm:block">
                  Ready to improve your score?
                </p>
                <Button
                  variant="cta"
                  size="default"
                  className="w-full sm:w-auto"
                  onClick={() => document.getElementById("cal-embed")?.scrollIntoView({ behavior: "smooth", block: "center" })}
                >
                  Book Your Free Consultation
                  <ArrowRight size={16} />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default AIGrowthScore;
