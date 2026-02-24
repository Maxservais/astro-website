export function AgenticAI() {
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

          {/* Bento: 3-column grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1 — Connects your stack */}
            <div className="rounded-2xl bg-[#EDE9FE] p-6 md:p-8 flex flex-col min-h-[400px]">
              <h3 className="text-lg font-semibold text-foreground">Connects your stack</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Your 5–15 tools, linked by one intelligent layer.
              </p>

              {/* Visual: Hub-and-spoke diagram */}
              <div className="mt-6 flex-1 flex items-center justify-center">
                <svg viewBox="0 0 260 220" fill="none" className="w-full max-w-[260px]">
                  {/* Spokes */}
                  <line x1="130" y1="110" x2="130" y2="28" stroke="#C4B5FD" strokeWidth="1.5" />
                  <line x1="130" y1="110" x2="220" y2="60" stroke="#C4B5FD" strokeWidth="1.5" />
                  <line x1="130" y1="110" x2="220" y2="160" stroke="#C4B5FD" strokeWidth="1.5" />
                  <line x1="130" y1="110" x2="130" y2="192" stroke="#C4B5FD" strokeWidth="1.5" />
                  <line x1="130" y1="110" x2="40" y2="160" stroke="#C4B5FD" strokeWidth="1.5" />
                  <line x1="130" y1="110" x2="40" y2="60" stroke="#C4B5FD" strokeWidth="1.5" />

                  {/* Center node */}
                  <rect x="100" y="88" width="60" height="44" rx="12" fill="#7C3AED" />
                  <text x="130" y="115" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Relay</text>

                  {/* Tool nodes */}
                  {[
                    { x: 130, y: 20, label: "Gmail", icon: "M" },
                    { x: 220, y: 52, label: "Slack", icon: "S" },
                    { x: 220, y: 152, label: "CRM", icon: "C" },
                    { x: 130, y: 192, label: "Sheets", icon: "Sh" },
                    { x: 40, y: 152, label: "Drive", icon: "D" },
                    { x: 40, y: 52, label: "ERP", icon: "E" },
                  ].map((tool) => (
                    <g key={tool.label}>
                      <rect
                        x={tool.x - 28}
                        y={tool.y - 14}
                        width="56"
                        height="28"
                        rx="8"
                        fill="white"
                        stroke="#C4B5FD"
                        strokeWidth="1"
                      />
                      <text
                        x={tool.x}
                        y={tool.y + 5}
                        textAnchor="middle"
                        fill="#6D28D9"
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
            <div className="rounded-2xl bg-[#FFF4E6] p-6 md:p-8 flex flex-col min-h-[400px]">
              <h3 className="text-lg font-semibold text-foreground">Reasons like a human</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Not just rules — the agent understands context and makes judgment calls.
              </p>

              {/* Visual: Chat / decision UI */}
              <div className="mt-6 flex-1 flex flex-col gap-3">
                {/* User message */}
                <div className="self-end bg-white rounded-xl rounded-br-sm px-4 py-2.5 shadow-sm max-w-[85%]">
                  <p className="text-xs text-muted-foreground mb-0.5">You</p>
                  <p className="text-sm text-foreground font-medium">Process this invoice</p>
                </div>

                {/* Agent reasoning */}
                <div className="self-start bg-white/70 rounded-xl rounded-bl-sm px-4 py-3 shadow-sm max-w-[90%] border border-orange-200/60">
                  <p className="text-xs text-relay-orange font-semibold mb-3">Agent reasoning</p>
                  <div className="flex flex-col gap-0">
                    {[
                      { icon: "📄", label: "Read PDF & extract data" },
                      { icon: "📋", label: "Check against rules" },
                      { icon: "➡️", label: "Route to finance" },
                    ].map((step, i) => (
                      <div key={step.label} className="flex items-start gap-2.5">
                        <div className="flex flex-col items-center">
                          <div className="w-7 h-7 rounded-lg bg-[#FFF4E6] flex items-center justify-center text-sm flex-shrink-0">
                            {step.icon}
                          </div>
                          {i < 2 && (
                            <div className="w-px h-4 border-l border-dashed border-orange-300 my-0.5" />
                          )}
                        </div>
                        <p className="text-sm text-foreground pt-1">{step.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 — Acts end-to-end */}
            <div className="rounded-2xl bg-[#D1FAE5] p-6 md:p-8 flex flex-col min-h-[400px]">
              <h3 className="text-lg font-semibold text-foreground">Acts end-to-end</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Full execution across systems, not just suggestions.
              </p>

              {/* Visual: Completed-action checklist */}
              <div className="mt-6 flex-1 flex flex-col justify-center gap-3">
                {[
                  { tool: "CRM", action: "Created record in CRM" },
                  { tool: "Slack", action: "Sent Slack notification" },
                  { tool: "Sheets", action: "Updated spreadsheet" },
                  { tool: "Email", action: "Emailed confirmation" },
                ].map((item) => (
                  <div
                    key={item.action}
                    className="flex items-center gap-3 bg-white/60 rounded-xl px-4 py-3 border border-green-200/60"
                  >
                    {/* Checkmark */}
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {/* Tool badge + action */}
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100 rounded px-1.5 py-0.5 flex-shrink-0">
                        {item.tool}
                      </span>
                      <span className="text-sm text-foreground truncate">{item.action}</span>
                    </div>
                  </div>
                ))}

                {/* Done badge */}
                <div className="flex justify-center mt-1">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-100 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Done in 3 min
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
