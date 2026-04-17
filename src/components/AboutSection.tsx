import portraitImage from "@/assets/camille-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="a-propos" className="bg-white">

      {/* ─── Header strip ─── */}
      <div className="border-b border-border">
        <div className="container mx-auto px-5 sm:px-8 py-6 sm:py-8 flex items-center gap-6">
          <p className="section-label">01 — À propos</p>
          <div className="rule flex-1" />
        </div>
      </div>

      {/* ─── Main: photo + intro ─── */}
      <div className="container mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-0 lg:gap-16 items-start py-14 sm:py-20 lg:py-24">

          {/* Photo */}
          <div className="lg:col-span-4 mb-10 lg:mb-0">
            <div className="relative max-w-[200px] sm:max-w-[280px] lg:max-w-none mx-auto lg:mx-0">
              <div className="overflow-hidden rounded-xl shadow-md">
                <img
                  src={portraitImage}
                  alt="Camille Kaltenbach — Psychologue clinicienne"
                  className="w-full aspect-[3/4] object-cover object-top"
                />
              </div>
              {/* Diploma badge */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 bg-white border border-border rounded-lg px-3 sm:px-4 py-2 sm:py-3 shadow-md max-w-[160px] sm:max-w-[180px]">
                <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wide text-muted-foreground mb-0.5">Diplôme</p>
                <p className="text-[11px] sm:text-xs text-foreground font-medium leading-snug">Master — Psychologie Clinique</p>
                <p className="text-[9px] sm:text-[10px] text-primary mt-0.5">Université de Lorraine</p>
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div className="lg:col-span-8">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-foreground mb-2 leading-tight">
              Camille Kaltenbach
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base font-medium tracking-wide mb-8 sm:mb-10">
              Psychologue clinicienne · Psychothérapeute
            </p>

            <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl">
              <p>
                Psychologue clinicienne et psychothérapeute, je suis diplômée du Master de Psychologie clinique,
                psychopathologie et psychologie de la santé de l'Université de Lorraine.
              </p>
              <p>
                Avant de m'installer en cabinet libéral à Sundhoffen, j'ai travaillé au sein du Centre Hospitalier
                Spécialisé de Sarreguemines (en psychiatrie), ainsi qu'en Centre Médico-Psychologique (CMP).
              </p>
              <p>
                Lors de mes études, j'ai également pu me former et exercer au sein d'un CMP pour enfants et
                adolescents, ainsi qu'auprès de professionnels de l'Administration pénitentiaire.
              </p>
            </div>

            {/* Ma pratique */}
            <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-border">
              <p className="section-label mb-4">Ma pratique</p>
              <p className="text-foreground/80 text-sm sm:text-base leading-relaxed max-w-2xl">
                Avec une écoute active bienveillante et sans jugement, je souhaite vous accompagner vers une meilleure
                connaissance et acceptation de vous-même. Ce travail peut amener à des changements en profondeur afin
                de construire une relation plus apaisée avec soi, les autres et son environnement. Je propose un espace
                sécurisant pour laisser libre cours à vos pensées, paroles et émotions, pour tenter de mieux comprendre
                votre fonctionnement et dépasser ainsi les difficultés que vous rencontrez.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Values strip ─── */}
      <div className="border-t border-border" style={{ background: "hsl(38 22% 95%)" }}>
        <div className="container mx-auto px-5 sm:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-10 max-w-3xl">
            {[
              { num: "01", title: "Bienveillance", desc: "Un accompagnement empathique et sans jugement dans un cadre sécurisant." },
              { num: "02", title: "Écoute active", desc: "Une attention particulière portée à votre histoire et votre vécu." },
              { num: "03", title: "Confidentialité", desc: "Le strict respect du secret professionnel à chaque séance." },
            ].map((v) => (
              <div key={v.num} className="flex items-start gap-4 sm:block sm:gap-0">
                <p className="font-serif text-3xl sm:text-5xl text-primary/25 sm:mb-3 leading-none flex-shrink-0 mt-0.5 sm:mt-0">{v.num}</p>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-foreground mb-1 sm:mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;