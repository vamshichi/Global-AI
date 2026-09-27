import { SpeakerCard } from "@/components/speaker-card";
import { Button } from "@/components/ui/button";

export function SpeakersSection() {
  return (
    <section id="speakers" className="border-t border-line bg-navy py-28 lg:py-36">
      <div className="container-edge">
        <div className="max-w-3xl">
          <p className="label-tag">Speakers</p>
          <h2 className="mt-5 text-[clamp(2.25rem,4.6vw,4rem)] font-medium leading-[1.05] text-ink">
            Every regulator.
            <br />
            Every risk officer.
            <br />
            One stage.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-dim">
            Confirmed and invited speakers from MeitY, IndiaAI Mission, RBI, SEBI, IRDAI, CERT-In,
            alongside CROs, CISOs and DPOs from India&rsquo;s largest banks, insurers and Global
            Capability Centres.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 10 }).map((_, i) => (
            <SpeakerCard key={i} delay={(i % 5) * 0.06} />
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <Button href="#registration" variant="primary">
            Nominate a Speaker
          </Button>
          <Button href="#agenda" variant="secondary">
            View Full Agenda
          </Button>
        </div>
      </div>
    </section>
  );
}
