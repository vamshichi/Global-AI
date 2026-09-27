import { experiences } from "@/data/experiences";
import { ExperienceCard } from "@/components/experience-card";
import { Button } from "@/components/ui/button";

export function ExperiencesSection() {
  const [first, second, third, fourth, fifth] = experiences;

  return (
    <section className="border-t border-line bg-void py-28 lg:py-36">
      <div className="container-edge">
        <div className="max-w-3xl">
          <p className="label-tag">Signature Experiences</p>
          <h2 className="mt-5 text-[clamp(2.25rem,4.6vw,4rem)] font-medium leading-[1.05] text-ink">
            Built to be talked about.
            <br />
            Not just attended.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ExperienceCard experience={first} size="lg" />
          </div>
          <ExperienceCard experience={second} delay={0.08} />
          <ExperienceCard experience={third} delay={0.14} />
          <div className="lg:col-span-2">
            <ExperienceCard experience={fourth} size="lg" delay={0.2} />
          </div>
          <ExperienceCard experience={fifth} delay={0.26} />
        </div>

        <div className="mt-14">
          <Button href="#registration" variant="primary">
            See These Live — Reserve Your Seat
          </Button>
        </div>
      </div>
    </section>
  );
}
