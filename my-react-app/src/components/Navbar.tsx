import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";

/** ---------- DATA (public-path image strings) ---------- */
type MenuLink = {
  label: string;
  href: string;
  external?: boolean;
};

type InvestmentCard = {
  title: string;
  href: string;
  badge?: string;
  muted?: boolean;
  img?: string;
};

type MegaConfig = {
  key: string;
  label: string;
  items: MenuLink[] | InvestmentCard[];
  image?: { src: string; alt: string }; // optional – not used for Investments
};

const MENUS: MegaConfig[] = [
  {
    key: "investments",
    label: "Investments",
    items: [
      {
        title: "United Arab Emirates",
        href: "https://trlx1.trlco.world/",
        img: "/landingpage/navbar/UAE.png",
      },
      {
        title: "Kuala Lumpur",
        href: "/investments/kuala-lumpur",
        badge: "Coming Soon",
        muted: true,
        img: "/landingpage/navbar/KualaLumpur.png",
      },
      {
        title: "Bali",
        href: "/investments/bali",
        badge: "Coming Soon",
        muted: true,
        img: "/landingpage/navbar/Bali.png",
      },
    ],
    // no right hero image for investments
  },
  {
    key: "token",
    label: "Token Ecosystem",
    items: [
      { label: "Roadmap", href: "https://trlco.world/roadmap" },
      { label: "TRL Ecosystem", href: "https://trlco.world/ecosystem" },
      { label: "Whitepaper", href: "https://trlco.world/", external: true },
    ],
    image: { src: "/landingpage/navbar/navtoken.png", alt: "Token artwork" },
  },
  {
    key: "learn",
    label: "Learn",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "How to buy", href: "/learn/how-to-buy" },
      { label: "FAQ", href: "/faq" },
    ],
    image: { src: "/landingpage/navbar/blog.png", alt: "Stack of books" },
  },
  {
    key: "company",
    label: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Media Release", href: "/media" },
    ],
    image: { src: "/landingpage/navbar/company.png", alt: "Modern building" },
  },
  { key: "contact", label: "Contact", items: [] },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // sticky color change
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close on Esc / outside click
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenKey(null);
    const onClickAway = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpenKey(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickAway);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickAway);
    };
  }, []);

  return (
    <nav ref={navRef} className={`nav ${scrolled ? "scrolled" : ""}`} aria-label="Main">
      <div className="nav-inner">
        <a className="brand" href="/">
          <span className="logo-square" aria-hidden />
          <span className="brand-text">trl</span>
        </a>

        <ul className="topnav" role="menubar" aria-label="Primary navigation">
          {MENUS.map(menu => {
            const isOpen = openKey === menu.key;
            const hasMega = menu.items.length > 0 && menu.key !== "contact";
            const isCards = hasMega && "title" in (menu.items[0] as any);

            return (
              <li key={menu.key} className={`topnav-item ${isOpen ? "open" : ""}`} role="none">
                {hasMega ? (
                  <button
                    className="topnav-btn"
                    role="menuitem"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onClick={() => setOpenKey(isOpen ? null : menu.key)}
                  >
                    {menu.label}
                    <span className="caret" aria-hidden />
                  </button>
                ) : (
                  <a className="topnav-link" role="menuitem" href="/contact">
                    Contact
                  </a>
                )}

                {hasMega && isOpen && (
                  <div
                    className={`mega ${isCards ? "cards" : "list"} ${
                      !isCards && menu.image?.src ? "has-media" : ""
                    }`}
                    role="group"
                    aria-label={`${menu.label} menu`}
                  >
                    <div className={`mega-links ${isCards ? "cards" : "list"}`}>
                      {isCards
                        ? (menu.items as InvestmentCard[]).map(item => (
                            <a
                              key={item.href}
                              className={`mega-card ${item.muted ? "muted" : ""}`}
                              href={item.href}
                            >
                              <div className="mega-card-head">
                                <span className="mega-card-title">{item.title}</span>
                                {item.badge && <span className="badge">{item.badge}</span>}
                              </div>
                              {item.img && <img src={item.img} alt="" aria-hidden />}
                            </a>
                          ))
                        : (menu.items as MenuLink[]).map(item => (
                            <a
                              key={item.href}
                              className="mega-linkrow"
                              href={item.href}
                              target={item.external ? "_blank" : undefined}
                              rel={item.external ? "noopener noreferrer" : undefined}
                            >
                              <span>{item.label}</span>
                              {item.external && (
                                <svg
                                  className="external"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  aria-hidden
                                >
                                  <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                                  <path d="M5 5h5v2H7v10h10v-3h2v5H5z" />
                                </svg>
                              )}
                            </a>
                          ))}
                    </div>

                    {/* right column (NOT shown for investments) */}
                    {!isCards && menu.image?.src && (
                      <div className="mega-media">
                        <img src={menu.image.src} alt={menu.image.alt} />
                      </div>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <a className="cta" href="/app">
          Enter App
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
