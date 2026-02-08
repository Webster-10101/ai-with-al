import ScrollReveal from "./ScrollReveal";

const CALENDLY_URL = "https://calendly.com/alistair-webster/ai-ignition-discovery-call";

export default function BookingSection() {
  return (
    <section id="book" className="section-dark py-20 md:py-28 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(122,154,126,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container-page relative">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="eyebrow !text-sage-soft">Next step</p>
            <h2 className="heading-section text-2xl sm:text-3xl md:text-4xl mt-5">
              Book your discovery call
            </h2>
            <p className="mt-5 text-lg text-terminal-text/60 max-w-lg mx-auto">
              30 minutes to map your workflows, identify the biggest opportunities, and see if AI Ignition is the right fit.
            </p>

            <div className="mt-10">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base md:text-lg px-10 py-5"
              >
                Book a Discovery Call — £175
              </a>
              <p className="mt-4 text-sm text-terminal-muted">
                Credited in full if you go ahead with AI Ignition
              </p>
            </div>

            {/* What to expect */}
            <div className="mt-14 grid sm:grid-cols-3 gap-6 text-left max-w-xl mx-auto">
              {[
                {
                  step: "1",
                  text: "Book and pay via Calendly",
                },
                {
                  step: "2",
                  text: "30-minute call to map your needs",
                },
                {
                  step: "3",
                  text: "Get a tailored AI Ignition proposal",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-sage/15 flex items-center justify-center font-mono text-xs text-sage-soft font-semibold">
                    {item.step}
                  </span>
                  <p className="text-sm text-terminal-text/60 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
