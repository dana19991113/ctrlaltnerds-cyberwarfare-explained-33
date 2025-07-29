import heroImage from "@/assets/hero-cyber.jpg";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Logo/Trademark */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-cyber rounded-xl flex items-center justify-center animate-pulse-glow">
                <div className="text-background font-bold text-2xl">C+A</div>
              </div>
              <div className="absolute -inset-2 bg-gradient-cyber rounded-xl opacity-20 animate-pulse"></div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold gradient-text mb-4">
            Ctrl+Alt Nerds
          </h1>

          {/* Slogan */}
          <p className="text-2xl md:text-3xl text-foreground/90 font-medium mb-8">
            Rebooting minds. Exposing the invisible war.
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            A nonprofit, anonymous, student-led collective focused on exposing the truth behind cyberwarfare in the modern world. 
            We're not your average tech club - we're the Robin Hoods of the digital realm.
          </p>

          {/* CTA Button */}
          <Button 
            onClick={scrollToAbout}
            size="lg"
            className="bg-gradient-cyber hover:shadow-glow transition-all duration-300 text-lg px-8 py-4"
          >
            Explore Our Mission
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </div>
      </div>

      {/* Animated elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-cyber-blue rounded-full animate-ping"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-cyber-purple rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyber-pink rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-cyber-green rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
    </section>
  );
};