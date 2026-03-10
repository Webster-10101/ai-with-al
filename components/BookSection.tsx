import ScrollReveal from "./ScrollReveal";

export default function BookSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <p className="eyebrow">The book</p>
            <h2 className="heading-section text-2xl sm:text-3xl mt-5 text-balance">
              Want to explore the methodology first?
            </h2>
            <p className="body-text mt-5 max-w-lg mx-auto">
              The thinking behind the approach — in book form.{" "}
              <em className="font-display">Build Your AI-Powered Productivity System</em>{" "}
              walks you through the exact framework — available now on Amazon.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mt-10 flex justify-center">
            <div className="card p-6 md:p-8 max-w-md w-full flex flex-col items-center text-center">
              <img
                src="/book-cover.jpg"
                alt="Build Your AI-Powered Productivity System by Alistair Webster"
                className="w-36 h-auto rounded-lg shadow-[0_8px_32px_rgba(30,35,40,0.15)] mb-6"
              />

              <h3 className="font-display text-lg font-medium text-charcoal">
                Build Your AI-Powered Productivity System
              </h3>
              <p className="text-sm text-charcoal-muted mt-2">
                The complete guide to building AI systems that run themselves.
              </p>

              <a
                href="https://www.amazon.co.uk/dp/B0FTMB9GJ1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-6 text-sm px-6 py-3"
              >
                Get the Book — £3.70
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
