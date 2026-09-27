import { DelegateProfile } from "@/components/delegate-profile";
import { IndustryMix } from "@/components/industry-mix";

export function DelegatesSection() {
  return (
    <section className="border-t border-line bg-void py-28 lg:py-36">
      <div className="container-edge">
        <DelegateProfile />
        <IndustryMix />
      </div>
    </section>
  );
}
