import React, { useEffect, useRef, useState } from "react";
import "./TRLCOToken.css";

const steps = [
  {
    label: "Earn & redeem",
    content: (
      <ul className="tu-list">
        <li>
          <i className="tu-ico tu-ico-earn" aria-hidden />
          <div>Earn $TRLCO and other rewards-based activities within the TRL ecosystem.</div>
        </li>
        <li>
          <i className="tu-ico tu-ico-gift" aria-hidden />
          <div>
            Redeem $TRLCO for tangible benefits like monthly subscription offsets, rent-to-own
            products, and more via our redemption store.
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
          <div>Use $TRLCO to pay for services such as home cleaning and utilities.</div>
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
            $TRLCO drives real value by enabling greater financial independence and increasing cash
            flow.
          </div>
        </li>
        <li>
          <i className="tu-ico tu-ico-goals" aria-hidden />
          <div>
            Token holders benefit from an integrated system that supports their daily needs and
            long-term goals.
          </div>
        </li>
      </ul>
    ),
  },
];

const TokenUtility: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const tokenRef  = useRef<HTMLElement | null>(null);
  const coinRef   = useRef<HTMLImageElement | null>(null);
  const shadowRef = useRef<HTMLSpanElement | null>(null);

  // Seamless banner content
  const strip = Array.from({ length: 14 }).map((_, i) => (
    <span key={i}>$TRLCO utility token&nbsp;&nbsp;</span>
  ));

  useEffect(() => {
    const target = tokenRef.current;
    const coin   = coinRef.current;
    const shadow = shadowRef.current;
    if (!target || !coin || !shadow) return;

    // Replayable: add 'landed' when in view; remove when out of view
    const io = new IntersectionObserver(
      ([entry]) => {
        const landed = entry.isIntersecting;
        coin.classList.toggle("landed", landed);
        shadow.classList.toggle("landed", landed);
      },
      { threshold: 0.35 }
    );

    io.observe(target);
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Splitter (intrinsic height). Coin rests here and drops to the banner. */}
      <section className="tu-splitter-section" aria-hidden>
        <div className="ts-wrap">
          <img className="ts-notch" src="/landingpage/TRLCO/splitter.png" alt="" />
          <img
            ref={coinRef}
            className="ts-coin"
            src="/landingpage/TRLCO/trlcotoken.png"
            alt="$TRLCO"
          />
          <span ref={shadowRef} className="ts-coin-shadow" />
        </div>
      </section>

      {/* Main token section */}
      <section ref={tokenRef} className="token-utility" id="token">
        <div className="tu-wrap">
          <h2 className="tu-title">Unlock real world value with $TRLCO</h2>
          <p className="tu-sub">
            $TRLCO is the main utility token powering the TRL 360 ecosystem. Earn and redeem $TRLCO
            for lifestyle privileges like dining and experiences.
          </p>

          {/* Seamless marquee: inner wrapper with two equal segments */}
          <div className="tu-marquee">
            <div className="marquee-inner">
              <div className="marquee-seg">{strip}</div>
              <div className="marquee-seg" aria-hidden>{strip}</div>
            </div>
          </div>

          {/* How this works */}
          <div className="tu-grid">
            <div className="tu-card">
              {/* Full image (no crop). Scaled by column width. */}
              <img src="/landingpage/TRLCO/earnandredeem.png" alt="Earn & redeem" />
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
    </>
  );
};

export default TokenUtility;
