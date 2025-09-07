import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  const onScrollDown = () => {
    const next = document.querySelector("[data-first-section]");
    if (next) next.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="hero">
      {/* background image that already has the bottom cutout */}
      <img
        className="hero-bg"
        src="/landingpage/hero/homebanner.png"   // <-- your image with the hole
        alt=""
        aria-hidden
      />

      <div className="hero-content">
        <h1>
          The future of real estate <span className="break">is on-chain</span>
        </h1>
        <p>
          Fully backed by Real World Assets, now everyone can own real estate with TRL.
        </p>
      </div>

      {/* round scroll button sitting inside the cutout */}
        <button className="scroll-btn" onClick={onScrollDown} aria-label="Scroll down">
          <img className="arrow" src="/landingpage/hero/arrowdown.png" alt="" aria-hidden />
        </button>
    </header>
  );
};

export default Hero;
