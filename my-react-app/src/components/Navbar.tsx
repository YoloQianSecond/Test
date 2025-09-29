import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

/** ---------- DATA (public-path image strings) ---------- */
type MenuLink = { label: string; href: string; external?: boolean };
type InvestmentCard = { title: string; href: string; badge?: string; muted?: boolean; img?: string };
type MegaConfig = {
  key: string;
  label: string;
  items: MenuLink[] | InvestmentCard[];
  image?: { src: string; alt: string };
};

type NavbarProps = {
  /** landing = animated/transparent on top; static = solid on all pages */
  mode?: "landing" | "static";
};

const MENUS: MegaConfig[] = [
  // {
  //   key: "investments",
  //   label: "Investments",
  //   items: [
  //     { title: "Johor, Malaysia", href: "", badge: "COMPLETED", muted: true, img: "/landingpage/navbar/KualaLumpur.png" },
  //     { title: "Bali, Indonesia", href: "", badge: "Coming Soon", muted: true, img: "/landingpage/navbar/Bali.png" },
  //     { title: "Dubai, UAE", href: "", badge: "Coming Soon", muted: true, img: "/landingpage/navbar/UAE.png" },
  //   ],
  // },
  {
    key: "token",
    label: "Token Ecosystem",
    items: [
      { label: "Roadmap", href: "/roadmap" },
      { label: "TRL Ecosystem", href: "/ecosystem" },
      { label: "Whitepaper", href: "https://whitepaper.trlco.world/trl", external: true },
    ],
    image: { src: "/landingpage/navbar/navtoken.png", alt: "Token artwork" },
  },
  {
    key: "company",
    label: "Company",
    items: [
      { label: "About", href: "/about" },
      // { label: "Contact Us", href: "/contact" },
    ],
    image: { src: "/landingpage/navbar/company.png", alt: "Modern building" },
  },
];

const Navbar: React.FC<NavbarProps> = ({ mode = "landing" }) => {
  // static mode starts solid and never changes; landing starts transparent then solidifies on scroll
  const [scrolled, setScrolled] = useState(mode === "static");
  const [openKey, setOpenKey] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // sticky color change — only attach in landing mode
  useEffect(() => {
    if (mode !== "landing") return;
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
  }, [mode]);

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
    <nav
      ref={navRef}
      className={`nav ${scrolled ? "scrolled" : ""} ${mode === "static" ? "static" : ""}`}
      aria-label="Main"
    >
      <div className="nav-inner">
        <a className="brand" href="/">
          <img src="/landingpage/navbar/trllogo.svg" alt="TRL Logo" className="brand-logo" />
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
                  <a className="topnav-btn no-caret" role="menuitem" href="/contact">
                    Contact
                  </a>
                )}

                {hasMega && isOpen && (
                  <div
                    className={`mega ${isCards ? "cards" : "list"} ${!isCards && menu.image?.src ? "has-media" : ""}`}
                    role="group"
                    aria-label={`${menu.label} menu`}
                  >
                    <div className={`mega-links ${isCards ? "cards" : "list"}`}>
                      {isCards
                        ? (menu.items as InvestmentCard[]).map(item => (
                            <div key={item.title} className={`mega-card ${item.muted ? "muted" : ""} disabled`} aria-disabled="true">
                              <div className="mega-card-head">
                                <span className="mega-card-title">{item.title}</span>
                                {item.badge && <span className="status-badge">{item.badge}</span>}
                              </div>
                              {item.img && <img src={item.img} alt="" aria-hidden />}
                            </div>
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
                                <svg className="external" width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                                  <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                                  <path d="M5 5h5v2H7v10h10v-3h2v5H5z" />
                                </svg>
                              )}
                            </a>
                          ))}
                    </div>

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

        <a className="cta" href="https://trl.world/">
          Enter Presale
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
