
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LinkIcon, FileIcon, UserIcon, BriefcaseIcon, CodeIcon, } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        scrolled ? 'bg-portfolio-dark/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold text-gradient">
          Nilesh Yadav
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <Button variant="link" onClick={() => scrollToSection('about')} className="text-portfolio-light hover:text-portfolio-primary">
            <UserIcon className="mr-2 h-4 w-4" />
            About
          </Button>
          <Button variant="link" onClick={() => scrollToSection('experience')} className="text-portfolio-light hover:text-portfolio-primary">
            <BriefcaseIcon className="mr-2 h-4 w-4" />
            Experience
          </Button>
          <Button variant="link" onClick={() => scrollToSection('skills')} className="text-portfolio-light hover:text-portfolio-primary">
            <CodeIcon className="mr-2 h-4 w-4" />
            Skills
          </Button>
          <Button variant="link" onClick={() => scrollToSection('projects')} className="text-portfolio-light hover:text-portfolio-primary">
            <FileIcon className="mr-2 h-4 w-4" />
            Projects
          </Button>
          <Button variant="link" onClick={() => scrollToSection('contact')} className="text-portfolio-light hover:text-portfolio-primary">
            <LinkIcon className="mr-2 h-4 w-4" />
            Contact
          </Button>
        </div>
        
        <Button className="md:hidden" variant="outline">Menu</Button>
      </div>
    </nav>
  );
};

export default Navbar;
