import heroImage from "@/assets/cabinet-hero.jpg";
import { CalendarCheck, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="accueil" className="relative lg:min-h-screen flex flex-col lg:flex-row overflow-hidden">

      {/* ─── Mobile: photo banner ─── */}
      <div className="lg:hidden relative h-[52vw] min-h-[220px] max-h-[340px] overflow-hidden">
        <img
          src={heroImage}
          alt="Cabinet de Camille Kaltenbach"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* ─── Left panel: text (ivory) ─── */}
      <div
        className="w-full lg:w-[48%] xl:w-[44%] flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24
                   pt-6 pb-14 sm:pt-8 sm:pb-16 lg:pt-0 lg:pb-0 lg:min-h-screen relative z-10"
        style={{ background: "hsl(38 28% 96%)" }}
      >
        {/* Decorative top line — desktop only */}
        <div className="hidden lg:block absolute top-8 left-16 xl:left-24 right-0">
          <div className="rule-primary w-16" />
        </div>

        <div className="max-w-lg lg:max-w-none">
          {/* Label */}
          <p className="section-label mb-6 sm:mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Cabinet de psychologie · Sundhoffen
          </p>

          {/* Name */}
          <h1
            className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.05] mb-5 sm:mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Camille<br />
            <span className="italic text-primary">Kaltenbach</span>
          </h1>

          {/* Role */}
          <p
            className="text-sm sm:text-base text-muted-foreground font-light tracking-wide mb-1 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.32s' }}
          >
            Psychologue clinicienne · Psychothérapeute
          </p>
          <p
            className="text-xs sm:text-sm text-muted-foreground/70 mb-8 sm:mb-10 lg:mb-12 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.38s' }}
          >
            à Sundhoffen, Alsace
          </p>

          {/* Thin rule */}
          <div className="rule w-12 mb-8 sm:mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.42s' }} />

          {/* CTA group */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.52s' }}
          >
            <button
              onClick={() => scrollToSection("rendez-vous")}
              className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary-dark
                         text-white text-sm font-medium px-7 py-3.5 rounded-lg
                         transition-all duration-250 hover:shadow-glow hover:-translate-y-0.5"
            >
              <CalendarCheck className="w-4 h-4" />
              Prendre rendez-vous
            </button>
            <button
              onClick={() => scrollToSection("a-propos")}
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-foreground/70
                         px-7 py-3.5 rounded-lg border border-border hover:border-primary/40
                         hover:text-primary transition-all duration-250 bg-white hover:bg-white"
            >
              Découvrir mon approche
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Trust indicator */}
          <p className="mt-8 sm:mt-10 text-xs text-muted-foreground/60 opacity-0 animate-fade-up" style={{ animationDelay: '0.62s' }}>
            Cabinet ouvert du lundi au jeudi · Prise en charge via Doctolib
          </p>
        </div>
      </div>

      {/* ─── Right panel: full-height photo ─── */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[54%] xl:w-[58%]">
        <img
          src={heroImage}
          alt="Cabinet de psychologie Camille Kaltenbach"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle left fade */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to right, hsl(38 28% 96%), transparent)" }}
        />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to top, hsl(38 28% 96% / 0.2), transparent)" }}
        />
      </div>
    </section>
  );
};

export default HeroSection;