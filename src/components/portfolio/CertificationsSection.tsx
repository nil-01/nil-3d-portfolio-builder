
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLinkIcon } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Google Cloud Essentials",
    issuer: "Google Cloud",
    date: "2023",
    link: "https://www.cloudskillsboost.google/public_profiles/6b19d986-db7e-4ab0-ae73-4603449ca423/badges/3880280",
    category: "Cloud"
  },
  {
    id: 2,
    title: "Create and Manage Cloud Resources",
    issuer: "Google Cloud",
    date: "2023",
    link: "https://www.cloudskillsboost.google/public_profiles/6b19d986-db7e-4ab0-ae73-4603449ca423/badges/3898056",
    category: "Cloud"
  },
  {
    id: 3,
    title: "Perform Foundational Infrastructure Tasks",
    issuer: "Google Cloud",
    date: "2023",
    link: "https://www.cloudskillsboost.google/public_profiles/6b19d986-db7e-4ab0-ae73-4603449ca423/badges/3904818",
    category: "Cloud"
  },
  {
    id: 4,
    title: "Automating Infrastructure on Google Cloud",
    issuer: "Google Cloud",
    date: "2023",
    link: "https://www.cloudskillsboost.google/public_profiles/6b19d986-db7e-4ab0-ae73-4603449ca423/badges/4019303",
    category: "Cloud"
  },
  {
    id: 5,
    title: "Reliable Cloud Infrastructure: Design and Process",
    issuer: "Google Cloud",
    date: "2023",
    link: "https://www.cloudskillsboost.google/public_profiles/6b19d986-db7e-4ab0-ae73-4603449ca423/badges/4409131",
    category: "Cloud"
  },
  {
    id: 6,
    title: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "2023",
    link: "https://www.credly.com/badges/1873e965-3054-4759-97e7-b6f1e278c0a5",
    category: "AI"
  },
  {
    id: 7,
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "2022",
    link: "https://www.credly.com/earner/earned/badge/7492b2bc-cb64-47c0-b886-ec725e3fa3fd",
    category: "Cloud"
  },
  {
    id: 8,
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "2022",
    link: "https://www.credly.com/badges/c66a0494-41de-4dc4-a696-94ff48eda1ab",
    category: "Cloud"
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
            <div className="flex items-center gap-1">
              <h3 className="font-semibold text-lg text-portfolio-primary">{cert.title}</h3>
              <ExternalLinkIcon className="h-3 w-3 text-portfolio-light/50" />
            </div>
            <p className="text-sm text-portfolio-light/70">{cert.issuer} • {cert.date}</p>
          </div>
          <Badge 
            variant="outline" 
            className={`
              ${cert.category === 'Cloud' ? 'bg-portfolio-accent/10 text-portfolio-accent border-portfolio-accent/30' :
                cert.category === 'Web' ? 'bg-portfolio-secondary/10 text-portfolio-secondary border-portfolio-secondary/30' :
                cert.category === 'AI' ? 'bg-green-500/10 text-green-500 border-green-500/30' :
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
