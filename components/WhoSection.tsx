import ScrollReveal from "./ScrollReveal";

const personas = [
  {
    label: "Founders and leaders",
    description: "You want a calm, practical way to decide where AI helps and where it does not.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
      </svg>
    ),
  },
  {
    label: "Agencies and consultancies",
    description: "You are handling multiple clients, repeated deliverables, and constant context-switching. The win is better coordination and less admin.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197" />
      </svg>
    ),
  },
  {
    label: "Small teams",
    description: "You have enough moving parts to benefit from shared systems, but not enough time for a long transformation project.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
];

export default function WhoSection() {
  return (
    <section className="section-dark py-20 md:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(226,232,240,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(226,232,240,0.1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-page relative">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow !text-sage-soft">Who this is for</p>
            <h2 className="heading-section text-2xl sm:text-3xl md:text-4xl mt-5 text-balance">
              Best fit for teams that need implementation, not inspiration
            </h2>
            <p className="mt-4 text-lg text-terminal-text/60">
              The common thread is operational friction. Too much coordination, too many repeated tasks, and too little clarity about where AI actually helps.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5 mt-12 max-w-3xl mx-auto">
          {personas.map((persona, i) => (
            <ScrollReveal key={persona.label} delay={i * 80}>
              <div className="flex gap-4 p-5 md:p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-sage/10 flex items-center justify-center text-sage-soft">
                  {persona.icon}
                </div>
                <div>
                  <h3 className="font-display text-base font-medium text-terminal-text">
                    {persona.label}
                  </h3>
                  <p className="text-sm text-terminal-text/50 mt-1 leading-relaxed">
                    {persona.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
