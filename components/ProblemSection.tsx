import ScrollReveal from "./ScrollReveal";

const problems = [
  {
    title: "The Uncertainty Tax",
    description:
      "You know AI could help, but you don't know where to start. So you don't. Every week the gap between you and your competitors widens a little more.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "The Tool Overload",
    description:
      "ChatGPT, Copilot, Gemini... every week there's a new tool and no clear winner. You've spent more time evaluating than implementing.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
  },
  {
    title: "The Maintenance Problem",
    description:
      "You set something up once. It worked for a week. Now it's gathering dust. Without systems, AI experiments stay experiments.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.108A2.25 2.25 0 015.25 9.95V6.15a2.25 2.25 0 01.786-1.712l5.384-3.108a2.25 2.25 0 012.16 0l5.384 3.108A2.25 2.25 0 0118.75 6.15v3.8a2.25 2.25 0 01-.786 1.712l-5.384 3.108a2.25 2.25 0 01-2.16 0z" />
      </svg>
    ),
  },
];

export default function ProblemSection() {
  return (
    <section className="section-dark py-20 md:py-32 relative overflow-hidden">
      {/* Subtle grid overlay on dark section */}
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
          <p className="eyebrow !text-sage-soft">The problem</p>
          <h2 className="heading-section text-2xl sm:text-3xl md:text-4xl mt-5 max-w-2xl text-balance">
            Everyone&rsquo;s adopting AI. You know you should be too.
          </h2>
          <p className="mt-5 text-lg text-terminal-text/60 max-w-xl">
            You&rsquo;ve tried ChatGPT. You&rsquo;ve watched the videos. Nothing stuck.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5 mt-12 md:mt-16">
          {problems.map((problem, i) => (
            <ScrollReveal key={problem.title} delay={i * 100}>
              <div className="group rounded-2xl p-6 md:p-8 border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-500 ease-out-expo hover:bg-white/[0.04] hover:border-white/[0.1]">
                <div className="w-11 h-11 rounded-xl bg-sage/10 flex items-center justify-center text-sage-soft mb-5 transition-transform duration-500 ease-out-expo group-hover:scale-110">
                  {problem.icon}
                </div>
                <h3 className="text-lg font-display font-medium mb-3">
                  {problem.title}
                </h3>
                <p className="body-text !text-terminal-text/50 !leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
