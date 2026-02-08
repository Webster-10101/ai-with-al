import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ShiftSection from "@/components/ShiftSection";
import WhoSection from "@/components/WhoSection";
import OfferSection from "@/components/OfferSection";
import BookingSection from "@/components/BookingSection";
import BookSection from "@/components/BookSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProblemSection />
        <ShiftSection />
        <WhoSection />
        <OfferSection />
        <BookingSection />
        <BookSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
