import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-3xl bg-foreground relative overflow-hidden">
          {/* Decorative gradient accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-relay-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0667D9]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-[3rem] font-semibold leading-[1.1] tracking-tight text-primary-foreground max-w-2xl mx-auto text-balance">
              {"Let's find out where agentic AI can make the biggest difference "}
              <span className="text-relay-orange">in your business.</span>
            </h2>
            <p className="mt-5 text-primary-foreground/40 text-base">
              30-minute call. No pitch, no commitment.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-relay-orange text-white text-sm font-medium hover:bg-relay-orange/90 transition-colors"
            >
              Book a Discovery Call
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
