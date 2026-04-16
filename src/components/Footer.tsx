import { ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <p className="font-serif text-xl mb-2">Camille Kaltenbach</p>
            <p className="text-sm text-background/60">
              Psychologue Clinicienne · Psychothérapeute
            </p>
            <p className="text-xs text-background/40 mt-3">
              © {new Date().getFullYear()} Tous droits réservés
            </p>
          </div>
          
          {/* Links */}
          <div className="flex gap-6 text-sm text-background/60">
            <button className="hover:text-background transition-colors">
              Mentions légales
            </button>
            <button className="hover:text-background transition-colors">
              Confidentialité
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;