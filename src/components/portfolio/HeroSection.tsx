
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const titles = [
    'Full Stack Developer',
    '.NET Core Expert',
    'Angular Developer',
    'AI Enthusiast'
  ];
  
  useEffect(() => {
    let currentTitleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let deletingSpeed = 50;
    let pauseDuration = 1000;
    
    const typeEffect = () => {
      const currentTitle = titles[currentTitleIndex];
      
      if (!isDeleting) {
        // Typing forward
        setTypedText(currentTitle.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        
        if (currentCharIndex === currentTitle.length) {
          isDeleting = true;
          setTimeout(() => {
            typeEffect();
          }, pauseDuration);
          return;
        }
        
        setTimeout(typeEffect, typingSpeed);
      } else {
        // Deleting
        setTypedText(currentTitle.substring(0, currentCharIndex));
        currentCharIndex--;
        
        if (currentCharIndex === 0) {
          isDeleting = false;
          currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        }
        
        setTimeout(typeEffect, deletingSpeed);
      }
    };
    
    const timer = setTimeout(typeEffect, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-portfolio-dark via-portfolio-dark/90 to-portfolio-dark z-0"></div>
      
      <div className="container mx-auto relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-4 text-shadow">
          Hello, I'm <span className="text-gradient">Nilesh Yadav</span>
        </h1>
        
        <div className="h-12 md:h-16 mb-6">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-shadow">
            {typedText}<span className="animate-pulse">|</span>
          </h2>
        </div>
        
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-portfolio-light/80">
          Proactive Full Stack Developer specializing in .NET Core, Angular, and modern web technologies. 
          Passionate about crafting efficient solutions and integrating AI-driven features.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
          <Button size="lg" className="bg-portfolio-primary hover:bg-portfolio-primary/80">
            <MailIcon className="mr-2 h-4 w-4" />
            Get in Touch
          </Button>
          
          <div className="flex space-x-4">
            <a href="https://github.com/nil-01" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <GithubIcon className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/nilesh-yadav-cse" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <LinkedinIcon className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
