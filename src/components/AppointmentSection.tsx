import { Button } from "@/components/ui/button";
import { CalendarIcon, ExternalLink, Clock, MapPin } from "lucide-react";

const DOCTOLIB_URL = "https://www.doctolib.fr/psychologue/sundhoffen/camille-kaltenbach?pid=practice-723961&phs=true";

const AppointmentSection = () => {
  const handleDoctolibClick = () => {
    window.open(DOCTOLIB_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="rendez-vous" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Réservation</p>
          <h2 className="text-4xl md:text-5xl lg:text-display-sm font-serif text-foreground mb-6">
            Prendre rendez-vous
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Réservez votre consultation directement sur Doctolib pour un suivi simple et rapide.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Doctolib Card */}
          <div className="bg-card rounded-2xl p-6 sm:p-8 md:p-12 shadow-elegant border border-border/80 text-center">
            {/* Doctolib Logo/Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#107ACA]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <CalendarIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#107ACA]" />
            </div>

            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground mb-4">
              Réservez sur Doctolib
            </h3>
            
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-md mx-auto px-2">
              Choisissez le créneau qui vous convient parmi mes disponibilités et recevez une confirmation immédiate.
            </p>

            {/* Info badges */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center gap-2 bg-primary/5 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <span className="text-foreground">Cabinet à Sundhoffen</span>
              </div>
              <div className="inline-flex items-center justify-center gap-2 bg-primary/5 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <span className="text-foreground">Confirmation immédiate</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              onClick={handleDoctolibClick}
              size="lg" 
              className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-10 rounded-xl bg-[#107ACA] hover:bg-[#0D6AB8] text-white font-medium text-sm sm:text-base shadow-large hover:shadow-glow transition-all duration-300"
            >
              <span className="truncate">Prendre rendez-vous sur Doctolib</span>
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2 flex-shrink-0" />
            </Button>
            
            <p className="text-xs text-muted-foreground mt-4 sm:mt-6">
              Vous serez redirigé vers mon profil Doctolib
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
