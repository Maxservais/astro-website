import { useEffect, useState, useCallback } from "react";
import { ArrowRight } from "lucide-react";

const scenarios = [
  {
    user: "A new client contract just arrived by email. Process it.",
    agentIntro: "On it! Here's my plan:",
    steps: [
      "Extract contract details from PDF",
      "Create client record in CRM",
      "Notify legal team for review",
      "Schedule onboarding kickoff",
    ],
    result: "Client onboarded in 4 minutes",
  },
  {
    user: "The monthly report is due tomorrow. Can you assemble it?",
    agentIntro: "Sure thing! Working on it:",
    steps: [
      "Pull data from 5 connected tools",
      "Compile KPIs and format tables",
      "Generate executive summary",
      "Send draft to stakeholders",
    ],
    result: "Report delivered to 3 stakeholders",
  },
  {
    user: "We have 12 overdue follow-ups. Handle them.",
    agentIntro: "I'll take care of all 12:",
    steps: [
      "Scan overdue items across tools",
      "Prioritize by urgency and value",
      "Send personalized reminders",
      "Escalate 2 critical items to manager",
    ],
    result: "12 follow-ups resolved, 2 escalated",
  },
];

export function Hero() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [phase, setPhase] = useState<"typing-user" | "typing-agent" | "steps" | "done">("typing-user");
  const [userChars, setUserChars] = useState(0);
  const [agentChars, setAgentChars] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [checkedSteps, setCheckedSteps] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const scenario = scenarios[scenarioIndex];

  const resetAnimation = useCallback(() => {
    setPhase("typing-user");
    setUserChars(0);
    setAgentChars(0);
    setVisibleSteps(0);
    setCheckedSteps(0);
    setShowResult(false);
  }, []);

  // Typing user message
  useEffect(() => {
    if (phase !== "typing-user") return;
    if (userChars < scenario.user.length) {
      const t = setTimeout(() => setUserChars((c) => c + 1), 22);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase("typing-agent"), 400);
    return () => clearTimeout(t);
  }, [phase, userChars, scenario.user.length]);

  // Typing agent intro
  useEffect(() => {
    if (phase !== "typing-agent") return;
    if (agentChars < scenario.agentIntro.length) {
      const t = setTimeout(() => setAgentChars((c) => c + 1), 18);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase("steps"), 300);
    return () => clearTimeout(t);
  }, [phase, agentChars, scenario.agentIntro.length]);

  // Reveal steps one by one
  useEffect(() => {
    if (phase !== "steps") return;
    if (visibleSteps < scenario.steps.length) {
      const t = setTimeout(() => setVisibleSteps((s) => s + 1), 400);
      return () => clearTimeout(t);
    }
    // Start checking them off
    const t = setTimeout(() => setPhase("done"), 300);
    return () => clearTimeout(t);
  }, [phase, visibleSteps, scenario.steps.length]);

  // Check off steps
  useEffect(() => {
    if (phase !== "done") return;
    if (checkedSteps < scenario.steps.length) {
      const t = setTimeout(() => setCheckedSteps((s) => s + 1), 350);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShowResult(true), 500);
    return () => clearTimeout(t);
  }, [phase, checkedSteps, scenario.steps.length]);

  // Auto-cycle to next scenario
  useEffect(() => {
    if (!showResult) return;
    const t = setTimeout(() => {
      setScenarioIndex((i) => (i + 1) % scenarios.length);
      resetAnimation();
    }, 3500);
    return () => clearTimeout(t);
  }, [showResult, resetAnimation]);

  return (
    <section className="pt-28 pb-8 md:pt-40 md:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <h1 className="text-4xl md:text-[3.25rem] lg:text-[3.75rem] font-bold leading-[1.06] tracking-tight text-foreground text-balance">
              Your business runs on workarounds.{" "}
              <span className="text-relay-orange">Agentic AI can fix that.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed">
              Relay embeds with your team to find broken processes and build AI agents that handle them autonomously.
            </p>
            <a
              href="#cta"
              className="mt-8 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-foreground text-primary-foreground text-sm font-semibold hover:bg-foreground/90 transition-colors"
            >
              Book a Discovery Call
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right: interactive agent chat demo */}
          <div className="rounded-[1.75rem] border-2 border-relay-orange/20 bg-card p-6 md:p-8 relative overflow-hidden min-h-[420px] flex flex-col">
            {/* Header tag */}
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-relay-orange/10 text-relay-orange text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-relay-orange animate-pulse" />
                Agentic
              </span>
              <div className="flex gap-1 ml-auto">
                {scenarios.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setScenarioIndex(i); resetAnimation(); }}
                    className={`w-2 h-2 rounded-full transition-colors ${i === scenarioIndex ? "bg-relay-orange" : "bg-border"}`}
                    aria-label={`Scenario ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* User message bubble */}
            <div className="flex justify-end mb-4">
              <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-relay-orange/5 border border-relay-orange/15 px-5 py-3.5">
                <p className="text-sm text-foreground leading-relaxed">
                  {scenario.user.slice(0, userChars)}
                  {phase === "typing-user" && <span className="inline-block w-0.5 h-4 bg-relay-orange ml-0.5 animate-pulse align-middle" />}
                </p>
              </div>
            </div>

            {/* Agent response */}
            {(phase === "typing-agent" || phase === "steps" || phase === "done" || showResult) && (
              <div className="flex justify-start mb-4">
                <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-background border border-border px-5 py-4">
                  <p className="text-sm text-foreground leading-relaxed mb-3">
                    {scenario.agentIntro.slice(0, agentChars)}
                    {phase === "typing-agent" && <span className="inline-block w-0.5 h-4 bg-foreground/40 ml-0.5 animate-pulse align-middle" />}
                  </p>

                  {/* Steps checklist */}
                  <div className="flex flex-col gap-2.5">
                    {scenario.steps.slice(0, visibleSteps).map((step, i) => {
                      const isChecked = i < checkedSteps;
                      return (
                        <div key={i} className="flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isChecked ? "bg-relay-green" : "border-2 border-border"}`}>
                            {isChecked && (
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                            {!isChecked && phase === "steps" && i === visibleSteps - 1 && (
                              <span className="w-2 h-2 rounded-full bg-relay-amber animate-pulse" />
                            )}
                          </div>
                          <span className={`text-sm transition-colors duration-300 ${isChecked ? "text-muted-foreground line-through" : "text-foreground"}`}>
                            {step}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Result card */}
            {showResult && (
              <div className="flex justify-center mt-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="inline-flex items-center gap-2.5 rounded-full bg-relay-green/10 border border-relay-green/20 px-5 py-2.5">
                  <div className="w-5 h-5 rounded-full bg-relay-green flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-relay-green">{scenario.result}</span>
                </div>
              </div>
            )}

            {/* Connection lines decoration */}
            <svg className="absolute bottom-0 left-0 w-full h-16 opacity-[0.04] pointer-events-none" viewBox="0 0 600 60" fill="none">
              <path d="M0 30 Q150 0 300 30 T600 30" stroke="currentColor" strokeWidth="1" />
              <path d="M0 45 Q150 15 300 45 T600 45" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
