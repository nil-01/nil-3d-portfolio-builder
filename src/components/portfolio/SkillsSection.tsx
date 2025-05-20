
import SkillsCloud from "@/components/3d/SkillsCloud";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const programmingSkills = [
  { name: "C#", level: 95, description: "10M+ LOC" },
  { name: "TypeScript", level: 85, description: "1M+ LOC" },
  { name: "JavaScript", level: 80, description: "10k+ LOC" },
  { name: "SQL", level: 90, description: "10M+ LOC" },
  { name: "Java", level: 70, description: "10k+ LOC" },
  { name: "Python", level: 65, description: "10k+ LOC" },
  { name: "C++", level: 60, description: "1k+ LOC" }
];

const frameworkSkills = [
  { name: ".NET Core", level: 90 },
  { name: ".NET MVC", level: 85 },
  { name: "Angular", level: 80 },
  { name: "Blazor", level: 75 },
  { name: "Entity Framework", level: 85 },
  { name: "React", level: 65 },
];

const databaseSkills = [
  { name: "MSSQL", level: 90 },
  { name: "MySQL", level: 85 },
  { name: "PostgreSQL", level: 80 },
  { name: "Firebase", level: 70 },
];

const toolsSkills = [
  { name: "Git", level: 90 },
  { name: "Docker", level: 75 },
  { name: "AWS", level: 70 },
  { name: "Hugging Face", level: 65 },
  { name: "RabbitMQ", level: 80 },
  { name: "Kafka", level: 75 },
  { name: "SignalR", level: 85 },
  { name: "Stripe", level: 80 },
  { name: "Razorpay", level: 75 },
];

const softSkills = [
  "Leadership",
  "Teaching",
  "Quick Learner",
  "Problem Solving",
  "Communication",
  "Teamwork"
];

const SkillBar = ({ name, level, description }: { name: string; level: number; description?: string }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-portfolio-light">{name}</span>
      {description && (
        <span className="text-xs text-portfolio-light/60">{description}</span>
      )}
    </div>
    <Progress value={level} className="h-2" indicatorClassName="bg-gradient-to-r from-portfolio-primary to-portfolio-secondary" />
  </div>
);

const SkillsSection = () => {
  const allSkills = [
    ...programmingSkills.map(s => s.name),
    ...frameworkSkills.map(s => s.name),
    ...databaseSkills.map(s => s.name),
    ...toolsSkills.map(s => s.name),
    ...softSkills
  ];
  
  return (
    <section id="skills" className="section-padding relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="h-96 mb-16 border border-portfolio-primary/20 rounded-xl overflow-hidden card-gradient">
          <SkillsCloud skills={allSkills} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="card-gradient shadow-lg border-portfolio-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 text-portfolio-primary">Programming Languages</h3>
              {programmingSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} description={skill.description} />
              ))}
            </CardContent>
          </Card>
          
          <Card className="card-gradient shadow-lg border-portfolio-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 text-portfolio-primary">Frameworks & Libraries</h3>
              {frameworkSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </CardContent>
          </Card>
          
          <Card className="card-gradient shadow-lg border-portfolio-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 text-portfolio-primary">Databases</h3>
              {databaseSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </CardContent>
          </Card>
          
          <Card className="card-gradient shadow-lg border-portfolio-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 text-portfolio-primary">Tools & Platforms</h3>
              {toolsSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </CardContent>
          </Card>
          
          <Card className="card-gradient shadow-lg border-portfolio-primary/20 md:col-span-2 lg:col-span-1">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-6 text-portfolio-primary">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-portfolio-primary/20 to-portfolio-secondary/20 border border-portfolio-primary/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
