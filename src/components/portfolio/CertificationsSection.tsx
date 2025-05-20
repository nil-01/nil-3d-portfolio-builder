
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    id: 1,
    title: "Google Cloud Essential Skills",
    issuer: "Google Developer",
    date: "2023",
    link: "https://g.dev/nil_0_1",
    category: "Cloud"
  },
  {
    id: 2,
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "2023",
    link: "https://www.credly.com/users/nilesh-yadav-cse",
    category: "Cloud"
  },
  {
    id: 3,
    title: "Angular Development",
    issuer: "Shaligram Infotech",
    date: "2023",
    link: "#",
    category: "Web"
  },
  {
    id: 4,
    title: ".NET Core Development",
    issuer: "Shaligram Infotech",
    date: "2023",
    link: "#",
    category: "Backend"
  }
];

const CertificationCard = ({ cert }: { cert: typeof certifications[0] }) => (
  <a 
    href={cert.link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="block transition-transform hover:scale-[1.02]"
  >
    <Card className="card-gradient shadow-md border-portfolio-primary/20 h-full">
      <CardContent className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg text-portfolio-primary">{cert.title}</h3>
            <p className="text-sm text-portfolio-light/70">{cert.issuer} • {cert.date}</p>
          </div>
          <Badge 
            variant="outline" 
            className={`
              ${cert.category === 'Cloud' ? 'bg-portfolio-accent/10 text-portfolio-accent border-portfolio-accent/30' :
                cert.category === 'Web' ? 'bg-portfolio-secondary/10 text-portfolio-secondary border-portfolio-secondary/30' :
                'bg-portfolio-primary/10 text-portfolio-primary border-portfolio-primary/30'}
            `}
          >
            {cert.category}
          </Badge>
        </div>
      </CardContent>
    </Card>
  </a>
);

const CertificationsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Certifications & <span className="text-gradient">Badges</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-portfolio-light/60 text-sm">
            For more certifications, visit my{' '}
            <a 
              href="https://www.credly.com/users/nilesh-yadav-cse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-primary hover:underline"
            >
              Credly
            </a>{' '}
            and{' '}
            <a 
              href="https://g.dev/nil_0_1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-portfolio-accent hover:underline"
            >
              Google Developer
            </a>{' '}
            profiles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
