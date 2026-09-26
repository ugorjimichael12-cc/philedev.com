import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Database,
  Globe2,
  Layers3,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  MoveUpRight,
  PenTool,
  Rocket,
  Search,
  Send,
  Settings2,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { motion, type Transition } from "framer-motion";
import { useEffect, useState } from "react";

/* =========================================================
   PHILEdev
   The love of development.
   ========================================================= */

const ASSETS = {
  logo: "/assets/philedev-logo.png",
  founderPortrait: "/assets/founder-portrait.jpg",
  founderFull: "/assets/founder-full.jpg",
};

/* =========================================================
   Shared animation
   ========================================================= */

function useReveal() {
  const transition: Transition = {
    duration: 0.7,
    ease: "easeOut",
  };

  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition,
  };
}

/* =========================================================
   Image fallback
   ========================================================= */

function SmartImage({
  src,
  alt,
  className = "",
  fallbackClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-cyan-100 ${fallbackClassName} ${className}`}
      >
        <div className="text-center px-6">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
            <Code2 size={22} />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            PHILEdev
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

/* =========================================================
   Data
   ========================================================= */

const completedProjects = [
  {
    number: "01",
    title: "FWL Travels & Tours",
    category: "Travel • Experience • Web",
    description:
      "A premium digital experience designed to position a modern travel brand with clarity, confidence and an international feel.",
    path: "/work/fwl",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "02",
    title: "Kaycee",
    category: "Artist • Personal Brand • Web",
    description:
      "A clean artist-focused digital presence built around personality, visual storytelling and a strong first impression.",
    path: "/work/kaycee",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "03",
    title: "ZOBA ELITE SPA & MORE",
    category: "Luxury • Beauty • Experience",
    description:
      "A refined luxury spa experience translating beauty, calm and premium service into a digital environment.",
    path: "/work/zoba",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "04",
    title: "DRETA Cares",
    category: "Wellbeing • Platform • Digital",
    description:
      "A digital platform concept created to make support and counselling services easier to approach and experience online.",
    path: "/work/dreta",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85",
  },
];

const ongoingProjects = [
  {
    number: "01",
    title: "EduTek",
    category: "Education • Technology",
    description:
      "An education-focused technology project currently being developed to explore better ways of connecting learning and digital tools.",
  },
  {
    number: "02",
    title: "Onje",
    category: "Digital Product • Development",
    description:
      "A digital product currently under development, being shaped around usability, accessibility and everyday digital experience.",
  },
  {
    number: "03",
    title: "Rektify",
    category: "Technology • Platform",
    description:
      "A technology project in development focused on building a purposeful and modern digital solution.",
  },
];

const services = [
  {
    icon: MonitorSmartphone,
    number: "01",
    title: "Digital Experiences",
    description:
      "Websites, landing pages and digital interfaces designed to make brands feel modern, intentional and memorable.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Digital Products",
    description:
      "From web applications to platforms, we turn ideas into usable digital products built around real people.",
  },
  {
    icon: Settings2,
    number: "03",
    title: "Intelligent Systems",
    description:
      "Automation, APIs, databases and connected systems that help digital products work beyond the surface.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Digital Growth",
    description:
      "Digital strategy, optimisation and experiences created to help ambitious ideas move further.",
  },
];

/* =========================================================
   Scroll to top
   ========================================================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

/* =========================================================
   Navigation
   ========================================================= */

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Work", to: "/work" },
    { label: "Services", to: "/services" },
    { label: "About", to: "/about" },
    { label: "Process", to: "/process" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-[1500px] px-5 pt-4 sm:px-8 lg:px-10">
        <div className="rounded-2xl border border-white/60 bg-white/85 px-4 py-3 shadow-[0_15px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-5">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex items-center"
            >
              <SmartImage
                src={ASSETS.logo}
                alt="PHILEdev"
                className="h-9 w-auto object-contain sm:h-10"
                fallbackClassName="h-10 w-28 rounded-lg"
              />
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-semibold transition ${
                      isActive
                        ? "text-blue-700"
                        : "text-slate-600 hover:text-blue-700"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-800"
              >
                Start a Project
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </nav>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-900 lg:hidden"
              aria-label="Toggle navigation"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 border-t border-slate-200 pt-4 lg:hidden"
            >
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-slate-100"
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-xl bg-blue-700 px-4 py-3 text-center font-bold text-white"
                >
                  Start a Project
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}

/* =========================================================
   Page transition
   ========================================================= */

function PageTransition({ children }: { children: React.ReactNode }) {
  const transition: Transition = {
    duration: 0.45,
    ease: "easeOut",
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
    >
      {children}
    </motion.main>
  );
}

/* =========================================================
   Hero
   ========================================================= */

function Hero() {
  const transition: Transition = {
    duration: 0.9,
    ease: "easeOut",
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f4f8ff] pt-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-blue-200/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-200/40 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0e2f93 1px, transparent 1px), linear-gradient(90deg, #0e2f93 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-[1500px] items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700 shadow-sm backdrop-blur"
          >
            <Sparkles size={14} />
            Web • Software • Digital • Experience
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="max-w-5xl text-[clamp(4rem,9vw,9rem)] font-black leading-[0.84] tracking-[-0.07em] text-slate-950"
          >
            THERE'S
            <br />
            MORE
            <br />
            <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              TO BUILD.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
          >
            PHILEdev is where ideas become digital experiences, products and
            systems built for what comes next.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-700 px-7 py-4 font-bold text-white shadow-xl shadow-blue-700/20 transition hover:-translate-y-1 hover:bg-blue-800"
            >
              START A PROJECT
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-300 bg-white px-7 py-4 font-bold text-slate-800 transition hover:-translate-y-1 hover:border-blue-300 hover:text-blue-700"
            >
              EXPLORE OUR WORK
              <ArrowDownRight size={18} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-blue-300/30 via-transparent to-cyan-300/30 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white p-2 shadow-[0_35px_100px_rgba(30,64,175,0.18)]">
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-100">
              <SmartImage
                src={ASSETS.founderPortrait}
                alt="PHILEdev founder portrait"
                className="aspect-[4/5] w-full object-cover object-center"
                fallbackClassName="aspect-[4/5]"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent p-7 pt-24">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  PHILEdev
                </p>
                <p className="mt-2 text-2xl font-bold text-white">
                  Built by curiosity.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white bg-white px-5 py-4 shadow-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Philosophy
            </p>
            <p className="mt-1 font-black text-blue-700">
              WHAT IF THERE'S MORE?
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 sm:flex">
        <span>Scroll to explore</span>
        <ArrowDownRight size={15} />
      </div>
    </section>
  );
}

/* =========================================================
   Statement
   ========================================================= */

function Statement() {
  const reveal = useReveal();

  return (
    <section className="bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <motion.div {...reveal} className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
              01 / Philosophy
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-7xl lg:text-8xl">
              WE BELIEVE
              <br />
              THERE'S <span className="text-blue-700">MORE.</span>
            </h2>

            <p className="mt-9 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              More to create. More to experience. More to discover. More to
              build. PHILEdev exists for people and businesses who refuse to
              believe that ordinary is the only option.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   Services preview
   ========================================================= */

function ServicesPreview() {
  const reveal = useReveal();

  return (
    <section className="bg-[#eef5ff] py-28 sm:py-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <motion.div
          {...reveal}
          className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
              02 / Capabilities
            </p>
            <h2 className="mt-4 max-w-3xl text-5xl font-black tracking-[-0.05em] text-slate-950 sm:text-7xl">
              BUILT FOR
              <br />
              WHAT'S NEXT.
            </h2>
          </div>

          <Link
            to="/services"
            className="group inline-flex items-center gap-2 font-bold text-blue-700"
          >
            View all services
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-blue-100 bg-blue-100 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                {...reveal}
                className="group bg-white p-8 transition hover:bg-blue-700 hover:text-white sm:p-10 lg:p-12"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-white/15 group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <span className="text-sm font-bold text-slate-300 group-hover:text-white/50">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-12 text-2xl font-black sm:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-slate-600 transition group-hover:text-white/75">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-blue-700 transition group-hover:text-white">
                  Explore capability
                  <ArrowUpRight size={16} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Selected work
   ========================================================= */

function SelectedWork() {
  const reveal = useReveal();

  return (
    <section className="bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <motion.div
          {...reveal}
          className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
              03 / Selected Work
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-[-0.05em] text-slate-950 sm:text-7xl">
              THINGS
              <br />
              WE'VE BUILT.
            </h2>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-bold text-blue-700"
          >
            See all work
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        <div className="grid gap-7 lg:grid-cols-2">
          {completedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              {...reveal}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
                ease: "easeOut",
              }}
            >
              <Link
                to={project.path}
                className="group block overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.06)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <SmartImage
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    fallbackClassName="h-full w-full"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-70" />

                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-slate-800 backdrop-blur">
                    {project.number}
                  </div>

                  <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-700 shadow-lg transition group-hover:rotate-45">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="p-7 sm:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Ongoing work
   ========================================================= */

function OngoingWork() {
  const reveal = useReveal();

  return (
    <section className="relative overflow-hidden bg-slate-950 py-28 text-white sm:py-36">
      <div className="absolute -right-48 top-20 h-[500px] w-[500px] rounded-full bg-blue-700/20 blur-3xl" />
      <div className="absolute -left-48 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <motion.div
          {...reveal}
          className="mb-14 max-w-4xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
            04 / Currently Building
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-[-0.05em] sm:text-7xl">
            THE WORK
            <br />
            ISN'T OVER.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Some ideas are already live. Others are still becoming. These are
            the projects currently being shaped inside PHILEdev.
          </p>
        </motion.div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {ongoingProjects.map((project) => (
            <motion.div
              key={project.title}
              {...reveal}
              className="group grid gap-6 py-8 md:grid-cols-[80px_1fr_auto] md:items-center"
            >
              <span className="text-sm font-bold text-white/30">
                {project.number}
              </span>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                  {project.category}
                </p>
                <h3 className="mt-2 text-3xl font-black">{project.title}</h3>
                <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                  {project.description}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/60">
                In Development
                <Sparkles size={13} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Founder
   ========================================================= */

function Founder() {
  const reveal = useReveal();

  return (
    <section className="bg-[#f4f8ff] py-28 sm:py-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <motion.div
          {...reveal}
          className="grid items-center gap-14 lg:grid-cols-[.75fr_1.25fr]"
        >
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-blue-200/50 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-2xl">
              <SmartImage
                src={ASSETS.founderFull}
                alt="PHILEdev founder"
                className="aspect-[4/5] w-full object-cover object-top"
                fallbackClassName="aspect-[4/5]"
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
              05 / The Founder
            </p>

            <h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-7xl">
              BUILT BY
              <br />
              CURIOSITY.
              <br />
              <span className="text-blue-700">DRIVEN BY</span>
              <br />
              POSSIBILITY.
            </h2>

            <p className="mt-8 text-2xl font-bold text-slate-900">
              Ugoji Michael Chidera
            </p>

            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
              Founder • PHILEdev
            </p>

            <div className="mt-7 max-w-2xl space-y-5 text-lg leading-8 text-slate-600">
              <p>
                PHILEdev was born from a simple idea: there is always more to
                discover, more to learn and more to build.
              </p>

              <p>
                Driven by a love for technology and development, Michael is
                interested in what happens when creativity, technology and
                possibility meet.
              </p>

              <p>
                PHILEdev is built for people who see that same possibility in
                their ideas and want to turn it into something real.
              </p>
            </div>

            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 font-bold text-blue-700"
            >
              More about PHILEdev
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   Why PHILEdev
   ========================================================= */

function WhyPhiledev() {
  const reveal = useReveal();

  const points = [
    "Think Beyond the Brief",
    "Design with Intention",
    "Build for the Future",
    "Make the Ordinary Uncomfortable",
  ];

  return (
    <section className="bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <motion.div {...reveal}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
            06 / Why PHILEdev
          </p>

          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            {points.map((point, index) => (
              <div
                key={point}
                className="group flex items-center justify-between gap-5 py-7"
              >
                <div className="flex items-center gap-5">
                  <span className="text-xs font-bold text-slate-300">
                    0{index + 1}
                  </span>

                  <h3 className="text-2xl font-black tracking-tight text-slate-950 transition group-hover:text-blue-700 sm:text-4xl">
                    {point}
                  </h3>
                </div>

                <ArrowUpRight
                  size={22}
                  className="shrink-0 text-slate-300 transition group-hover:text-blue-700"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   Process
   ========================================================= */

function Process() {
  const reveal = useReveal();

  const steps = [
    ["01", "Discover", "We understand the idea, the people and the problem."],
    ["02", "Define", "We turn the idea into a clear digital direction."],
    ["03", "Design", "We shape the experience, interface and visual language."],
    ["04", "Develop", "We turn the design into a functional digital product."],
    ["05", "Deploy", "We launch, test and prepare the product for the real world."],
  ];

  return (
    <section className="bg-[#eef5ff] py-28 sm:py-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <motion.div {...reveal} className="mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
            07 / Process
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-[-0.05em] text-slate-950 sm:text-7xl">
            FROM IDEA
            <br />
            TO REALITY.
          </h2>
        </motion.div>

        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-blue-100 bg-blue-100 md:grid-cols-5">
          {steps.map(([number, title, description]) => (
            <motion.div
              key={number}
              {...reveal}
              className="bg-white p-7 sm:p-8"
            >
              <span className="text-sm font-black text-blue-700">{number}</span>

              <h3 className="mt-12 text-2xl font-black text-slate-950">
                {title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CTA
   ========================================================= */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950 py-28 text-white sm:py-36">
      <div className="absolute right-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-[-30%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <div className="max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">
            08 / Start something
          </p>

          <h2 className="mt-5 text-6xl font-black leading-[0.9] tracking-[-0.06em] sm:text-8xl lg:text-9xl">
            HAVE
            <br />
            SOMETHING
            <br />
            WORTH
            <br />
            BUILDING?
          </h2>

          <p className="mt-9 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            Tell us what you're imagining. We will help turn the idea into
            something people can experience.
          </p>

          <Link
            to="/contact"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-black text-blue-800 transition hover:-translate-y-1"
          >
            START A PROJECT
            <ArrowUpRight
              size={19}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Footer
   ========================================================= */

function Footer() {
  return (
    <footer className="bg-slate-950 px-5 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="mb-5 inline-flex rounded-xl bg-white p-2">
              <SmartImage
                src={ASSETS.logo}
                alt="PHILEdev"
                className="h-8 w-auto object-contain"
                fallbackClassName="h-8 w-28 rounded-lg"
              />
            </div>

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              The love of development. Building digital experiences,
              products and systems for what's next.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              <Link className="text-slate-300 hover:text-white" to="/work">
                Work
              </Link>
              <Link
                className="text-slate-300 hover:text-white"
                to="/services"
              >
                Services
              </Link>
              <Link className="text-slate-300 hover:text-white" to="/about">
                About
              </Link>
              <Link
                className="text-slate-300 hover:text-white"
                to="/process"
              >
                Process
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Contact
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              <a
                href="tel:+234912027703101"
                className="text-slate-300 hover:text-white"
              >
                +234 912 027 703 101
              </a>

              <a
                href="https://wa.me/234912027703101"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-white"
              >
                WhatsApp
              </a>

              <Link
                to="/contact"
                className="text-blue-300 hover:text-blue-200"
              >
                Start a project →
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} PHILEdev. All rights reserved.</p>
          <p>Learn. Create. Develop. Evolve.</p>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   HOME
   ========================================================= */

function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <ServicesPreview />
      <SelectedWork />
      <OngoingWork />
      <Founder />
      <WhyPhiledev />
      <Process />
      <FinalCTA />
    </>
  );
}

/* =========================================================
   Work page
   ========================================================= */

function WorkPage() {
  return (
    <PageShell
      eyebrow="Portfolio"
      title={
        <>
          THINGS
          <br />
          WE'VE BUILT.
        </>
      }
      description="A selection of digital experiences and products created by PHILEdev."
    >
      <div className="grid gap-7 lg:grid-cols-2">
        {completedProjects.map((project) => (
          <Link
            key={project.title}
            to={project.path}
            className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="aspect-[16/10] overflow-hidden bg-slate-100">
              <SmartImage
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                fallbackClassName="h-full w-full"
              />
            </div>

            <div className="p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                {project.category}
              </p>
              <h3 className="mt-3 text-3xl font-black text-slate-950">
                {project.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <section className="mt-24 rounded-[2rem] bg-slate-950 p-8 text-white sm:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
          Currently Building
        </p>

        <h2 className="mt-4 text-4xl font-black sm:text-6xl">
          STILL BECOMING.
        </h2>

        <div className="mt-10 divide-y divide-white/10">
          {ongoingProjects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col justify-between gap-5 py-7 sm:flex-row sm:items-center"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  {project.category}
                </p>
                <h3 className="mt-2 text-2xl font-black">{project.title}</h3>
              </div>

              <span className="w-fit rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/60">
                In Development
              </span>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

/* =========================================================
   Services page
   ========================================================= */

function ServicesPage() {
  return (
    <PageShell
      eyebrow="Capabilities"
      title={
        <>
          WE BUILD
          <br />
          DIGITAL.
        </>
      }
      description="Technology, design and digital experiences created around the people who will actually use them."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.number}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon size={22} />
                </div>
                <span className="font-bold text-slate-300">
                  {service.number}
                </span>
              </div>

              <h3 className="mt-12 text-3xl font-black text-slate-950">
                {service.title}
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-slate-600">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </PageShell>
  );
}

/* =========================================================
   About page
   ========================================================= */

function AboutPage() {
  return (
    <PageShell
      eyebrow="About PHILEdev"
      title={
        <>
          THE LOVE
          <br />
          OF
          <br />
          DEVELOPMENT.
        </>
      }
      description="PHILEdev is a technology and digital development brand built around curiosity, creativity and the belief that there is always more possible."
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-2xl">
          <SmartImage
            src={ASSETS.founderFull}
            alt="PHILEdev founder"
            className="aspect-[4/5] w-full object-cover object-top"
            fallbackClassName="aspect-[4/5]"
          />
        </div>

        <div className="space-y-6 text-lg leading-8 text-slate-600">
          <p>
            PHILEdev comes from the idea of loving development: loving the
            process of creating, improving, learning and bringing something
            new into existence.
          </p>

          <p>
            The brand was founded by Ugoji Michael Chidera, driven by a desire
            to do more, experience more and understand more about technology
            and the possibilities it creates.
          </p>

          <p>
            We believe the future is not simply something to wait for. It is
            something people can participate in building.
          </p>

          <div className="rounded-3xl bg-blue-700 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">
              The idea
            </p>
            <p className="mt-3 text-3xl font-black">
              WHAT IF THERE'S MORE?
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

/* =========================================================
   Process page
   ========================================================= */

function ProcessPage() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We learn about the idea, audience, business and problem before deciding what needs to be built.",
    },
    {
      number: "02",
      title: "Define",
      description:
        "We turn the problem into a clear direction, structure and digital strategy.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "We create the visual language, user experience and interface around the people using the product.",
    },
    {
      number: "04",
      title: "Develop",
      description:
        "We transform the approved direction into a functional, responsive digital product.",
    },
    {
      number: "05",
      title: "Deploy",
      description:
        "We test, refine and launch the product, preparing it for real-world use.",
    },
  ];

  return (
    <PageShell
      eyebrow="Our Process"
      title={
        <>
          FROM IDEA
          <br />
          TO
          <br />
          REALITY.
        </>
      }
      description="A structured process keeps creativity focused and technology purposeful."
    >
      <div className="space-y-5">
        {steps.map((step) => (
          <div
            key={step.number}
            className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:grid-cols-[80px_1fr] sm:p-10"
          >
            <span className="text-sm font-black text-blue-700">
              {step.number}
            </span>

            <div>
              <h3 className="text-3xl font-black text-slate-950">
                {step.title}
              </h3>
              <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

/* =========================================================
   Contact page
   ========================================================= */

function ContactPage() {
  return (
    <PageShell
      eyebrow="Start a Project"
      title={
        <>
          LET'S BUILD
          <br />
          SOMETHING.
        </>
      }
      description="Have an idea, business or digital problem worth exploring? Tell PHILEdev about it."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_.7fr]">
        <form className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Name" placeholder="Your name" />
            <Field label="Company" placeholder="Company / brand" />
            <Field label="Email / WhatsApp" placeholder="How can we reach you?" />
            <Field
              label="Project type"
              placeholder="Website, app, platform..."
            />
          </div>

          <div className="mt-6">
            <Field
              label="Services required"
              placeholder="What do you need help building?"
            />
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <Field label="Budget range" placeholder="Your estimated range" />
            <Field label="Timeline" placeholder="When do you want to launch?" />
          </div>

          <div className="mt-6">
            <label className="text-sm font-bold text-slate-900">
              Project description
            </label>
            <textarea
              rows={6}
              placeholder="Tell us what you are imagining..."
              className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <button
            type="button"
            className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-blue-700 px-6 py-4 font-bold text-white transition hover:bg-blue-800"
          >
            SEND PROJECT ENQUIRY
            <Send size={17} />
          </button>
        </form>

        <div className="space-y-5">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white sm:p-10">
            <MessageCircle className="text-cyan-300" size={28} />

            <h3 className="mt-7 text-3xl font-black">
              Prefer a direct conversation?
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Reach PHILEdev directly through WhatsApp and tell us what you
              want to build.
            </p>

            <a
              href="https://wa.me/234912027703101"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-slate-950"
            >
              Chat on WhatsApp
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="rounded-[2rem] border border-blue-100 bg-blue-50 p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              PHILEdev
            </p>

            <p className="mt-4 text-2xl font-black text-slate-950">
              The love of development.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Websites. Digital products. Systems. Experiences.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

/* =========================================================
   Form field
   ========================================================= */

function Field({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-bold text-slate-900">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
      />
    </label>
  );
}

/* =========================================================
   Generic page shell
   ========================================================= */

function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-[#f4f8ff] pb-28 pt-36 sm:pt-44">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <div className="mb-20 max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
            {eyebrow}
          </p>

          <h1 className="mt-5 text-[clamp(4rem,9vw,8rem)] font-black leading-[0.85] tracking-[-0.07em] text-slate-950">
            {title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            {description}
          </p>
        </div>

        {children}
      </div>
    </section>
  );
}

/* =========================================================
   Project pages
   ========================================================= */

function ProjectPage({
  title,
  category,
  description,
  image,
}: {
  title: string;
  category: string;
  description: string;
  image: string;
}) {
  return (
    <PageShell
      eyebrow={category}
      title={
        <>
          {title}
          <br />
          <span className="text-blue-700">PROJECT.</span>
        </>
      }
      description={description}
    >
      <div className="overflow-hidden rounded-[2.5rem] border border-white bg-white p-2 shadow-2xl">
        <SmartImage
          src={image}
          alt={title}
          className="aspect-[16/8] w-full object-cover"
          fallbackClassName="aspect-[16/8]"
        />
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
            Project overview
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-950">
            A digital experience with purpose.
          </h2>
        </div>

        <p className="text-lg leading-8 text-slate-600">
          This project is part of the PHILEdev portfolio. More project details,
          case-study material and supporting content can be added as the brand
          portfolio continues to grow.
        </p>
      </div>
    </PageShell>
  );
}

/* =========================================================
   App
   ========================================================= */

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen overflow-x-hidden bg-white font-sans text-slate-950">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />

          <Route
            path="/work"
            element={
              <PageTransition>
                <WorkPage />
              </PageTransition>
            }
          />

          <Route
            path="/services"
            element={
              <PageTransition>
                <ServicesPage />
              </PageTransition>
            }
          />

          <Route
            path="/about"
            element={
              <PageTransition>
                <AboutPage />
              </PageTransition>
            }
          />

          <Route
            path="/process"
            element={
              <PageTransition>
                <ProcessPage />
              </PageTransition>
            }
          />

          <Route
            path="/contact"
            element={
              <PageTransition>
                <ContactPage />
              </PageTransition>
            }
          />

          <Route
            path="/work/fwl"
            element={
              <PageTransition>
                <ProjectPage
                  title="FWL Travels & Tours"
                  category="Travel • Experience • Web"
                  description="A premium travel experience built around discovery, movement and the excitement of seeing more of the world."
                  image={completedProjects[0].image}
                />
              </PageTransition>
            }
          />

          <Route
            path="/work/kaycee"
            element={
              <PageTransition>
                <ProjectPage
                  title="Kaycee"
                  category="Artist • Personal Brand • Web"
                  description="A clean artist-focused digital presence designed to create a strong and memorable online identity."
                  image={completedProjects[1].image}
                />
              </PageTransition>
            }
          />

          <Route
            path="/work/zoba"
            element={
              <PageTransition>
                <ProjectPage
                  title="ZOBA ELITE SPA & MORE"
                  category="Luxury • Beauty • Experience"
                  description="A luxury digital experience designed around beauty, calm, elegance and premium service."
                  image={completedProjects[2].image}
                />
              </PageTransition>
            }
          />

          <Route
            path="/work/dreta"
            element={
              <PageTransition>
                <ProjectPage
                  title="DRETA Cares"
                  category="Wellbeing • Platform • Digital"
                  description="A digital counselling platform designed to create a more approachable path toward support and connection."
                  image={completedProjects[3].image}
                />
              </PageTransition>
            }
          />

          <Route
            path="*"
            element={
              <PageTransition>
                <PageShell
                  eyebrow="404"
                  title={
                    <>
                      PAGE
                      <br />
                      NOT FOUND.
                    </>
                  }
                  description="The page you are looking for does not exist."
                >
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-4 font-bold text-white"
                  >
                    Back to PHILEdev
                    <ArrowRight size={18} />
                  </Link>
                </PageShell>
              </PageTransition>
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
