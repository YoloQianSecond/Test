import React, { useState } from "react";
import "./Ecosystem.css";

/** ------------------ Partners data ------------------ */
type Partner = { name: string; logo: string; blurb: string; href?: string };
type PartnerCategory = { key: "network" | "security" | "compliance" | "wallets"; label: string; items: Partner[] };

const CATEGORIES: PartnerCategory[] = [
  {
    key: "network",
    label: "Blockchain network",
    items: [
      {
        name: "Base",
        logo: "/ecosystem/BaseLogo.png",
        blurb: "Base is an Ethereum Layer-2 network developed by Coinbase.",
        href: "https://base.org/",
      },
      {
        name: "Skale",
        logo: "/ecosystem/SkaleLogo.png",
        blurb:
          "SKALE Network is a Layer-2 scaling solution that creates a sidechain environment to relieve the congestion on the Ethereum network.",
        href: "https://skale.space/",
      },
      {
        name: "IOTA",
        logo: "/ecosystem/IotaLogo.png",
        blurb:
          "The IOTA network is built for the Internet of Everything, with tamper-proof data, feeless transactions, and low resource requirements.",
        href: "https://www.iota.org/",
      },
    ],
  },
  {
    key: "security",
    label: "Security",
    items: [
      {
        name: "Cyberscope",
        logo: "/ecosystem/CyberscopeImage.png",
        blurb: "Cyberscope is one of the leading and recognised audit authorities in the crypto space.",
        href: "https://www.cyberscope.io/",
      },
    ],
  },
  {
    key: "compliance",
    label: "Compliance",
    items: [
      {
        name: "IX Swap",
        logo: "/ecosystem/IXSwapImage.png",
        blurb:
          "IX Swap is a DeFi platform that aims to bring access to private market investments through tokenization and security tokens.",
        href: "https://www.ixswap.io/",
      },
    ],
  },
  {
    key: "wallets",
    label: "Wallets",
    items: [
      {
        name: "Base Wallet",
        logo: "/ecosystem/CoinbaseLogo.png",
        blurb:
          "Base wallets are designed to interact with and store cryptocurrencies and digital assets on the Base blockchain.",
        href: "https://www.coinbase.com/wallet",
      },
      {
        name: "Wallet Connect",
        logo: "/ecosystem/WalletConnectLogo.png",
        blurb:
          "WalletConnect is an open source protocol that allows you to connect your crypto wallet to decentralized applications (dApps) on the web.",
        href: "https://walletconnect.com/",
      },
      {
        name: "MetaMask",
        logo: "/ecosystem/MetamaskLogo.png",
        blurb:
          "MetaMask is a cryptocurrency wallet used to interact with the Ethereum blockchain. It allows users to access their Ethereum wallet through a browser extension or mobile app, which can then be used to interact with decentralized applications.",
        href: "https://metamask.io/",
      },
    ],
  },
];

const Ecosystem: React.FC = () => {
  const [tab, setTab] = useState<PartnerCategory["key"]>("network");

  const renderCategory = (c: PartnerCategory) => {
    // 3-col grid for Network + Wallets
    if (c.key === "network" || c.key === "wallets") {
      return (
        <div className="partner-grid cols-3" key={c.key}>
          {c.items.map((p) => (
            <article className="partner-card" key={p.name}>
              <div className="partner-logo">
                <img src={p.logo} alt={`${p.name} logo`} />
              </div>

              <h3 className="partner-name">{p.name}</h3>
              <p className="partner-blurb">{p.blurb}</p>

              {p.href && (
                <a
                  className="btn-outline"
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: "auto" }}
                >
                  Learn more
                </a>
              )}
            </article>
          ))}
        </div>
      );
    }

    // Split layout (text left, image right) for Security + Compliance
    return (
      <div className="split-layout" key={c.key}>
        {c.items.map((p) => (
          <div className="split-card" key={p.name}>
            <div className="split-text">
              <h3 className="partner-name">{p.name}</h3>
              <p className="partner-blurb">{p.blurb}</p>
              {p.href && (
                <a className="btn-outline" href={p.href} target="_blank" rel="noopener noreferrer">
                  Learn more
                </a>
              )}
            </div>
            <div className="split-image">
              <img src={p.logo} alt={`${p.name} visual`} />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <main className="eco">
      {/* 1) INTRO */}
      <section className="eco-intro">
        <div className="container narrow">
          <h1 className="eco-title">TRL Ecosystem</h1>
          <p className="eco-lead">
            Our goal is to rebuild an ecosystem where renters can rent freely anywhere
            in the world, build a new homeownership financing system that enables
            buyers of tomorrow to have the flexibility of owning, upscaling, and
            downscaling at their convenience, and for investors to benefit with the
            security of real estate, but receive the upside from the ecosystem.
          </p>
          <a
            className="btn-pill primary center"
            href="https://whitepaper.trlco.world/trl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our whitepaper
          </a>
        </div>
      </section>

      {/* 2) TWO-TOKEN PANEL */}
      <section className="eco-tokens">
        <div className="container">
          <img className="tokens-img" src="/ecosystem/TRLCOTokens.png" alt="$TRLX and $TRLCO overview" />
        </div>
      </section>

      {/* 3) ECOSYSTEM FLOW DIAGRAM */}
      <section className="eco-flow">
        <div className="container">
          <h2 className="h2 center">
            Revolutionising homeownership,<br />
            rentals and investments
          </h2>
          <div className="flow-wrap">
            <img src="/ecosystem/EcosystemFlow.png" alt="TRL ecosystem flow diagram" />
          </div>
        </div>
      </section>

      {/* 4) PARTNERS TABS */}
      <section className="eco-partners">
        <div className="container">
          <h2 className="h2 center">Explore our network of partners</h2>

          <div className="tabs">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                className={`tab ${tab === c.key ? "active" : ""}`}
                onClick={() => setTab(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>

          {CATEGORIES.map((c) => (c.key === tab ? renderCategory(c) : null))}
        </div>
      </section>
    </main>
  );
};

export default Ecosystem;
