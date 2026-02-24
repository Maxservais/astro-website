import { Check, X } from "lucide-react";

const goodFit = [
  "Multiple tools, manual workarounds between them",
  "Processes that are slow, manual, or frequently blocked",
  "Team doing coordination work below their skill level",
];

const notFit = [
  "Challenge lives inside a single system",
  "Looking for a chatbot or content generation",
  "Want a black-box vendor who delivers without you",
];

export function Fit() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-[1.75rem] bg-card p-8 md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-5">
            Who This Is For
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-foreground max-w-2xl">
            {"This isn't for everyone."}{" "}
            <span className="text-relay-orange">{"And that's the point."}</span>
          </h2>

          {/* Bento: two columns */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Good Fit */}
            <div className="rounded-[1.25rem] bg-[#D1FAE5] p-7 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-relay-green/20 flex items-center justify-center">
                  <Check size={16} className="text-relay-green" />
                </div>
                <h3 className="font-bold text-lg text-foreground">Good Fit</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {goodFit.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-relay-green" />
                    </div>
                    <span className="text-sm text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative floating element */}
              <div className="mt-6 flex gap-2">
                <span className="text-xs bg-white/50 rounded-full px-3 py-1 text-foreground/50 font-medium">Process-heavy</span>
                <span className="text-xs bg-white/50 rounded-full px-3 py-1 text-foreground/50 font-medium">Multi-tool</span>
                <span className="text-xs bg-white/50 rounded-full px-3 py-1 text-foreground/50 font-medium">Coordination</span>
              </div>
            </div>

            {/* Not For You */}
            <div className="rounded-[1.25rem] bg-background border border-border p-7 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-relay-rose/10 flex items-center justify-center">
                  <X size={16} className="text-relay-rose" />
                </div>
                <h3 className="font-bold text-lg text-foreground">Not For You</h3>
              </div>
              <ul className="flex flex-col gap-4">
                {notFit.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-relay-rose/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X size={11} className="text-relay-rose" />
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-2">
                <span className="text-xs bg-muted rounded-full px-3 py-1 text-muted-foreground font-medium">Single-tool</span>
                <span className="text-xs bg-muted rounded-full px-3 py-1 text-muted-foreground font-medium">Content gen</span>
                <span className="text-xs bg-muted rounded-full px-3 py-1 text-muted-foreground font-medium">Black-box</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
