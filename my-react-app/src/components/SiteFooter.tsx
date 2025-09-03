import React from "react";
import "./SiteFooter.css";

const SiteFooter: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        {/* Address */}
        <div className="footer-address">
          <span className="footer-ico">📍</span>
          C-12-08 Sunway Nexis Jalan PJU 5/1 Kota Damansara,
          <br /> 47810 PJ Selangor, Malaysia
        </div>

        {/* Social icons */}
        <div className="footer-social">
          <a href="https://x.com/Trl_co" aria-label="X (Twitter)">𝕏</a>
          <a href="https://www.linkedin.com/company/trlco/" aria-label="LinkedIn">in</a>
          <a href="https://t.me/trlworld" aria-label="Telegram">✈</a>
          <a href="https://medium.com/@TRLCo" aria-label="Medium">●●</a>
          <a href="https://www.youtube.com/watch?v=5j-YLqpqb-g" aria-label="YouTube">▶</a>
          <a href="https://instagram.com/trlco_world/" aria-label="Instagram">⌾</a>
        </div>
      </div>

      <hr className="footer-line" />

      <p className="footer-copy">
        Copyright © 2024 The Real Lifestyle. All Rights Reserved.
      </p>
    </footer>
  );
};

export default SiteFooter;
