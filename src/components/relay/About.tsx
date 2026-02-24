const founders = [
  {
    name: "Founder Name",
    bio: "Relevant background and why they started Relay. Human, not corporate.",
    initials: "FN",
    bgColor: "bg-[#FFF4E6]",
    accentColor: "bg-relay-orange",
    tags: ["Strategy", "Operations"],
  },
  {
    name: "Founder Name",
    bio: "Relevant background and why they started Relay. Human, not corporate.",
    initials: "FN",
    bgColor: "bg-[#DBEAFE]",
    accentColor: "bg-relay-blue",
    tags: ["Engineering", "AI/ML"],
  },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-[1.75rem] bg-card p-8 md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-5">
            About
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-foreground">
            {"Who's behind Relay"}
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {founders.map((founder, i) => (
              <div
                key={i}
                className={`${founder.bgColor} rounded-[1.25rem] p-7 md:p-8`}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/70 flex items-center justify-center relative">
                    <span className="text-sm font-bold text-muted-foreground">{founder.initials}</span>
                    <span className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full ${founder.accentColor} border-2 border-white`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-foreground">{founder.name}</h3>
                    <div className="flex gap-1.5 mt-1">
                      {founder.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-white/50 rounded-full px-2.5 py-0.5 text-foreground/50 font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
