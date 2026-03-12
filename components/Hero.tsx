"use client";

import TerminalBlock from "./TerminalBlock";

const heroTerminalLines = [
  { type: "prompt" as const, text: 'claude "Review my day"' },
  { type: "blank" as const, text: "" },
  { type: "success" as const, text: "Scanned calendar, inbox, and project boards" },
  { type: "blank" as const, text: "" },
  { type: "summary" as const, text: "━━ Today: Wednesday 12 Mar ━━" },
  { type: "success" as const, text: "3 meetings (1 cancellable — supplier check-in)" },
  { type: "success" as const, text: "7 emails drafted and ready for review" },
  { type: "success" as const, text: "Proposal draft due Friday — on track" },
  { type: "success" as const, text: "New project website ready for deploy" },
  { type: "blank" as const, text: "" },
  { type: "summary" as const, text: "Focus block recommended: 09:30–11:30 for proposal writing" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-44 pb-20 md:pb-32 overflow-hidden">
      {/* Subtle radial glow behind hero */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(122,154,126,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container-page relative">
        <div className="max-w-3xl">
          <p className="eyebrow animate-fade-up">AI Ignition</p>

          <h1 className="heading-hero text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] mt-6 animate-fade-up stagger-1 text-balance">
            AI will transform how you work.{" "}
            <span className="heading-display text-sage">Let&rsquo;s get you ahead of the game.</span>
          </h1>

          <p className="lead mt-6 md:mt-8 max-w-xl animate-fade-up stagger-2">
            From uncertainty to a working system that multiplies your productivity in half a day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-10 animate-fade-up stagger-3">
            <a href="#book" className="btn-primary">
              Book a Discovery Call
            </a>
            <a href="#how" className="btn-secondary">
              See how it works
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 md:mt-16 animate-fade-up stagger-4 max-w-2xl">
          <TerminalBlock lines={heroTerminalLines} title="claude — daily review" />
        </div>
      </div>
    </section>
  );
}
