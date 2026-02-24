import { useState } from "react";

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
    illustration: (
      <div className="mt-auto flex flex-col gap-2 opacity-60">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white/70 flex items-center justify-center text-[10px] font-bold text-relay-amber">!</div>
          <div className="h-2.5 bg-white/50 rounded-full w-32" />
        </div>
        <div className="flex items-center gap-2 ml-4">
          <div className="w-6 h-6 rounded-full bg-white/70 flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div className="h-2.5 bg-white/40 rounded-full w-24" />
        </div>
        <div className="flex items-center gap-2 ml-8">
          <div className="w-6 h-6 rounded-full bg-white/70 flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div className="h-2.5 bg-white/30 rounded-full w-28" />
        </div>
        <div className="ml-4 mt-2 bg-white/40 rounded-xl px-3 py-2 w-fit">
          <p className="text-[10px] font-semibold text-relay-amber">3 resolved</p>
        </div>
      </div>
    ),
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
    illustration: (
      <div className="mt-auto flex flex-col items-center gap-3 opacity-60">
        <div className="w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5B5FC7" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        </div>
        <div className="flex gap-4">
          {["CRM", "ERP", "Slack"].map((s) => (
            <div key={s} className="flex flex-col items-center gap-1.5">
              <div className="w-8 h-8 rounded-lg bg-white/50" />
              <span className="text-[9px] font-medium text-relay-indigo">{s}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-1 mt-1">
          <div className="w-1.5 h-1.5 rounded-full bg-relay-indigo" />
          <div className="w-1.5 h-1.5 rounded-full bg-relay-indigo/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-relay-indigo/30" />
        </div>
      </div>
    ),
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
    illustration: (
      <div className="mt-auto opacity-60">
        <div className="bg-white/50 rounded-xl p-3 max-w-[180px]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded bg-relay-green/20" />
            <div className="h-2 bg-relay-green/20 rounded-full w-16" />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="h-1.5 bg-relay-green/15 rounded-full w-full" />
            <div className="h-1.5 bg-relay-green/15 rounded-full w-3/4" />
            <div className="h-1.5 bg-relay-green/10 rounded-full w-5/6" />
          </div>
          <div className="mt-2 flex gap-1.5">
            <span className="text-[8px] bg-relay-green/10 rounded px-1.5 py-0.5 text-relay-green font-medium">Valid</span>
            <span className="text-[8px] bg-relay-green/10 rounded px-1.5 py-0.5 text-relay-green font-medium">Routed</span>
          </div>
        </div>
      </div>
    ),
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
    illustration: (
      <div className="mt-auto opacity-60">
        <div className="bg-white/50 rounded-xl p-3">
          <div className="flex gap-3 items-end h-16">
            {[40, 65, 50, 80, 55, 70].map((h, i) => (
              <div key={i} className="flex-1 bg-relay-blue/25 rounded-t" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mt-2 h-1.5 bg-relay-blue/15 rounded-full w-full" />
          <div className="mt-1 h-1.5 bg-relay-blue/10 rounded-full w-2/3" />
        </div>
      </div>
    ),
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
    illustration: (
      <div className="mt-auto flex flex-col gap-2 opacity-60">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-relay-orange/20" />
          <div className="h-2 bg-white/50 rounded-full w-20" />
          <span className="text-[8px] bg-relay-green/20 rounded px-1.5 py-0.5 text-relay-green font-medium ml-auto">Done</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-relay-blue/20" />
          <div className="h-2 bg-white/50 rounded-full w-24" />
          <span className="text-[8px] bg-relay-amber/20 rounded px-1.5 py-0.5 text-relay-amber font-medium ml-auto">In progress</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-relay-indigo/20" />
          <div className="h-2 bg-white/50 rounded-full w-16" />
          <span className="text-[8px] bg-muted rounded px-1.5 py-0.5 text-muted-foreground font-medium ml-auto">Pending</span>
        </div>
      </div>
    ),
  },
];

export function Patterns() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="patterns" className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-5">
          What We Automate
        </p>
        <h2 className="text-3xl md:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-foreground max-w-2xl mb-4">
          Five patterns we see in{" "}
          <span className="text-relay-orange">every business</span> we talk to.
        </h2>
        <p className="text-base text-muted-foreground mb-12 max-w-lg">
          Each card expands to show a Before / After scenario.
        </p>

        {/* Bento grid - large cards like Phantom/LottieFiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {patterns.map((pattern, i) => {
            const isExpanded = expandedIndex === i;
            const isLast = i === 4;

            return (
              <button
                key={pattern.title}
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                className={`${isLast ? "md:col-span-2 md:max-w-[calc(50%-0.625rem)]" : ""} ${pattern.bgColor} rounded-[1.5rem] p-8 md:p-10 text-left transition-all duration-300 hover:shadow-lg group w-full flex flex-col ${isExpanded ? "min-h-[420px]" : "min-h-[340px] md:min-h-[380px]"}`}
              >
                {/* Top section */}
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs font-bold uppercase tracking-wider ${pattern.accentColor}`}>
                    Pattern {pattern.num}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-transform duration-300 ${isExpanded ? "rotate-45" : ""}`}
                    style={{ borderColor: pattern.accent }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={pattern.accent} strokeWidth="2.5" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </div>

                <h3 className="font-bold text-xl md:text-2xl text-foreground mb-2">
                  {pattern.title}
                </h3>
                <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                  {pattern.description}
                </p>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap mb-6">
                  {pattern.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-white/60 rounded-full px-3 py-1.5 text-foreground/50 font-medium backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expanded: Before/After */}
                {isExpanded ? (
                  <div className="flex flex-col gap-4 mt-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="bg-white/40 rounded-xl p-5 backdrop-blur-sm">
                      <p className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-2">Before</p>
                      <p className="text-sm text-foreground/70 leading-relaxed">{pattern.before}</p>
                    </div>
                    <div className="bg-white/60 rounded-xl p-5 backdrop-blur-sm border border-white/50">
                      <p className={`text-xs font-bold uppercase tracking-wider ${pattern.accentColor} mb-2`}>After</p>
                      <p className="text-sm text-foreground/70 leading-relaxed">{pattern.after}</p>
                    </div>
                  </div>
                ) : (
                  /* Illustration placeholder area */
                  <div className="flex-1 flex flex-col justify-end">
                    {pattern.illustration}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
