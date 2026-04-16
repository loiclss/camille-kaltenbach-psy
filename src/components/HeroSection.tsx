import { Button } from "@/components/ui/button";
import heroImage from "@/assets/cabinet-hero.jpg";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Cabinet de psychologie de Camille Kaltenbach" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20 md:pt-0">
        <div className="max-w-3xl">
          {/* Main Title */}
          <h1 
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-4 sm:mb-6 leading-[1.1] opacity-0 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Camille Kaltenbach
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg sm:text-2xl md:text-3xl text-white/90 mb-2 font-light opacity-0 animate-fade-up"
            style={{ animationDelay: '0.25s' }}
          >
            Psychologue clinicienne · Psychothérapeute
          </p>

          <p 
            className="text-base sm:text-xl text-white/75 mb-10 sm:mb-12 font-light opacity-0 animate-fade-up"
            style={{ animationDelay: '0.35s' }}
          >
            à Sundhoffen
          </p>
          
          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("rendez-vous")}
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium rounded-xl shadow-large hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
            >
              Prendre rendez-vous
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("a-propos")}
              className="w-full sm:w-auto border-2 border-white/40 text-white bg-white/5 backdrop-blur-sm px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium rounded-xl hover:bg-white hover:text-foreground transition-all duration-300 hover:-translate-y-0.5"
            >
              Découvrir mon approche
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection("a-propos")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce cursor-pointer"
        aria-label="Défiler vers le bas"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;