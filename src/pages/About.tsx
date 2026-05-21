import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "../assets/hero.png";

const phoneNumber = "917896179330";
const whatsappMessage = encodeURIComponent(
  "Hi UrbanCode, I would like to discuss a project."
);
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
const phoneUrl = `tel:+${phoneNumber}`;

const values = [
  {
    icon: Sparkles,
    title: "Premium first impression",
    description:
      "Every screen, space, and interaction is shaped to feel polished, intentional, and easy to trust.",
  },
  {
    icon: Rocket,
    title: "Built for real momentum",
    description:
      "We focus on fast launches, practical workflows, and solutions that support measurable business growth.",
  },
  {
    icon: Users,
    title: "Clear client collaboration",
    description:
      "You get a smooth process with transparent decisions, sharp communication, and fewer confusing handoffs.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable execution",
    description:
      "From first concept to final delivery, we care about detail, consistency, and long-term usability.",
  },
];

const capabilities = [
  "Websites and digital products",
  "AI assistants and automation",
  "Business workflow systems",
  "Premium interiors and spatial design",
];

const process = [
  {
    title: "Understand",
    description:
      "We clarify your goals, audience, budget, timeline, and what success should look like.",
  },
  {
    title: "Shape",
    description:
      "We define the visual direction, user flow, technical plan, and delivery roadmap.",
  },
  {
    title: "Build",
    description:
      "We execute with clean design, dependable engineering, and regular progress check-ins.",
  },
  {
    title: "Launch",
    description:
      "We polish, test, hand over, and help you move forward with confidence after delivery.",
  },
];

export default function About() {
  const handleProcessClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    document.getElementById("process")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", "#process");
  };

  return (
    <div className="overflow-hidden bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative px-6 py-28 lg:py-36">

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute right-0 top-28 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/5 to-cyan-500/5 blur-3xl" />
          <div className="absolute inset-x-0 top-32 h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-cyan-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                About UrbanCode
              </p>
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.92] tracking-tight sm:text-6xl md:text-7xl">
              <span className="text-slate-100 drop-shadow-[0_0_18px_rgba(34,211,238,0.16)]">
                Design-led technology
              </span>
              <br />
              <span className="bg-linear-to-r from-slate-100 via-cyan-300 to-slate-100 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(34,211,238,0.22)]">
                built to look premium
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              UrbanCode creates modern websites, AI systems, automation tools,
              and refined interiors for clients who want clarity, polish, and
              dependable execution from one focused studio.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-500 px-8 py-4 text-sm font-bold text-black shadow-[0_0_30px_rgba(34,211,238,0.25)] transition duration-300 hover:bg-cyan-400 hover:shadow-[0_0_44px_rgba(34,211,238,0.35)] focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-4 focus:ring-offset-black"
              >
                <MessageCircle className="h-5 w-5" />
                Start a Project
                <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href="#process"
                onClick={handleProcessClick}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-600 bg-slate-900/50 px-8 py-4 text-sm font-semibold text-slate-100 backdrop-blur-sm transition duration-300 hover:border-cyan-400/60 hover:bg-slate-800/70 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/60 focus:ring-offset-4 focus:ring-offset-black"
              >
                See Our Process
                <ArrowRight className="h-4 w-4 text-cyan-300" />
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
                  <p className="text-3xl font-semibold text-slate-100">{metric}</p>
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
                alt="UrbanCode studio workspace"
                className="h-[520px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-black/20 to-black/10" />

              <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/10 bg-black/55 p-5 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                  One studio, clear outcome
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Strategy, design, and execution working together.
                </h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {capabilities.map((item) => (
                    <p
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-gray-300"
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

      {/* STORY SECTION */}
      <section className="relative px-6 py-24">

        <div className="absolute left-1/2 top-12 h-96 w-[80vw] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
              What We Do
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-100 md:text-5xl">
              We remove the friction between good ideas and
              <span className="bg-linear-to-r from-cyan-300 via-blue-300 to-slate-100 bg-clip-text text-transparent">
                {" "}premium delivery.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-400">
            <p>
              Clients often come with a big goal but too many moving parts:
              design direction, technology decisions, workflows, content,
              interiors, timelines, and launch pressure. UrbanCode turns that
              complexity into a clear path.
            </p>

            <p>
              Our work combines sharp visuals with practical systems, so the
              final result is not just attractive. It is understandable,
              usable, scalable, and built around the way your business actually
              needs to grow.
            </p>
          </div>

        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                Why Clients Choose Us
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-100 md:text-5xl">
                Professional where it matters,
                <span className="bg-linear-to-r from-cyan-300 via-blue-300 to-slate-100 bg-clip-text text-transparent">
                  {" "}creative where it counts.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-400 md:text-right">
              A cleaner process, stronger presentation, and outcomes designed
              to help your brand feel instantly more credible.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="group relative overflow-hidden rounded-[28px] border border-blue-400/15 bg-[#111317]/90 p-7 shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_25px_90px_rgba(0,240,255,0.16)] sm:p-8"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.16),transparent_35%),linear-gradient(135deg,rgba(59,130,246,0.08),transparent_45%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-300 text-black shadow-[0_0_30px_rgba(0,240,255,0.18)]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-7 text-2xl font-semibold text-slate-100">
                      {value.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-400">
                      {value.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="scroll-mt-28 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
              Process
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-100 md:text-6xl">
              A clear workflow from
              <span className="bg-linear-to-r from-slate-100 via-cyan-300 to-slate-100 bg-clip-text text-transparent">
                {" "}first call to final launch.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              No confusing handoffs or vague next steps. Every stage is built
              to keep decisions simple and progress visible.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-4">
            {process.map((step, index) => (
              <article
                key={step.title}
                className="relative rounded-[28px] border border-blue-400/15 bg-white/5 p-7 shadow-[0_20px_80px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 text-lg font-bold text-black shadow-[0_0_24px_rgba(0,240,255,0.18)]">
                  {index + 1}
                </div>

                <h3 className="mt-7 text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

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
                  Ready to build
                </span>
              </div>

              <h2 className="mt-7 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
                <span className="text-slate-100">Bring us the idea.</span>
                <br />
                <span className="bg-linear-to-r from-slate-100 via-cyan-300 to-slate-100 bg-clip-text text-transparent">
                  We will shape the experience.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Talk to UrbanCode about your next digital product, automation
                system, AI assistant, or premium interior project.
              </p>
            </div>

            <div className="flex flex-col justify-between border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="text-2xl font-semibold leading-snug text-slate-100">
                Get a focused consultation with clear next steps, scope, and
                direction.
              </p>

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

                <p className="text-center text-xs leading-6 text-gray-500">
                  Quick response, practical guidance, no obligation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
