
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapIcon, PhoneIcon, GlobeIcon, CalendarIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center animate-float">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <Card className="card-gradient shadow-lg border-portfolio-primary/20 overflow-hidden h-full card-hover-animation">
              <div className="relative aspect-square overflow-hidden flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary opacity-30"></div>
                <Avatar className="w-full h-full max-w-[250px] max-h-[250px] mx-auto rounded-full overflow-hidden border-4 border-portfolio-primary/30">
                  <AvatarImage 
                    src="https://miro.medium.com/v2/resize:fit:1400/1*XTi9TeIZkQBMKaLaMrj0Sw.jpeg" 
                    alt="Nilesh Yadav GDSC" 
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-portfolio-primary to-portfolio-secondary text-white text-4xl">NY</AvatarFallback>
                </Avatar>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapIcon className="h-5 w-5 text-portfolio-primary" />
                    <span className="text-content">Vadodara, Gujarat, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="h-5 w-5 text-portfolio-primary" />
                    <span className="text-content">+91-9316483520</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GlobeIcon className="h-5 w-5 text-portfolio-primary" />
                    <span className="text-content">Full Stack Developer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="h-5 w-5 text-portfolio-primary" />
                    <span className="text-content">2+ Years Experience</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:w-2/3">
            <Card className="dev-card h-full p-6 card-hover-animation">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4 text-portfolio-primary">Summary</h3>
                <p className="text-content mb-6 leading-relaxed">
                  Passionate Full Stack Developer with proficiency in .NET technologies, Angular, and cloud solutions. 
                  As a Google Developer Student Clubs (GDSC) lead, I've demonstrated leadership in fostering tech communities 
                  and guiding student developers. With hands-on experience in designing scalable APIs and 
                  implementing secure payment solutions, I bring a blend of technical expertise and collaborative skills.
                </p>
                <p className="text-content mb-6 leading-relaxed">
                  Actively exploring AI integration in applications, I'm dedicated to creating intelligent features 
                  that enhance user experience. My commitment to continuous learning is reflected in my certifications 
                  and badges from Google Cloud and Microsoft Azure, demonstrating my adaptability across diverse 
                  technology stacks and methodologies.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="dev-card p-4">
                    <h4 className="text-lg font-semibold mb-2 text-portfolio-secondary">Education</h4>
                    <p className="text-content mb-1">Bachelor of Engineering</p>
                    <p className="text-content mb-1">Computer Science and Engineering</p>
                    <p className="text-content mb-4">Gujarat Technological University</p>
                    <p className="text-sm text-subtle">Graduated: 2023</p>
                  </div>
                  <div className="dev-card p-4">
                    <h4 className="text-lg font-semibold mb-2 text-portfolio-secondary">Interests</h4>
                    <ul className="list-disc list-inside text-content space-y-1">
                      <li>Cloud Architecture & DevOps</li>
                      <li>Google Cloud & Microsoft Azure</li>
                      <li>Artificial Intelligence Integration</li>
                      <li>API Design & System Integration</li>
                      <li>Modern Web Development</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
