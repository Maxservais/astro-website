export function AgenticAI() {
  return (
    <section id="agentic" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-5">
          What is Agentic AI
        </p>
        <h2 className="text-3xl md:text-[3rem] font-semibold leading-[1.1] tracking-tight text-foreground max-w-xl">
          {"You've heard of AI."}{" "}
          <span className="text-relay-orange">This is the next step.</span>
        </h2>
        <p className="mt-5 text-base text-muted-foreground max-w-lg leading-relaxed">
          {"You ask ChatGPT, it answers. That's generative AI. Agentic AI doesn't wait. It acts."}
        </p>

        {/* 3-column grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 — Connects your stack */}
          <div className="rounded-3xl bg-[#4C1D95] p-8 flex flex-col min-h-[420px]">
            <h3 className="text-xl font-semibold text-white">Connects your stack</h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Your 5–15 tools, linked by one intelligent layer.
            </p>

            {/* Hub-and-spoke diagram */}
            <div className="mt-6 flex-1 flex items-center justify-center">
              <svg viewBox="0 0 260 220" fill="none" className="w-full max-w-[260px]">
                {/* Spokes */}
                <line x1="130" y1="110" x2="130" y2="28" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                <line x1="130" y1="110" x2="220" y2="60" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                <line x1="130" y1="110" x2="220" y2="160" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                <line x1="130" y1="110" x2="130" y2="192" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                <line x1="130" y1="110" x2="40" y2="160" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                <line x1="130" y1="110" x2="40" y2="60" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />

                {/* Center node */}
                <rect x="100" y="88" width="60" height="44" rx="12" fill="white" />
                <text x="130" y="115" textAnchor="middle" fill="#4C1D95" fontSize="12" fontWeight="600">Relay</text>

                {/* Tool nodes */}
                {[
                  { x: 130, y: 20, label: "Gmail" },
                  { x: 220, y: 52, label: "Slack" },
                  { x: 220, y: 152, label: "CRM" },
                  { x: 130, y: 192, label: "Sheets" },
                  { x: 40, y: 152, label: "Drive" },
                  { x: 40, y: 52, label: "ERP" },
                ].map((tool) => (
                  <g key={tool.label}>
                    <rect
                      x={tool.x - 28}
                      y={tool.y - 14}
                      width="56"
                      height="28"
                      rx="8"
                      fill="rgba(255,255,255,0.15)"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1"
                    />
                    <text
                      x={tool.x}
                      y={tool.y + 5}
                      textAnchor="middle"
                      fill="white"
                      fontSize="11"
                      fontWeight="500"
                    >
                      {tool.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* Card 2 — Reasons like a human */}
          <div className="rounded-3xl bg-[#C34E1B] p-8 flex flex-col min-h-[420px]">
            <h3 className="text-xl font-semibold text-white">Reasons like a human</h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Not just rules — the agent understands context and makes judgment calls.
            </p>

            {/* Chat / decision UI */}
            <div className="mt-6 flex-1 flex flex-col gap-3">
              {/* User message */}
              <div className="self-end bg-white/15 rounded-xl rounded-br-sm px-4 py-2.5 max-w-[85%] border border-white/10">
                <p className="text-[11px] text-white/50 mb-0.5">You</p>
                <p className="text-sm text-white font-medium">Process this invoice</p>
              </div>

              {/* Agent reasoning */}
              <div className="self-start bg-white/10 rounded-xl rounded-bl-sm px-4 py-3 max-w-[90%] border border-white/15">
                <p className="text-[11px] text-white font-semibold mb-3">Agent reasoning</p>
                <div className="flex flex-col gap-0">
                  {[
                    { label: "Read PDF & extract data" },
                    { label: "Check against rules" },
                    { label: "Route to finance" },
                  ].map((step, i) => (
                    <div key={step.label} className="flex items-start gap-2.5">
                      <div className="flex flex-col items-center">
                        <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <circle cx="6" cy="6" r="2" fill="white" opacity="0.6" />
                          </svg>
                        </div>
                        {i < 2 && (
                          <div className="w-px h-4 border-l border-dashed border-white/30 my-0.5" />
                        )}
                      </div>
                      <p className="text-sm text-white/90 pt-1">{step.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 — Acts end-to-end */}
          <div className="rounded-3xl bg-[#02693E] p-8 flex flex-col min-h-[420px]">
            <h3 className="text-xl font-semibold text-white">Acts end-to-end</h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Full execution across systems, not just suggestions.
            </p>

            {/* Completed-action checklist */}
            <div className="mt-6 flex-1 flex flex-col justify-center gap-3">
              {[
                { tool: "CRM", action: "Created record in CRM" },
                { tool: "Slack", action: "Sent Slack notification" },
                { tool: "Sheets", action: "Updated spreadsheet" },
                { tool: "Email", action: "Emailed confirmation" },
              ].map((item) => (
                <div
                  key={item.action}
                  className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 border border-white/10"
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-white/80 bg-white/15 rounded px-1.5 py-0.5 shrink-0">
                      {item.tool}
                    </span>
                    <span className="text-sm text-white/90 truncate">{item.action}</span>
                  </div>
                </div>
              ))}

              {/* Done badge */}
              <div className="flex justify-center mt-1">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-white/15 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  Done in 3 min
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
