import React, { useState } from "react";
import "./FourPillars.css";

const pillars = [
  {
    title: "Live seamlesss",
    desc: "Our streamlined procedures make these processes transparent, flexible, secure, and affordable. We belive taht simplicity is the key to enjoying life's greatest pleasures.",
    color: "linear-gradient(135deg,#ffb199,#ff0844)"
  },
  {
    title: "Live borderless",
    desc: "Our services and solutions support a modern lifestyle, allowing you to seamlessly transition between different aspects of your life, no matter where you are.",
    color: "linear-gradient(135deg,#ffdf91,#ffb347)"
  },
  {
    title: "Live for real",
    desc: "Our global passport and interconnected ecosystem are designed to break down barriers and provide equal access to opportunities.",
    color: "linear-gradient(135deg,#6dd5fa,#2980b9)"
  },
  {
    title: "Live connected",
    desc: "We foster a vibrant community where members can connect, collaborate, and grow together, making every experience more meaningful.",
    color: "linear-gradient(135deg,#b2ffb2,#00c853)"
  }
];

const FourPillars: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + visibleCount < pillars.length ? prev + 1 : prev
    );
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className="pillars">
      <div className="pillars-wrap">
        <h2 className="pillars-title">Experience the four pillars of TRL Living</h2>
        <p className="pillars-sub">
          Our philosophy is built on four key pillars that ensure a superior living experience for our community.
        </p>

        {/* Cards Carousel */}
        <div className="pillars-grid">
          {pillars.slice(startIndex, startIndex + visibleCount).map((p, i) => (
            <div className="pillar-card" key={i + startIndex} style={{ background: p.color }}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
          <button
            className="pillars-nav-btn prev"
            onClick={handlePrev}
            disabled={startIndex === 0}
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            className="pillars-nav-btn next"
            onClick={handleNext}
            disabled={startIndex + visibleCount >= pillars.length}
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>

        {/* Logos */}
        <h3 className="pillars-logos-title">
          Backed by experienced Web 2 and Web 3 experts
        </h3>
        <p className="pillars-logos-sub">
          Our team has decades of leadership experience at market leaders in the blockchain, real estate, financial services, and gaming sectors.
        </p>
        
        <div className="pillars-logos">
          <img src="/binance.png" alt="Binance" />
          <img src="/woox.png" alt="WooX" />
          <img src="/ethereum.png" alt="Ethereum" />
          <img src="/bitcoin.png" alt="Bitcoin" />
          <img src="/500.png" alt="500 Startups" />
        </div>

        <button className="pillars-btn">Invest Now</button>
      </div>
    </section>
  );
};

export default FourPillars;
