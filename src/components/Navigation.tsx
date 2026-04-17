import { useState, useEffect } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
      if (window.scrollY > 60) setIsMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "a-propos", label: "Qui suis-je" },
    { id: "consultations", label: "Consultations" },
    { id: "cabinet", label: "Le Cabinet" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 border-b border-border/40"
            : "py-5"
        }`}
        style={isScrolled ? {
          background: "hsl(42 28% 96% / 0.92)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          boxShadow: "0 1px 20px -4px hsl(24 18% 16% / 0.08)"
        } : {}}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("accueil")}
              className={`font-serif transition-all duration-300 ${
                isScrolled
                  ? "text-foreground text-xl"
                  : "text-white drop-shadow-lg text-xl sm:text-2xl"
              }`}
            >
              Camille Kaltenbach
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    isScrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-primary to-primary-light transition-all duration-300 group-hover:w-full rounded-full" />
                </button>
              ))}
              <button
                onClick={() => scrollToSection("rendez-vous")}
                className={`ml-2 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? "bg-primary text-white hover:bg-primary-dark shadow-soft hover:shadow-glow"
                    : "bg-white/12 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-foreground"
                }`}
              >
                <CalendarCheck className="w-4 h-4" />
                Rendez-vous
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden tap-target rounded-xl transition-all duration-200 ${
                isScrolled
                  ? "text-foreground hover:bg-secondary"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileMenuOpen
                ? <X className="h-5 w-5" />
                : <Menu className="h-5 w-5" />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — full screen overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "hsl(42 28% 96% / 0.97)",
          backdropFilter: "blur(24px) saturate(200%)",
          WebkitBackdropFilter: "blur(24px) saturate(200%)",
        }}
      >
        {/* Close button at top right */}
        <div className="flex justify-end p-5">
          <button
            className="tap-target text-foreground rounded-xl hover:bg-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col items-center justify-center gap-2 h-[calc(100vh-120px)]">
          {/* Brand */}
          <p className="font-serif text-2xl text-foreground mb-8">Camille Kaltenbach</p>

          {navLinks.map((link, idx) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="w-full max-w-xs text-center py-4 text-lg font-medium text-foreground/80 hover:text-primary transition-colors rounded-2xl hover:bg-secondary/60"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {link.label}
            </button>
          ))}

          {/* CTA */}
          <button
            onClick={() => scrollToSection("rendez-vous")}
            className="mt-8 w-full max-w-xs flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-2xl text-base font-medium hover:bg-primary-dark transition-all duration-300 shadow-medium hover:shadow-glow"
          >
            <CalendarCheck className="w-5 h-5" />
            Prendre rendez-vous
          </button>

          {/* Doctolib hint */}
          <p className="mt-4 text-xs text-muted-foreground text-center">
            Via Doctolib · Confirmation immédiate
          </p>
        </div>
      </div>
    </>
  );
};

export default Navigation;