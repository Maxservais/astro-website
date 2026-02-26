export function Problem() {
  return (
    <section className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-5">
          The Problem
        </p>
        <h2 className="text-3xl md:text-[3rem] font-semibold leading-[1.1] tracking-tight text-foreground max-w-2xl">
          Good tools. Good people. Everything still depends on{" "}
          <span className="text-relay-orange">someone connecting the dots.</span>
        </h2>

        {/* Card Grid — 2×2 */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Card 1 — Email Chaos */}
          <div className="rounded-[2rem] bg-[#F3F2ED] p-3">
            <div className="rounded-t-[1.5rem] bg-[#C34E1B] flex flex-col justify-end overflow-hidden h-[400px] pt-6 px-6">
              <div className="bg-white rounded-t-2xl shadow-[0_-4px_30px_rgba(0,0,0,0.15)] overflow-hidden h-[340px] shrink-0">
                <EmailMockup />
              </div>
            </div>
            <div className="rounded-b-[1.5rem] bg-[#C34E1B] p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/85 mb-3">
                Email Chaos
              </p>
              <h3 className="text-[2rem] font-semibold leading-[1.12] tracking-tight text-white mb-2">
                Chasing docs by email
              </h3>
              <p className="text-base leading-relaxed text-white/80">
                Documents get lost in inboxes, forwarded between people, with no single source of truth.
              </p>
            </div>
          </div>

          {/* Card 2 — Data Errors */}
          <div className="rounded-[2rem] bg-[#F3F2ED] p-3">
            <div className="rounded-t-[1.5rem] bg-[#0667D9] flex flex-col justify-end overflow-hidden h-[400px] pt-6 px-6">
              <div className="bg-white rounded-t-2xl shadow-[0_-4px_30px_rgba(0,0,0,0.15)] overflow-hidden h-[340px] shrink-0">
                <DataMockup />
              </div>
            </div>
            <div className="rounded-b-[1.5rem] bg-[#0667D9] p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/85 mb-3">
                Data Errors
              </p>
              <h3 className="text-[2rem] font-semibold leading-[1.12] tracking-tight text-white mb-2">
                Copy-pasting between tools
              </h3>
              <p className="text-base leading-relaxed text-white/80">
                The same data typed into 3 different systems, every time, with inevitable errors.
              </p>
            </div>
          </div>

          {/* Card 3 — Time Sink */}
          <div className="rounded-[2rem] bg-[#F3F2ED] p-3">
            <div className="rounded-t-[1.5rem] bg-[#005870] flex flex-col justify-end overflow-hidden h-[400px] pt-6 px-6">
              <div className="bg-white rounded-t-2xl shadow-[0_-4px_30px_rgba(0,0,0,0.15)] overflow-hidden h-[340px] shrink-0">
                <ReportMockup />
              </div>
            </div>
            <div className="rounded-b-[1.5rem] bg-[#005870] p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/85 mb-3">
                Time Sink
              </p>
              <h3 className="text-[2rem] font-semibold leading-[1.12] tracking-tight text-white mb-2">
                Manual report assembly
              </h3>
              <p className="text-base leading-relaxed text-white/80">
                Hours spent pulling data from different tools and formatting it by hand, every week.
              </p>
            </div>
          </div>

          {/* Card 4 — Bottleneck */}
          <div className="rounded-[2rem] bg-[#F3F2ED] p-3">
            <div className="rounded-t-[1.5rem] bg-[#DD2C53] flex flex-col justify-end overflow-hidden h-[400px] pt-6 px-6">
              <div className="bg-white rounded-t-2xl shadow-[0_-4px_30px_rgba(0,0,0,0.15)] overflow-hidden h-[340px] shrink-0">
                <ApprovalsMockup />
              </div>
            </div>
            <div className="rounded-b-[1.5rem] bg-[#DD2C53] p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/85 mb-3">
                Bottleneck
              </p>
              <h3 className="text-[2rem] font-semibold leading-[1.12] tracking-tight text-white mb-2">
                Approvals stuck in inboxes
              </h3>
              <p className="text-base leading-relaxed text-white/80">
                Critical decisions delayed because the right person never saw the request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Mockup Components ─── */

function EmailMockup() {
  const emails = [
    { from: "L", prefix: "FW: FW:", subject: "Q4 Budget — final version", time: "2m", unread: true },
    { from: "T", prefix: "RE:", subject: "Q4 Budget — updated numbers", time: "1h", unread: true },
    { from: "S", prefix: "RE: RE:", subject: "Q4 Budget — which one??", time: "5h", unread: false },
    { from: "M", prefix: "", subject: "Meeting notes — project sync", time: "1d", unread: false },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#C34E1B]" />
          <span className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">Inbox</span>
        </div>
        <span className="text-[10px] text-foreground/40 bg-gray-50 rounded-full px-2.5 py-0.5 font-medium">
          12 unread
        </span>
      </div>
      {/* Rows */}
      <div className="flex flex-col flex-1">
        {emails.map((email, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 px-5 py-3.5 ${i < emails.length - 1 ? "border-b border-gray-50" : ""} ${email.unread ? "bg-orange-50/40" : ""}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${email.unread ? "bg-[#C34E1B]/15 text-[#C34E1B]" : "bg-gray-100 text-foreground/30"}`}>
              {email.from}
            </div>
            <div className="min-w-0 flex-1 flex items-center gap-2">
              {email.prefix && (
                <span className="text-[10px] text-[#C34E1B]/60 font-medium shrink-0">{email.prefix}</span>
              )}
              <span className={`text-sm truncate ${email.unread ? "font-semibold text-foreground" : "text-foreground/50"}`}>
                {email.subject}
              </span>
            </div>
            <span className="text-xs text-foreground/30 shrink-0">{email.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DataMockup() {
  const columns = ["CRM", "Invoicing", "Spreadsheet"];
  const rows = [
    { data: ["Acme Corp", "Acme Corp", "Acme Corp"], errors: [false, false, false] },
    { data: ["$12,400", "$12,400", "$12,040"], errors: [false, false, true] },
    { data: ["2024-01-15", "2024-01-15", "2024-01-51"], errors: [false, false, true] },
  ];
  const rows2 = [
    { data: ["Beta Inc", "Beta Inc.", "beta inc"], errors: [false, false, true] },
    { data: ["$8,200", "$8,200", "$82,00"], errors: [false, false, true] },
  ];

  return (
    <div className="flex flex-col h-full text-sm">
      {/* Header row */}
      <div className="grid grid-cols-3 border-b border-gray-100">
        {columns.map((col, i) => (
          <div key={col} className={`px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider ${i === 2 ? "text-red-500" : "text-foreground/50"}`}>
            {col}
          </div>
        ))}
      </div>
      {/* Data rows — Group 1 */}
      {rows.map((row, ri) => (
        <div key={ri} className="grid grid-cols-3 border-b border-gray-50">
          {row.data.map((cell, ci) => (
            <div key={ci} className={`px-4 py-2.5 text-[13px] ${row.errors[ci] ? "text-red-500 line-through decoration-red-300" : "text-foreground/80"}`}>
              {cell}
            </div>
          ))}
        </div>
      ))}
      {/* Separator — second company header */}
      <div className="grid grid-cols-3 border-b border-gray-100 mt-1">
        {columns.map((col, i) => (
          <div key={col} className={`px-4 py-2 text-[10px] font-semibold uppercase tracking-wider ${i === 2 ? "text-red-500" : "text-foreground/50"}`}>
            {col}
          </div>
        ))}
      </div>
      {/* Data rows — Group 2 */}
      {rows2.map((row, ri) => (
        <div key={ri} className="grid grid-cols-3 border-b border-gray-50">
          {row.data.map((cell, ci) => (
            <div key={ci} className={`px-4 py-2.5 text-[13px] ${row.errors[ci] ? "text-red-500 line-through decoration-red-300" : "text-foreground/80"}`}>
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function ReportMockup() {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border border-gray-200" />
          <span className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">Monthly Report</span>
        </div>
        <span className="text-[10px] font-semibold text-white bg-red-400 rounded-full px-2.5 py-0.5">
          DRAFT
        </span>
      </div>
      {/* Source tags */}
      <div className="flex gap-2 px-5 pt-4 pb-3">
        {["CRM", "Finance", "Support"].map((tag) => (
          <span key={tag} className="text-[11px] text-foreground/50 bg-gray-100 rounded-full px-3 py-1 font-medium">
            {tag}
          </span>
        ))}
      </div>
      {/* Progress bars */}
      <div className="flex flex-col gap-4 px-5 pt-2">
        {[
          { width: "100%", done: true },
          { width: "100%", done: true },
          { width: "75%", done: false },
          { width: "40%", done: false },
        ].map((bar, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-gray-300 rounded-full" style={{ width: bar.width }} />
            </div>
            {bar.done ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-teal-500">
                <path d="M3 8L6.5 11.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <div className="w-4 h-4 rounded-full border-2 border-gray-200 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ApprovalsMockup() {
  const items = [
    { initials: "MK", name: "Budget request", time: "3 days ago", status: "OVERDUE", statusColor: "bg-red-500 text-white" },
    { initials: "JL", name: "Vendor contract", time: "2 days ago", status: "PENDING", statusColor: "bg-amber-400 text-white" },
    { initials: "SV", name: "Hire approval", time: "5 hours ago", status: "PENDING", statusColor: "bg-amber-400 text-white" },
    { initials: "AB", name: "Office supplies order", time: "1 hour ago", status: "", statusColor: "" },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">Pending Approvals</span>
        </div>
        <span className="w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
          3
        </span>
      </div>
      {/* Approval rows */}
      <div className="flex flex-col flex-1">
        {items.map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 px-5 py-3.5 ${i < items.length - 1 ? "border-b border-gray-50" : ""}`}
          >
            <div className="w-9 h-9 rounded-full bg-[#DD2C53]/10 text-[#DD2C53] flex items-center justify-center text-xs font-bold shrink-0">
              {item.initials}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
              <p className="text-xs text-foreground/40">{item.time}</p>
            </div>
            {item.status && (
              <span className={`text-[9px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 shrink-0 ${item.statusColor}`}>
                {item.status}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
