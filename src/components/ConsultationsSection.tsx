import { Clock, Euro, CreditCard } from "lucide-react";

const ConsultationsSection = () => {
  const services = [
    {
      title: "Thérapie individuelle",
      subtitle: "Adulte",
      items: ["Dépression et troubles anxieux", "Souffrance au travail, burn-out", "Gestion du stress et des émotions", "Traumatisme", "Mal-être"],
    },
    {
      title: "Accompagnement",
      subtitle: "Adolescent (dès 16 ans)",
      items: ["Difficultés scolaires", "Difficultés familiales et de communication", "Troubles du comportement alimentaire, du sommeil", "Troubles anxieux"],
    },
    {
      title: "Pourquoi consulter ?",
      subtitle: "",
      items: ["S'offrir un temps pour prendre soin de soi et de sa santé mentale."],
      highlight: true,
    },
  ];

  const infoCards = [
    { icon: Clock, label: "Durée", value: "~45 min", sub: "Environ 45 minutes par séance" },
    { icon: Euro, label: "Tarif", value: "65 €", sub: "Adaptable si situation particulière" },
    { icon: CreditCard, label: "Paiement", value: "À la séance", sub: "Chèques, espèces ou virement" },
  ];

  return (
    <section id="consultations" style={{ background: "hsl(38 28% 96%)" }}>

      {/* ─── Header strip ─── */}
      <div className="border-b border-border">
        <div className="container mx-auto px-5 sm:px-8 py-6 sm:py-8 flex items-center gap-6">
          <p className="section-label">02 — Consultations</p>
          <div className="rule flex-1" />
        </div>
      </div>

      {/* ─── Title ─── */}
      <div className="container mx-auto px-5 sm:px-8 pt-12 sm:pt-16 pb-10 sm:pb-14">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-foreground max-w-xl leading-tight">
          Pour qui<br />et pourquoi ?
        </h2>
      </div>

      {/* ─── Services grid ─── */}
      <div className="container mx-auto px-5 sm:px-8 pb-14 sm:pb-20">
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className={`rounded-xl p-6 sm:p-8 border transition-shadow duration-250 hover:shadow-md ${
                s.highlight
                  ? "bg-primary text-white border-primary-dark"
                  : "bg-white border-border"
              }`}
            >
              {s.subtitle && (
                <span className={`inline-block text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 ${
                  s.highlight ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                }`}>
                  {s.subtitle}
                </span>
              )}
              <h3 className={`font-serif text-xl sm:text-2xl mb-4 ${s.highlight ? "text-white" : "text-foreground"}`}>
                {s.title}
              </h3>
              <ul className="space-y-2.5">
                {s.items.map((item, idx) => (
                  <li key={idx} className={`flex gap-3 text-sm leading-relaxed ${s.highlight ? "text-white/90" : "text-muted-foreground"}`}>
                    <span className={`mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.highlight ? "bg-white/60" : "bg-primary/50"}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Practical info ─── */}
      <div className="border-t border-border bg-white">
        <div className="container mx-auto px-5 sm:px-8 py-12 sm:py-16">
          <p className="section-label mb-8">Informations pratiques</p>

          {/* 3 stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {infoCards.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="card-flat rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{c.label}</span>
                  </div>
                  <p className="font-serif text-3xl text-foreground mb-1">{c.value}</p>
                  <p className="text-xs text-muted-foreground">{c.sub}</p>
                </div>
              );
            })}
          </div>

          {/* 2 info panels */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="card-ivory rounded-xl p-5 sm:p-6">
              <p className="font-semibold text-sm text-foreground mb-2">📋 Remboursement</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                La Sécurité sociale ne prend pas en charge les consultations de psychologie.
                Une facture vous sera transmise pour un éventuel remboursement par votre mutuelle.
              </p>
            </div>
            <div className="card-ivory rounded-xl p-5 sm:p-6">
              <p className="font-semibold text-sm text-foreground mb-2">⏰ Annulation</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Annulation possible sur Doctolib jusqu'à 24h avant. Passé ce délai, contactez-moi au{" "}
                <a href="tel:0636233322" className="text-primary font-semibold hover:underline">06 36 23 33 22</a>.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ConsultationsSection;