// export default function Projects() {
//   return <div className="text-white p-10">Projects Page</div>;
// }


import {
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Cpu,
  LayoutDashboard,
  Sparkles,
  Eye,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { MouseEvent } from "react";

const phoneNumber = "917896179330";
const whatsappMessage = encodeURIComponent(
  "Hi UrbanCode, I would like to discuss a project."
);
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
const phoneUrl = `tel:+${phoneNumber}`;

const projects = [
  {
    category: "Web Platform",
    title: "Luxury E-commerce Experience",
    description:
      "A premium online shopping platform focused on smooth customer journeys, refined visuals, and high conversion performance.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Premium UI", "Responsive"],
    icon: Globe,
  },
  {
    category: "AI / Automation",
    title: "AI Customer Assistant",
    description:
      "An intelligent automation system designed to streamline customer interaction and improve response efficiency.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    tags: ["AI", "Automation", "Chatbot"],
    icon: Cpu,
  },
  {
    category: "Interior Design",
    title: "Modern Luxury Living Space",
    description:
      "A sophisticated residential interior combining premium finishes, modern lighting, and functional elegance.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    tags: ["Interior", "Luxury", "Modern"],
    icon: LayoutDashboard,
  },
  {
    category: "Business Automation",
    title: "Workflow Optimization System",
    description:
      "Automation tools built to improve business operations, reduce repetitive work, and increase productivity.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    tags: ["Automation", "Efficiency", "Operations"],
    icon: Sparkles,
  },
];

export default function Projects() {
  const handleViewPortfolioClick = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    document.getElementById("portfolio")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", "#portfolio");
  };

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative px-6 py-28 lg:py-36 overflow-hidden">

        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/12 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl" />
          <div className="absolute inset-x-0 top-32 h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-cyan-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Projects
            </p>
          </div>

          <h1 className="mt-8 text-5xl font-black leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-slate-100 drop-shadow-[0_0_18px_rgba(34,211,238,0.16)]">
              Work crafted with precision
            </span>
            <br />
            <span className="bg-linear-to-r from-slate-100 via-cyan-300 to-slate-100 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(34,211,238,0.22)]">
              and premium impact
            </span>
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-slate-400 text-lg leading-8">
            Explore selected UrbanCode projects across software engineering,
            AI systems, automation, and luxury interior design experiences.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              type="button"
              onClick={handleViewPortfolioClick}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.25)] transition duration-300 hover:bg-cyan-400 hover:shadow-[0_0_44px_rgba(34,211,238,0.35)] focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-4 focus:ring-offset-black"
            >
              <Eye className="h-5 w-5" />
              View Portfolio
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <Link
              to="/contact#project-brief"
              className="group rounded-full border border-slate-600 bg-slate-900/50 px-8 py-4 text-slate-100 font-semibold transition duration-300 hover:border-cyan-400/60 hover:bg-slate-800/70 hover:text-cyan-300 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-cyan-400" />
                Discuss Project
              </span>
            </Link>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            {["Premium UI", "Fast builds", "Business-first"].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 rounded-full border border-blue-400/15 bg-white/5 px-4 py-3 text-sm text-slate-300"
              >
                <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROJECT GRID */}
      <section id="portfolio" className="relative scroll-mt-28 px-6 pb-32">

        <div className="absolute left-1/2 top-20 h-96 w-[80vw] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="relative z-10 mx-auto mb-14 flex max-w-7xl flex-col gap-5 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
              Featured Builds
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-100 md:text-5xl">
              Digital and design work shaped to
              <span className="bg-linear-to-r from-cyan-300 via-blue-300 to-slate-100 bg-clip-text text-transparent">
                {" "}stop the scroll
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-400 md:text-right">
            Each project blends sharp visuals, practical workflows, and
            conversion-focused details for real business momentum.
          </p>

        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid gap-7 lg:grid-cols-2">

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                key={index}
                className="group relative overflow-hidden rounded-[28px] border border-blue-400/15 bg-[#111317]/90 shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-[0_25px_90px_rgba(0,240,255,0.18)]"
              >

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.16),transparent_35%),linear-gradient(135deg,rgba(59,130,246,0.08),transparent_45%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-80 lg:h-[360px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-black/20 to-black/5" />

                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-4 py-2 backdrop-blur-xl">
                    <Icon className="h-4 w-4 text-cyan-400" />
                    <span className="text-xs uppercase tracking-[0.2em] text-blue-100">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl">
                    0{index + 1} / Featured case study
                  </div>

                </div>

                {/* CONTENT */}
                <div className="relative p-7 sm:p-8">

                  <div className="flex items-start justify-between gap-6">

                    <div className="min-w-0">
                      <h2 className="text-2xl font-bold tracking-tight text-slate-100 transition duration-300 group-hover:text-cyan-100 sm:text-3xl">
                        {project.title}
                      </h2>

                      <p className="mt-5 leading-8 text-slate-400">
                        {project.description}
                      </p>
                    </div>

                    <button
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-400/20 bg-white/5 transition duration-300 hover:border-cyan-300 hover:bg-cyan-300/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/60 focus:ring-offset-2 focus:ring-offset-[#111317]"
                      aria-label={`View details for ${project.title}`}
                    >
                      <ArrowUpRight className="h-5 w-5 text-white transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-200" />
                    </button>

                  </div>

                  {/* TAGS */}
                  <div className="mt-8 flex flex-wrap gap-3">

                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-blue-400/20 bg-white/5 px-4 py-2 text-xs font-medium text-blue-100 transition duration-300 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                    <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                      UrbanCode Work
                    </span>

                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300/60 focus:ring-offset-4 focus:ring-offset-[#111317]">
                      View details
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>

                </div>

              </article>
            );
          })}

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="relative px-6 pb-32">

        <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-cyan-500/10 to-transparent" />

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-blue-400/20 bg-[#111317]/90 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(34,211,238,0.22),transparent_28%),radial-gradient(circle_at_88%_0%,rgba(59,130,246,0.2),transparent_30%)]" />

          <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:p-12">

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                <span className="text-xs uppercase tracking-[0.28em] text-cyan-100">
                  Let's build
                </span>
              </div>

              <h2 className="mt-7 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
                <span className="text-slate-100">Ready to turn your idea into</span>
                <br />
                <span className="bg-linear-to-r from-slate-100 via-cyan-300 to-slate-100 bg-clip-text text-transparent">
                  a premium experience?
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                UrbanCode creates digital platforms, AI systems, automation
                tools, and premium interiors designed to look exceptional and
                perform where it matters.
              </p>

              <div className="mt-8 grid gap-4 text-sm text-blue-100 sm:grid-cols-3">
                {["Premium UI", "Fast delivery", "Business-first build"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border-t border-white/10 pt-4"
                    >
                      <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.8)]" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-col justify-between border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                  Start with clarity
                </p>

                <p className="mt-4 text-2xl font-semibold leading-snug text-slate-100">
                  Tell us what you want to build. We will map the right design,
                  tech, and launch path.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4">

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-cyan-500 px-7 py-4 text-sm font-bold text-black shadow-[0_0_30px_rgba(34,211,238,0.25)] transition duration-300 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-4 focus:ring-offset-[#111317]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                  <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={phoneUrl}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-cyan-400/40 bg-white/5 px-7 py-4 text-sm font-semibold text-cyan-300 transition duration-300 hover:bg-cyan-400/10 focus:outline-none focus:ring-2 focus:ring-cyan-300/60 focus:ring-offset-4 focus:ring-offset-[#111317]"
                >
                  Schedule a Call
                  <ArrowUpRight className="h-4 w-4 text-cyan-300" />
                </a>

                <p className="text-center text-xs leading-6 text-slate-500">
                  Quick response, focused consultation, no obligation.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}
