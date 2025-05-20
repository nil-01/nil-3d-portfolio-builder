
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { FormEvent } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
      variant: "default",
    });
  };
  
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3 space-y-6">
            <Card className="card-gradient shadow-lg border-portfolio-primary/20 overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-portfolio-primary">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-portfolio-primary/20 p-3 rounded-full">
                      <MailIcon className="h-5 w-5 text-portfolio-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-portfolio-light/60">Email</p>
                      <a 
                        href="mailto:shailesh.y12340@gmail.com" 
                        className="text-portfolio-light hover:text-portfolio-primary transition-colors"
                      >
                        shailesh.y12340@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-portfolio-primary/20 p-3 rounded-full">
                      <PhoneIcon className="h-5 w-5 text-portfolio-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-portfolio-light/60">Phone</p>
                      <a 
                        href="tel:+919316483520" 
                        className="text-portfolio-light hover:text-portfolio-primary transition-colors"
                      >
                        +91-9316483520
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="bg-portfolio-primary/20 p-3 rounded-full">
                      <MapPinIcon className="h-5 w-5 text-portfolio-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-portfolio-light/60">Location</p>
                      <p>India, Gujarat</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4 text-portfolio-secondary">Connect With Me</h4>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/nil-01" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-portfolio-primary/20 p-3 rounded-full hover:bg-portfolio-primary/40 transition-colors"
                    >
                      <GithubIcon className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/nilesh-yadav-cse" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-portfolio-primary/20 p-3 rounded-full hover:bg-portfolio-primary/40 transition-colors"
                    >
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                    <a 
                      href="mailto:shailesh.y12340@gmail.com" 
                      className="bg-portfolio-primary/20 p-3 rounded-full hover:bg-portfolio-primary/40 transition-colors"
                    >
                      <MailIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-gradient shadow-lg border-portfolio-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-portfolio-primary">Available For</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-portfolio-primary"></div>
                    <span>Full-time Positions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-portfolio-primary"></div>
                    <span>Contract Work</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-portfolio-primary"></div>
                    <span>Technical Consultation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-portfolio-primary"></div>
                    <span>Collaboration Projects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:w-2/3">
            <Card className="card-gradient shadow-lg border-portfolio-primary/20 h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-portfolio-primary">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input 
                        id="name" 
                        placeholder="Your name" 
                        className="bg-portfolio-primary/5 border-portfolio-primary/20 focus:border-portfolio-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email" 
                        className="bg-portfolio-primary/5 border-portfolio-primary/20 focus:border-portfolio-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input 
                      id="subject" 
                      placeholder="Message subject" 
                      className="bg-portfolio-primary/5 border-portfolio-primary/20 focus:border-portfolio-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message" 
                      rows={6} 
                      className="bg-portfolio-primary/5 border-portfolio-primary/20 focus:border-portfolio-primary resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-portfolio-primary hover:bg-portfolio-primary/80">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
