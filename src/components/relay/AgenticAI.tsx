export function AgenticAI() {
  const steps = [
    { label: "Trigger event", dotColor: "bg-relay-amber" },
    { label: "Agent reasons", dotColor: "bg-relay-indigo" },
    { label: "Acts across tools", dotColor: "bg-relay-blue" },
    { label: "Outcome delivered", dotColor: "bg-relay-green" },
  ];

  return (
    <section id="agentic" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-[1.75rem] bg-card p-8 md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-5">
            What is Agentic AI
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-foreground max-w-xl">
            {"You've heard of AI."}{" "}
            <span className="text-relay-orange">This is the next step.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground max-w-lg leading-relaxed">
            {"You ask ChatGPT, it answers. That's generative AI. Agentic AI doesn't wait. It acts."}
          </p>

          {/* Bento: flow + illustration */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Flow diagram - spans 3 cols */}
            <div className="lg:col-span-3 rounded-2xl bg-background border border-border p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0 flex-wrap">
                {steps.map((step, i) => (
                  <div key={step.label} className="flex items-center">
                    <div className="flex items-center gap-2.5 bg-card rounded-full px-4 py-2.5 border border-border shadow-sm">
                      <span className={`w-2.5 h-2.5 rounded-full ${step.dotColor} flex-shrink-0`} />
                      <span className="text-sm font-medium text-foreground whitespace-nowrap">{step.label}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <svg className="hidden md:block w-8 h-5 text-muted-foreground/40 flex-shrink-0" viewBox="0 0 32 20" fill="none">
                        <path d="M0 10 H24 M20 5 L27 10 L20 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                Your 5-15 tools, connected by an intelligent layer.
              </p>
            </div>

            {/* Illustration card - spans 2 cols */}
            <div className="lg:col-span-2 rounded-2xl bg-[#FFF4E6] p-6 md:p-8 flex flex-col justify-between min-h-[180px]">
              <div className="flex gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-relay-orange/20 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                </div>
                <div className="w-8 h-8 rounded-lg bg-relay-blue/10 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Not a chatbot.</p>
                <p className="text-sm text-muted-foreground mt-1">An autonomous system that reasons, decides, and acts across your stack.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
