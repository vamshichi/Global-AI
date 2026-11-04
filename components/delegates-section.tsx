import { DelegateProfile } from "@/components/delegate-profile";
import { IndustryMix } from "@/components/industry-mix";
import Image from "next/image";

export function DelegatesSection() {
  return (
    <section className="relative isolate overflow-hidden border-t border-line bg-void py-28 lg:py-36">
      {/* Background Image */}
      <Image
        src="/images/delegate-profile.png"
        alt="Conference delegates networking"
        fill
        priority={false}
        className="absolute inset-0 -z-10 object-cover"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-navy/90" />

      {/* Section Content */}
      <div className="container-edge relative z-10">
        <DelegateProfile />
        <IndustryMix />
      </div>
    </section>
  );
}