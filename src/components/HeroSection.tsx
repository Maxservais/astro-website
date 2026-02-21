export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#f9fafb] flex items-center justify-center overflow-hidden">
      {/* Subtle radial glow behind the headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-10 py-24">
        {/* Eyebrow */}
        <p className="text-[#c0452a] text-sm font-medium tracking-[0.3em] uppercase">
          Your AI Innovation Partner
        </p>

        {/* Main headline */}
        <h1 className="font-bold leading-[0.95] tracking-[-0.03em]" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "#1a1a1a" }}>
          From AI strategy to
          <br />
          implementation,
          <br />
          <span className="text-[#b0b0b0] italic">without the bullsh*t.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#666666] text-lg md:text-xl max-w-2xl leading-relaxed">
          AI Agents &amp; Automation for growth &amp; efficiency across every department in your organization
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="#"
            className="bg-[#1a1a1a] font-medium text-base px-10 py-4 rounded-full hover:bg-[#333333] transition-colors duration-200 no-underline"
            style={{ color: "#ffffff" }}
          >
            let's hop on a call &rarr;
          </a>
          <a
            href="#"
            className="border border-[#d0d0d0] font-medium text-base px-10 py-4 rounded-full hover:border-[#999999] transition-colors duration-200 no-underline"
            style={{ color: "#333333" }}
          >
            Our Solutions
          </a>
        </div>

        {/* Bottom link */}
        <a
          href="#"
          className="text-sm underline underline-offset-4 decoration-[#cccccc] hover:decoration-[#333333] transition-colors duration-200 mt-6"
          style={{ color: "#666666" }}
        >
          Discover how to become an AI-first company &rarr;
        </a>
      </div>
    </section>
  );
}
