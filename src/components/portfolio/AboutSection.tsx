
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapIcon, PhoneIcon, GlobeIcon, CalendarIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <Card className="card-gradient shadow-lg border-portfolio-primary/20 overflow-hidden h-full">
              <div className="relative aspect-square overflow-hidden flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary opacity-30"></div>
                <Avatar className="w-full h-full max-w-[250px] max-h-[250px] mx-auto">
                  <AvatarImage src="https://media.licdn.com/dms/image/D4D03AQGsW8C1-CfxRA/profile-displayphoto-shrink_800_800/0/1695879749038?e=1719446400&v=beta&t=fNrOF3GM2JlCDU0Ps7UgQWx8GKPvMO8UsdmGmPntYys" alt="Nilesh Yadav" className="object-cover" />
                  <AvatarFallback className="bg-gradient-to-br from-portfolio-primary to-portfolio-secondary text-white text-4xl">NY</AvatarFallback>
                </Avatar>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapIcon className="h-5 w-5 text-portfolio-primary" />
                    <span>Vadodara, Gujarat, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="h-5 w-5 text-portfolio-primary" />
                    <span>+91-9316483520</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GlobeIcon className="h-5 w-5 text-portfolio-primary" />
                    <span>Full Stack Developer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="h-5 w-5 text-portfolio-primary" />
                    <span>2+ Years Experience</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:w-2/3">
            <Card className="card-gradient shadow-lg border-portfolio-primary/20 h-full p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4 text-portfolio-primary">Summary</h3>
                <p className="text-portfolio-light/90 mb-6 leading-relaxed">
                  Passionate Full Stack Developer with proficiency in .NET technologies, Angular, and cloud solutions. 
                  As a Google Developer Student Clubs (GDSC) lead, I've demonstrated leadership in fostering tech communities 
                  and guiding student developers. With hands-on experience in designing scalable APIs and 
                  implementing secure payment solutions, I bring a blend of technical expertise and collaborative skills.
                </p>
                <p className="text-portfolio-light/90 mb-6 leading-relaxed">
                  Actively exploring AI integration in applications, I'm dedicated to creating intelligent features 
                  that enhance user experience. My commitment to continuous learning is reflected in my certifications 
                  and badges from Google Cloud and Microsoft Azure, demonstrating my adaptability across diverse 
                  technology stacks and methodologies.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-portfolio-secondary">Education</h4>
                    <p className="text-portfolio-light/80 mb-1">Bachelor of Engineering</p>
                    <p className="text-portfolio-light/80 mb-1">Computer Science and Engineering</p>
                    <p className="text-portfolio-light/80 mb-4">Gujarat Technological University</p>
                    <p className="text-sm text-portfolio-light/60">Graduated: 2023</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-portfolio-secondary">Interests</h4>
                    <ul className="list-disc list-inside text-portfolio-light/80 space-y-1">
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
