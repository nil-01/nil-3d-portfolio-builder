
import { Suspense, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/portfolio/Navbar';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import CertificationsSection from '@/components/portfolio/CertificationsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';
import HeroCanvas from '@/components/3d/HeroCanvas';

const Index = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    // Update document title
    document.title = "Nilesh Yadav | Full Stack Developer";
  }, []);

  return (
    <div className={`min-h-screen relative ${theme === 'light' ? 'bg-gray-50' : 'bg-portfolio-dark'}`}>
      <HeroCanvas />
      
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
