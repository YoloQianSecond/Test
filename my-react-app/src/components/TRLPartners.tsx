import React, { useEffect, useRef } from "react";
import "./TRLPartners.css";

const logos = [
  { src: "/landingpage/partners/IXSwap.png", alt: "IXSwap" },
  { src: "/landingpage/partners/Base.png", alt: "Base" },
  { src: "/landingpage/partners/Skale.png", alt: "Skale" },
  { src: "/landingpage/partners/LydianLabs.png", alt: "LydianLabs" },
  { src: "/landingpage/partners/IOTA.png", alt: "IOTA" },
  { src: "/landingpage/partners/Uniswap.png", alt: "Uniswap" },
];

const LINES = [
  "We are the world's first 360 RWA ecosystem",
  "that drives the flywheel effect for both the",
  "consumer and investor when it comes to real",
  "estate living, tokenization, DeFi systems and",
  "utility rewards.",
];

const TRLPartners: React.FC = () => {
  const loop = [...logos, ...logos];
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
  const els = lineRefs.current.filter(Boolean) as HTMLSpanElement[];
  if (!els.length) return;

  const io = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add("line-visible");     // fade in
        } else {
          el.classList.remove("line-visible");  // fade out when scrolled away
        }
      });
    },
    {
      threshold: 0.1,
      // start revealing when a line is roughly within the middle band of the screen
      rootMargin: "-20% 0px -40% 0px",
    }
  );

  els.forEach(el => io.observe(el));
  return () => io.disconnect();
}, []);


  return (
    <section className="section partners">
      <p className="big-statement">
        {LINES.map((t, i) => (
          <span
            key={i}
            ref={el => (lineRefs.current[i] = el)}
            className="headline-line"
          >
            {t}
          </span>
        ))}
      </p>

      <div className="pm-viewport" aria-label="Our partners">
        <div className="pm-track">
          {loop.map((l, i) => (
            <div className="pm-item" key={`${l.alt}-${i}`} aria-hidden={i >= logos.length}>
              <img className="pm-logo" src={l.src} alt={l.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TRLPartners;
