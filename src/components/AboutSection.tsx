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
      {/* Decorative - hidden on mobile to prevent overflow */}
      <div className="hidden md:block absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px]" />
      <div className="hidden md:block absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/40 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <p className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">À propos</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-display-sm font-serif text-foreground">
            Qui suis-je ?
          </h2>
        </div>
        
        {/* Main Content - Text & Image Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 md:mb-28">
          {/* Image Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-large">
                <img 
                  alt="Camille Kaltenbach - Psychologue clinicienne" 
                  className="w-full aspect-[4/5] object-cover" 
                  src={portraitImage}
                />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-3xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="max-w-xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-foreground mb-2">
                Camille Kaltenbach
              </h3>
              <p className="text-primary font-semibold text-base sm:text-lg mb-6 sm:mb-8">
                Psychologue Clinicienne
              </p>
              
              <div className="space-y-5 text-muted-foreground leading-relaxed">
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
              
              {/* Decorative Line */}
              <div className="w-16 h-0.5 bg-gradient-primary rounded-full my-8" />
              
              <div className="bg-secondary/50 rounded-2xl p-6 border border-border/50">
                <h4 className="font-serif text-xl text-foreground mb-3">Ma pratique</h4>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  Avec une écoute active bienveillante et sans jugement, je souhaite vous accompagner vers une meilleure connaissance et acceptation de vous-même. Ce travail peut amener à des changements en profondeur afin de construire une relation plus apaisée avec soi, les autres et son environnement. Je propose un espace sécurisant pour laisser libre cours à vos pensées, paroles et émotions, pour tenter de mieux comprendre votre fonctionnement et dépasser ainsi les difficultés que vous rencontrez.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index} 
                className="group bg-card p-8 rounded-2xl shadow-soft hover-lift border border-border/50 text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3">{value.title}</h3>
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