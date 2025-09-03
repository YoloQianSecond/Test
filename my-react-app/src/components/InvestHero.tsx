import React from "react";
import "./InvestHero.css";

const InvestHero: React.FC = () => {
  return (
    <section className="invest">
      <div className="invest-wrap">
        {/* floating badges */}
        <div className="badge badge-a">Invest and earn 💰</div>
        <div className="badge badge-b">Anytime access 💿</div>
        <div className="badge badge-c">Community Governance Voting 🗳️</div>
        <div className="badge badge-d">Grow earnings ❤️</div>

        <h2 className="invest-title">
          Invest in <span className="ticker">$TRLX1 ↗</span>
        </h2>

        <div className="press">
          <span className="press-label">Proudly featured in</span>
          <div className="press-logos">
            <img src="/binance.png" alt="Binance" />
            <img src="/benzinga.png" alt="Benzinga" />
            <img src="/odaily.png" alt="Odaily" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestHero;
