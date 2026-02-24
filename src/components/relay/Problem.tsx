export function Problem() {
  const painPoints = [
    {
      text: "Chasing docs by email",
      description: "Documents get lost in inboxes, forwarded between people, with no single source of truth.",
      bgColor: "bg-[#FFF4E6]",
      accent: "#F97316",
      illustration: (
        <div className="mt-auto flex flex-col gap-2 opacity-50">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2" style={{ marginLeft: `${i * 12}px` }}>
              <div className="w-5 h-5 rounded bg-relay-orange/20 flex-shrink-0" />
              <div className="h-2 bg-relay-orange/15 rounded-full" style={{ width: `${80 - i * 15}%` }} />
            </div>
          ))}
          <div className="ml-9 mt-1 text-[9px] font-medium text-relay-orange/60">{"Where's the latest version?"}</div>
        </div>
      ),
    },
    {
      text: "Copy-pasting between tools",
      description: "The same data typed into 3 different systems, every time, with inevitable errors.",
      bgColor: "bg-[#EDE9FE]",
      accent: "#5B5FC7",
      illustration: (
        <div className="mt-auto flex gap-3 opacity-50">
          {["A", "B", "C"].map((label, i) => (
            <div key={label} className="flex-1">
              <div className="bg-white/50 rounded-lg p-2">
                <div className="w-full h-1.5 bg-relay-indigo/20 rounded-full mb-1.5" />
                <div className="w-3/4 h-1.5 bg-relay-indigo/15 rounded-full" />
              </div>
              {i < 2 && (
                <div className="flex justify-center my-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#5B5FC7" strokeWidth="2" className="rotate-90 opacity-40"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              )}
            </div>
          ))}
        </div>
      ),
    },
    {
      text: "Manual report assembly",
      description: "Hours spent pulling data from different tools and formatting it by hand.",
      bgColor: "bg-[#DBEAFE]",
      accent: "#3B82F6",
      illustration: (
        <div className="mt-auto opacity-50">
          <div className="bg-white/50 rounded-lg p-3">
            <div className="flex gap-2 items-end h-12 mb-2">
              {[35, 55, 45, 70, 60].map((h, i) => (
                <div key={i} className="flex-1 bg-relay-blue/20 rounded-t" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="h-1.5 bg-relay-blue/15 rounded-full w-full" />
          </div>
        </div>
      ),
    },
    {
      text: "Approvals stuck in inboxes",
      description: "Critical decisions delayed because the right person never saw the request.",
      bgColor: "bg-[#FEF3C7]",
      accent: "#F59E0B",
      illustration: (
        <div className="mt-auto flex flex-col gap-2 opacity-50">
          {["Pending", "Pending", "Stuck"].map((status, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full border-2 border-relay-amber/30" />
              <div className="h-2 bg-relay-amber/15 rounded-full flex-1" />
              <span className="text-[8px] font-medium text-relay-amber/60">{status}</span>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-[1.75rem] bg-card p-8 md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-5">
            The Problem
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-foreground max-w-2xl">
            Good tools. Good people. Everything still depends on{" "}
            <span className="text-relay-orange">someone connecting the dots.</span>
          </h2>

          {/* Large bento grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {painPoints.map((point) => (
              <div
                key={point.text}
                className={`${point.bgColor} rounded-[1.25rem] p-7 md:p-8 flex flex-col min-h-[260px] md:min-h-[300px]`}
              >
                <h3 className="font-bold text-lg text-foreground mb-2">{point.text}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed">{point.description}</p>
                {/* Illustration area for future images */}
                <div className="flex-1 flex flex-col justify-end pt-6">
                  {point.illustration}
                </div>
              </div>
            ))}
          </div>

          {/* Callout banner */}
          <div className="mt-8 rounded-2xl bg-foreground px-6 py-6 md:px-8">
            <p className="text-base md:text-lg font-bold text-primary-foreground text-center">
              The problem lives between your tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
