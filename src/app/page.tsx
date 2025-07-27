import FeaturdProjects from "@/components/FeaturdProjects";
import HeroSection from "@/components/HeroSection";
import LoadingSpin from "@/components/LoadingSpin";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<LoadingSpin />}>
      <HeroSection />
      <Skills />
      <FeaturdProjects />
      <Testimonials />/
    </Suspense>
  );
}
