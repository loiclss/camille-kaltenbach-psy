import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CabinetSection from "@/components/CabinetSection";
import ConsultationsSection from "@/components/ConsultationsSection";
import AppointmentSection from "@/components/AppointmentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ConsultationsSection />
        <CabinetSection />
        <AppointmentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
