import { Heart, Users, Shield } from "lucide-react";
import portraitImage from "@/assets/camille-portrait.jpg";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Bienveillance",
      description: "Un accompagnement empathique et sans jugement dans un cadre sécurisant."
    },
    {
      icon: Users,
      title: "Écoute active",
      description: "Une attention particulière portée à votre histoire."
    },
    {
      icon: Shield,
      title: "Confidentialité",
      description: "Le respect du secret professionnel."
    }
  ];

  return (
    <section id="a-propos" className="section-padding bg-background relative overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="hidden md:block absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[160px] opacity-50 pointer-events-none"
        style={{ background: "hsl(88 20% 70% / 0.12)" }} />
      <div className="hidden md:block absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-40 pointer-events-none"
        style={{ background: "hsl(30 45% 80% / 0.18)" }} />

      <div className="container mx-auto px-5 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <p className="section-label mb-4">À propos</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-display-sm font-serif text-foreground">
            Qui suis-je ?
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 md:mb-24">
          {/* Image Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-[220px] sm:max-w-sm mx-auto lg:max-w-none">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-3xl shadow-large">
                <img
                  alt="Camille Kaltenbach - Psychologue clinicienne"
                  className="w-full aspect-[3/4] sm:aspect-[3/4] object-cover object-top"
                  src={portraitImage}
                />
                {/* Subtle bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-foreground/10 to-transparent" />
              </div>
              {/* Decorative frames */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-primary/20 rounded-3xl -z-10" />
              <div className="absolute -top-5 -left-5 w-28 h-28 rounded-full blur-3xl pointer-events-none"
                style={{ background: "hsl(88 32% 60% / 0.15)" }} />
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-6 sm:left-8 glass rounded-2xl px-4 py-3 shadow-card">
                <p className="text-xs font-semibold text-foreground/70 leading-none mb-0.5">Master en Psychologie</p>
                <p className="text-xs text-primary font-medium">Université de Lorraine</p>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="max-w-xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-foreground mb-1">
                Camille Kaltenbach
              </h3>
              <p className="text-primary font-semibold text-sm sm:text-base mb-7 sm:mb-8 tracking-wide">
                Psychologue Clinicienne · Psychothérapeute
              </p>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  Psychologue clinicienne et psychothérapeute, je suis diplômée du Master de Psychologie clinique, psychopathologie et psychologie de la santé de l'Université de Lorraine.
                </p>
                <p>
                  Avant de m'installer en cabinet libéral à Sundhoffen, j'ai travaillé au sein du Centre Hospitalier Spécialisé de Sarreguemines (en psychiatrie), ainsi qu'en Centre Médico-Psychologique (CMP).
                </p>
                <p>
                  Lors de mes études, j'ai également pu me former et exercer au sein d'un CMP pour enfants et adolescents, ainsi qu'auprès de professionnels de l'Administration pénitentiaire.
                </p>
              </div>

              {/* Divider */}
              <div className="decorative-line my-7 sm:my-8" />

              {/* Ma pratique — glass card */}
              <div className="glass-sage rounded-2xl p-5 sm:p-6">
                <h4 className="font-serif text-lg sm:text-xl text-foreground mb-3">Ma pratique</h4>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-[15px]">
                  Avec une écoute active bienveillante et sans jugement, je souhaite vous accompagner vers une meilleure connaissance et acceptation de vous-même. Ce travail peut amener à des changements en profondeur afin de construire une relation plus apaisée avec soi, les autres et son environnement. Je propose un espace sécurisant pour laisser libre cours à vos pensées, paroles et émotions, pour tenter de mieux comprendre votre fonctionnement et dépasser ainsi les difficultés que vous rencontrez.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-12 md:mb-16" />

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6 max-w-4xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group glass rounded-2xl p-6 sm:p-7 hover-lift text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "hsl(88 32% 42% / 0.10)",
                    border: "1px solid hsl(88 32% 42% / 0.15)"
                  }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif text-foreground mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;