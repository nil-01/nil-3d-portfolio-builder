
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ExperienceTimeline3D from "@/components/3d/ExperienceTimeline3D";

const experiences = [
  {
    date: "Sep 2023 - Present",
    title: "Software Developer",
    company: "Shaligram Infotech — Satva Softech (UK)",
    location: "Ahmedabad, Gujarat — UK (Remote)",
    description: [
      "Design and develop RESTful APIs using .NET Core, crafting optimized schemas with tools like Swagger/OpenAPI to support scalable applications.",
      "Design database structures to ensure efficient data handling and API performance.",
      "Integrate secure payment gateways into .NET Core applications, implementing webhooks and error-handling mechanisms.",
      "Build responsive, user-friendly UI using Angular and ensuring seamless integration with back-end APIs.",
      "Work in agile teams to deliver high-quality software, troubleshoot issues, and propose innovative solutions.",
      "Participate in R&D to explore and integrate AI models that enhance application capabilities."
    ],
    skills: ["API Design", ".NET Core", "Angular", "Payment Integration", "SQL", "AI Integration"]
  },
  {
    date: "Jan 2023 - Aug 2023",
    title: "Trainee Software Developer",
    company: "Shaligram Infotech",
    location: "Ahmedabad, Gujarat",
    description: [
      "Learned and applied .NET Core and Angular skills in real-world projects.",
      "Assisted in backend API development under senior guidance.",
      "Contributed to team projects and gained hands-on experience.",
      "Promoted to Software Developer position for demonstrated proficiency."
    ],
    skills: [".NET Core", "Angular", "API Development", "Team Collaboration"]
  },
  {
    date: "Aug 2022 - May 2023",
    title: "Technical Team Lead",
    company: "Google Developer Student Club GECP",
    location: "Patan, India",
    description: [
      "Led technical team at Government Engineering College Patan to organize events under Google developer club.",
      "Organized and facilitated Compose Camp with Kotlin and other technical workshops.",
      "Conducted technical orientation sessions for new club members."
    ],
    skills: ["Leadership", "Event Management", "Android", "Kotlin", "Public Speaking"]
  }
];

const timelineData = experiences.map((exp, index) => ({
  date: exp.date.split(' - ')[0],
  title: exp.title,
  active: index === 0
}));

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-portfolio-dark/70">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center animate-float">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        
        <div className="mb-16 hidden md:block h-[350px]">
          <ExperienceTimeline3D experiences={timelineData} />
        </div>
        
        <div className="md:hidden flex justify-center mb-10">
          <div className="flex gap-4 overflow-x-auto pb-4 max-w-full">
            {timelineData.map((exp, i) => (
              <div 
                key={i} 
                className={`flex flex-col items-center p-3 rounded-lg ${exp.active ? 'bg-portfolio-primary/20' : 'bg-portfolio-secondary/10'}`}
              >
                <div className={`h-4 w-4 rounded-full ${exp.active ? 'bg-portfolio-primary animate-pulse-custom' : 'bg-portfolio-secondary/50'}`}></div>
                <div className="h-10 w-0.5 bg-gradient-to-b from-portfolio-primary to-portfolio-secondary/50 my-2"></div>
                <p className="text-xs text-portfolio-light whitespace-nowrap">{exp.date}</p>
                <p className="text-sm font-medium text-portfolio-light whitespace-nowrap">{exp.title}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`dev-card card-hover-animation ${index === 0 ? 'border-l-portfolio-primary' : 'border-l-portfolio-secondary/50'}`}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-portfolio-primary">{exp.title}</h3>
                    <p className="text-content">{exp.company}</p>
                  </div>
                  
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-content">{exp.date}</p>
                    <p className="text-subtle">{exp.location}</p>
                  </div>
                </div>
                
                <ul className="list-disc list-inside text-content mb-4 space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-portfolio-primary/10 text-portfolio-primary border-portfolio-primary/30 hover:bg-portfolio-primary/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
