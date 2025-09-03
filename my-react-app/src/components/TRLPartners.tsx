import React from "react";
import "./TRLPartners.css"; // we reuse the CSS from before

const logos = [
  { src: "/logos/iota.png", alt: "IOTA" },
  { src: "/logos/lydian.png", alt: "Lydian Labs" },
  { src: "/logos/uniswap.png", alt: "Uniswap" },
  { src: "/logos/ixswap.png", alt: "IX Swap" },
  { src: "/logos/base.png", alt: "Base" },
  { src: "/logos/skale.png", alt: "Skale" },
];

const TRLPartners: React.FC = () => {
  const loop = [...logos, ...logos]; // duplicate for seamless loop

  return (
    <section className="section">
      <p className="big-statement">
        We are the world's first 360 RWA ecosystem that drives the flywheel effect for both the
        consumer and investor when it comes to real estate living, tokenization, DeFi systems
        and utility rewards.
      </p>

      <div className="pm-viewport" aria-label="Our partners">
        <div className="pm-track">
          {loop.map((l, i) => (
            <div className="pm-item" key={`${l.alt}-${i}`}>
              <div className="pm-badge">
                <img src={l.src} alt={l.alt} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TRLPartners;
