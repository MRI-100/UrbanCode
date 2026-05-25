import {
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import { Link } from "react-router-dom";
import urbanCodeLogo from "../assets/urbancodelogo2.png";

const phoneNumber = "917896179330";
const whatsappMessage = encodeURIComponent(
  "Hi UrbanCode, I would like to discuss a project."
);
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
const phoneUrl = `tel:+${phoneNumber}`;

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const contactLinks = [
  {
    label: "WhatsApp",
    value: "Start a quick chat",
    href: whatsappUrl,
    icon: MessageCircle,
    external: true,
  },
  {
    label: "Email",
    value: "contact@urbancode.in",
    href: "mailto:contact@urbancode.in",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 78961 79330",
    href: phoneUrl,
    icon: PhoneCall,
  },
  {
    label: "Location",
    value: "Assam, India",
    href: "/contact",
    icon: MapPin,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollToHomeStart = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-24 overflow-hidden bg-[#05070a] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/70 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-cyan-400/10 via-blue-500/5 to-transparent blur-2xl" />
        <div className="absolute left-1/2 top-0 h-40 w-[min(980px,92vw)] -translate-x-1/2 rounded-full bg-cyan-300/[0.08] blur-3xl" />
        <div className="absolute -bottom-28 right-0 h-72 w-72 rounded-full bg-blue-500/[0.08] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),transparent_32%),radial-gradient(circle_at_12%_18%,rgba(34,211,238,0.075),transparent_30%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 lg:pt-20">
        <div className="rounded-[32px] border border-white/[0.08] bg-white/[0.025] p-6 shadow-[0_-24px_90px_rgba(34,211,238,0.06),0_30px_90px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.7fr_1.1fr] lg:gap-16">
            <div className="max-w-md">
              <Link
                to="/"
                className="group inline-flex items-center gap-4"
                onClick={scrollToHomeStart}
              >
                <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-visible">
                  <span className="absolute inset-0 rounded-full bg-cyan-400/[0.16] opacity-70 blur-2xl transition duration-500 group-hover:opacity-100" />
                  <img
                    src={urbanCodeLogo}
                    alt="UrbanCode logo"
                    className="absolute h-20 w-20 max-w-none object-contain drop-shadow-[0_0_18px_rgba(34,211,238,0.3)]"
                  />
                </span>
                <span>
                  <span className="block text-xl font-bold uppercase tracking-[0.22em] text-white">
                    UrbanCode
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.28em] text-cyan-200/80">
                    Infra & Designs
                  </span>
                </span>
              </Link>

              <p className="mt-7 text-sm leading-7 text-slate-400">
                Premium digital products, AI systems, automation workflows, and
                refined interiors shaped with strategy, polish, and dependable
                execution for modern brands.
              </p>
            </div>

            <nav aria-label="Footer navigation">
              <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                Navigation
              </h2>
              <ul className="mt-6 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      onClick={link.href === "/" ? scrollToHomeStart : undefined}
                      className="group inline-flex items-center gap-3 text-sm text-slate-400 transition duration-300 hover:translate-x-1 hover:text-cyan-200"
                    >
                      <span className="h-px w-5 bg-linear-to-r from-cyan-300/0 to-cyan-300/45 transition duration-300 group-hover:w-7 group-hover:to-cyan-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="md:col-span-2 lg:col-span-1">
              <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                Contact
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {contactLinks.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan-200/15 bg-cyan-300/[0.06] text-cyan-200 transition duration-300 group-hover:border-cyan-200/35 group-hover:bg-cyan-300/10">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-slate-200">
                          {item.label}
                        </span>
                        <span className="mt-1 block truncate text-sm text-slate-500 transition duration-300 group-hover:text-slate-300">
                          {item.value}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <li key={item.label}>
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-black/20 p-3 transition duration-300 hover:border-cyan-200/20 hover:bg-white/[0.045]"
                        >
                          {content}
                        </a>
                      ) : item.href.startsWith("/") ? (
                        <Link
                          to={item.href}
                          className="group flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-black/20 p-3 transition duration-300 hover:border-cyan-200/20 hover:bg-white/[0.045]"
                        >
                          {content}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="group flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-black/20 p-3 transition duration-300 hover:border-cyan-200/20 hover:bg-white/[0.045]"
                        >
                          {content}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {currentYear} UrbanCode. All rights reserved.</p>
          <p>
            Designed by{" "}
            <span className="font-medium text-cyan-200">UrbanCode</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
