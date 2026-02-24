export function Problem() {
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

          {/* Bento grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Card 1 — Chasing docs by email */}
            <div className="bg-[#FFF4E6] rounded-[1.25rem] p-7 md:p-8 flex flex-col min-h-[340px] md:min-h-[400px] overflow-hidden">
              <h3 className="font-bold text-lg text-foreground mb-1.5">Chasing docs by email</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">
                Documents get lost in inboxes, forwarded between people, with no single source of truth.
              </p>

              <div className="flex-1 flex flex-col justify-end pt-6">
                {/* Mini email inbox */}
                <div className="bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden">
                  {/* Inbox header */}
                  <div className="px-4 py-2.5 border-b border-orange-50 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-relay-orange/40" />
                    <span className="text-[10px] font-semibold text-foreground/40 uppercase tracking-wider">Inbox</span>
                    <span className="ml-auto text-[9px] text-foreground/30 bg-orange-50 rounded-full px-2 py-0.5 font-medium">12 unread</span>
                  </div>
                  {/* Email rows */}
                  {[
                    { prefix: "FW: FW:", subject: "Q4 Budget — final version", from: "Lisa", time: "2m", unread: true },
                    { prefix: "RE:", subject: "Q4 Budget — updated numbers", from: "Tom", time: "1h", unread: true },
                    { prefix: "FW:", subject: "Q4 Budget (see attached)", from: "Sara", time: "3h", unread: false },
                    { prefix: "RE: RE:", subject: "Q4 Budget — which one?", from: "You", time: "5h", unread: false },
                  ].map((email, i) => (
                    <div
                      key={i}
                      className={`px-4 py-2.5 flex items-center gap-3 ${i < 3 ? "border-b border-orange-50/80" : ""} ${email.unread ? "bg-orange-50/50" : ""}`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0 ${email.unread ? "bg-relay-orange/20 text-relay-orange" : "bg-gray-100 text-foreground/30"}`}>
                        {email.from[0]}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] text-relay-orange/60 font-medium flex-shrink-0">{email.prefix}</span>
                          <span className={`text-[11px] truncate ${email.unread ? "font-semibold text-foreground/80" : "text-foreground/40"}`}>{email.subject}</span>
                        </div>
                      </div>
                      <span className="text-[9px] text-foreground/25 flex-shrink-0">{email.time}</span>
                    </div>
                  ))}
                </div>
                {/* Frustrated comment */}
                <div className="flex items-center gap-2 mt-3 ml-1">
                  <div className="w-5 h-5 rounded-full bg-relay-orange/15 flex items-center justify-center flex-shrink-0">
                    <span className="text-[9px]">😩</span>
                  </div>
                  <span className="text-[10px] font-medium text-relay-orange/70 italic">
                    {"\"Which version is the latest?\""}
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 — Copy-pasting between tools */}
            <div className="bg-[#EDE9FE] rounded-[1.25rem] p-7 md:p-8 flex flex-col min-h-[340px] md:min-h-[400px] overflow-hidden">
              <h3 className="font-bold text-lg text-foreground mb-1.5">Copy-pasting between tools</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">
                The same data typed into 3 different systems, every time, with inevitable errors.
              </p>

              <div className="flex-1 flex flex-col justify-end pt-6">
                {/* Three mini tool windows */}
                <div className="flex gap-2.5">
                  {[
                    { name: "CRM", rows: ["Acme Corp", "$12,400", "2024-01-15"], hasError: false },
                    { name: "Invoicing", rows: ["Acme Corp", "$12,400", "2024-01-15"], hasError: false },
                    { name: "Spreadsheet", rows: ["Acme Corp", "$12,040", "2024-01-51"], hasError: true },
                  ].map((tool, i) => (
                    <div key={tool.name} className="flex-1 flex flex-col">
                      <div className={`bg-white rounded-lg shadow-sm border overflow-hidden ${tool.hasError ? "border-red-200" : "border-indigo-100"}`}>
                        {/* Window title bar */}
                        <div className="px-2.5 py-1.5 border-b border-indigo-50 flex items-center gap-1.5">
                          <div className="flex gap-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-200" />
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-100" />
                          </div>
                          <span className="text-[8px] font-semibold text-foreground/40 uppercase tracking-wider">{tool.name}</span>
                        </div>
                        {/* Data rows */}
                        <div className="px-2.5 py-2 flex flex-col gap-1.5">
                          {tool.rows.map((row, j) => (
                            <div
                              key={j}
                              className={`text-[9px] px-2 py-1 rounded ${
                                tool.hasError && j >= 1
                                  ? "bg-red-50 text-red-400 line-through decoration-red-300"
                                  : "bg-indigo-50/60 text-foreground/50"
                              }`}
                            >
                              {row}
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Arrows between tools */}
                      {i < 2 && (
                        <div className="flex items-center justify-center py-1 sm:hidden">
                          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                            <path d="M1 5h12M10 1.5L14 5l-4 3.5" stroke="#5B5FC7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {/* Dotted copy arrows (desktop) */}
                <div className="hidden sm:flex items-center justify-around mt-2 px-4">
                  <svg width="100%" height="16" viewBox="0 0 300 16" preserveAspectRatio="none" fill="none">
                    <path d="M50 8 H130" stroke="#5B5FC7" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
                    <path d="M170 8 H250" stroke="#E35D6A" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                    <text x="90" y="14" textAnchor="middle" fill="#5B5FC7" fontSize="7" opacity="0.4" fontWeight="500">copy</text>
                    <text x="210" y="14" textAnchor="middle" fill="#E35D6A" fontSize="7" opacity="0.5" fontWeight="500">typo!</text>
                  </svg>
                </div>
                {/* Error callout */}
                <div className="flex items-center gap-2 mt-2 ml-1">
                  <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                      <path d="M6 3.5V7M6 8.5V9" stroke="#E35D6A" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-medium text-red-400/80">
                    2 data mismatches found this week
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3 — Manual report assembly */}
            <div className="bg-[#DBEAFE] rounded-[1.25rem] p-7 md:p-8 flex flex-col min-h-[340px] md:min-h-[400px] overflow-hidden">
              <h3 className="font-bold text-lg text-foreground mb-1.5">Manual report assembly</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">
                Hours spent pulling data from different tools and formatting it by hand.
              </p>

              <div className="flex-1 flex flex-col justify-end pt-6">
                {/* Source cards flowing into report */}
                <div className="flex gap-2 mb-3">
                  {[
                    { name: "CRM", icon: "📊" },
                    { name: "Finance", icon: "💰" },
                    { name: "Support", icon: "🎧" },
                  ].map((source) => (
                    <div
                      key={source.name}
                      className="flex-1 bg-white/70 rounded-lg border border-blue-100 px-2.5 py-2 flex items-center gap-1.5"
                    >
                      <span className="text-xs">{source.icon}</span>
                      <span className="text-[9px] font-medium text-foreground/40">{source.name}</span>
                    </div>
                  ))}
                </div>

                {/* Arrows down */}
                <div className="flex justify-center mb-2">
                  <svg width="80" height="16" viewBox="0 0 80 16" fill="none">
                    <path d="M10 2L40 14L70 2" stroke="#3B82F6" strokeWidth="1" strokeLinecap="round" opacity="0.25" strokeDasharray="2 2" />
                    <path d="M37 10L40 14L43 10" stroke="#3B82F6" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
                  </svg>
                </div>

                {/* Report document */}
                <div className="bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden">
                  <div className="px-4 py-2.5 border-b border-blue-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                        <rect x="0.5" y="0.5" width="9" height="11" rx="1.5" stroke="#3B82F6" strokeWidth="0.8" opacity="0.4" />
                        <line x1="3" y1="4" x2="7" y2="4" stroke="#3B82F6" strokeWidth="0.6" opacity="0.3" />
                        <line x1="3" y1="6" x2="7" y2="6" stroke="#3B82F6" strokeWidth="0.6" opacity="0.3" />
                        <line x1="3" y1="8" x2="5.5" y2="8" stroke="#3B82F6" strokeWidth="0.6" opacity="0.3" />
                      </svg>
                      <span className="text-[9px] font-semibold text-foreground/40 uppercase tracking-wider">Monthly Report</span>
                    </div>
                    <span className="text-[8px] text-foreground/25">Draft</span>
                  </div>
                  <div className="px-4 py-3 flex flex-col gap-2">
                    {/* Skeleton content with progress */}
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 bg-blue-100 rounded-full flex-1" />
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 bg-blue-100 rounded-full w-4/5" />
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 bg-blue-50 rounded-full w-2/5" />
                      <div className="w-10 h-3 rounded-full bg-amber-100 flex items-center justify-center">
                        <span className="text-[6px] font-bold text-amber-500 uppercase">WIP</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 bg-blue-50/50 rounded-full w-1/4" />
                    </div>
                  </div>
                </div>

                {/* Time callout */}
                <div className="flex items-center gap-2 mt-3 ml-1">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <circle cx="6" cy="6" r="4.5" stroke="#3B82F6" strokeWidth="0.8" opacity="0.5" />
                      <path d="M6 3.5V6L7.5 7.5" stroke="#3B82F6" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-medium text-blue-400/80">
                    ~4 hours every Monday
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4 — Approvals stuck in inboxes */}
            <div className="bg-[#FEF3C7] rounded-[1.25rem] p-7 md:p-8 flex flex-col min-h-[340px] md:min-h-[400px] overflow-hidden">
              <h3 className="font-bold text-lg text-foreground mb-1.5">Approvals stuck in inboxes</h3>
              <p className="text-sm text-foreground/50 leading-relaxed">
                Critical decisions delayed because the right person never saw the request.
              </p>

              <div className="flex-1 flex flex-col justify-end pt-6">
                {/* Approval queue */}
                <div className="bg-white rounded-xl shadow-sm border border-amber-100 overflow-hidden">
                  <div className="px-4 py-2.5 border-b border-amber-50 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-relay-amber/40" />
                    <span className="text-[10px] font-semibold text-foreground/40 uppercase tracking-wider">Pending approvals</span>
                    <span className="ml-auto w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center text-[8px] font-bold text-amber-600">3</span>
                  </div>
                  {[
                    { name: "Budget request", from: "MK", time: "3 days ago", status: "Overdue", statusColor: "bg-red-50 text-red-400" },
                    { name: "Vendor contract", from: "JL", time: "2 days ago", status: "Pending", statusColor: "bg-amber-50 text-amber-500" },
                    { name: "Hire approval", from: "SV", time: "5 hours ago", status: "Pending", statusColor: "bg-amber-50 text-amber-500" },
                  ].map((item, i) => (
                    <div
                      key={item.name}
                      className={`px-4 py-3 flex items-center gap-3 ${i < 2 ? "border-b border-amber-50/80" : ""}`}
                    >
                      <div className="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center text-[9px] font-bold text-foreground/30 flex-shrink-0 border border-amber-100">
                        {item.from}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-medium text-foreground/70 truncate">{item.name}</p>
                        <p className="text-[9px] text-foreground/30">{item.time}</p>
                      </div>
                      <span className={`text-[8px] font-semibold uppercase tracking-wide rounded-full px-2 py-0.5 flex-shrink-0 ${item.statusColor}`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Delay indicator */}
                <div className="flex items-center gap-2 mt-3 ml-1">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M6 2L1 10.5h10L6 2z" stroke="#E35D6A" strokeWidth="0.8" fill="none" opacity="0.6" />
                      <line x1="6" y1="5.5" x2="6" y2="7.5" stroke="#E35D6A" strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
                      <circle cx="6" cy="9" r="0.5" fill="#E35D6A" opacity="0.6" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-medium text-red-400/80">
                    Avg. 2.5 day delay per approval
                  </span>
                </div>
              </div>
            </div>
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
