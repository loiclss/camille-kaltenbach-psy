import waitingRoomImage from "@/assets/cabinet-waiting.jpg";
import armchairImage from "@/assets/cabinet-armchair.jpg";

const CabinetSection = () => {
  return (
    <section id="cabinet" className="section-padding bg-background relative overflow-hidden">
      {/* Ambient */}
      <div className="hidden md:block absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] opacity-40 pointer-events-none"
        style={{ background: "hsl(30 45% 75% / 0.15)" }} />

      <div className="container mx-auto px-5 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="section-label mb-4">L'espace</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-display-sm font-serif text-foreground mb-4 sm:mb-5">
            Le Cabinet
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed px-2">
            Le cabinet est ouvert du lundi au jeudi. Accès PMR et parking.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {/* Salle d'attente */}
          <div className="group relative overflow-hidden rounded-3xl shadow-elegant hover-lift cursor-default">
            <img
              alt="Salle d'attente du cabinet de psychologie"
              className="w-full aspect-[4/3] sm:aspect-[16/11] object-cover transition-transform duration-700 group-hover:scale-105"
              src={waitingRoomImage}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/15 to-transparent" />
            {/* Caption — glass pill */}
            <div className="absolute bottom-5 left-5">
              <div className="glass rounded-xl px-4 py-2.5">
                <h3 className="text-sm sm:text-base font-serif text-foreground">Salle d'attente</h3>
              </div>
            </div>
          </div>

          {/* Salle de consultation */}
          <div className="group relative overflow-hidden rounded-3xl shadow-elegant hover-lift cursor-default">
            <img
              alt="Salle de consultation du cabinet de psychologie"
              className="w-full aspect-[4/3] sm:aspect-[16/11] object-cover transition-transform duration-700 group-hover:scale-105"
              src={armchairImage}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/15 to-transparent" />
            {/* Caption — glass pill */}
            <div className="absolute bottom-5 left-5">
              <div className="glass rounded-xl px-4 py-2.5">
                <h3 className="text-sm sm:text-base font-serif text-foreground">Salle de consultation</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CabinetSection;