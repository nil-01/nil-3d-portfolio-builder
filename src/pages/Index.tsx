
import { Suspense, useEffect } from 'react';
import Navbar from '@/components/portfolio/Navbar';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import CertificationsSection from '@/components/portfolio/CertificationsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';
import HeroCanvas from '@/components/3d/HeroCanvas';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Nilesh Yadav | Full Stack Developer";
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-dark text-portfolio-light">
      <Suspense fallback={<div className="fixed inset-0 flex items-center justify-center">Loading...</div>}>
        <HeroCanvas />
      </Suspense>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
