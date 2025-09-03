import React, { useEffect, useState } from "react";

const links = [
  { href: "#investments", label: "Investments" },
  { href: "#token", label: "Token Ecosystem" },
  { href: "#learn", label: "Learn" },
  { href: "#company", label: "Company" },
  { href: "#contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40); // flip once we move past the ribbon height
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="brand" href="#">
          <span className="logo-square" aria-hidden />
          <span>trl</span>
        </a>

        <ul aria-label="Primary navigation">
          {links.map(l => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>

        <button className="cta">Enter App</button>
      </div>
    </nav>
  );
};

export default Navbar;
