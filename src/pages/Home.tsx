import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Cpu,
  LayoutDashboard,
  MessageCircle,
  PhoneCall,
  Send,
  Sparkles,
  Zap,
} from "lucide-react";

import heroImage from "../assets/hero.png";

const services = [
  {
    icon: Code2,
    title: "Web & App Development",
    description:
      "Premium websites and apps with polished UI, fast performance, and scalable architecture.",
    points: ["Responsive experiences", "Design-driven engineering"],
  },
  {
    icon: Cpu,
    title: "AI / ML Solutions",
    description:
      "Smart systems that improve support, automate decisions, and unlock better business insights.",
    points: ["AI assistants", "Data-driven systems"],
  },
  {
    icon: Zap,
    title: "Automation",
    description:
      "Workflow automation built to reduce repetitive tasks and make operations easier to manage.",
    points: ["Process optimization", "Reliable integrations"],
  },
  {
    icon: LayoutDashboard,
    title: "Interior Design",
    description:
      "Modern interiors shaped with premium materials, elegant planning, and functional comfort.",
    points: ["Spatial planning", "High-end execution"],
  },
];

const projects = [
  {
    title: "E-commerce Website",
    category: "Web Experience",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
    description:
      "A refined storefront with strong branding, smooth purchase flows, and conversion-focused presentation.",
    tags: ["Premium UI", "Optimized flows", "Brand cohesion"],
  },
  {
    title: "AI Chatbot System",
    category: "AI / ML",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    description:
      "Conversational AI designed to improve response speed, customer engagement, and operational efficiency.",
    tags: ["Smart automation", "Fast integration", "Data insights"],
  },
  {
    title: "Modern Interior Design",
    category: "Interior Design",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    description:
      "Elegant residential and commercial spaces with thoughtful lighting, finishes, and everyday usability.",
    tags: ["Curated finishes", "Spatial flow", "Premium details"],
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-black text-white">

      {/* HERO */}
      <section className="relative flex min-h-screen items-center px-6 py-28 lg:py-36">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-cyan-500/12 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl" />
          <div className="absolute inset-x-0 top-32 h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.04fr_0.96fr]">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-cyan-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Digital product, AI, automation & interiors
              </p>
            </div>

            <h1 className="mt-8 text-5xl font-black leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="text-slate-100 drop-shadow-[0_0_18px_rgba(34,211,238,0.16)]">
                Premium solutions
              </span>
              <br />
              <span className="bg-linear-to-r from-slate-100 via-cyan-300 to-slate-100 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(34,211,238,0.22)]">
                for modern brands
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              UrbanCode helps growth-focused clients launch polished software,
              intelligent automation, AI-powered systems, and premium spaces
              with clarity, speed, and measurable business impact.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.25)] transition duration-300 hover:bg-cyan-400 hover:shadow-[0_0_44px_rgba(34,211,238,0.35)] focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-4 focus:ring-offset-black"
              >
                Start a Project
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>

              <a
                href="/services"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-600 bg-slate-900/50 px-8 py-4 font-semibold text-slate-100 backdrop-blur-sm transition duration-300 hover:border-cyan-400/60 hover:bg-slate-800/70 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/60 focus:ring-offset-4 focus:ring-offset-black"
              >
                View Services
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                ["35+", "Premium launches"],
                ["4.9/5", "Client satisfaction"],
                ["24h", "Fast response"],
              ].map(([metric, label]) => (
                <div
                  key={label}
                  className="rounded-[24px] border border-blue-400/15 bg-white/5 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.2)]"
                >
                  <p className="text-3xl font-semibold text-slate-100">
                    {metric}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[36px] bg-cyan-400/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-blue-400/20 bg-[#111317]/90 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
              <img
                src={heroImage}
                alt="UrbanCode premium workspace"
                className="h-[540px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-black/20 to-black/10" />

              <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/10 bg-black/55 p-5 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                  UrbanCode Studio
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Strategy, design, and execution in one focused process.
                </h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Premium UI systems",
                    "AI and automation",
                    "Modern interiors",
                    "Launch-ready delivery",
                  ].map((item) => (
                    <p
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="relative px-6 py-28">
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/8 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Our Expertise
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-100 md:text-6xl">
                Services built for
                <span className="bg-linear-to-r from-cyan-300 via-blue-300 to-slate-100 bg-clip-text text-transparent">
                  {" "}premium impact
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-400 md:text-right">
              We merge sharp UX, intelligent systems, automation, and spatial
              design to create polished experiences that feel premium and
              perform beautifully.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-[28px] border border-blue-400/15 bg-[#111317]/90 p-7 shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_25px_90px_rgba(0,240,255,0.16)]"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.16),transparent_35%),linear-gradient(135deg,rgba(59,130,246,0.08),transparent_45%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-center justify-between gap-5">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-blue-400 to-cyan-300 text-black shadow-[0_0_30px_rgba(0,240,255,0.18)]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-5xl font-black text-slate-800">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-7 text-2xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-4 min-h-24 text-sm leading-7 text-slate-400">
                      {service.description}
                    </p>

                    <div className="mt-6 space-y-3">
                      {service.points.map((point) => (
                        <p
                          key={point}
                          className="flex items-center gap-3 text-sm text-slate-300"
                        >
                          <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="relative px-6 py-28">
        <div className="absolute left-1/2 top-16 h-96 w-[80vw] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Featured Projects
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-100 md:text-6xl">
              Work that looks premium
              <span className="bg-linear-to-r from-slate-100 via-cyan-300 to-slate-100 bg-clip-text text-transparent">
                {" "}and performs
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              A curated look at digital products and spaces crafted with
              clarity, polish, and practical business value.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-[28px] border border-blue-400/15 bg-[#111317]/90 shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-[0_25px_90px_rgba(0,240,255,0.18)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-black/20 to-black/5" />
                  <span className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/55 px-4 py-2 text-xs uppercase tracking-[0.22em] text-cyan-100 backdrop-blur-xl">
                    {project.category}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-blue-400/20 bg-white/5 px-3 py-1.5 text-xs text-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative px-6 py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              <span className="text-xs uppercase tracking-[0.28em] text-cyan-100">
                UrbanCode Approach
              </span>
            </div>

            <h2 className="mt-7 text-4xl font-black tracking-tight text-slate-100 md:text-6xl">
              A cleaner path from
              <span className="bg-linear-to-r from-cyan-300 via-blue-300 to-slate-100 bg-clip-text text-transparent">
                {" "}idea to launch.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              We combine strategy, design, engineering, automation, and premium
              spatial thinking so your project feels clear from the first
              conversation to final delivery.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Clear scope", "Premium visuals", "Reliable delivery"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-t border-white/10 pt-4 text-sm text-blue-100"
                  >
                    <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.8)]" />
                    {item}
                  </div>
                )
              )}
            </div>

            <a
              href="/about"
              className="mt-10 inline-flex items-center justify-center gap-3 rounded-full border border-cyan-400/50 bg-cyan-500/10 px-8 py-4 font-semibold text-cyan-300 transition duration-300 hover:border-cyan-400 hover:bg-cyan-500/20"
            >
              Learn About Us
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-blue-400/20 bg-[#111317]/90 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            <img
              src={heroImage}
              alt="UrbanCode workspace"
              className="h-[460px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/10 bg-black/55 p-5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                Design-led execution
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Modern brands need more than good visuals. They need a complete
                experience that feels trustworthy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative px-6 py-28">
        <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-cyan-500/10 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="relative overflow-hidden rounded-[32px] border border-blue-400/20 bg-[#111317]/90 p-7 shadow-[0_30px_100px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,rgba(59,130,246,0.08),transparent_45%)]" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                Ready to build
              </p>
              <h2 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
                <span className="text-slate-100">Let's create your next</span>
                <br />
                <span className="bg-linear-to-r from-slate-100 via-cyan-300 to-slate-100 bg-clip-text text-transparent">
                  premium experience.
                </span>
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Talk to our team to launch a product, automate operations, or
                design a stunning physical space with a modern client-grabbing
                edge.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  className="group flex items-center justify-center gap-3 rounded-full bg-cyan-500 px-7 py-4 font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.25)] transition duration-300 hover:bg-cyan-400"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </a>

                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-center justify-center gap-3 rounded-full border border-cyan-400/40 bg-white/5 px-7 py-4 font-semibold text-cyan-300 transition duration-300 hover:bg-cyan-400/10"
                >
                  <PhoneCall className="h-5 w-5" />
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>

          <form className="rounded-[32px] border border-blue-400/20 bg-[#111317]/90 p-7 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                Contact form
              </p>
              <h3 className="mt-4 text-3xl font-bold text-slate-100">
                Send your brief
              </h3>
              <p className="mt-4 max-w-xl leading-7 text-slate-400">
                Share your goals and we will respond with a tailored direction
                that fits your timeline and budget.
              </p>
            </div>

            <div className="mt-8 grid gap-5">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-blue-400/20 bg-black/70 px-5 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
              />

              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-2xl border border-blue-400/20 bg-black/70 px-5 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
              />

              <textarea
                placeholder="Tell us about your project"
                rows={5}
                className="w-full resize-none rounded-2xl border border-blue-400/20 bg-black/70 px-5 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-blue-400 to-cyan-400 px-8 py-4 font-bold text-black shadow-[0_0_34px_rgba(0,240,255,0.22)] transition duration-300 hover:brightness-110"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}
