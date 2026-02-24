const steps = [
  {
    num: "01",
    title: "Discovery Sprint",
    description: "Map processes, find top opportunities. Standalone deliverable.",
    bgColor: "bg-[#FFF4E6]",
    numColor: "text-relay-orange",
    accent: "#F97316",
    tags: ["Process mapping", "Opportunity scoring", "Deliverable"],
    illustration: (
      <div className="mt-auto flex flex-col gap-2.5 opacity-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/60 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
          <div className="flex-1">
            <div className="h-2 bg-white/50 rounded-full w-full mb-1" />
            <div className="h-2 bg-white/30 rounded-full w-2/3" />
          </div>
        </div>
        <div className="flex gap-2 mt-1">
          <div className="bg-white/50 rounded-lg px-2.5 py-1.5 text-[9px] font-medium text-relay-orange">High impact</div>
          <div className="bg-white/50 rounded-lg px-2.5 py-1.5 text-[9px] font-medium text-relay-orange">Quick win</div>
          <div className="bg-white/40 rounded-lg px-2.5 py-1.5 text-[9px] font-medium text-relay-orange/60">Complex</div>
        </div>
      </div>
    ),
  },
  {
    num: "02",
    title: "Co-Build",
    description: "Build with your team. New results every 2-3 weeks.",
    bgColor: "bg-[#DBEAFE]",
    numColor: "text-relay-blue",
    accent: "#3B82F6",
    tags: ["Iterative sprints", "Your team involved", "Real results"],
    illustration: (
      <div className="mt-auto opacity-50">
        <div className="flex gap-2">
          {[1, 2, 3].map((sprint) => (
            <div key={sprint} className="flex-1 bg-white/50 rounded-xl p-2.5">
              <div className="text-[8px] font-bold text-relay-blue mb-2">Sprint {sprint}</div>
              <div className="flex flex-col gap-1">
                <div className="h-1.5 bg-relay-blue/20 rounded-full w-full" />
                <div className="h-1.5 bg-relay-blue/15 rounded-full w-3/4" />
              </div>
              <div className="mt-2 w-full h-1 bg-relay-blue/30 rounded-full">
                <div className="h-1 bg-relay-blue/60 rounded-full" style={{ width: `${sprint * 33}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    num: "03",
    title: "Maintain & Evolve",
    description: "Monitor, tune, and evolve agents as your business grows.",
    bgColor: "bg-[#D1FAE5]",
    numColor: "text-relay-green",
    accent: "#3D8B5F",
    tags: ["Monitoring", "Tuning", "Growth"],
    illustration: (
      <div className="mt-auto opacity-50">
        <div className="bg-white/50 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-relay-green" />
            <span className="text-[9px] font-medium text-relay-green">All systems operational</span>
          </div>
          <div className="flex gap-1 items-end h-10">
            {[4, 6, 5, 8, 7, 9, 8, 10, 9, 11, 10, 12].map((h, i) => (
              <div key={i} className="flex-1 bg-relay-green/25 rounded-t" style={{ height: `${h * 8}%` }} />
            ))}
          </div>
          <div className="mt-1.5 flex justify-between">
            <span className="text-[8px] text-relay-green/50">Week 1</span>
            <span className="text-[8px] text-relay-green/50">Week 12</span>
          </div>
        </div>
      </div>
    ),
  },
];

export function Process() {
  return (
    <section id="process" className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-[1.75rem] bg-card p-8 md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-5">
            How We Work
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-foreground max-w-2xl">
            Three steps. No six-month{" "}
            <span className="text-relay-orange">black-box project.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-md">
            Tool-agnostic. Iterative. No dependency created.
          </p>

          {/* Large bento grid for steps */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {steps.map((step) => (
              <div
                key={step.num}
                className={`${step.bgColor} rounded-[1.5rem] p-7 md:p-8 flex flex-col relative overflow-hidden min-h-[340px] md:min-h-[400px]`}
              >
                {/* Large background number */}
                <span className={`absolute -top-4 -right-2 font-mono text-[7rem] md:text-[8rem] font-bold ${step.numColor} opacity-[0.06] leading-none select-none pointer-events-none`}>
                  {step.num}
                </span>

                <span className={`font-mono text-3xl md:text-4xl font-bold ${step.numColor} relative`}>
                  {step.num}
                </span>
                <h3 className="mt-4 font-bold text-xl text-foreground relative">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/50 leading-relaxed relative">
                  {step.description}
                </p>

                {/* Tags */}
                <div className="mt-5 flex gap-1.5 flex-wrap relative">
                  {step.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-white/50 rounded-full px-3 py-1.5 text-foreground/40 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Illustration area */}
                <div className="flex-1 flex flex-col justify-end pt-6 relative">
                  {step.illustration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
