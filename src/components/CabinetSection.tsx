import waitingRoomImage from "@/assets/cabinet-waiting.jpg";
import armchairImage from "@/assets/cabinet-armchair.jpg";

const CabinetSection = () => {
  return (
    <section id="cabinet" className="bg-white">

      {/* ─── Header strip ─── */}
      <div className="border-b border-border">
        <div className="container mx-auto px-5 sm:px-8 py-6 sm:py-8 flex items-center gap-6">
          <p className="section-label">03 — Le Cabinet</p>
          <div className="rule flex-1" />
        </div>
      </div>

      {/* ─── Intro ─── */}
      <div className="container mx-auto px-5 sm:px-8 pt-12 sm:pt-16 pb-10 sm:pb-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight max-w-sm">
            Un espace<br />
            <span className="italic text-primary">chaleureux</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xs sm:text-right leading-relaxed">
            Cabinet ouvert du lundi au jeudi.<br />
            Accès PMR et parking.
          </p>
        </div>
      </div>

      {/* ─── Full-edge photo grid ─── */}
      <div className="container mx-auto px-5 sm:px-8 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">

          {/* Salle d'attente */}
          <div className="group relative overflow-hidden rounded-xl cursor-default">
            <img
              src={waitingRoomImage}
              alt="Salle d'attente"
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
              <span className="inline-block bg-white text-foreground text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-md">
                Salle d'attente
              </span>
            </div>
          </div>

          {/* Salle de consultation */}
          <div className="group relative overflow-hidden rounded-xl cursor-default">
            <img
              src={armchairImage}
              alt="Salle de consultation"
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
              <span className="inline-block bg-white text-foreground text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-md">
                Salle de consultation
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* ─── Address strip ─── */}
      <div className="border-t border-border" style={{ background: "hsl(38 22% 95%)" }}>
        <div className="container mx-auto px-5 sm:px-8 py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="text-primary text-lg">📍</span>
            <p className="text-sm sm:text-base text-foreground font-medium">41 rue Marie Gocker, 68280 Sundhoffen</p>
          </div>
          <a
            href="https://maps.google.com/?q=41+rue+Marie+Gocker+68280+Sundhoffen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold uppercase tracking-wide text-primary hover:text-primary-dark transition-colors underline underline-offset-4"
          >
            Voir sur Google Maps →
          </a>
        </div>
      </div>

    </section>
  );
};

export default CabinetSection;