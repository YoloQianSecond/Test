import React from "react";
import "./styles.css";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TRLPartners from "./components/TRLPartners";
import TrlEcosystem from "./components/TrlEcosystem";
import TRLCOTOKEN from "./components/TRLCOToken";
import FourPillars from "./components/FourPillars";
import InsightsCarousel from "./components/InsightsCarousel";
import MarketplaceTeaser from "./components/MarketplaceTeaser";
import InvestHero from "./components/InvestHero";
import SiteFooter from "./components/SiteFooter";
import FloatingTelegram from "./components/FloatingTelegram";

const App: React.FC = () => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <TRLPartners />
      <TrlEcosystem />
      <TRLCOTOKEN />
      <FourPillars />
      <InsightsCarousel />
      <MarketplaceTeaser />
      <InvestHero />
      <SiteFooter />
      <FloatingTelegram />
    </>
  );
};

export default App;
