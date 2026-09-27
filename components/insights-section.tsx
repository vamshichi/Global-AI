import { insightItems } from "@/data/insights";
import { InsightCard } from "@/components/insight-card";
import { Button } from "@/components/ui/button";

export function InsightsSection() {
  return (
    <section id="insights" className="border-t border-line bg-void py-28 lg:py-36">
      <div className="container-edge">
        <div className="max-w-3xl">
          <p className="label-tag">Insights</p>
          <h2 className="mt-5 text-[clamp(2.25rem,4.6vw,4rem)] font-medium leading-[1.05] text-ink">
            The intelligence behind the summit.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 border border-line bg-charcoal p-10 lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <div>
            <p className="label-tag">Featured Asset</p>
            <p className="mt-4 text-2xl font-medium text-ink md:text-3xl">
              India AI Governance &amp; Security Readiness Index 2026
            </p>
            <p className="mt-4 max-w-md text-ink-dim">
              Where do you rank against 200+ senior peers? Take the self-assessment.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Button href="#registration" variant="primary">
              Take the Readiness Assessment
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {insightItems.map((item, i) => (
            <InsightCard key={item.title} item={item} delay={i * 0.06} />
          ))}
        </div>

        <div className="mt-14">
          <Button href="#registration" variant="secondary">
            Subscribe for Weekly Regulatory Alerts
          </Button>
        </div>
      </div>
    </section>
  );
}
