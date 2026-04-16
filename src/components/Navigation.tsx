import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "accueil", label: "Accueil" },
    { id: "a-propos", label: "Qui suis-je" },
    { id: "consultations", label: "Consultations" },
    { id: "cabinet", label: "Le Cabinet" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/98 backdrop-blur-xl shadow-soft py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("accueil")}
            className={`font-serif text-lg sm:text-xl md:text-2xl transition-all duration-300 truncate max-w-[200px] sm:max-w-none ${
              isScrolled ? "text-foreground" : "text-white drop-shadow-lg"
            }`}
          >
            Camille Kaltenbach
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                  isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("rendez-vous")}
              size="sm"
              className={`ml-2 rounded-lg font-medium transition-all duration-300 ${
                isScrolled 
                  ? "bg-primary text-primary-foreground hover:bg-primary-dark" 
                  : "bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-foreground"
              }`}
            >
              Rendez-vous
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-6 pb-6 flex flex-col gap-1 border-t pt-6 ${
            isScrolled ? "border-border" : "border-white/20"
          }`}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left py-3 px-4 rounded-lg transition-all duration-200 ${
                  isScrolled 
                    ? "text-foreground hover:bg-secondary" 
                    : "text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => {
                scrollToSection("rendez-vous");
                setIsMobileMenuOpen(false);
              }}
              className="mt-4 bg-primary text-primary-foreground hover:bg-primary-dark"
            >
              Prendre rendez-vous
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;