import ScrollReveal from "./ScrollReveal";
import TerminalBlock from "./TerminalBlock";

const shiftTerminalLines = [
  { type: "prompt" as const, text: 'claude "Campaign status across all clients"' },
  { type: "blank" as const, text: "" },
  { type: "comment" as const, text: "# Campaign Overview — Week of 10 Feb" },
  { type: "blank" as const, text: "" },
  { type: "output" as const, text: "🟢 Acme Corp: Launch assets approved, scheduled for Thursday" },
  { type: "output" as const, text: "🟡 GreenLeaf: Blog series 2/5 complete — writer needs brief for #3" },
  { type: "output" as const, text: "🔴 Spark Studio: Social calendar empty next week — needs content by Wed" },
  { type: "blank" as const, text: "" },
  { type: "summary" as const, text: "3 active campaigns · 1 urgent · Suggested: Brief writer + draft social batch" },
];

export default function ShiftSection() {
  return (
    <section id="how" className="py-20 md:py-32 relative">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <ScrollReveal>
              <p className="eyebrow">The shift</p>
              <h2 className="heading-section text-2xl sm:text-3xl md:text-4xl mt-5 text-balance">
                What if you had AI systems that actually ran themselves?
              </h2>
              <div className="mt-6 space-y-4">
                <p className="body-text">
                  Not a chatbot you prompt when you remember to. A system that processes your real inputs — meeting notes, project updates, client briefs — and turns them into structured, actionable next steps.
                </p>
                <p className="body-text">
                  AI as an <strong className="text-charcoal font-medium">operating layer</strong> for your business. Always watching, always organising, always surfacing what matters — so your team can focus on the work that counts.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={150}>
            <TerminalBlock
              lines={shiftTerminalLines}
              title="claude — campaign overview"
            />
          </ScrollReveal>
        </div>

        {/* Methodology detail */}
        <ScrollReveal className="mt-16 md:mt-24">
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                label: "Map",
                detail: "We map your workflows, your team's pain points, and where time is leaking.",
              },
              {
                label: "Build",
                detail: "Claude Code processes your real inputs — turning unstructured information into organised action.",
              },
              {
                label: "Run",
                detail: "You walk away with working systems, custom SOPs, and a plan your team can follow independently.",
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
