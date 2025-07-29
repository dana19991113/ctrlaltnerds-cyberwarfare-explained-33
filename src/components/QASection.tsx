import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, User, Mail } from "lucide-react";
import specialistPhoto from "@/assets/specialist-photo.jpg";

const qaItems = [
  {
    question: "What is the current status of International Humanitarian Law in cyber warfare?",
    answer: "International Humanitarian Law (IHL) applies to cyber operations conducted during armed conflict. The ICRC has clarified that existing IHL principles - including distinction, proportionality, and precautions - govern cyber warfare just as they do kinetic operations. However, the application of these principles in cyberspace presents unique challenges due to the interconnected nature of digital infrastructure."
  },
  {
    question: "How do we determine when a cyber attack constitutes an 'armed attack' under international law?",
    answer: "The threshold for an 'armed attack' in cyberspace remains contentious. Generally, cyber operations that cause physical damage, injury, or death are accepted as meeting this threshold. The Tallinn Manual suggests that severe functional disruption comparable to kinetic attacks may also qualify. However, attribution and the assessment of effects remain significant challenges."
  },
  {
    question: "What protections exist for civilian digital infrastructure?",
    answer: "Under IHL, civilian digital infrastructure enjoys the same protections as other civilian objects. This includes hospitals' IT systems, water treatment facilities, and power grids. The principle of distinction prohibits direct attacks on such infrastructure, while proportionality assessments must consider incidental civilian harm from cyber operations."
  },
  {
    question: "How can states better prepare for cyber warfare under international law?",
    answer: "States should conduct Article 36 reviews of cyber weapons, develop comprehensive domestic legal frameworks, establish clear command structures for cyber operations, and invest in civilian infrastructure protection. International cooperation on attribution and incident response is also crucial for maintaining accountability."
  }
];

export const QASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Ask Our Specialist
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get expert insights on International Humanitarian Law and cyber warfare from our specialist
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Specialist Profile */}
          <div className="lg:col-span-1">
            <Card className="cyber-border sticky top-24">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <img 
                    src={specialistPhoto} 
                    alt="Supasini Rumanan" 
                    className="w-32 h-32 rounded-full object-cover border-2 border-primary/30 shadow-glow"
                  />
                </div>
                <CardTitle className="text-2xl gradient-text">Supasini Rumanan</CardTitle>
                <CardDescription className="text-base">
                  International Humanitarian Law Specialist
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <User className="h-4 w-4 text-primary" />
                  <span>Expert in IHL and Cyber Warfare</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <span>Available for consultations</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>Research collaborations welcome</span>
                </div>
                <Button className="w-full bg-gradient-cyber hover:shadow-glow transition-all duration-300">
                  Contact Specialist
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Q&A Content */}
          <div className="lg:col-span-2">
            <Card className="cyber-border">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Expert answers on key issues in cyber warfare and international humanitarian law
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-4">
                  {qaItems.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border border-border/50 rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left hover:text-primary transition-colors">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                <div className="mt-8 p-6 bg-gradient-glow rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Have more questions?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our specialist is available for detailed consultations on specific legal aspects of cyber warfare and IHL.
                  </p>
                  <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    Submit Your Question
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};