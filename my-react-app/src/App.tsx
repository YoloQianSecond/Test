// App.tsx
import React from "react";
import { BrowserRouter, Routes, Route, useLocation /*, Navigate*/ } from "react-router-dom";
import "./styles.css";

import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import SiteFooter from "./components/SiteFooter";
import FloatingTelegram from "./components/FloatingTelegram";

// home sections
import Hero from "./components/Hero";
import TRLPartners from "./components/TRLPartners";
import TRLCOTOKEN from "./components/TRLCOToken";
import FourPillars from "./components/FourPillars";
import InsightsCarousel from "./components/InsightsCarousel";
import MarketplaceTeaser from "./components/MarketplaceTeaser";
import InvestHero from "./components/InvestHero";

// pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Ecosystem from "./pages/Ecosystem";
import Roadmap from "./pages/Roadmap";

/* -------- Home (landing) content -------- */
const Home: React.FC = () => (
  <>
    <Hero />
    <TRLPartners />
    <TRLCOTOKEN />
    <FourPillars />
    <InsightsCarousel />
    <MarketplaceTeaser />
    <InvestHero />
  </>
);

/* -------- Shared chrome that switches navbar mode by route -------- */
const Chrome: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const isLanding = pathname === "/";

  return (
    <>
      <AnnouncementBar />
      {/* pass mode to navbar (landing = animated; static = solid) */}
      <Navbar mode={isLanding ? "landing" : "static"} />
      {children}
      <SiteFooter />
      <FloatingTelegram />
    </>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Chrome>
              <Home />
            </Chrome>
          }
        />
        <Route
          path="/about"
          element={
            <Chrome>
              <About />
            </Chrome>
          }
        />
        <Route
          path="/contact"
          element={
            <Chrome>
              <Contact />
            </Chrome>
          }
        />
        <Route
          path="/ecosystem"
          element={
            <Chrome>
              <Ecosystem />
            </Chrome>
          }
        />
        <Route
          path="/roadmap"
          element={
            <Chrome>
              <Roadmap />
            </Chrome>
          }
        />
        {/* 404 (optional)
        <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
