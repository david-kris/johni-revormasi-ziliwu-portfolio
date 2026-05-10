import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stats from "@/components/Stats";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to my portfolio. Full Stack Developer specializing in Next.js, React, and Laravel.",
};

export default function PortfolioPage() {
  return (
    <div>
      <Hero />
      {/* <Brands /> */}
      <Services />
      <Projects />
      <Clients />
      <Stats />
      <CTA />
    </div>
  );
}
