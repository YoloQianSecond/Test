import React, { useState, useEffect } from "react";
import "./InsightsCarousel.css";

type Slide = {
  image: string;   // thumbnail
  url: string;     // YouTube URL
  body: string;
  avatar: string;
  author: string;
  role: string;
};

const slides: Slide[] = [
  {
    image: "/AdrianVideoThumbnail.png",
    url: "https://www.youtube.com/watch?v=5j-YLqpqb-g&t=1s",
    body:
      "Our mission is to pioneer and be the #1 all-inclusive RWA super-app ecosystem that bridges the gap between Web 2.0 and Web 3.0 consumers, investors, and businesses enabling a gateway for mass adoption. This ecosystem will unlock the true potential of tokenization, offering seamless, borderless, and accessible access to RWAs starting with real estate to achieve amplified yields and maximise utility. Beyond investment, users can redeem tokens for benefits like free dining, luxurious stays, and travel experiences – to name a few.",
    avatar: "/Adrianicon.png",
    author: "Adrian Gaffor",
    role: "Co-founder & CEO",
  },
  {
    image: "/YenVideoThumbnail.png",
    url: "https://www.youtube.com/watch?v=01BgDLq_fHg",
    body:
      "TRL's dynamic investment strategy, designed to maximize your returns through a dual-focus approach. Our strategy revolves around sourcing high-potential properties in high-growth markets such as Dubai, Kuala Lumpur, and Bali, with a keen eye on both emerging and undervalued areas. We meticulously evaluate properties using stringent criteria and local market insights to ensure optimal acquisition prices.",
    avatar: "/Yenicon.png",
    author: "Lydia Tan",
    role: "Chief Strategy Officer",
  },
  {
    image: "/WarrenVideoThumbnail.png",
    url: "https://www.youtube.com/watch?v=Am938Y2pXJ8",
    body:
      "TRL's investment strategy not only aims to maximize returns but also prioritizes safeguarding our investors' funds. We leverage Special Purpose Vehicles (SPVs) and blockchain technology through tokenization to enhance security and transparency. By utilizing SPVs, we isolate assets and manage risk effectively, while tokenization on the blockchain provides a secure, transparent way to handle investments and transactions.",
    avatar: "/Warrenicon.png",
    author: "Warren How",
    role: "Co-founder & COO",
  },
];

const InsightsCarousel: React.FC = () => {
  const [i, setI] = useState(0);
  const n = slides.length;

  const next = () => setI(v => (v + 1) % n);
  const prev = () => setI(v => (v - 1 + n) % n);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="ins">
      <div className="ins-wrap">
        <h2 className="ins-title">Insights from the team</h2>

        <div className="ins-viewport">
          <div className="ins-fade ins-fade-left" aria-hidden />
          <div className="ins-fade ins-fade-right" aria-hidden />

          <button className="ins-arrow ins-left" onClick={prev} aria-label="Previous">‹</button>
          <button className="ins-arrow ins-right" onClick={next} aria-label="Next">›</button>

          <div
            className="ins-track"
            style={{ transform: `translateX(calc(${i} * -100%))` }}
          >
            {slides.map((s, idx) => (
              <article className="ins-slide" key={idx}>
                {/* CLICKABLE MEDIA → YouTube */}
                <a
                  className="ins-media"
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch on YouTube"
                >
                  <img src={s.image} alt="" />
                  <span className="ins-play" aria-hidden>▶</span>
                </a>

                {/* RIGHT: text card with connected tail */}
                <div className="ins-card">
                  <p className="ins-card-body">{s.body}</p>

                  <div className="ins-card-footer">
                    <img className="ins-avatar" src={s.avatar} alt="" />
                    <div className="ins-meta">
                      <div className="ins-author">{s.author}</div>
                      <div className="ins-role">{s.role}</div>
                    </div>
                  </div>

                  {/* tail + quote */}
                  <span className="ins-tail" aria-hidden />
                  <div className="ins-quote" aria-hidden>❞</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsCarousel;
