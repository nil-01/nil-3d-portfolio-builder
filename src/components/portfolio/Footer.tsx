
import { GithubIcon, LinkedinIcon, MailIcon, ArrowUpIcon } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-portfolio-dark py-10 border-t border-portfolio-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-gradient">Nilesh Yadav</h3>
            <p className="text-sm text-portfolio-light/60 mt-1">Full Stack Developer</p>
          </div>
          
          <div className="flex gap-6 mb-6 md:mb-0">
            <a 
              href="https://github.com/nil-01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-light/70 hover:text-portfolio-primary transition-colors"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/nilesh-yadav-cse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-light/70 hover:text-portfolio-primary transition-colors"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a 
              href="mailto:shailesh.y12340@gmail.com"
              className="text-portfolio-light/70 hover:text-portfolio-primary transition-colors"
            >
              <MailIcon className="h-5 w-5" />
            </a>
          </div>
          
          <div>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-portfolio-light/70 hover:text-portfolio-primary transition-colors"
            >
              Back to top <ArrowUpIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        <div className="mt-8 border-t border-portfolio-primary/10 pt-6 text-center">
          <p className="text-sm text-portfolio-light/60">
            © {new Date().getFullYear()} Nilesh Yadav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
