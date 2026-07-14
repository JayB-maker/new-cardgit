"use client";

import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import Explore from "@/components/sections/explore";
import Philosophy from "@/components/sections/philosophy";
import CTA from "@/components/sections/cta";
import SocialProof from "@/components/sections/social-proof";
import UseCases from "@/components/sections/use-cases";
import Features from "@/components/sections/features";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import RealFeatures from "@/components/sections/real-feature";
import DigitalBusiness from "@/components/sections/digital-business";

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <RealFeatures />
      <Explore />
      <SocialProof />
      <DigitalBusiness />
      <UseCases />
      {/* <Philosophy /> */}
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
