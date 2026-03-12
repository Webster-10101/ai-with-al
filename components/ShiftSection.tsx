import ScrollReveal from "./ScrollReveal";
import TerminalBlock from "./TerminalBlock";

const shiftTerminalLines = [
  { type: "prompt" as const, text: 'claude "Summarise ops blockers and next actions for the team"' },
  { type: "blank" as const, text: "" },
  { type: "comment" as const, text: "# Team operations overview" },
  { type: "blank" as const, text: "" },
  { type: "output" as const, text: "🟢 Sales follow-ups drafted from this week's meeting notes" },
  { type: "output" as const, text: "🟡 Onboarding SOP needs final owner before rollout" },
  { type: "output" as const, text: "🔴 Client reporting still manual — 3 hours lost every Friday" },
  { type: "blank" as const, text: "" },
  { type: "summary" as const, text: "Suggested next step: automate reporting and assign SOP ownership today" },
];

export default function ShiftSection() {
  return (
    <section id="how" className="py-20 md:py-32 relative">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <ScrollReveal>
              <p className="eyebrow">Get on the front foot</p>
              <h2 className="heading-section text-2xl sm:text-3xl md:text-4xl mt-5 text-balance">
                Turn AI into an operating layer for the team
              </h2>
              <div className="mt-6 space-y-4">
                <p className="body-text">
                  I help teams identify the handful of workflows where AI can save real time, reduce coordination overhead, and keep important things from slipping. No inflated promises. Just useful systems built around how you already work.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={150}>
            <TerminalBlock
              lines={shiftTerminalLines}
              title="claude — team ops overview"
            />
          </ScrollReveal>
        </div>

        {/* Methodology detail */}
        <ScrollReveal className="mt-16 md:mt-24">
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                label: "Diagnose",
                detail: "We map the workflows, bottlenecks, and repeated decisions that are costing your team time.",
              },
              {
                label: "Build",
                detail: "We implement practical workflows using your real materials, tools, and team context.",
              },
              {
                label: "Embed",
                detail: "You leave with clear SOPs, ownership, and a rollout plan so the system actually sticks.",
              },
            ].map((step, i) => (
              <div key={step.label} className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-sage font-semibold tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-charcoal/10" />
                </div>
                <h3 className="font-display text-lg font-medium mb-2">
                  {step.label}
                </h3>
                <p className="body-text text-sm">{step.detail}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
