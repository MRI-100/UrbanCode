import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import urbanCodeLogo from "../assets/urbancodelogo2.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-blue-500/10 bg-black/95 shadow-[0_15px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="group inline-flex items-center gap-4 transition hover:opacity-95">
          <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-visible">
            <span className="absolute inset-0 rounded-full bg-cyan-400/20 opacity-70 blur-2xl transition duration-300 group-hover:opacity-100" />
            <img
              src={urbanCodeLogo}
              alt="UrbanCode logo"
              className="absolute h-20 w-20 max-w-none object-contain drop-shadow-[0_0_18px_rgba(34,211,238,0.35)]"
            />
          </span>
          <div className="hidden shrink md:flex flex-col leading-tight">
            <span className="text-xl font-bold uppercase tracking-[0.22em] text-slate-100 drop-shadow-[0_0_14px_rgba(34,211,238,0.18)]">
              UrbanCode
            </span>
            <span className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">
              Infra & Designs
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              className={({ isActive }) =>
                `relative text-sm font-medium uppercase tracking-[0.18em] transition focus-visible:outline-2 focus-visible:outline-cyan-400/60 ${
                  isActive
                    ? "text-cyan-300 drop-shadow-[0_0_14px_rgba(34,211,238,0.35)] after:absolute after:-bottom-2 after:left-1/2 after:h-0.5 after:w-8 after:-translate-x-1/2 after:rounded-full after:bg-cyan-300 after:shadow-[0_0_16px_rgba(34,211,238,0.8)]"
                    : "text-slate-200 hover:text-cyan-300"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.22)] transition hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] focus-visible:outline-2 focus-visible:outline-cyan-300/70"
          >
            Book a Call
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/85 p-2 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-cyan-300/80 md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-blue-500/10 bg-black/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.15em] transition ${
                    isActive
                      ? "border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.12)]"
                      : "text-slate-100 hover:bg-slate-900/80 hover:text-cyan-300"
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
