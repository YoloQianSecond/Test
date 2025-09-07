import React from "react";
import "./MarketplaceTeaser.css";

const MarketplaceTeaser: React.FC = () => {
  return (
    <section className="mk">
      <div className="mk-wrap">
        {/* Left */}
        <div className="mk-copy">
          <p className="mk-eyebrow">Coming Soon</p>
          <h2 className="mk-title">
            Unlock the future of
            <br /> real estate with TRL
            <br /> Marketplace
          </h2>

          <ul className="mk-list">
            <li>
              <i className="mk-ico mk-ico-chart" aria-hidden />
              <div>
                <h4>Tokenisation-as-a-service</h4>
                <p>
                  Empower homeowners and real estate agents to list and tokenize
                  properties for sale, boosting property volume and offering consumers
                  the chance to invest in fractional ownership.
                </p>
              </div>
            </li>
            <li>
              <i className="mk-ico mk-ico-link" aria-hidden />
              <div>
                <h4>Ecosystem partnerships</h4>
                <p>
                  Enjoy seamless access to services from top RWA partners—delivering a
                  comprehensive, efficient and scalable investment platform.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="mk-visual">
          {/* phone */}
          <img src="/landingpage/comingsoon/unlockfeature.png" alt="TRL Marketplace app" className="mk-phone" />
        </div>
      </div>
    </section>
  );
};

export default MarketplaceTeaser;
