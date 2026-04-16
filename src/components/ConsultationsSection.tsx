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
    <section id="consultations" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <p className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">Accompagnement</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-display-sm font-serif text-foreground mb-4 sm:mb-6">
            Pour qui et pourquoi ?
          </h2>
        </div>

        {/* Consultation Types */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-20">
          {consultations.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group bg-card rounded-2xl p-8 shadow-soft hover-lift border border-border/50"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3">{service.title}</h3>
                {service.description && (
                  <p className="text-primary font-medium text-sm mb-4">{service.description}</p>
                )}
                {service.details.length > 0 && (
                  <ul className="space-y-2.5">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <span className="text-primary mr-2.5 mt-0.5">•</span>
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
          <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-10 text-center">
            Informations pratiques
          </h3>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {practicalInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div 
                  key={index} 
                  className="bg-card rounded-xl p-6 text-center shadow-soft border border-border/50 hover-lift"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{info.title}</p>
                  <p className="text-2xl font-serif text-foreground mb-1">{info.value}</p>
                  <p className="text-xs text-muted-foreground">{info.description}</p>
                </div>
              );
            })}
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📋</span>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-2">Remboursement</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    La Sécurité sociale ne prend pas en charge les consultations de psychologie. 
                    Une facture vous sera transmise pour un éventuel remboursement par votre mutuelle.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
              <div className="flex items-start gap-4">
                <span className="text-2xl">⏰</span>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-2">Annulation</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Annulation possible sur Doctolib jusqu'à 24h avant. Passé ce délai, 
                    contactez-moi au <span className="text-foreground font-medium">06 36 23 33 22</span>.
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