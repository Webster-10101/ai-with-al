import ScrollReveal from "./ScrollReveal";

const personas = [
  {
    label: "Founders & CEOs",
    description: "You're building something that matters and need systems that scale with you — not more tools to manage.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
      </svg>
    ),
  },
  {
    label: "Agencies & consultancies",
    description: "Juggling multiple clients, tight deadlines, and a team that needs to stay aligned. AI keeps the plates spinning.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197" />
      </svg>
    ),
  },
  {
    label: "Marketing teams",
    description: "Campaigns, content calendars, client reporting — the coordination work that eats your creative time.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
  {
    label: "Solo operators",
    description: "You value your time fiercely. You need systems that handle the admin so you can focus on the work.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
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
              You know AI should be doing more for your business
            </h2>
            <p className="mt-4 text-lg text-terminal-text/60">
              The common thread? You&rsquo;re tired of experimenting and ready for systems that actually work.
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
