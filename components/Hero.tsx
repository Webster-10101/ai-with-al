"use client";

import TerminalBlock from "./TerminalBlock";

const heroTerminalLines = [
  { type: "prompt" as const, text: 'claude "Process the team standup notes"' },
  { type: "blank" as const, text: "" },
  { type: "success" as const, text: "Parsed standup notes from 4 team members" },
  { type: "success" as const, text: "Updated project board: 3 tasks → In Progress, 1 → Done" },
  { type: "success" as const, text: "Flagged blocker: Design assets delayed — notified Sarah" },
  { type: "success" as const, text: "Generated client status report for Thursday review" },
  { type: "blank" as const, text: "" },
  { type: "summary" as const, text: "4 projects updated · 1 blocker flagged · Status report ready" },
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
            You know AI could transform your business.{" "}
            <span className="heading-display text-sage">Let&rsquo;s make it happen.</span>
          </h1>

          <p className="lead mt-6 md:mt-8 max-w-xl animate-fade-up stagger-2">
            From uncertainty to working systems in half a day.
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
          <TerminalBlock lines={heroTerminalLines} title="claude — processing standup" />
        </div>
      </div>
    </section>
  );
}
