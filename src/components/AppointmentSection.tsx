import { Button } from "@/components/ui/button";
import { CalendarIcon, ExternalLink, Clock, MapPin, CheckCircle } from "lucide-react";

const DOCTOLIB_URL = "https://www.doctolib.fr/psychologue/sundhoffen/camille-kaltenbach?pid=practice-723961&phs=true";

const AppointmentSection = () => {
  const handleDoctolibClick = () => {
    window.open(DOCTOLIB_URL, "_blank", "noopener,noreferrer");
  };

  const features = [
    { icon: MapPin, text: "Cabinet à Sundhoffen" },
    { icon: Clock, text: "Confirmation immédiate" },
    { icon: CheckCircle, text: "Lundi au Jeudi" },
  ];

  return (
    <section id="rendez-vous" className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(88 14% 93%), hsl(42 28% 96%))" }}
    >
      {/* Ambient */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full blur-[160px] -translate-y-1/2 opacity-50 pointer-events-none"
        style={{ background: "hsl(88 30% 65% / 0.12)" }} />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[120px] -translate-y-1/2 opacity-30 pointer-events-none"
        style={{ background: "hsl(30 45% 70% / 0.12)" }} />

      <div className="container mx-auto px-5 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="section-label mb-4">Réservation</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-display-sm font-serif text-foreground mb-4">
            Prendre rendez-vous
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Réservez votre consultation directement sur Doctolib pour un suivi simple et rapide.
          </p>
        </div>

        {/* Doctolib Card */}
        <div className="max-w-lg mx-auto">
          <div className="glass rounded-3xl p-7 sm:p-10 md:p-12 shadow-large text-center">
            {/* Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8"
              style={{
                background: "hsl(210 90% 54% / 0.10)",
                border: "1px solid hsl(210 90% 54% / 0.20)"
              }}
            >
              <CalendarIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#107ACA]" />
            </div>

            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground mb-3 sm:mb-4">
              Réservez sur Doctolib
            </h3>

            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-sm mx-auto leading-relaxed">
              Choisissez le créneau qui vous convient parmi mes disponibilités et recevez une confirmation immédiate.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: "hsl(88 20% 92%)",
                      color: "hsl(88 38% 36%)",
                      border: "1px solid hsl(88 30% 82%)"
                    }}
                  >
                    <Icon className="w-3 h-3" />
                    {f.text}
                  </span>
                );
              })}
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleDoctolibClick}
              size="lg"
              className="w-full sm:w-auto h-12 sm:h-14 px-8 sm:px-10 rounded-2xl text-white font-medium text-sm sm:text-base shadow-large transition-all duration-300 hover:-translate-y-0.5 gap-2"
              style={{ background: "#107ACA" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#0D6AB8")}
              onMouseLeave={e => (e.currentTarget.style.background = "#107ACA")}
            >
              Prendre rendez-vous sur Doctolib
              <ExternalLink className="w-4 h-4" />
            </Button>

            <p className="text-xs text-muted-foreground mt-5">
              Vous serez redirigé vers mon profil Doctolib
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
