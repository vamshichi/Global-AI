import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { StormTimeline } from "@/components/storm-timeline";
import { Stats } from "@/components/stats";
import { ExperiencesSection } from "@/components/experiences-section";
import { WhyAttend } from "@/components/why-attend";
import { Agenda } from "@/components/agenda";
import { SpeakersSection } from "@/components/speakers-section";
import { PartnerSection } from "@/components/partner-section";
import { DelegatesSection } from "@/components/delegates-section";
import { VenueSection } from "@/components/venue-section";
import { InsightsSection } from "@/components/insights-section";
import { CtaSection } from "@/components/cta-section";
import { RegistrationSection } from "@/components/registration-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StormTimeline />
        <Stats />
        <ExperiencesSection />
        <WhyAttend />
        <Agenda />
        {/* <SpeakersSection /> */}
        <PartnerSection />
        <DelegatesSection />
        <VenueSection />
        <InsightsSection />
        <CtaSection />
        <RegistrationSection />
      </main>
      <Footer />
    </>
  );
}
