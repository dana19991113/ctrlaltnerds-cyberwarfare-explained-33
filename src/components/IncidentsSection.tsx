import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, AlertTriangle } from "lucide-react";

const incidents = [
  {
    title: "Stuxnet",
    year: "2010",
    location: "Iran (Natanz Nuclear Facility)",
    severity: "High",
    description: "The first known cyber weapon to cause physical destruction, targeting Iran's nuclear enrichment facilities using four zero-day exploits and stolen digital certificates.",
    impact: "Set precedent in cyber warfare, accelerated global calls for clearer norms and treaties governing state-led cyber operations.",
    attribution: "Allegedly US NSA and Israeli Unit 8200"
  },
  {
    title: "Russia-Georgia Cyber Operations",
    year: "2008",
    location: "Georgia",
    severity: "Medium",
    description: "Coordinated cyber attacks during the Russo-Georgian War, marking one of the earliest examples of hybrid warfare combining kinetic and cyber operations.",
    impact: "Demonstrated the integration of cyber operations with conventional military action, highlighted attribution challenges.",
    attribution: "Russian state actors and volunteer hacktivists"
  },
  {
    title: "NotPetya Malware",
    year: "2017",
    location: "Ukraine (Global spread)",
    severity: "High",
    description: "Destructive malware disguised as ransomware, initially targeting Ukrainian infrastructure before spreading worldwide, causing billions in damages.",
    impact: "Raised concerns about proportionality and civilian harm in cyber operations, emphasized need for better cyber resilience.",
    attribution: "Russia's GRU Unit 74455"
  },
  {
    title: "SolarWinds Attack",
    year: "2020",
    location: "United States (Global impact)",
    severity: "High",
    description: "Sophisticated supply chain attack compromising software updates to infiltrate U.S. government agencies and global corporations for espionage.",
    impact: "Highlighted vulnerabilities in software supply chains, raised concerns about sovereignty violations in cyber espionage.",
    attribution: "Russian intelligence services"
  },
  {
    title: "Israel-Palestine Cyber Operations",
    year: "2021",
    location: "Israel/Palestine",
    severity: "Medium",
    description: "Cyber operations paralleling kinetic clashes, including DDoS attacks, website defacements, and psychological warfare through false alerts.",
    impact: "Demonstrated cyber warfare as complement to conventional conflict, blurred civilian-military distinction in cyberspace.",
    attribution: "Hamas-linked actors with regional support"
  }
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "High": return "destructive";
    case "Medium": return "secondary";
    case "Low": return "outline";
    default: return "outline";
  }
};

export const IncidentsSection = () => {
  return (
    <section id="incidents" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Incidents of Importance in Cyber Warfare
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Critical cyber incidents that shaped international understanding of cyber warfare and highlighted the need for legal frameworks.
          </p>
        </div>

        <div className="space-y-8">
          {incidents.map((incident, index) => (
            <Card key={index} className="cyber-border hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl gradient-text mb-2">
                      {incident.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {incident.description}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge variant={getSeverityColor(incident.severity)} className="w-fit">
                      {incident.severity} Impact
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Metadata */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{incident.year}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{incident.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{incident.attribution}</span>
                  </div>
                </div>

                {/* Impact */}
                <div className="p-4 bg-gradient-glow rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Legal and Strategic Impact
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {incident.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 bg-card border border-border rounded-lg cyber-border">
          <h3 className="text-2xl font-bold gradient-text mb-4 text-center">
            Key Takeaways
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Attribution Challenges</h4>
              <p>Most incidents demonstrate the difficulty of reliable attribution in cyberspace, complicating legal responses and state responsibility.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Civilian Impact</h4>
              <p>Cyber operations increasingly affect civilian infrastructure, highlighting the need for stronger IHL protections in cyberspace.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Hybrid Warfare</h4>
              <p>Integration of cyber and kinetic operations creates new challenges for applying traditional conflict laws.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">International Response</h4>
              <p>Limited formal international responses emphasize the urgent need for binding cyber warfare norms and treaties.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};