import waitingRoomImage from "@/assets/cabinet-waiting.jpg";
import armchairImage from "@/assets/cabinet-armchair.jpg";

const CabinetSection = () => {
  return (
    <section id="cabinet" className="section-padding bg-background relative overflow-hidden">
      <div className="hidden md:block absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <p className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">L'espace</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-display-sm font-serif text-foreground mb-4 sm:mb-6">
            Le Cabinet
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Le cabinet est ouvert du lundi au jeudi. Accès PMR et parking.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Image 1 - Salle d'attente */}
          <div className="group relative overflow-hidden rounded-2xl shadow-elegant border border-border/80">
            <img 
              alt="Salle d'attente du cabinet de psychologie" 
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" 
              src={waitingRoomImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-serif text-white">Salle d'attente</h3>
            </div>
          </div>

          {/* Image 2 - Salle de consultation */}
          <div className="group relative overflow-hidden rounded-2xl shadow-elegant border border-border/80">
            <img 
              alt="Salle de consultation du cabinet de psychologie" 
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" 
              src={armchairImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-serif text-white">Salle de consultation</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CabinetSection;