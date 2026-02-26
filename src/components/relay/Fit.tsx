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
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-5">
          Who This Is For
        </p>
        <h2 className="text-3xl md:text-[3rem] font-semibold leading-[1.1] tracking-tight text-foreground max-w-2xl">
          {"This isn't for everyone."}{" "}
          <span className="text-relay-orange">{"And that's the point."}</span>
        </h2>

        {/* Two columns */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Good Fit */}
          <div className="rounded-3xl bg-[#02693E] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <Check size={16} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg text-white">Good Fit</h3>
            </div>
            <ul className="flex flex-col gap-4">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="text-white" />
                  </div>
                  <span className="text-sm text-white/85 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-2">
              {["Process-heavy", "Multi-tool", "Coordination"].map((tag) => (
                <span key={tag} className="text-[11px] bg-white/15 rounded-full px-3 py-1 text-white/80 font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Not For You */}
          <div className="rounded-3xl bg-[#F3F2ED] border border-[#E6E6E5] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#DD2C53]/10 flex items-center justify-center">
                <X size={16} className="text-[#DD2C53]" />
              </div>
              <h3 className="font-semibold text-lg text-foreground">Not For You</h3>
            </div>
            <ul className="flex flex-col gap-4">
              {notFit.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#DD2C53]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={11} className="text-[#DD2C53]" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-2">
              {["Single-tool", "Content gen", "Black-box"].map((tag) => (
                <span key={tag} className="text-[11px] bg-[#E6E6E5] rounded-full px-3 py-1 text-muted-foreground font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
