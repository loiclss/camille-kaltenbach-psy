import { CalendarCheck, ExternalLink, MapPin, Clock, CheckCircle } from "lucide-react";

const DOCTOLIB_URL = "https://www.doctolib.fr/psychologue/sundhoffen/camille-kaltenbach?pid=practice-723961&phs=true";

const AppointmentSection = () => {
  return (
    <section id="rendez-vous" style={{ background: "hsl(156 26% 22%)" }}>
      <div className="container mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left: text */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary-light mb-5 sm:mb-6">
              04 — Rendez-vous
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6 sm:mb-8">
              Commencer<br />
              <span className="italic">dès maintenant</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-md mb-8 sm:mb-10">
              Réservez votre consultation directement sur Doctolib. Choisissez le créneau qui vous convient, recevez une confirmation immédiate.
            </p>

            {/* Feature list */}
            <div className="space-y-3 mb-10 sm:mb-12">
              {[
                { icon: MapPin, text: "Cabinet à Sundhoffen • Lundi au Jeudi" },
                { icon: Clock, text: "Séances d'environ 45 minutes" },
                { icon: CheckCircle, text: "Confirmation de rendez-vous immédiate" },
              ].map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="flex items-center gap-3 text-sm text-white/70">
                    <Icon className="w-4 h-4 text-primary-light flex-shrink-0" />
                    <span>{f.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href={DOCTOLIB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white text-foreground text-sm font-semibold
                         px-7 py-3.5 rounded-lg hover:bg-white/90 transition-all duration-250 hover:-translate-y-0.5 hover:shadow-xl"
            >
              <CalendarCheck className="w-4 h-4 text-primary" />
              Réserver sur Doctolib
              <ExternalLink className="w-3.5 h-3.5 text-foreground/40" />
            </a>
          </div>

          {/* Right: info card */}
          <div className="bg-white/8 border border-white/10 rounded-2xl p-6 sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40 mb-5">Informations</p>

            <div className="space-y-5">
              {[
                { label: "Tarif de consultation", value: "65 €", note: "Adaptable selon situation" },
                { label: "Durée", value: "~45 min", note: "Par séance" },
                { label: "Paiement", value: "En fin de séance", note: "Chèques · Espèces · Virement" },
                { label: "Annulation", value: "24h à l'avance", note: "Via Doctolib ou téléphone" },
              ].map((row, i) => (
                <div key={i} className="flex items-start justify-between gap-4 pb-5 border-b border-white/8 last:border-0 last:pb-0">
                  <div>
                    <p className="text-xs text-white/45 mb-0.5">{row.label}</p>
                    <p className="text-sm text-white/70">{row.note}</p>
                  </div>
                  <p className="font-serif text-xl text-white text-right flex-shrink-0">{row.value}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
