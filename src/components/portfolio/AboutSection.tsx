
import { Card, CardContent } from "@/components/ui/card";
import { MapIcon, PhoneIcon, GlobeIcon, CalendarIcon } from "lucide-react";

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
              <div className="relative aspect-square overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-white">NY</div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapIcon className="h-5 w-5 text-portfolio-primary" />
                    <span>India, Gujarat</span>
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
                  Proactive and detail-oriented Full Stack Developer with hands-on experience in designing scalable APIs, 
                  integrating secure payment gateways, and developing modern front-end interfaces using .NET Core and Angular. 
                  Skilled in SQL database design, agile collaboration, and leading development initiatives. 
                </p>
                <p className="text-portfolio-light/90 mb-6 leading-relaxed">
                  Passionate about innovation, with a focus on integrating AI-driven features to enhance user experience 
                  and application performance. Currently involved in R&D to explore and integrate AI models that enhance 
                  application capabilities, contributing to intelligent features such as predictive analytics, 
                  automated decision-making, and personalized user experiences.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-portfolio-secondary">Education</h4>
                    <p className="text-portfolio-light/80 mb-1">Bachelor of Engineering</p>
                    <p className="text-portfolio-light/80 mb-1">Computer Science and Engineering</p>
                    <p className="text-portfolio-light/80 mb-4">Gujarat Technological University</p>
                    <p className="text-sm text-portfolio-light/60">GPA: 3.65/4.0</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-portfolio-secondary">Interests</h4>
                    <ul className="list-disc list-inside text-portfolio-light/80 space-y-1">
                      <li>Artificial Intelligence & Machine Learning</li>
                      <li>Cloud Architecture & Microservices</li>
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
