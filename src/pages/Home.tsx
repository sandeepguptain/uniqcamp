import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import ComprehensiveSolutions from "../components/sections/ComprehensiveSolutions";
import WhyChoose from "../components/sections/WhyChoose";
import HowItWorks from "../components/sections/HowItWorks";
import FutureRoadmap from "../components/sections/FutureRoadmap";
import CtaBanner from "../components/sections/CtaBanner";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ComprehensiveSolutions />
      <WhyChoose />
      <HowItWorks />
      <FutureRoadmap />
      <CtaBanner />
      <Contact />
    </>
  );
}
