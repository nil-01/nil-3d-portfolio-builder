
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  <Card className="card-gradient shadow-lg border-portfolio-primary/20 overflow-hidden h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:scale-[1.03] hover:border-portfolio-primary/50 group">
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-primary/30 to-portfolio-secondary/30 flex items-center justify-center group-hover:from-portfolio-primary/50 group-hover:to-portfolio-secondary/50 transition-all duration-500">
        <h3 className="text-2xl font-bold text-shadow group-hover:scale-110 transition-transform duration-500">{project.title}</h3>
      </div>
    </div>
    
    <CardContent className="py-6 flex-grow">
      <p className="text-content mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <Badge 
            key={tag} 
            variant="outline" 
            className="bg-portfolio-primary/10 text-portfolio-primary border-portfolio-primary/30 hover:bg-portfolio-primary/20 transition-colors"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const ProjectsSection = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const filteredProjects = projects;
  
  return (
    <section id="projects" className="section-padding bg-portfolio-dark/70">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center animate-float">
          <span className="text-gradient">Projects</span>
        </h2>
        
        <Tabs defaultValue="all" className="mb-10" onValueChange={setSelectedTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-portfolio-dark/50 border border-portfolio-primary/20">
              <TabsTrigger 
                value="all" 
                className={`tab-animation ${selectedTab === 'all' ? 'tab-active' : ''}`}
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger 
                value="api" 
                className={`tab-animation ${selectedTab === 'api' ? 'tab-active' : ''}`}
              >
                API Projects
              </TabsTrigger>
              <TabsTrigger 
                value="ai" 
                className={`tab-animation ${selectedTab === 'ai' ? 'tab-active' : ''}`}
              >
                AI Projects
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="api" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects
                .filter(p => p.tags.some(tag => ['API', 'Microservices'].includes(tag)))
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              }
            </div>
          </TabsContent>
          
          <TabsContent value="ai" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects
                .filter(p => p.tags.some(tag => ['AI', 'Hugging Face', 'Data Analytics'].includes(tag)))
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              }
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
