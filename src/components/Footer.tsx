import { Phone, CalendarCheck } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "hsl(24 18% 14%)" }}
    >
      {/* Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{ background: "hsl(88 32% 42%)" }} />

      <div className="container mx-auto px-5 sm:px-6 relative">
        {/* Main footer */}
        <div className="py-12 sm:py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={() => scrollToSection("accueil")}
              className="font-serif text-xl sm:text-2xl text-white mb-3 block text-left hover:text-primary-light transition-colors duration-300"
            >
              Camille Kaltenbach
            </button>
            <p className="text-sm text-white/50 mb-2">Psychologue Clinicienne · Psychothérapeute</p>
            <p className="text-sm text-white/40">Sundhoffen, Alsace</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">Navigation</p>
            <div className="flex flex-col gap-3">
              {[
                { id: "a-propos", label: "Qui suis-je" },
                { id: "consultations", label: "Consultations" },
                { id: "cabinet", label: "Le Cabinet" },
                { id: "contact", label: "Contact" },
              ].map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-white/55 hover:text-white transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5">Consultation</p>
            <p className="text-sm text-white/55 mb-5 leading-relaxed">
              Prendre rendez-vous en ligne facilement, avec confirmation immédiate.
            </p>
            <button
              onClick={() => scrollToSection("rendez-vous")}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:shadow-glow"
            >
              <CalendarCheck className="w-4 h-4" />
              Prendre rendez-vous
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Camille Kaltenbach · Tous droits réservés
          </p>
          <div className="flex gap-6 text-xs text-white/35">
            <button className="hover:text-white/60 transition-colors">Mentions légales</button>
            <button className="hover:text-white/60 transition-colors">Confidentialité</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;