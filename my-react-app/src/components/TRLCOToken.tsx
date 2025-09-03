import React, { useState } from "react";
import "./TRLCOToken.css";

const steps = [
  {
    label: "Earn & redeem",
    content: (
      <ul className="tu-list">
        <li>
          <i className="tu-ico tu-ico-earn" aria-hidden />
          <div>
            Earn $TRLCO and other rewards-based activities within the TRL ecosystem.
          </div>
        </li>
        <li>
          <i className="tu-ico tu-ico-gift" aria-hidden />
          <div>
            Redeem $TRLCO for tangible benefits like monthly subscription offsets,
            rent-to-own products, and more via our redemption store.
          </div>
        </li>
      </ul>
    ),
  },
  {
    label: "Utility & access",
    content: (
      <ul className="tu-list">
        <li>
          <i className="tu-ico tu-ico-utility" aria-hidden />
          <div>
            Use $TRLCO to pay for services such as home cleaning and utilities.
          </div>
        </li>
        <li>
          <i className="tu-ico tu-ico-heart" aria-hidden />
          <div>
            Enjoy future lifestyle activities supported by $TRLCO, enhancing your living experience.
          </div>
        </li>
      </ul>
    ),
  },
  {
    label: "Community benefits",
    content: (
      <ul className="tu-list">
        <li>
          <i className="tu-ico tu-ico-cashflow" aria-hidden />
          <div>
            $TRLCO drives real value by enabling greater financial independence and increasing cash flow.
          </div>
        </li>
        <li>
          <i className="tu-ico tu-ico-goals" aria-hidden />
          <div>
            Token holders benefit from an integrated system that supports their daily needs and long-term goals.
          </div>
        </li>
      </ul>
    ),
  },
];

const TokenUtility: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="token-utility" id="token">
      <div className="tu-wrap">
        <h2 className="tu-title">Unlock real world value with $TRLCO</h2>
        <p className="tu-sub">
          $TRLCO is the main utility token powering the TRL 360 ecosystem. Earn and redeem
          $TRLCO for lifestyle privileges like dining and experiences.
        </p>

        {/* Marquee + floating coin */}
        <div className="tu-marquee">
          <div className="marquee-track" aria-hidden>
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i}>$TRLCO utility token&nbsp;&nbsp;</span>
            ))}
          </div>
          <img src="/coin.png" alt="$TRLCO" className="tu-coin" />
        </div>

        {/* How this works */}
        <div className="tu-grid">
          <div className="tu-card">
            <img src="/gift.jpg" alt="Earn & redeem" />
          </div>

          <div className="tu-steps">
            <p className="tu-eyebrow">How this works</p>
            <div className="tu-tabs">
              {steps.map((step, idx) => (
                <button
                  key={step.label}
                  className={`tu-h3 tu-tab-btn${activeStep === idx ? " active" : ""}`}
                  onClick={() => setActiveStep(idx)}
                  type="button"
                >
                  {step.label}
                </button>
              ))}
            </div>
            <div className="tu-tab-content">{steps[activeStep].content}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenUtility;
