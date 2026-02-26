export function Process() {
  return (
    <section id="process" className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-5">
          How We Work
        </p>
        <h2 className="text-3xl md:text-[3rem] font-semibold leading-[1.1] tracking-tight text-foreground max-w-2xl">
          Three steps. No six-month{" "}
          <span className="text-relay-orange">black-box project.</span>
        </h2>
        <p className="mt-4 text-base text-muted-foreground max-w-md">
          Tool-agnostic. Iterative. No dependency created.
        </p>

        {/* 3-column step grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Step 01 — Discovery Sprint */}
          <div className="rounded-3xl bg-[#C34E1B] p-8 flex flex-col relative overflow-hidden min-h-[400px]">
            <span className="absolute -top-4 -right-2 font-mono text-[8rem] font-bold text-white/[0.06] leading-none select-none pointer-events-none">
              01
            </span>
            <span className="font-mono text-4xl font-bold text-white/60">01</span>
            <h3 className="mt-4 font-semibold text-xl text-white">Discovery Sprint</h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Map processes, find top opportunities. Standalone deliverable.
            </p>
            <div className="mt-5 flex gap-1.5 flex-wrap">
              {["Process mapping", "Opportunity scoring", "Deliverable"].map((tag) => (
                <span key={tag} className="text-[11px] bg-white/15 rounded-full px-3 py-1.5 text-white/85 font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex-1 flex flex-col justify-end pt-6">
              <div className="flex flex-col gap-2.5 opacity-60">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-white/20 rounded-full w-full mb-1" />
                    <div className="h-2 bg-white/10 rounded-full w-2/3" />
                  </div>
                </div>
                <div className="flex gap-2 mt-1">
                  <div className="bg-white/15 rounded-lg px-2.5 py-1.5 text-[9px] font-medium text-white/85">High impact</div>
                  <div className="bg-white/15 rounded-lg px-2.5 py-1.5 text-[9px] font-medium text-white/85">Quick win</div>
                  <div className="bg-white/10 rounded-lg px-2.5 py-1.5 text-[9px] font-medium text-white/60">Complex</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 02 — Co-Build */}
          <div className="rounded-3xl bg-[#0667D9] p-8 flex flex-col relative overflow-hidden min-h-[400px]">
            <span className="absolute -top-4 -right-2 font-mono text-[8rem] font-bold text-white/[0.06] leading-none select-none pointer-events-none">
              02
            </span>
            <span className="font-mono text-4xl font-bold text-white/60">02</span>
            <h3 className="mt-4 font-semibold text-xl text-white">Co-Build</h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Build with your team. New results every 2-3 weeks.
            </p>
            <div className="mt-5 flex gap-1.5 flex-wrap">
              {["Iterative sprints", "Your team involved", "Real results"].map((tag) => (
                <span key={tag} className="text-[11px] bg-white/15 rounded-full px-3 py-1.5 text-white/85 font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex-1 flex flex-col justify-end pt-6">
              <div className="opacity-60">
                <div className="flex gap-2">
                  {[1, 2, 3].map((sprint) => (
                    <div key={sprint} className="flex-1 bg-white/10 rounded-xl p-2.5">
                      <div className="text-[8px] font-bold text-white/85 mb-2">Sprint {sprint}</div>
                      <div className="flex flex-col gap-1">
                        <div className="h-1.5 bg-white/15 rounded-full w-full" />
                        <div className="h-1.5 bg-white/10 rounded-full w-3/4" />
                      </div>
                      <div className="mt-2 w-full h-1 bg-white/10 rounded-full">
                        <div className="h-1 bg-white/30 rounded-full" style={{ width: `${sprint * 33}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 03 — Maintain & Evolve */}
          <div className="rounded-3xl bg-[#02693E] p-8 flex flex-col relative overflow-hidden min-h-[400px]">
            <span className="absolute -top-4 -right-2 font-mono text-[8rem] font-bold text-white/[0.06] leading-none select-none pointer-events-none">
              03
            </span>
            <span className="font-mono text-4xl font-bold text-white/60">03</span>
            <h3 className="mt-4 font-semibold text-xl text-white">Maintain & Evolve</h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Monitor, tune, and evolve agents as your business grows.
            </p>
            <div className="mt-5 flex gap-1.5 flex-wrap">
              {["Monitoring", "Tuning", "Growth"].map((tag) => (
                <span key={tag} className="text-[11px] bg-white/15 rounded-full px-3 py-1.5 text-white/85 font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex-1 flex flex-col justify-end pt-6">
              <div className="opacity-60">
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <span className="text-[9px] font-medium text-white/85">All systems operational</span>
                  </div>
                  <div className="flex gap-1 items-end h-10">
                    {[4, 6, 5, 8, 7, 9, 8, 10, 9, 11, 10, 12].map((h, i) => (
                      <div key={i} className="flex-1 bg-white/20 rounded-t" style={{ height: `${h * 8}%` }} />
                    ))}
                  </div>
                  <div className="mt-1.5 flex justify-between">
                    <span className="text-[8px] text-white/60">Week 1</span>
                    <span className="text-[8px] text-white/60">Week 12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
