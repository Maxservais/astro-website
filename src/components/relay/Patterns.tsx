import { useState, useRef } from "react";

function FollowUpIllustration() {
  return (
    <div className="flex flex-col gap-3">
      {/* Reminder queue */}
      <div className="bg-white/60 rounded-2xl border border-amber-100/60 overflow-hidden shadow-sm">
        <div className="px-5 py-3 border-b border-amber-50 flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-relay-amber" />
          <span className="text-xs font-semibold text-foreground/35 uppercase tracking-wider">Follow-ups</span>
        </div>
        {[
          { name: "Invoice #304", who: "JL", time: "2d overdue", status: "Escalated", statusBg: "bg-red-50 text-red-400" },
          { name: "Contract sign-off", who: "MK", time: "Due today", status: "Reminded", statusBg: "bg-amber-50 text-amber-500" },
          { name: "Budget approval", who: "SV", time: "1d left", status: "On track", statusBg: "bg-emerald-50 text-emerald-500" },
        ].map((item, i) => (
          <div key={item.name} className={`px-5 py-3.5 flex items-center gap-3 ${i < 2 ? "border-b border-amber-50/60" : ""}`}>
            <div className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center text-xs font-bold text-foreground/30 flex-shrink-0 border border-amber-100/60">
              {item.who}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground/60 truncate">{item.name}</p>
              <p className="text-xs text-foreground/25">{item.time}</p>
            </div>
            <span className={`text-[10px] font-semibold uppercase tracking-wide rounded-full px-2.5 py-1 flex-shrink-0 ${item.statusBg}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
      {/* Auto-action badge */}
      <div className="flex items-center gap-2 ml-1">
        <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
          <path d="M6 1L2 7h3.5L5 11l5-6H6.5L7 1z" stroke="#F59E0B" strokeWidth="0.8" fill="#F59E0B" fillOpacity="0.15" />
        </svg>
        <span className="text-xs font-medium text-relay-amber/70">3 auto-escalations this week</span>
      </div>
    </div>
  );
}

function CascadeIllustration() {
  return (
    <div className="flex flex-col items-center gap-5">
      {/* Trigger event */}
      <div className="bg-white/70 rounded-xl border border-indigo-100/60 px-5 py-3 flex items-center gap-3 shadow-sm">
        <div className="w-8 h-8 rounded-lg bg-relay-indigo/15 flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 12 12" fill="none">
            <path d="M6 1L2 7h3.5L5 11l5-6H6.5L7 1z" stroke="#5B5FC7" strokeWidth="0.8" fill="#5B5FC7" fillOpacity="0.15" />
          </svg>
        </div>
        <span className="text-sm font-medium text-foreground/50">New deal closed</span>
      </div>

      {/* Cascade arrows */}
      <svg width="180" height="36" viewBox="0 0 120 24" fill="none">
        <path d="M60 0V8 M60 8L20 20 M60 8L60 20 M60 8L100 20" stroke="#5B5FC7" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
        <path d="M17 17L20 21L23 17" stroke="#5B5FC7" strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />
        <path d="M57 17L60 21L63 17" stroke="#5B5FC7" strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />
        <path d="M97 17L100 21L103 17" stroke="#5B5FC7" strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />
      </svg>

      {/* Target systems */}
      <div className="flex gap-6 w-full justify-center">
        {[
          { name: "CRM", icon: "📊" },
          { name: "ERP", icon: "⚙️" },
          { name: "Slack", icon: "💬" },
        ].map((sys) => (
          <div key={sys.name} className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-2xl bg-white/70 border border-indigo-100/60 flex items-center justify-center shadow-sm">
              <span className="text-xl">{sys.icon}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                <circle cx="5" cy="5" r="4" fill="#5B5FC7" fillOpacity="0.15" stroke="#5B5FC7" strokeWidth="0.6" />
                <path d="M3 5L4.5 6.5L7 3.5" stroke="#5B5FC7" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs font-medium text-foreground/35">{sys.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Status line */}
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-relay-indigo animate-pulse" />
        <span className="text-xs font-medium text-relay-indigo/60">3 systems updated in 2s</span>
      </div>
    </div>
  );
}

function DocumentIntakeIllustration() {
  return (
    <div className="flex flex-col gap-4">
      {/* PDF document being processed */}
      <div className="flex gap-4 items-start">
        {/* Source PDF */}
        <div className="bg-white/60 rounded-xl border border-green-100/60 p-4 flex-shrink-0 w-[120px]">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-7 rounded-sm bg-red-100 flex items-center justify-center">
              <span className="text-[8px] font-bold text-red-400">PDF</span>
            </div>
            <span className="text-xs text-foreground/30 font-medium">invoice.pdf</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="h-1.5 bg-green-100/80 rounded-full w-full" />
            <div className="h-1.5 bg-green-100/80 rounded-full w-4/5" />
            <div className="h-1.5 bg-green-100/60 rounded-full w-full" />
            <div className="h-1.5 bg-green-100/60 rounded-full w-3/5" />
          </div>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0 pt-8">
          <svg width="28" height="16" viewBox="0 0 20 12" fill="none">
            <path d="M1 6H16M13 2.5L17 6L13 9.5" stroke="#3D8B5F" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
          </svg>
        </div>

        {/* Extracted data */}
        <div className="bg-white/70 rounded-xl border border-green-100/60 p-4 flex-1 shadow-sm">
          <span className="text-[10px] font-semibold text-emerald-600/60 uppercase tracking-wider">Extracted</span>
          <div className="mt-2.5 flex flex-col gap-2.5">
            {[
              { field: "Vendor", value: "Acme Inc." },
              { field: "Amount", value: "$4,200" },
              { field: "Due", value: "Mar 15" },
            ].map((row) => (
              <div key={row.field} className="flex items-center justify-between">
                <span className="text-xs text-foreground/25">{row.field}</span>
                <span className="text-xs font-medium text-foreground/50">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Validation + routing */}
      <div className="flex items-center gap-3 ml-1">
        <div className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5" fill="#3D8B5F" fillOpacity="0.1" stroke="#3D8B5F" strokeWidth="0.6" />
            <path d="M3.5 6L5.5 8L8.5 4" stroke="#3D8B5F" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-xs font-medium text-emerald-600/60">Valid</span>
        </div>
        <div className="w-px h-3.5 bg-green-200/50" />
        <div className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="#3D8B5F" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
          </svg>
          <span className="text-xs font-medium text-emerald-600/60">Routed to Finance</span>
        </div>
      </div>
    </div>
  );
}

function ReportsIllustration() {
  return (
    <div className="flex flex-col gap-4">
      {/* Data sources row */}
      <div className="flex gap-3">
        {[
          { name: "Sales", color: "bg-blue-100/60 text-blue-400" },
          { name: "Support", color: "bg-blue-100/60 text-blue-400" },
          { name: "Finance", color: "bg-blue-100/60 text-blue-400" },
        ].map((src) => (
          <div key={src.name} className={`flex-1 rounded-xl px-3 py-2.5 text-center text-xs font-medium ${src.color} bg-white/50 border border-blue-100/40`}>
            {src.name}
          </div>
        ))}
      </div>

      {/* Report card */}
      <div className="bg-white/70 rounded-2xl border border-blue-100/60 overflow-hidden shadow-sm">
        <div className="px-5 py-3 border-b border-blue-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-relay-blue/15 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 8 8" fill="none">
                <rect x="0.5" y="0.5" width="7" height="7" rx="1" stroke="#3B82F6" strokeWidth="0.5" opacity="0.5" />
                <line x1="2" y1="3" x2="6" y2="3" stroke="#3B82F6" strokeWidth="0.4" opacity="0.4" />
                <line x1="2" y1="5" x2="5" y2="5" stroke="#3B82F6" strokeWidth="0.4" opacity="0.4" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-foreground/40">Weekly Report</span>
          </div>
          <span className="text-[10px] font-medium text-emerald-500 bg-emerald-50 rounded-full px-2.5 py-1">Auto-generated</span>
        </div>
        <div className="px-5 py-4">
          {/* Mini bar chart */}
          <div className="flex gap-2 items-end h-16 mb-3">
            {[35, 55, 45, 70, 60, 48, 65].map((h, i) => (
              <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: `rgba(59,130,246,${0.15 + i * 0.04})` }} />
            ))}
          </div>
          {/* Metrics row */}
          <div className="flex gap-4 mt-3">
            {[
              { label: "Revenue", value: "$48.2k", change: "+12%" },
              { label: "Tickets", value: "142", change: "-8%" },
            ].map((m) => (
              <div key={m.label} className="flex-1">
                <p className="text-[10px] text-foreground/25 uppercase">{m.label}</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-base font-semibold text-foreground/50">{m.value}</span>
                  <span className={`text-[10px] font-medium ${m.change.startsWith("+") ? "text-emerald-400" : "text-red-300"}`}>{m.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MultiStakeholderIllustration() {
  return (
    <div className="flex flex-col gap-3">
      {/* Workflow timeline */}
      <div className="bg-white/60 rounded-2xl border border-orange-100/60 overflow-hidden shadow-sm">
        <div className="px-5 py-3 border-b border-orange-50 flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-relay-orange" />
          <span className="text-xs font-semibold text-foreground/35 uppercase tracking-wider">Workflow</span>
          <span className="ml-auto text-xs text-foreground/25">3 of 4 steps</span>
        </div>
        {[
          { person: "AK", step: "Submit request", status: "done" as const },
          { person: "LM", step: "Manager review", status: "done" as const },
          { person: "CF", step: "Finance approval", status: "active" as const },
          { person: "HR", step: "Final sign-off", status: "pending" as const },
        ].map((item, i) => (
          <div key={item.step} className={`px-5 py-3.5 flex items-center gap-3 ${i < 3 ? "border-b border-orange-50/60" : ""}`}>
            {/* Status indicator */}
            <div className="flex flex-col items-center flex-shrink-0">
              {item.status === "done" ? (
                <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                    <path d="M2.5 5L4.5 7L7.5 3" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              ) : item.status === "active" ? (
                <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-relay-orange animate-pulse" />
                </div>
              ) : (
                <div className="w-7 h-7 rounded-full bg-gray-50 border border-gray-200/60" />
              )}
            </div>
            <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[10px] font-bold text-foreground/25 flex-shrink-0">
              {item.person}
            </div>
            <span className={`text-sm flex-1 ${item.status === "pending" ? "text-foreground/25" : "text-foreground/50"} ${item.status === "active" ? "font-medium" : ""}`}>
              {item.step}
            </span>
            {item.status === "active" && (
              <span className="text-[10px] font-semibold text-relay-orange bg-orange-50 rounded-full px-2.5 py-1">Now</span>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 ml-1">
        <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="4.5" stroke="#F97316" strokeWidth="0.6" opacity="0.4" />
          <path d="M6 3.5V6L7.5 7" stroke="#F97316" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
        </svg>
        <span className="text-xs font-medium text-relay-orange/60">Avg. completion: 1.2 days</span>
      </div>
    </div>
  );
}

const patterns = [
  {
    num: 1,
    title: "Follow-Up Loop",
    description: "Chasing docs, approvals, and overdue items",
    before: "Someone manually tracks follow-ups in spreadsheets, sends reminder emails, and escalates when deadlines pass.",
    after: "An agent monitors deadlines, sends contextual reminders, escalates automatically, and closes the loop.",
    bgColor: "bg-[#FEF3C7]",
    accentColor: "text-relay-amber",
    accent: "#F59E0B",
    tags: ["Auto-remind", "Escalate", "Close loop"],
    illustration: <FollowUpIllustration />,
  },
  {
    num: 2,
    title: "Cross-System Cascade",
    description: "One trigger updates multiple systems",
    before: "A single event requires manual updates across 3-5 different tools with copy-paste.",
    after: "One trigger cascades updates to every connected system instantly, with validation at each step.",
    bgColor: "bg-[#EDE9FE]",
    accentColor: "text-relay-indigo",
    accent: "#5B5FC7",
    tags: ["CRM", "ERP", "Billing", "+2 more"],
    illustration: <CascadeIllustration />,
  },
  {
    num: 3,
    title: "Document Intake",
    description: "Read, extract, validate, and route data",
    before: "Documents arrive by email, someone reads them, copies key data, validates it, and routes to the right person.",
    after: "An agent reads documents, extracts structured data, validates against rules, and routes automatically.",
    bgColor: "bg-[#D1FAE5]",
    accentColor: "text-relay-green",
    accent: "#3D8B5F",
    tags: ["PDF", "Extract", "Validate", "Route"],
    illustration: <DocumentIntakeIllustration />,
  },
  {
    num: 4,
    title: "Management Reports",
    description: "Assemble cross-system overviews automatically",
    before: "Someone spends hours pulling data from multiple tools, formatting it, compiling a weekly report.",
    after: "An agent gathers data from all tools, assembles a formatted report, and delivers it on schedule.",
    bgColor: "bg-[#DBEAFE]",
    accentColor: "text-relay-blue",
    accent: "#3B82F6",
    tags: ["Weekly", "Cross-tool", "Auto-format"],
    illustration: <ReportsIllustration />,
  },
  {
    num: 5,
    title: "Multi-Stakeholder",
    description: "Track multi-person workflows intelligently",
    before: "Complex approvals tracked in shared docs or group chats with no clear ownership or status.",
    after: "An agent orchestrates the entire flow, notifying the right person at the right time.",
    bgColor: "bg-[#FFF4E6]",
    accentColor: "text-relay-orange",
    accent: "#F97316",
    tags: ["Notify", "Handoff", "Track", "Resolve"],
    illustration: <MultiStakeholderIllustration />,
  },
];

const CYCLE_INTERVAL = 5500;

export function Patterns() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isPaused = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [cycleKey, setCycleKey] = useState(0);

  function startInterval() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setCycleKey((k) => k + 1);
    intervalRef.current = setInterval(() => {
      if (!isPaused.current) {
        setActiveIndex((prev) => (prev + 1) % patterns.length);
        setCycleKey((k) => k + 1);
      }
    }, CYCLE_INTERVAL);
  }

  // Lazy-init: start the interval on first render
  if (!intervalRef.current) {
    startInterval();
  }

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    startInterval();
  };

  const active = patterns[activeIndex];

  return (
    <section
      id="patterns"
      className="py-16 md:py-28"
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-5">
          What We Automate
        </p>
        <h2 className="text-3xl md:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-foreground max-w-2xl mb-10">
          Five patterns we see in{" "}
          <span className="text-relay-orange">every business</span> we talk to.
        </h2>

        {/* Tab row */}
        <div className="relative border-b border-border -mx-6 px-6 md:mx-0 md:px-0">
          <div className="flex overflow-x-auto gap-1 scrollbar-none">
            {patterns.map((pattern, i) => {
              const isActive = activeIndex === i;
              return (
                <button
                  key={pattern.title}
                  onClick={() => handleTabClick(i)}
                  className={`relative flex-shrink-0 px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground/70"
                  }`}
                >
                  {pattern.title}
                  {/* Active underline + progress bar */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full overflow-hidden">
                      <span
                        className="absolute inset-0 opacity-30"
                        style={{ backgroundColor: pattern.accent }}
                      />
                      <span
                        key={cycleKey}
                        className="absolute top-0 left-0 h-full"
                        style={{
                          backgroundColor: pattern.accent,
                          animation: `progress-fill ${CYCLE_INTERVAL}ms linear forwards`,
                        }}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content card */}
        <div
          key={activeIndex}
          className="bg-white rounded-2xl p-6 md:p-10 mt-8 shadow-sm animate-in fade-in duration-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left column — text */}
            <div className="flex flex-col justify-center py-2 md:py-6">
              <h3 className="font-bold text-2xl md:text-4xl text-foreground mb-6">
                {active.title}
              </h3>

              {/* Before */}
              <p className="text-base text-foreground/50 leading-relaxed mb-8">
                {active.before}
              </p>

              {/* After */}
              <div
                className="rounded-lg p-6 border border-border/60"
                style={{
                  backgroundColor: `${active.accent}06`,
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: active.accent }}
                >
                  With an AI agent
                </p>
                <p className="text-base text-foreground/70 leading-relaxed">
                  {active.after}
                </p>
              </div>
            </div>

            {/* Right column — illustration */}
            <div
              className={`${active.bgColor} rounded-2xl p-8 md:p-12 flex items-center justify-center min-h-[340px] md:min-h-[440px]`}
            >
              <div className="w-full">
                {active.illustration}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
