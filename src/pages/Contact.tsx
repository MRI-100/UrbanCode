import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  Send,
  Sparkles,
} from "lucide-react";
import { useEffect, type MouseEvent } from "react";
import { useLocation } from "react-router-dom";

const whatsappPhoneNumber = "917896179330";
const whatsappMessage = encodeURIComponent(
  "Hi UrbanCode, I would like to discuss a project."
);
const whatsappUrl = `https://wa.me/${whatsappPhoneNumber}?text=${whatsappMessage}`;
const phoneUrl = `tel:+${whatsappPhoneNumber}`;

const contactMethods = [
  {
    icon: MessageCircle,
    title: "Chat on WhatsApp",
    description: "Best for fast project discussions",
    value: "Start a quick chat",
    href: whatsappUrl,
    accent: "cyan",
  },
  {
    icon: PhoneCall,
    title: "Schedule a Call",
    description: "Talk through scope and timeline",
    value: "+91 78961 79330",
    href: phoneUrl,
    accent: "blue",
  },
];

const infoCards = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@urbancode.in",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Assam, India",
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: "Mon - Sat / 9 AM - 8 PM",
  },
];

const serviceOptions = [
  "Web Development",
  "AI / ML Solution",
  "Automation",
  "Interior Design",
  "Not sure yet",
];

export default function Contact() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    window.setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  }, [hash]);

  const handleProjectBriefClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    document.getElementById("project-brief")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", "#project-brief");
  };

  const handleProjectBriefSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = [
      "Hi UrbanCode, I would like to share a project brief.",
      "",
      `Name: ${formData.get("fullName") || ""}`,
      `Email: ${formData.get("email") || ""}`,
      `Phone / WhatsApp: ${formData.get("phone") || ""}`,
      `Service Type: ${formData.get("serviceType") || ""}`,
      `Budget Range: ${formData.get("budgetRange") || ""}`,
      `Timeline: ${formData.get("timeline") || ""}`,
      "",
      `Project Details: ${formData.get("projectDetails") || ""}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="overflow-hidden bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative px-6 py-28 lg:py-36">

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/12 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl" />
          <div className="absolute inset-x-0 top-32 h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-cyan-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Contact UrbanCode
            </p>
          </div>

          <h1 className="mt-8 text-5xl font-black leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="text-slate-100 drop-shadow-[0_0_18px_rgba(34,211,238,0.16)]">
              Let's build your next
            </span>
            <br />
            <span className="bg-linear-to-r from-slate-100 via-cyan-300 to-slate-100 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(34,211,238,0.22)]">
              premium experience
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            Share your idea, timeline, and goals. We will help you choose the
            right path for a digital product, AI system, automation workflow,
            or premium interior project.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#project-brief"
              onClick={handleProjectBriefClick}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.25)] transition duration-300 hover:bg-cyan-400 hover:shadow-[0_0_44px_rgba(34,211,238,0.35)] focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-4 focus:ring-offset-black"
            >
              Send Project Brief
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-600 bg-slate-900/50 px-8 py-4 font-semibold text-slate-100 backdrop-blur-sm transition duration-300 hover:border-cyan-400/60 hover:bg-slate-800/70 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/60 focus:ring-offset-4 focus:ring-offset-black"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>

          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            {["Fast response", "Clear consultation", "Premium execution"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-2 rounded-full border border-blue-400/15 bg-white/5 px-4 py-3 text-sm text-slate-300"
                >
                  <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                  {item}
                </div>
              )
            )}
          </div>

        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="relative px-6 pb-32">

        <div className="absolute left-1/2 top-16 h-96 w-[80vw] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-8 xl:grid-cols-[0.88fr_1.12fr]">

          {/* LEFT SIDE */}
          <div className="space-y-7">

            <div className="relative overflow-hidden rounded-[32px] border border-blue-400/20 bg-[#111317]/90 p-7 shadow-[0_30px_100px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:p-8">

              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,rgba(59,130,246,0.08),transparent_45%)]" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2">
                  <Sparkles className="h-4 w-4 text-cyan-300" />
                  <span className="text-xs uppercase tracking-[0.28em] text-cyan-100">
                    Start with clarity
                  </span>
                </div>

                <h2 className="mt-7 text-4xl font-black tracking-tight md:text-5xl">
                  <span className="text-slate-100">Choose the easiest way</span>
                  <br />
                  <span className="bg-linear-to-r from-cyan-300 via-blue-300 to-slate-100 bg-clip-text text-transparent">
                    to reach our team.
                  </span>
                </h2>

                <p className="mt-6 leading-8 text-slate-400">
                  Whether your idea is fully planned or still rough, we will
                  help turn it into a clear scope, practical roadmap, and
                  polished final experience.
                </p>
              </div>

            </div>

            <div className="grid gap-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                const isCyan = method.accent === "cyan";

                return (
                  <a
                    key={method.title}
                    href={method.href}
                    className={`group flex items-center justify-between rounded-[24px] border p-5 transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/60 focus:ring-offset-4 focus:ring-offset-black ${isCyan
                      ? "border-cyan-400/20 bg-cyan-400/10 hover:border-cyan-300/40 hover:bg-cyan-400/15"
                      : "border-blue-400/20 bg-blue-400/10 hover:border-blue-300/40 hover:bg-blue-400/15"
                      }`}
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <div
                        className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl ${isCyan ? "bg-cyan-400/15" : "bg-blue-400/15"
                          }`}
                      >
                        <Icon
                          className={`h-5 w-5 ${isCyan ? "text-cyan-300" : "text-blue-300"
                            }`}
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="font-semibold text-white">
                          {method.title}
                        </p>
                        <p className="mt-1 text-sm text-slate-400">
                          {method.description}
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-200">
                          {method.value}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight className="h-5 w-5 shrink-0 text-cyan-300 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                );
              })}
            </div>

            <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              {infoCards.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-blue-400/15 bg-white/5 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.24)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10">
                        <Icon className="h-5 w-5 text-cyan-300" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* CONTACT FORM */}
          <form
            id="project-brief"
            onSubmit={handleProjectBriefSubmit}
            className="relative scroll-mt-28 overflow-hidden rounded-[32px] border border-blue-400/20 bg-[#111317]/90 p-7 shadow-[0_40px_120px_rgba(0,240,255,0.08)] backdrop-blur-xl sm:p-10"
          >

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(34,211,238,0.16),transparent_34%)]" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                Project brief
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
                <span className="text-slate-100">Tell us what you want to</span>
                <br />
                <span className="bg-linear-to-r from-slate-100 via-cyan-300 to-slate-100 bg-clip-text text-transparent">
                  build, improve, or launch.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-slate-400">
                A few clear details help us respond with the right direction,
                estimated scope, and next steps.
              </p>

              {/* INPUTS */}
              <div className="mt-10 grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-3 block text-sm font-medium text-slate-300">
                    Full Name
                  </label>

                  <input
                    name="fullName"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full rounded-2xl border border-blue-400/20 bg-black/70 px-5 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-slate-300">
                    Email Address
                  </label>

                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-2xl border border-blue-400/20 bg-black/70 px-5 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-slate-300">
                    Phone / WhatsApp
                  </label>

                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-2xl border border-blue-400/20 bg-black/70 px-5 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-slate-300">
                    Service Type
                  </label>

                  <select
                    name="serviceType"
                    className="w-full rounded-2xl border border-blue-400/20 bg-black/70 px-5 py-4 text-white outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
                  >
                    {serviceOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-slate-300">
                    Budget Range
                  </label>

                  <select
                    name="budgetRange"
                    className="w-full rounded-2xl border border-blue-400/20 bg-black/70 px-5 py-4 text-white outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
                  >
                    <option>Not sure yet</option>
                    <option>Under Rs. 50,000</option>
                    <option>Rs. 50,000 - Rs. 1,50,000</option>
                    <option>Rs. 1,50,000 - Rs. 5,00,000</option>
                    <option>Rs. 5,00,000+</option>
                  </select>
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium text-slate-300">
                    Timeline
                  </label>

                  <select
                    name="timeline"
                    className="w-full rounded-2xl border border-blue-400/20 bg-black/70 px-5 py-4 text-white outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
                  >
                    <option>As soon as possible</option>
                    <option>Within 1 month</option>
                    <option>1 - 3 months</option>
                    <option>Flexible timeline</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-3 block text-sm font-medium text-slate-300">
                    Project Details
                  </label>

                  <textarea
                    name="projectDetails"
                    rows={6}
                    placeholder="Tell us about your goals, audience, required features, design direction, or space requirements..."
                    required
                    className="w-full resize-none rounded-2xl border border-blue-400/20 bg-black/70 px-5 py-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
                  />
                </div>

              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-sm leading-6 text-slate-500">
                  We usually respond within 24 hours with practical next steps.
                </p>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-linear-to-r from-blue-400 to-cyan-400 px-8 py-4 font-bold text-black shadow-[0_0_34px_rgba(0,240,255,0.22)] transition duration-300 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-4 focus:ring-offset-[#111317]"
                >
                  <Send className="h-5 w-5 transition group-hover:translate-x-0.5" />
                  Send Message
                </button>
              </div>
            </div>

          </form>

        </div>

      </section>

    </div>
  );
}
