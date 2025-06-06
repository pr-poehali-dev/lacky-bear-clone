import CasinoHeader from "@/components/CasinoHeader";
import HeroSection from "@/components/HeroSection";
import GamesGrid from "@/components/GamesGrid";
import DepositSection from "@/components/DepositSection";
import CasinoFooter from "@/components/CasinoFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <CasinoHeader />
      <HeroSection />
      <GamesGrid />
      <DepositSection />
      <CasinoFooter />
    </div>
  );
};

export default Index;
