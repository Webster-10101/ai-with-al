"use client";

import TerminalBlock from "./TerminalBlock";

const heroTerminalLines = [
  { type: "prompt" as const, text: 'claude "What needs attention across the team this week?"' },
  { type: "blank" as const, text: "" },
  { type: "success" as const, text: "Scanned inboxes, project boards, and meeting notes" },
  { type: "blank" as const, text: "" },
  { type: "summary" as const, text: "━━ Weekly team scan ━━" },
  { type: "success" as const, text: "Client proposal blocked — waiting on budget sign-off" },
  { type: "success" as const, text: "Content plan drafted for next 10 days" },
  { type: "success" as const, text: "Ops checklist turned into reusable SOP" },
  { type: "success" as const, text: "2 follow-ups ready to send before Friday" },
  { type: "blank" as const, text: "" },
  { type: "summary" as const, text: "Recommended: assign budget follow-up and ship content batch today" },
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
          <p className="eyebrow animate-fade-up">AI workshops for teams</p>

          <h1 className="heading-hero text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] mt-6 animate-fade-up stagger-1 text-balance">
            Cut through the AI noise.{" "}
            <span className="heading-display text-sage">Build systems your team will actually use.</span>
          </h1>

          <p className="lead mt-6 md:mt-8 max-w-xl animate-fade-up stagger-2">
            Half-day workshops and hands-on implementation for founders, agencies, and small teams who want practical AI workflows, not more tools to evaluate.
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
          <TerminalBlock lines={heroTerminalLines} title="claude — weekly team scan" />
        </div>
      </div>
    </section>
  );
}
