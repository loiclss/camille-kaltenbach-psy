import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: "06 36 23 33 22",
      link: "tel:0636233322"
    },
    {
      icon: Mail,
      title: "Email",
      content: "camille.kaltenbach.psy@gmail.com",
      link: "mailto:camille.kaltenbach.psy@gmail.com"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "41 rue Marie Gocker, 68280 Sundhoffen",
      link: "https://maps.google.com/?q=41+rue+Marie+Gocker+68280+Sundhoffen"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lundi - Jeudi : 8h30 - 18h",
      link: null
    }
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="hidden md:block absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <p className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">Contact</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-display-sm font-serif text-foreground mb-4 sm:mb-6">
            Me contacter
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            N'hésitez pas à me contacter pour toute question ou pour prendre rendez-vous.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="bg-card rounded-2xl overflow-hidden shadow-elegant border border-border/80 h-full min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2668.5!2d7.4947!3d48.0603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47919c8b8c8c8c8c%3A0x0!2s41%20Rue%20Marie%20Gocker%2C%2068280%20Sundhoffen!5e0!3m2!1sfr!2sfr!4v1234567890" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Localisation du cabinet de Camille Kaltenbach à Sundhoffen"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2">
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border/80 mb-6">
              <h3 className="font-serif text-2xl text-foreground mb-6">Informations de contact</h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-0.5">{info.title}</p>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-foreground hover:text-primary transition-colors font-medium"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.content}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20 shadow-soft">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Confidentialité :</span> Toutes vos informations sont traitées de manière confidentielle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;