import Image from "next/image";
import { experiences } from "@/data/experiences";
import { ExperienceCard } from "@/components/experience-card";
import { Button } from "@/components/ui/button";

export function ExperiencesSection() {
  const [, second, third, fourth, fifth] = experiences;

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

        {/* Experience Gallery */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">

          {/* Executive Networking Image */}
          <div className="group relative overflow-hidden rounded-2xl lg:col-span-2">
            <div className="relative h-[380px] lg:h-[480px]">
              <Image
                src="/images/executive-networking.png"
                alt="Executives networking at a premium corporate conference"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />

              {/* Dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 lg:p-10">
                <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                  Signature Experience
                </p>

                <h3 className="mt-3 text-3xl font-medium text-white lg:text-4xl">
                  Executive Networking
                </h3>

                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
                  Meaningful conversations. Valuable connections.
                  Opportunities that extend beyond the conference.
                </p>
              </div>
            </div>
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