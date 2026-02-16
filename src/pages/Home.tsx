import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import ImpactNumbers from "../components/sections/ImpactNumbers";
import ComprehensiveSolutions from "../components/sections/ComprehensiveSolutions";
import WhyChoose from "../components/sections/WhyChoose";
import HowItWorks from "../components/sections/HowItWorks";
import FutureRoadmap from "../components/sections/FutureRoadmap";
import CtaBanner from "../components/sections/CtaBanner";
import Contact from "../components/sections/Contact";

export default function Home() {
  const location = useLocation();
  const scrollToId = (location.state as { scrollTo?: string } | null)?.scrollTo;

  useEffect(() => {
    if (scrollToId) {
      const timer = setTimeout(() => {
        document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [scrollToId]);

  return (
    <>
      <Hero />
      <Stats />
      <ComprehensiveSolutions />
      <WhyChoose />
      <CtaBanner />
      <HowItWorks />
      <ImpactNumbers />
    </>
  );
}
