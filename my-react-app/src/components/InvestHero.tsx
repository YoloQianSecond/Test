import React from "react";
import "./InvestHero.css";

type PressLogo = {
  alt: string;
  src: string;
  href: string;
};

const PRESS_LOGOS: PressLogo[] = [
  { alt: "Binance",  src: "/binance.png",  href: "https://www.binance.com/en/square/post/2024-08-09-malaysian-real-estate-project-trl-to-launch-tokenized-residential-properties-11928381034850" },
  { alt: "Benzinga", src: "/benzinga.png", href: "https://www.benzinga.com/content/40224462/malaysia-launches-first-real-estate-rwa-project-trl-to-tokenize-23-million-in-properties" },
  { alt: "Odaily",   src: "/odaily.png",   href: "https://www.odaily.news/newsflash/384821" },
];

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
            {PRESS_LOGOS.map((logo) => (
              <a
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={logo.alt}
                title={logo.alt}
                className="press-logo-link"
              >
                <img src={logo.src} alt={logo.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestHero;
