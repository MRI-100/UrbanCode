// export default function Services() {
//   return <div className="text-white p-10">Services Page</div>;
// }


import {
  Code2,
  Cpu,
  Zap,
  LayoutDashboard,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { MouseEvent } from "react";

const phoneNumber = "917896179330";
const whatsappMessage = encodeURIComponent(
  "Hi UrbanCode, I would like to discuss a service."
);
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
const phoneUrl = `tel:+${phoneNumber}`;

const services = [
  {
    icon: Code2,
    title: "Web & App Development",
    description:
      "Modern, scalable web platforms and mobile experiences designed for speed, usability, and premium brand presence.",
    features: [
      "Responsive UI/UX systems",
      "Modern frontend architecture",
      "High-performance optimization",
      "Scalable backend integration",
    ],
    tagline: "Scalable digital platforms",
    taglineDescription:
      "We craft responsive, high-performance applications that elevate your brand and engage users seamlessly.",
  },
  {
    icon: Cpu,
    title: "AI / ML Solutions",
    description:
      "Intelligent systems that automate workflows, improve decision-making, and create smarter digital experiences.",
    features: [
      "Predictive analytics",
      "AI automation pipelines",
      "Chatbot integrations",
      "Data-driven systems",
    ],
    tagline: "Intelligent automation",
    taglineDescription:
      "Leverage AI to transform workflows, automate complex processes, and unlock data-driven insights for your business.",
  },
  {
    icon: Zap,
    title: "Automation",
    description:
      "Automation solutions built to reduce repetitive work and streamline business operations efficiently.",
    features: [
      "Workflow automation",
      "Process optimization",
      "Custom integrations",
      "Operational efficiency",
    ],
    tagline: "Efficiency at scale",
    taglineDescription:
      "Eliminate repetitive tasks and streamline operations with custom automation workflows that boost productivity.",
  },
  {
    icon: LayoutDashboard,
    title: "Interior Design",
    description:
      "Premium interiors blending functionality, modern aesthetics, and spatial elegance for homes and commercial spaces.",
    features: [
      "False ceiling design",
      "Furniture & furnishing",
      "Tiles & material selection",
      "Luxury execution planning",
    ],
    tagline: "Spaces redefined",
    taglineDescription:
      "Transform your space with luxury interiors that balance aesthetics, functionality, and architectural excellence.",
  },
];

export default function Services() {
  const handleExploreServicesClick = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    document.getElementById("services-list")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", "#services-list");
  };

  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-28 lg:py-36">
        {/* ANIMATED BACKGROUNDS */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-5 h-96 w-96 rounded-full bg-cyan-500/12 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-blue-600/8 blur-3xl" />
        </div>

        {/* ACCENT LINES */}
        <div className="absolute inset-x-0 top-32 h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* PREMIUM BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 backdrop-blur-sm hover:border-cyan-400/50 transition">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <p className="text-cyan-300 uppercase tracking-[0.25em] text-xs font-semibold">
              Premium Services
            </p>
          </div>

          {/* MAIN HEADLINE */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
              <span className="bg-linear-to-r from-slate-100 via-cyan-300 to-slate-100 bg-clip-text text-transparent">
                Premium solutions
              </span>
              <br />
              <span className="text-slate-100">
                designed for modern brands
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-400 font-semibold">
              and exceptional spaces
            </p>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-2xl mx-auto text-gray-400 text-base sm:text-lg leading-8">
            UrbanCode delivers high-end software engineering, AI systems,
            automation workflows, and sophisticated interior design experiences
            tailored to elevate your brand and workspace.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleExploreServicesClick}
              className="group inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 text-black font-semibold shadow-[0_0_30px_rgba(34,211,238,0.25)] transition hover:bg-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
            >
              Explore Services
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </button>
            <Link
              to="/contact#project-brief"
              className="inline-flex items-center gap-3 rounded-full border border-slate-600 bg-slate-900/50 px-8 py-4 text-slate-100 font-semibold backdrop-blur-sm transition hover:border-cyan-400/60 hover:bg-slate-800/70 hover:text-cyan-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services-list" className="px-6 py-32 relative scroll-mt-28">
        {/* BACKGROUND ACCENT */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-cyan-500/8 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* SECTION HEADER */}
          <div className="mb-20 space-y-4 text-center">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
              Our Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-100">
              Services built for impact
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Each service is crafted with premium execution and strategic thinking
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="space-y-32">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="grid gap-16 lg:grid-cols-2 items-center"
                >
                  {/* LEFT CONTENT */}
                  <div className="space-y-10">
                    {/* ICON + NUMBER */}
                    <div className="flex items-center gap-6">
                      <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-blue-500 to-cyan-400 text-black shadow-[0_0_40px_rgba(34,211,238,0.25)] shrink-0">
                        <Icon className="h-10 w-10" />
                      </div>
                      <span className="text-6xl font-black text-slate-800">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* TITLE + DESCRIPTION */}
                    <div className="space-y-6">
                      <h3 className="text-4xl md:text-5xl font-black tracking-tight text-slate-100 leading-tight">
                        {service.title}
                      </h3>

                      <p className="text-lg text-slate-400 leading-8 max-w-xl">
                        {service.description}
                      </p>
                    </div>

                    {/* FEATURES LIST */}
                    <div className="space-y-3 pt-4">
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">
                        Key Features
                      </p>
                      <div className="grid gap-3">
                        {service.features.map((feature, i) => (
                          <div
                            key={i}
                            className="group flex items-center gap-4 rounded-2xl border border-slate-700/50 bg-slate-900/30 px-5 py-4 backdrop-blur-sm transition hover:border-cyan-400/50 hover:bg-slate-800/50"
                          >
                            <div className="shrink-0">
                              <CheckCircle2 className="h-5 w-5 text-cyan-400 transition group-hover:scale-110" />
                            </div>
                            <span className="text-slate-300 text-base font-medium group-hover:text-slate-100 transition">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA BUTTON */}
                    <div className="pt-6">
                      <button className="group inline-flex items-center gap-3 rounded-full border border-cyan-400/50 bg-cyan-500/10 px-8 py-4 text-base font-semibold text-cyan-300 transition hover:bg-cyan-500/20 hover:border-cyan-400">
                        Explore This Service
                        <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>

                  {/* RIGHT VISUAL - IMAGE PLACEHOLDER */}
                  <div className="relative group">
                    <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-500/20 via-transparent to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500" />

                    <div className="relative overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-900/40 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                      {/* IMAGE PLACEHOLDER */}
                      <div className="aspect-video w-full bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                        {/* ANIMATED BACKGROUND ELEMENTS */}
                        <div className="absolute inset-0 opacity-30">
                          <div className="absolute top-0 left-0 h-40 w-40 rounded-full bg-blue-500/30 blur-2xl animate-pulse" />
                          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-cyan-400/20 blur-2xl" />
                        </div>

                        {/* ICON IN CENTER */}
                        <div className="relative z-10 text-center space-y-4">
                          <div className="inline-flex h-24 w-24 items-center justify-center rounded-2xl bg-slate-800/80 border border-slate-700">
                            <Icon className="h-12 w-12 text-cyan-400 opacity-60" />
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 font-semibold">
                              Service Preview
                            </p>
                            <p className="text-slate-400 text-sm">
                              Premium execution & design
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* INFO CARD */}
                      <div className="border-t border-slate-700/50 bg-linear-to-r from-slate-900/80 to-slate-900/40 p-8 backdrop-blur-sm">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 font-semibold">
                              {service.tagline}
                            </p>
                            <h4 className="text-xl font-bold text-slate-100">
                              {service.title}
                            </h4>
                          </div>
                          <p className="text-slate-400 text-sm leading-6">
                            {service.taglineDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-40 overflow-hidden">
        {/* ENHANCED BACKGROUND ELEMENTS */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-500/12 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-cyan-400/8 blur-3xl animate-bounce" />
          <div className="absolute inset-x-0 top-1/2 h-px bg-linear-to-r from-transparent via-cyan-500/20 to-transparent" />
          {/* Floating particles */}
          <div className="absolute top-20 right-20 h-2 w-2 rounded-full bg-cyan-400/60 animate-ping" />
          <div className="absolute bottom-32 left-16 h-1 w-1 rounded-full bg-blue-400/80 animate-pulse" />
          <div className="absolute top-1/3 right-1/3 h-3 w-3 rounded-full bg-cyan-300/40 animate-bounce" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* MAIN CONTENT */}
          <div className="rounded-3xl border border-slate-700/50 bg-linear-to-br from-slate-900/80 to-slate-900/40 p-12 md:p-16 backdrop-blur-lg shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.8)] transition-all duration-500">

            {/* HEADER */}
            <div className="mb-12 space-y-8 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 backdrop-blur-sm hover:border-cyan-400/50 transition">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 animate-pulse"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <p className="text-cyan-300 uppercase tracking-[0.25em] text-xs font-semibold">
                  Ready to start?
                </p>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
                <span className="text-slate-100">Let's transform your vision into</span>
                <br />
                <span className="bg-linear-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent animate-pulse">
                  premium reality
                </span>
              </h2>

              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-8">
                Partner with UrbanCode to deliver innovative digital solutions, intelligent automation, and stunning interior spaces that elevate your brand and exceed expectations.
              </p>

              {/* TRUST INDICATORS */}
              <div className="flex flex-wrap items-center justify-center gap-8 mt-8 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                  <span>Premium Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                  <span>Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-linear-to-r from-blue-400 to-cyan-400 px-10 py-5 text-black font-bold shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_50px_rgba(0,240,255,0.5)] hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
              </a>

              <a
                href={phoneUrl}
                className="group inline-flex items-center gap-3 rounded-full border-2 border-cyan-400/50 bg-transparent px-10 py-5 text-cyan-300 font-bold hover:bg-cyan-400/10 hover:border-cyan-400 hover:scale-105 transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                Schedule a Call
              </a>
            </div>

            {/* URGENCY NOTE */}
            <p className="text-center text-slate-500 text-sm mt-8">
              Limited slots available • Book now to secure your premium consultation
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
