import Hero from "@/components/dubai/HeroSection"; 
import AboutSummit from "@/components/dubai/AboutSummit";  
import WhyDubai from "@/components/dubai/WhyDubai";
import WhatMakesUsDifferent from "@/components/dubai/WhatMakesUsDifferent";
import OurMission from "@/components/dubai/OurMission";
import WhoAttends from "@/components/dubai/WhoAttends";
import SpeakersSection from "@/components/dubai/SpeakersSection";
import SponsorsPartners from "@/components/dubai/SponsorsPartners";

export default function Home() {
  return (
    <>
        <Hero />
        <AboutSummit />
        <WhyDubai />
        <WhatMakesUsDifferent />
        <OurMission />
        <WhoAttends />
        <SpeakersSection />
        <SponsorsPartners />
    </>
  );
}
