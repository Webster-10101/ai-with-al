import ScrollReveal from "./ScrollReveal";

const inclusions = [
  {
    title: "Discovery session",
    detail: "Map your workflows, your team's pain points, and where the opportunities are",
  },
  {
    title: "Half-day workshop",
    detail: "Hands-on AI training, tailored to how your business actually works",
  },
  {
    title: "Custom SOPs",
    detail: "Built and implemented during the session, not just documented",
  },
  {
    title: "Opportunity audit",
    detail: "Where AI saves your team the most time across your operations",
  },
  {
    title: "Clarity plan",
    detail: "Your ongoing implementation roadmap to keep momentum after we leave",
  },
  {
    title: "30-day follow-up",
    detail: "Troubleshoot, refine, and make sure everything's sticking",
  },
];

export default function OfferSection() {
  return (
    <section className="py-20 md:py-32 relative">
      {/* Warm background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(122,154,126,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="container-page relative">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">The offer</p>
            <h2 className="heading-hero text-3xl sm:text-4xl md:text-5xl mt-5">
              AI Ignition
            </h2>
            <p className="lead mt-4">
              Half a day. Working systems. Real momentum.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
            {/* Offer card */}
            <div className="card p-8 md:p-10 relative overflow-hidden">
              {/* Subtle sage gradient border at top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sage to-transparent" />

              <div className="space-y-0">
                {inclusions.map((item, i) => (
                  <div
                    key={item.title}
                    className={`flex gap-4 py-4 ${
                      i !== inclusions.length - 1 ? "border-b border-charcoal/[0.06]" : ""
                    }`}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-medium text-charcoal">{item.title}</span>
                      <span className="text-charcoal-muted"> — {item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pull quote */}
              <div className="mt-8 pt-8 border-t border-charcoal/[0.06]">
                <p className="font-display text-xl md:text-2xl italic text-charcoal leading-snug text-center">
                  &ldquo;Walk away with working systems, not just ideas.&rdquo;
                </p>
              </div>

              {/* Price anchor */}
              <div className="mt-8 pt-8 border-t border-charcoal/[0.06] text-center">
                <p className="text-2xl md:text-3xl font-display font-medium text-charcoal">
                  From £3,000
                </p>
                <p className="text-sm text-charcoal-muted mt-2">
                  Scoped to your needs on the discovery call
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Guarantee + CTA */}
        <ScrollReveal delay={200}>
          <div className="mt-10 md:mt-14 text-center">
            {/* Guarantee */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-sage/[0.06] border border-sage/[0.12] mb-8">
              <svg className="w-5 h-5 text-sage flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-sm text-charcoal-light">
                Satisfaction guaranteed — full refund if the investment hasn&rsquo;t paid for itself within 90 days
              </span>
            </div>

            <div>
              <a href="#book" className="btn-primary text-base md:text-lg px-10 py-5">
                Book a Discovery Call — £175
              </a>
              <p className="mt-4 text-sm text-charcoal-muted">
                Credited in full if you go ahead with AI Ignition
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
