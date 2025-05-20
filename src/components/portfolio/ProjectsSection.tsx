
import { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Payment Gateway Integration",
    description: "Implemented secure payment processing system using Stripe and Razorpay with .NET Core backend.",
    image: "/placeholder.svg",
    tags: ["C#", ".NET Core", "API", "Payment", "Security"],
  },
  {
    id: 2,
    title: "AI-Enhanced User Analytics",
    description: "Developed predictive analytics system using AI models to enhance user experience and provide personalized recommendations.",
    image: "/placeholder.svg",
    tags: ["AI", "Hugging Face", "Python", ".NET", "Data Analytics"],
  },
  {
    id: 3,
    title: "Scalable Microservice Architecture",
    description: "Designed and implemented a microservice architecture with message queuing for high-performance distributed systems.",
    image: "/placeholder.svg",
    tags: ["Microservices", "RabbitMQ", "Docker", ".NET Core", "API"],
  },
  {
    id: 4,
    title: "Real-time Collaboration Platform",
    description: "Built real-time collaboration features using SignalR and Angular for seamless team communication.",
    image: "/placeholder.svg",
    tags: ["SignalR", "Angular", ".NET Core", "Real-time", "WebSockets"],
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <Card className="card-gradient shadow-lg border-portfolio-primary/20 overflow-hidden h-full flex flex-col transition-all hover:shadow-xl hover:scale-[1.01]">
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/30 to-portfolio-secondary/30 flex items-center justify-center">
        <h3 className="text-2xl font-bold text-shadow">{project.title}</h3>
      </div>
    </div>
    
    <CardContent className="py-6 flex-grow">
      <p className="text-portfolio-light/80 mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="bg-portfolio-primary/10 text-portfolio-primary border-portfolio-primary/30">
            {tag}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(projects);
  
  return (
    <section id="projects" className="section-padding bg-portfolio-dark/70">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
