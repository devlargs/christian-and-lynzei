import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import HeroSection from "@/sections/HeroSection";
import PhotosSection from "@/sections/PhotosSection";
import RsvpSection from "@/sections/RsvpSection";
import TheCoupleSection from "@/sections/TheCoupleSection";
import WeddingEventSection from "@/sections/WeddingEventSection";
import WeddingGiftsSection from "@/sections/WeddingGiftsSection";
import WeddingPartySection from "@/sections/WeddingPartySection";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main id="main">
        <span className="spacer d-block w-100"></span>
        <HeroSection />
        <TheCoupleSection />
        <WeddingEventSection />
        <WeddingPartySection />
        <PhotosSection />
        <WeddingGiftsSection />
        <RsvpSection />
      </main>
      <Footer />
    </>
  );
}
