import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data.js";

export default function Navbar({ revealed, reduced }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${revealed ? "is-revealed" : ""}`}>
      <nav className="navbar">
        <button className="logo" onClick={() => go("home")} type="button">
          bagas<span>.</span>dev
        </button>

        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <button onClick={() => go(l.id)} type="button">
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className="menu-btn"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        <ul>
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <button onClick={() => go(l.id)} type="button">
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
