import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <div className="divider-gradient mb-16" />

        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-section text-2xl sm:text-3xl text-balance">
              Built by someone who uses it every day
            </h2>
            <div className="mt-6 space-y-4">
              <p className="body-text">
                I&rsquo;m Alistair Webster — a coach, speaking and confidence coach, and co-founder of{" "}
                <a href="https://freelancingforgood.com" target="_blank" rel="noopener noreferrer" className="text-sage font-medium hover:text-sage-dark transition-colors">Freelancing for Good</a>.
                I built AI systems to run my own business — managing multiple ventures, processing voice notes into action, keeping nothing in my head. Then I wrote{" "}
                <a href="https://claudeclarity.com" target="_blank" rel="noopener noreferrer" className="text-sage font-medium hover:text-sage-dark transition-colors"><em>Build Your AI-Powered Productivity System</em></a>{" "}
                about it.
              </p>
              <p className="body-text">
                Now I help teams figure out what is genuinely useful, what is mostly noise, and how to implement the bits that will actually save time. Nothing theoretical — just the tools and workflows I rely on daily, tailored to how your business actually runs.
              </p>
            </div>
            <a
              href="https://alistairwebster.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sage font-semibold text-sm transition-colors hover:text-sage-dark"
            >
              More about Alistair
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
