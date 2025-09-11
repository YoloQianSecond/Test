import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  const onScrollDown = () => {
    const next = document.querySelector("[data-first-section]");
    if (next) next.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="hero">
      <img
        className="hero-bg"
        src="/landingpage/hero/homebanner.png"
        alt="City skyline background"
      />

      <img
        className="cloud cloud-left"
        src="/landingpage/hero/leftcloud.png"
        alt="Left cloud"
      />
      <img
        className="cloud cloud-right"
        src="/landingpage/hero/rightcloud.png"
        alt="Right cloud"
      />

      <div className="hero-content">
        <h1>
          The future of real estate <span className="break">is on-chain</span>
        </h1>
        <p>
          Fully backed by Real World Assets, now everyone can own real estate with TRL.
        </p>
      </div>

      <button
        className="scroll-btn"
        onClick={onScrollDown}
        aria-label="Scroll down"
      >
        <img
          className="arrow"
          src="/landingpage/hero/arrowdown.png"
          alt=""
          aria-hidden
        />
      </button>
    </header>
  );
};

export default Hero;
