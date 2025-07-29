import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Shield, AlertTriangle, Globe, Users } from "lucide-react";

const newsItems = [
  {
    title: "The Hacker News",
    description: "Latest cybersecurity news, threats, and vulnerabilities",
    url: "https://thehackernews.com/",
    category: "General News",
    icon: Shield
  },
  {
    title: "Cyber News - Women's Dating App Breach",
    description: "Hackers steal 72,000 user images from women's dating app Tea",
    url: "https://cybernews.com/cybercrime/hackers-steal-72000-user-images-from-womens-dating-app-tea/",
    category: "Data Breach",
    icon: AlertTriangle
  },
  {
    title: "Cybersecurity News",
    description: "Breaking cybersecurity news and analysis",
    url: "https://cybersecuritynews.com/",
    category: "Security News",
    icon: Shield
  },
  {
    title: "Economic Times - Cyber Security",
    description: "Business and economic impact of cybersecurity",
    url: "https://economictimes.indiatimes.com/c/cyber-security/profileshow/51408202.cms",
    category: "Economic Impact",
    icon: Globe
  },
  {
    title: "Waystone Cyber & Data Protection",
    description: "Compliance and regulatory updates",
    url: "https://compliance.waystone.com/c/cyber-data-protection-updates/",
    category: "Compliance",
    icon: Users
  },
  {
    title: "Cyber Recon YouTube",
    description: "Video content on cyber reconnaissance and security",
    url: "https://www.youtube.com/c/Cyber-recon/videos",
    category: "Educational",
    icon: Shield
  }
];

export const NewsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Latest News
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest developments in cybersecurity, data breaches, and cyber warfare incidents worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="cyber-border hover:shadow-glow transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <IconComponent className="h-6 w-6 text-primary" />
                    <span className="text-sm text-primary font-medium">{item.category}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:gradient-text transition-all duration-300">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    onClick={() => window.open(item.url, '_blank')}
                  >
                    Read More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};