import React from "react";
import {
  TrophyIcon,
  UsersIcon,
  NewspaperIcon,
  BanknotesIcon,
  HomeIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid"; // You can also use /24/outline for outlined style
import "./About.css";

const About: React.FC = () => {
  return (
    <main className="about">
      {/* 1) HERO */}
        <section className="about-hero">
          <div className="about-hero-inner">
            <div className="about-hero-copy">
              <h1>About TRL</h1>
              <p>
                Understand our efficiency and transparency in building a real estate
                investing ecosystem.
              </p>
            </div>

            <div className="about-hero-art" aria-hidden>
              {/* use your building image here */}
              <img src="/about/Building.png" alt="" />
            </div>
          </div>
        </section>

      {/* 2) INTRO + CTA */}
      <section className="about-intro">
        <div className="container narrow">
          <h2 className="display">
            At TRL, we seamlessly blend real-world tangibility with blockchain technology
          </h2>

          <p className="lead justify">
            The challenge of securing affordable housing undermines the foundational needs
            outlined in Maslow&apos;s Hierarchy. Essential needs like shelter should be
            easily accessible to everyone, yet today&apos;s youth face a stark reality.
          </p>

          <p className="lead justify">
            Recognizing these evolving desires, it becomes evident that traditional
            financial models fail to meet the needs of modern society. These outdated
            systems, burdened by cumbersome paperwork, convoluted processes, and
            inconsistent human judgment, are increasingly out of sync with the dynamic
            lifestyles and flexibility sought by today&apos;s generations. Young people
            favor mobility, the freedom to invest, and the right to live life on their
            own terms. This stark contrast to the rigid structures in place underscores
            the urgent need for reform in how we finance and value our homes.
          </p>

          <a className="btn-pill primary center" href="/ecosystem" target="_blank" rel="noopener noreferrer">
            Learn about $TRLX Ecosystem
          </a>
        </div>
      </section>

      {/* 3) STATS GRID */}
      <section className="about-stats">
        <div className="container">
          <h3 className="h2 center">Where we are today</h3>

          <div className="stats-grid">
            <article className="stat">
              <div className="ico" aria-hidden>
                <TrophyIcon className="h-10 w-10 text-[#ff6e6e]" />
              </div>
              <h4>$400k in grants</h4>
              <p>Awarded and accelerated by SKALE and IOTA.</p>
            </article>

            <article className="stat">
              <div className="ico" aria-hidden>
                <UsersIcon className="h-10 w-10 text-[#ff6e6e]" />
              </div>
              <h4>5 lifestyle partners</h4>
              <p>Onboarded F&amp;B, and Gaming partners into our network.</p>
            </article>

            <article className="stat">
              <div className="ico" aria-hidden>
                <NewspaperIcon className="h-10 w-10 text-[#ff6e6e]" />
              </div>
              <h4>Featured in 50 news websites</h4>
              <p>Covered by Bloomberg, CoinTelegraph, and more.</p>
            </article>

            <article className="stat">
              <div className="ico" aria-hidden>
                <BanknotesIcon className="h-10 w-10 text-[#ff6e6e]" />
              </div>
              <h4>$1M total raised</h4>
              <p>Total investment value from angels and institutions.</p>
            </article>

            <article className="stat">
              <div className="ico" aria-hidden>
                <HomeIcon className="h-10 w-10 text-[#ff6e6e]" />
              </div>
              <h4>First property acquired</h4>
              <p>Purchased and tokenised first property in Johor, Malaysia.</p>
            </article>

            <article className="stat">
              <div className="ico" aria-hidden>
                <ShieldCheckIcon className="h-10 w-10 text-[#ff6e6e]" />
              </div>
              <h4>Fully KYC and audited team</h4>
              <p>Our team is fully KYC and audited.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 4) FINAL CTA */}
      <section className="about-cta">
        <div className="container narrow">
          <h3 className="h2 center">
            Revolutionise real estate investments with <span className="brand-accent">TRL</span>
          </h3>
          <p className="lead center">
            Effortlessly manage and grow your portfolio with the power of blockchain technology.
          </p>
          <a
            className="btn-pill primary center"
            href="https://trl.world/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the Presale
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
