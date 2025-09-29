import React, { useEffect, useRef, useState } from "react";
import "./Roadmap.css";

type Section = { title: string; bullets: string[] };
type Slide = { title: string; subtitle?: string; sections: Section[] };

const SLIDES: Slide[] = [
  {
    title: "Q3",
    subtitle: "2025",
    sections: [
      {
        title: "Project",
        bullets: [
          "Launch $TRLCO Presale Page with $SBROS (Asset Backed Tokenization of 2 Gastro Bars: Bosko & Granite) – Target Hard Cap Raise: $2.7M",
          "Target to Onboard 2 or 3 Small Businesses for Tokenization – Target AUM: $2M and above",
          "Target to Onboard 2 more Property Developments for Tokenization – Target AUM: $2M and above",
        ],
      },
      {
        title: "Product",
        bullets: [
          "MVP Launch of TRL Platform for Asset Tokenization",
          "$TRLCO Token Generation Event (TGE) planning underway. Target TGE date: 22nd October 2025",
        ],
      },
      {
        title: "Funding & Marketing",
        bullets: [
          "Begin $TRLCO community-building campaigns",
          "Strategic marketing push in APAC and MENA regions",
          "Expand ecosystem partnerships for asset onboarding",
        ],
      },
    ],
  },
  {
    title: "Q4",
    subtitle: "2025",
    sections: [
      {
        title: "Project",
        bullets: [
          "Tokenize 3 Additional Businesses and 3 Properties – Target AUM: $5M",
          "Expand TRL real estate and business pool across SEA",
        ],
      },
      {
        title: "Product",
        bullets: [
          "Full-scale rollout of TRL Platform MVP",
          "Platform improvements based on user testing",
        ],
      },
      {
        title: "Funding & Marketing",
        bullets: [
          "$TRLCO Token Generation Event (TGE) execution",
          "Start preparation for consumer product launch campaigns",
        ],
      },
    ],
  },
  {
    title: "Year",
    subtitle: "2026",
    sections: [
      {
        title: "Project",
        bullets: [
          "Launch TRL HomeSub and Consumer Services",
          "Expand tokenized assets into 2 new countries",
        ],
      },
      {
        title: "Product",
        bullets: [
          "Release TRL AI Agent & Investment Recommendation Engine",
          "Launch full TRL app suite (HomeSub, HomeFi, Utility Dashboard)",
        ],
      },
      {
        title: "Funding & Marketing",
        bullets: [
          "Initiate partnerships for Web2–Web3 onboarding",
          "Global marketing campaign for lifestyle and housing services",
        ],
      },
    ],
  }
];

const Roadmap: React.FC = () => {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const clamp = (v: number) => Math.max(0, Math.min(SLIDES.length - 1, v));
  const go = (i: number) => setIndex(clamp(i));
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  // keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  // drag / swipe
  useEffect(() => {
    const el = trackRef.current!;
    let startX = 0;
    let current = 0;
    let dragging = false;

    const width = () => el.clientWidth;
    const start = (x: number) => {
      dragging = true;
      startX = x;
      el.style.transition = "none";
    };
    const move = (x: number) => {
      if (!dragging) return;
      current = x - startX;
      el.style.transform = `translateX(calc(${(-index * 100)}% + ${current}px))`;
    };
    const end = () => {
      if (!dragging) return;
      dragging = false;
      el.style.transition = "";
      const threshold = width() * 0.15;
      if (current < -threshold) next();
      else if (current > threshold) prev();
      else el.style.transform = `translateX(${-index * 100}%)`;
      current = 0;
    };

    const onMouseDown = (e: MouseEvent) => start(e.clientX);
    const onMouseMove = (e: MouseEvent) => move(e.clientX);
    const onMouseUp = end;
    const onTouchStart = (e: TouchEvent) => start(e.touches[0].clientX);
    const onTouchMove = (e: TouchEvent) => move(e.touches[0].clientX);
    const onTouchEnd = end;

    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [index]);

  return (
    <main className="roadmap">
      <section className="rm-intro">
        <h1 className="rm-title">Roadmap</h1>
        <p className="rm-lead">
          Our journey aims to revolutionize real estate investment using Web3 technology.
          We’re committed to creating a transparent, efficient, and accessible platform
          for all investors.
        </p>
      </section>

      <section className="rm-slider">
        {/* Left column: quarter + arrows */}
        <aside className="rm-aside">
          <div className="rm-quarter">
            <div className="q">{SLIDES[index].title}</div>
            <div className="y">{SLIDES[index].subtitle}</div>
          </div>

          <div className="rm-arrows">
            <button
              className="rm-arrow"
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              className="rm-arrow"
              onClick={next}
              disabled={index === SLIDES.length - 1}
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </aside>

        {/* Track */}
        <div className="rm-viewport">
          <div
            ref={trackRef}
            className="rm-track"
            style={{ transform: `translateX(${-index * 100}%)` }}
          >
            {SLIDES.map((s, i) => (
              <article className="rm-slide" key={i} aria-hidden={i !== index}>
                <div className="rm-card">
                  {s.sections.map(sec => (
                    <div className="rm-sec" key={sec.title}>
                      <h3>{sec.title}</h3>
                      <ul>
                        {sec.bullets.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* edge fade for overflow feel */}
          <div className="rm-fade left" />
          <div className="rm-fade right" />
        </div>
      </section>
    </main>
  );
};

export default Roadmap;
