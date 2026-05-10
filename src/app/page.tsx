"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { BackgroundEffects } from "@/components/ui/BackgroundEffects";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { Timeline } from "@/components/sections/Timeline";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { WhyChoose } from "@/components/sections/WhyChoose";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Navbar />
        <main>
          <Hero />
          <TrustedBy />
          <Services />
          <About />
          <TechStack />
          <Projects />
          <WhyChoose />
          <Timeline />
          <Testimonials />
          <Pricing />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
