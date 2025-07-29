import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { label: "About Us", href: "#about" },
  { label: "What is Cyber Warfare?", href: "#cyber-warfare" },
  { label: "ICRC, IHL and Cyber Warfare", href: "#icrc-ihl" },
  { label: "Legal Framework", href: "#legal-framework" },
  { label: "International Responses", href: "#international-responses" },
  { label: "Sri Lanka", href: "#sri-lanka" },
  { label: "Incidents", href: "#incidents" },
  { label: "Issues", href: "#issues" },
  { label: "Our Research", href: "#research" },
  { label: "Resources", href: "#resources" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-cyber rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-sm">C+A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Ctrl+Alt Nerds</h1>
              <p className="text-xs text-muted-foreground">Rebooting minds. Exposing the invisible war.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-foreground hover:text-primary transition-colors duration-200 hover:shadow-cyber px-2 py-1 rounded"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-cyber rounded flex items-center justify-center">
                    <span className="text-background font-bold text-xs">C+A</span>
                  </div>
                  <span className="font-bold gradient-text">Ctrl+Alt Nerds</span>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="space-y-4">
                {navigationItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-foreground hover:text-primary transition-colors duration-200 p-2 hover:bg-muted rounded"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};