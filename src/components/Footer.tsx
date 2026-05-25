import {
  ArrowRight,
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

  return (
    <footer className="relative overflow-hidden border-t border-cyan-400/10 bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-16 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.75fr_1fr_1.05fr]">
          <div className="max-w-md">
            <Link to="/" className="group inline-flex items-center gap-4">
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-visible">
                <span className="absolute inset-0 rounded-full bg-cyan-400/20 opacity-70 blur-2xl transition duration-300 group-hover:opacity-100" />
                <img
                  src={urbanCodeLogo}
                  alt="UrbanCode logo"
                  className="absolute h-20 w-20 max-w-none object-contain drop-shadow-[0_0_18px_rgba(34,211,238,0.35)]"
                />
              </span>
              <span>
                <span className="block text-xl font-bold uppercase tracking-[0.22em] text-slate-100">
                  UrbanCode
                </span>
                <span className="mt-1 block text-xs uppercase tracking-[0.28em] text-cyan-300/80">
                  Infra & Designs
                </span>
              </span>
            </Link>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              Premium digital products, AI systems, automation workflows, and
              refined interiors built with strategy, polish, and reliable
              execution for modern brands.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-200">
              Quick Links
            </h2>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition duration-300 hover:text-cyan-300"
                  >
                    <span className="h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.26em] text-slate-200">
              Contact
            </h2>
            <ul className="mt-6 space-y-4">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/15 bg-white/5 text-cyan-300 transition duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-300/10">
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
                        className="group flex items-center gap-3"
                      >
                        {content}
                      </a>
                    ) : item.href.startsWith("/") ? (
                      <Link to={item.href} className="group flex items-center gap-3">
                        {content}
                      </Link>
                    ) : (
                      <a href={item.href} className="group flex items-center gap-3">
                        {content}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-blue-400/20 bg-[#111317]/85 p-7 shadow-[0_24px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.18),transparent_35%),linear-gradient(135deg,rgba(59,130,246,0.08),transparent_45%)]" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">
                Ready to Start?
              </p>
              <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-100">
                Let's build something exceptional
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Share your idea and get a clear direction for design,
                development, automation, or interior execution.
              </p>
              <Link
                to="/contact#project-brief"
                className="group mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-blue-400 to-cyan-400 px-6 py-3.5 text-sm font-bold text-black shadow-[0_0_34px_rgba(0,240,255,0.24)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_0_46px_rgba(0,240,255,0.38)] focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-4 focus:ring-offset-[#111317]"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {currentYear} UrbanCode. All rights reserved.</p>
          <p>
            Designed by{" "}
            <span className="font-medium text-cyan-300">UrbanCode</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
