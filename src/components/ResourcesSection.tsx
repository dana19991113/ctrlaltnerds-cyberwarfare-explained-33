import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Scale, Globe, FileText, ExternalLink } from "lucide-react";

const resourceCategories = [
  {
    title: "Statutes & Treaties",
    icon: Scale,
    description: "Core legal instruments governing armed conflict and cyber operations",
    items: [
      "Geneva Convention (I) for the Amelioration of the Condition of the Wounded and Sick in Armed Forces in the Field (1949)",
      "Geneva Convention (II) for the Amelioration of the Condition of Wounded, Sick and Shipwrecked Members of Armed Forces at Sea (1949)",
      "Geneva Convention (III) relative to the Treatment of Prisoners of War (1949)",
      "Geneva Convention (IV) relative to the Protection of Civilian Persons in Time of War (1949)",
      "Protocol Additional to the Geneva Conventions (Protocol I) - International Armed Conflicts (1977)",
      "Protocol Additional to the Geneva Conventions (Protocol II) - Non-International Armed Conflicts (1977)",
      "Charter of the United Nations (1945)"
    ]
  },
  {
    title: "Key Cases",
    icon: FileText,
    description: "Landmark legal decisions shaping cyber warfare law",
    items: [
      "ICJ Advisory Opinion on the Legality of Nuclear Weapons (1996) - Establishing IHL's universal application",
      "General Assembly Resolution 73/266 - Advancing responsible State behaviour in cyberspace"
    ]
  },
  {
    title: "Academic Resources",
    icon: BookOpen,
    description: "Essential academic works and expert analysis",
    items: [
      "Michael N Schmitt, 'Classification of Cyber Conflict' (2012) Journal of Conflict & Security Law",
      "Tallinn Manual 2.0 on the International Law Applicable to Cyber Operations (Cambridge University Press 2017)",
      "ICRC Position Papers on Cyber Warfare and International Humanitarian Law",
      "Tilman Rodenhäuser, 'Cyber Warfare: does International Humanitarian Law apply?' (ICRC Blog 2021)"
    ]
  },
  {
    title: "International Organizations",
    icon: Globe,
    description: "Key organizations working on cyber warfare governance",
    items: [
      "International Committee of the Red Cross (ICRC) - Cyber Warfare Positions",
      "UN Group of Governmental Experts (UN GGE) - Responsible State Behaviour in Cyberspace",
      "NATO Cooperative Cyber Defence Centre of Excellence - Tallinn Manual Project",
      "Council of Europe - Budapest Convention on Cybercrime"
    ]
  }
];

export const ResourcesSection = () => {
  return (
    <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            More Reading and Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive collection of legal instruments, academic works, and expert resources on cyber warfare and international humanitarian law.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {resourceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="cyber-border hover:shadow-glow transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <IconComponent className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl gradient-text">
                      {category.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <Separator className="mb-6" />
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground leading-relaxed flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Resources */}
        <div className="mt-16">
          <Card className="cyber-border bg-gradient-glow border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl gradient-text mb-4">
                Specialized Research Areas
              </CardTitle>
              <CardDescription className="text-base">
                Our ongoing research focuses on emerging challenges in cyber warfare law
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Attribution Mechanisms</h4>
                  <p className="text-sm text-muted-foreground">Developing frameworks for reliable cyber attack attribution</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">Civilian Protection</h4>
                  <p className="text-sm text-muted-foreground">Enhancing IHL protections for digital civilian infrastructure</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">State Responsibility</h4>
                  <p className="text-sm text-muted-foreground">Clarifying state obligations in cyberspace under international law</p>
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <Button className="bg-gradient-cyber hover:shadow-glow transition-all duration-300">
                  Access Full Bibliography
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};