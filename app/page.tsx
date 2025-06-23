'use client';

import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import { BackToTop } from '@/components/BackToTop';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />

      <section id="hero">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
