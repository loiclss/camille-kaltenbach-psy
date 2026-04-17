import { CalendarCheck } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "hsl(20 18% 10%)" }}>
      <div className="container mx-auto px-5 sm:px-8">

        {/* Main */}
        <div className="py-12 sm:py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={() => scrollToSection("accueil")}
              className="font-serif text-xl text-white mb-2 block text-left hover:text-primary-light transition-colors"
            >
              Camille Kaltenbach
            </button>
            <p className="text-sm text-white/40 mb-1">Psychologue clinicienne · Psychothérapeute</p>
            <p className="text-xs text-white/30">Sundhoffen, Alsace</p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30 mb-4">Navigation</p>
            <div className="space-y-2.5">
              {[
                { id: "a-propos", label: "Qui suis-je" },
                { id: "consultations", label: "Consultations" },
                { id: "cabinet", label: "Le Cabinet" },
                { id: "contact", label: "Contact" },
              ].map(l => (
                <button key={l.id} onClick={() => scrollToSection(l.id)}
                  className="block text-sm text-white/45 hover:text-white transition-colors text-left"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30 mb-4">Votre suivi</p>
            <p className="text-sm text-white/40 mb-5 leading-relaxed">
              Prenez rendez-vous en ligne facilement via Doctolib.
            </p>
            <button
              onClick={() => scrollToSection("rendez-vous")}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white
                         text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-250 hover:-translate-y-0.5"
            >
              <CalendarCheck className="w-4 h-4" />
              Prendre rendez-vous
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/25">
            © {new Date().getFullYear()} Camille Kaltenbach — Tous droits réservés
          </p>
          <div className="flex gap-5 text-[11px] text-white/30">
            <button className="hover:text-white/60 transition-colors">Mentions légales</button>
            <button className="hover:text-white/60 transition-colors">Confidentialité</button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;