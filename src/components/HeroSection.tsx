import { Button } from "@/components/ui/button";
import heroImage from "@/assets/cabinet-hero.jpg";
import { ArrowDown, CalendarCheck, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cabinet de psychologie de Camille Kaltenbach à Sundhoffen"
          className="w-full h-full object-cover object-center"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(24,18%,10%)]/65 via-[hsl(24,18%,10%)]/40 to-[hsl(88,20%,20%)]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(24,18%,10%)]/30 via-transparent to-transparent" />
      </div>

      {/* Ambient lights */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[140px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] opacity-40 pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-5 sm:px-6 relative z-10 pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-0 md:pb-0">
        <div className="max-w-2xl">

          {/* Pill badge */}
          <div
            className="inline-flex items-center gap-2 mb-4 sm:mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.05s' }}
          >
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: "hsl(0 0% 100% / 0.12)",
                backdropFilter: "blur(12px)",
                border: "1px solid hsl(0 0% 100% / 0.22)",
                color: "hsl(88 38% 78%)"
              }}
            >
              <Sparkles className="w-3 h-3" />
              Cabinet à Sundhoffen
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-3 sm:mb-4 leading-[1.08] tracking-tight opacity-0 animate-fade-up"
            style={{ animationDelay: '0.15s' }}
          >
            Camille<br />Kaltenbach
          </h1>

          {/* Separator */}
          <div
            className="w-8 h-0.5 rounded-full mb-4 sm:mb-5 opacity-0 animate-fade-up"
            style={{
              animationDelay: '0.25s',
              background: "linear-gradient(90deg, hsl(88 38% 65%), transparent)"
            }}
          />

          {/* Subtitle */}
          <p
            className="text-sm sm:text-xl md:text-2xl text-white/85 mb-1 font-light opacity-0 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            Psychologue clinicienne · Psychothérapeute
          </p>
          <p
            className="text-xs sm:text-base text-white/60 mb-8 sm:mb-12 font-light opacity-0 animate-fade-up"
            style={{ animationDelay: '0.38s' }}
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
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-6 sm:px-7 py-4 sm:py-6 text-sm sm:text-base font-medium rounded-2xl shadow-large hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5 gap-2"
            >
              <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              Prendre rendez-vous
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("a-propos")}
              className="w-full sm:w-auto border border-white/30 text-white py-4 sm:py-6 px-6 sm:px-7 text-sm sm:text-base font-medium rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "hsl(0 0% 100% / 0.08)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)"
              }}
            >
              Découvrir mon approche
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("a-propos")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/80 transition-all duration-300 cursor-pointer group"
        aria-label="Défiler vers le bas"
      >
        <span className="text-xs tracking-widest uppercase font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explorer</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;