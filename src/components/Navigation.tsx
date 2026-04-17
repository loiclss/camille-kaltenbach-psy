import { useState, useEffect } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
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
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: "hsl(38 28% 96% / 0.96)",
          backdropFilter: "blur(16px) saturate(160%)",
          WebkitBackdropFilter: "blur(16px) saturate(160%)",
          borderBottom: "1px solid hsl(20 14% 87%)",
          padding: isScrolled ? "12px 0" : "18px 0",
          boxShadow: isScrolled ? "0 1px 16px -4px hsl(20 18% 11% / 0.08)" : "none",
        }}
      >
        <div className="container mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("accueil")}
            className="font-serif text-lg sm:text-xl text-foreground hover:text-primary transition-colors duration-200"
          >
            Camille Kaltenbach
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-250 group-hover:w-full rounded-full" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection("rendez-vous")}
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold
                         px-5 py-2.5 rounded-lg transition-all duration-250 hover:shadow-glow hover:-translate-y-0.5"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              Rendez-vous
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden tap-target flex items-center justify-center text-foreground"
            onClick={() => setIsMobileMenuOpen(v => !v)}
            aria-label={isMobileMenuOpen ? "Fermer" : "Menu"}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden flex flex-col transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "hsl(38 28% 96%)" }}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-border">
          <span className="font-serif text-lg text-foreground">Camille Kaltenbach</span>
          <button className="tap-target flex items-center justify-center text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center px-5 gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="w-full text-left py-4 px-4 text-xl font-serif text-foreground/80 hover:text-primary
                         hover:bg-white rounded-xl transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="px-5 pb-10 pt-4 border-t border-border">
          <button
            onClick={() => scrollToSection("rendez-vous")}
            className="w-full flex items-center justify-center gap-2.5 bg-primary text-white
                       py-4 rounded-xl text-base font-medium hover:bg-primary-dark transition-all duration-250"
          >
            <CalendarCheck className="w-5 h-5" />
            Prendre rendez-vous
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;