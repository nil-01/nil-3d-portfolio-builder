
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLinkIcon } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "May 2023",
    link: "https://www.credly.com/badges/1873e965-3054-4759-97e7-b6f1e278c0a5",
    imageUrl: "https://images.credly.com/size/340x340/images/4136ced8-75d5-4afb-8677-40b6236e2672/azure-ai-fundamentals-600x600.png",
    category: "AI"
  },
  {
    id: 2,
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "November 2022",
    link: "https://www.credly.com/earner/earned/badge/7492b2bc-cb64-47c0-b886-ec725e3fa3fd",
    imageUrl: "https://images.credly.com/size/340x340/images/63316b60-f62d-4e51-aacc-c23cb850089c/azure-developer-associate-600x600.png",
    category: "Cloud"
  },
  {
    id: 3,
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "January 2022",
    link: "https://www.credly.com/badges/c66a0494-41de-4dc4-a696-94ff48eda1ab",
    imageUrl: "https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
    category: "Cloud"
  },
  {
    id: 4,
    title: "Google Cloud Essentials",
    issuer: "Google Cloud",
    date: "2023",
    link: "https://www.cloudskillsboost.google/public_profiles/6b19d986-db7e-4ab0-ae73-4603449ca423/badges/3880280",
    imageUrl: "https://cdn.qwiklabs.com/38VAz6KR9mKj2Fz1KarJN8c%2FwWbjslPUT4eGLkgMCsw%3D",
    category: "Cloud"
  },
  {
    id: 5,
    title: "Create and Manage Cloud Resources",
    issuer: "Google Cloud",
    date: "2023",
    link: "https://www.cloudskillsboost.google/public_profiles/6b19d986-db7e-4ab0-ae73-4603449ca423/badges/3898056",
    imageUrl: "https://cdn.qwiklabs.com/oUH9gA5CB65PLnkZA6wFGjp3u5BZH%2BKuI8ITfBNbdDQ%3D",
    category: "Cloud"
  },
  {
    id: 6,
    title: "Perform Foundational Infrastructure Tasks",
    issuer: "Google Cloud",
    date: "2023",
    link: "https://www.cloudskillsboost.google/public_profiles/6b19d986-db7e-4ab0-ae73-4603449ca423/badges/3904818",
    imageUrl: "https://cdn.qwiklabs.com/RYINGIiyd6dWpd4j%2BUYEgCMBwY4KjbZl%2FZ6EdSTrNxY%3D",
    category: "Cloud"
  },
  {
    id: 7,
    title: "Automating Infrastructure on Google Cloud",
    issuer: "Google Cloud",
    date: "2023",
    link: "https://www.cloudskillsboost.google/public_profiles/6b19d986-db7e-4ab0-ae73-4603449ca423/badges/4019303",
    imageUrl: "https://cdn.qwiklabs.com/WI%2Bt4EvgKNNOSdkJCXzXkSLHm3Fy%2BYvlj8jgzoGpQJE%3D",
    category: "Cloud"
  },
  {
    id: 8,
    title: "Reliable Cloud Infrastructure: Design and Process",
    issuer: "Google Cloud",
    date: "2023",
    link: "https://www.cloudskillsboost.google/public_profiles/6b19d986-db7e-4ab0-ae73-4603449ca423/badges/4409131",
    imageUrl: "https://cdn.qwiklabs.com/OrmP8Q%2FfqK8Umhw68WMo%2BKqJ%2BZt%2FmrrAiydODMVWGkU%3D",
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
    <Card className="card-gradient shadow-md border-portfolio-primary/20 h-full overflow-hidden card-hover-animation">
      <CardContent className="p-5">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-28 h-28 overflow-hidden rounded-md">
            <img 
              src={cert.imageUrl} 
              alt={cert.title} 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <h3 className="font-semibold text-lg text-portfolio-primary">{cert.title}</h3>
              <ExternalLinkIcon className="h-3 w-3 text-portfolio-light/50" />
            </div>
            <p className="text-sm text-portfolio-light/70">{cert.issuer} • {cert.date}</p>
            
            <Badge 
              variant="outline" 
              className={`mt-2 
                ${cert.category === 'Cloud' ? 'bg-portfolio-accent/10 text-portfolio-accent border-portfolio-accent/30' :
                  cert.category === 'Web' ? 'bg-portfolio-secondary/10 text-portfolio-secondary border-portfolio-secondary/30' :
                  cert.category === 'AI' ? 'bg-green-500/10 text-green-500 border-green-500/30' :
                  'bg-portfolio-primary/10 text-portfolio-primary border-portfolio-primary/30'}
              `}
            >
              {cert.category}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  </a>
);

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Certifications & <span className="text-gradient">Badges</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
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
