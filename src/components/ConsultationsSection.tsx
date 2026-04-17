import { Users, Heart, Clock, Euro, CreditCard } from "lucide-react";

const ConsultationsSection = () => {
  const consultations = [
    {
      icon: Users,
      title: "Thérapie individuelle pour adulte",
      description: "",
      details: ["Dépression et troubles anxieux", "Souffrance au travail, burn-out", "Gestion du stress et des émotions", "Traumatisme", "Mal-être", "..."]
    },
    {
      icon: Users,
      title: "Accompagnement de l'adolescent",
      description: "À partir de 16 ans",
      details: ["Difficultés scolaires", "Difficultés familiales et de communication", "Troubles du comportement alimentaire, du sommeil", "Troubles anxieux", "..."]
    },
    {
      icon: Heart,
      title: "Suivre une thérapie",
      description: "C'est s'offrir un temps pour prendre soin de soi et de sa santé mentale.",
      details: []
    }
  ];

  const practicalInfo = [
    {
      icon: Clock,
      title: "Durée des séances",
      value: "~45 min",
      description: "Environ 45 minutes"
    },
    {
      icon: Euro,
      title: "Tarifs",
      value: "65€",
      description: "Adaptable si situation particulière"
    },
    {
      icon: CreditCard,
      title: "Paiement",
      value: "À la séance",
      description: "Chèques, espèces ou virements bancaires"
    }
  ];

  return (
    <section id="consultations" className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(42 28% 96%), hsl(88 14% 93%))" }}
    >
      {/* Ambient */}
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[180px] opacity-50 pointer-events-none"
        style={{ background: "hsl(88 25% 65% / 0.12)" }} />

      <div className="container mx-auto px-5 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <p className="section-label mb-4">Accompagnement</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-display-sm font-serif text-foreground mb-4">
            Pour qui et pourquoi ?
          </h2>
        </div>

        {/* Consultation Types */}
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto mb-16 md:mb-20">
          {consultations.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group glass rounded-2xl p-6 sm:p-8 hover-lift"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "hsl(88 32% 42% / 0.10)",
                    border: "1px solid hsl(88 32% 42% / 0.18)"
                  }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif text-foreground mb-3">{service.title}</h3>
                {service.description && (
                  <p className="pill mb-4 text-xs">{service.description}</p>
                )}
                {service.details.length > 0 && (
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Practical Info */}
        <div className="max-w-4xl mx-auto">
          <div className="section-divider mb-10 md:mb-14" />
          <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-8 sm:mb-10 text-center">
            Informations pratiques
          </h3>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {practicalInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="glass-warm rounded-2xl p-5 sm:p-6 text-center hover-lift"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: "hsl(88 32% 42% / 0.10)",
                      border: "1px solid hsl(88 32% 42% / 0.15)"
                    }}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground mb-1 font-medium uppercase tracking-wide">{info.title}</p>
                  <p className="text-2xl sm:text-3xl font-serif text-foreground mb-1">{info.value}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{info.description}</p>
                </div>
              );
            })}
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="glass rounded-2xl p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <span className="text-xl sm:text-2xl flex-shrink-0">📋</span>
                <div>
                  <h4 className="font-serif text-base sm:text-lg text-foreground mb-2">Remboursement</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    La Sécurité sociale ne prend pas en charge les consultations de psychologie.
                    Une facture vous sera transmise pour un éventuel remboursement par votre mutuelle.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <span className="text-xl sm:text-2xl flex-shrink-0">⏰</span>
                <div>
                  <h4 className="font-serif text-base sm:text-lg text-foreground mb-2">Annulation</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Annulation possible sur Doctolib jusqu'à 24h avant. Passé ce délai,
                    contactez-moi au <span className="text-foreground font-semibold">06 36 23 33 22</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationsSection;