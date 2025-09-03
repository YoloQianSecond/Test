import React, { useState } from "react";
import "./TrlEcosystem.css";

const TrlEcosystem: React.FC = () => {
  const [active, setActive] = useState<"left" | "right" | null>(null);

  const handleClick = (side: "left" | "right") => {
    setActive(prev => (prev === side ? null : side));
  };

  return (
    <section className={`trl-ecosystem ${active ? "active" : ""}`}>
      <h2 className="title">The TRL Ecosystem</h2>
      <div className={`panels ${active ? `active-${active}` : ""}`}>
        <div
          className={`panel left ${active === "left" ? "expanded" : ""}`}
          onMouseEnter={() => active || setActive("left")}
          onMouseLeave={() => !active && setActive(null)}
          onClick={() => handleClick("left")}
        >
          <div className="overlay" />
          <div className="content">
            <h3>Invest in properties globally without getting locked in (or out)</h3>
            <p>
              Buy a fraction of a portfolio of properties, earn instant real-time yields,
              and trade easily in our highly liquid marketplace.
            </p>
          </div>
        </div>

        <div
          className={`panel right ${active === "right" ? "expanded" : ""}`}
          onMouseEnter={() => active || setActive("right")}
          onMouseLeave={() => !active && setActive(null)}
          onClick={() => handleClick("right")}
        >
          <div className="overlay" />
          <div className="content">
            <h3>Experience global living without boundaries</h3>
            <p>
              Live flexibly anywhere with our pioneering home subscription service and
              seamless access to global rental and ownership opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrlEcosystem;
