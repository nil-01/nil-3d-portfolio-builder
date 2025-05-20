
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LinkIcon, FileIcon, UserIcon, BriefcaseIcon, CodeIcon, MenuIcon, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

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
  
  const NavLinks = () => (
    <>
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
    </>
  );
  
  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        scrolled ? 'bg-portfolio-dark/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#hero" className="text-2xl font-bold text-gradient">
          Nilesh Yadav
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
          <ThemeToggle />
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-portfolio-dark/95 backdrop-blur-xl border-portfolio-primary/20">
            <div className="flex flex-col space-y-6 mt-8">
              <NavLinks />
              <div className="flex justify-center pt-4">
                <ThemeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
