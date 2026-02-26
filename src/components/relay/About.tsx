const founders = [
  {
    name: "Founder Name",
    bio: "Relevant background and why they started Relay. Human, not corporate.",
    initials: "FN",
    color: "#0667D9",
    tags: ["Strategy", "Operations"],
  },
  {
    name: "Founder Name",
    bio: "Relevant background and why they started Relay. Human, not corporate.",
    initials: "FN",
    color: "#4C1D95",
    tags: ["Engineering", "AI/ML"],
  },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground mb-5">
          About
        </p>
        <h2 className="text-3xl md:text-[3rem] font-semibold leading-[1.1] tracking-tight text-foreground">
          {"Who's behind Relay"}
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {founders.map((founder, i) => (
            <div
              key={i}
              className="rounded-3xl p-8"
              style={{ backgroundColor: founder.color }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center relative">
                  <span className="text-sm font-bold text-white">{founder.initials}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-base text-white">{founder.name}</h3>
                  <div className="flex gap-1.5 mt-1">
                    {founder.tags.map((tag) => (
                      <span key={tag} className="text-[11px] bg-white/15 rounded-full px-2.5 py-0.5 text-white/85 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                {founder.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
