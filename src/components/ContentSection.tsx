import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

interface ContentSectionProps {
  id: string;
  title: string;
  content: string;
  highlights?: string[];
}

export const ContentSection = ({ id, title, content, highlights }: ContentSectionProps) => {
  // Split content into paragraphs
  const paragraphs = content.split('\n\n').filter(p => p.trim());

  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="cyber-border shadow-card">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              {title}
            </CardTitle>
            {highlights && (
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {highlights.map((highlight, index) => (
                  <Badge key={index} variant="outline" className="text-primary border-primary/30">
                    {highlight}
                  </Badge>
                ))}
              </div>
            )}
          </CardHeader>
          <Separator className="mb-8" />
          <CardContent className="prose prose-lg max-w-none">
            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-foreground leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};