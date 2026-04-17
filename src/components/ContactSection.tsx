import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const info = [
    { icon: Phone, label: "Téléphone", content: "06 36 23 33 22", link: "tel:0636233322" },
    { icon: Mail, label: "Email", content: "camille.kaltenbach.psy@gmail.com", link: "mailto:camille.kaltenbach.psy@gmail.com" },
    { icon: MapPin, label: "Adresse", content: "41 rue Marie Gocker, 68280 Sundhoffen", link: "https://maps.google.com/?q=41+rue+Marie+Gocker+68280+Sundhoffen" },
    { icon: Clock, label: "Horaires", content: "Lundi – Jeudi : 8h30 – 18h", link: null },
  ];

  return (
    <section id="contact" className="bg-white">

      {/* ─── Header strip ─── */}
      <div className="border-b border-border">
        <div className="container mx-auto px-5 sm:px-8 py-6 sm:py-8 flex items-center gap-6">
          <p className="section-label">05 — Contact</p>
          <div className="rule flex-1" />
        </div>
      </div>

      <div className="container mx-auto px-5 sm:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-5xl">

          {/* Left: contact info */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-8 sm:mb-10">
              Me contacter
            </h2>

            <div className="space-y-6 mb-8 sm:mb-10">
              {info.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.link.startsWith("http") ? "_blank" : undefined}
                          rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm sm:text-base text-foreground hover:text-primary transition-colors break-all sm:break-normal"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base text-foreground">{item.content}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Privacy */}
            <div className="card-ivory rounded-xl p-4 sm:p-5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Confidentialité :</span>{" "}
                Toutes vos informations sont traitées de manière confidentielle.
              </p>
            </div>
          </div>

          {/* Right: Map */}
          <div className="order-first lg:order-last">
            <div className="overflow-hidden rounded-xl border border-border shadow-sm h-full min-h-[280px] sm:min-h-[380px] lg:min-h-[440px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2668.5!2d7.4947!3d48.0603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47919c8b8c8c8c8c%3A0x0!2s41%20Rue%20Marie%20Gocker%2C%2068280%20Sundhoffen!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '280px', display: 'block', width: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cabinet Camille Kaltenbach — Sundhoffen"
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default ContactSection;