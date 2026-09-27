import {
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
  ChevronRight,
  Code2,
  Layers3,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  PenTool,
  Rocket,
  Send,
  Settings2,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

import { motion, type Transition } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

/* =========================================================
   PHILEdev — GLOBAL CONFIG
========================================================= */

const ASSETS = {
  logo: "/philedev-logo.png",
  founderPortrait: "/founder-portrait.jpg",
  founderFull: "/founder-full.jpg",
};

const WHATSAPP_NUMBER = "2349120770311";
const PHONE_NUMBER = "+234 912 077 0311";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/* =========================================================
   MOTION
========================================================= */

const revealTransition: Transition = {
  duration: 0.7,
  ease: "easeOut",
};

function useReveal() {
  return {
    initial: {
      opacity: 0,
      y: 28,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.15,
    },
    transition: revealTransition,
  };
}

/* =========================================================
   GLOBAL HELPERS
========================================================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
}

function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function SmartImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 ${className}`}
      >
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
            <Sparkles size={22} />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
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
   NAVIGATION
========================================================= */

const navigation = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Process", to: "/process" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto mt-4 w-[calc(100%-2rem)] max-w-7xl">
        <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 shadow-[0_15px_50px_rgba(15,47,147,0.08)] backdrop-blur-xl md:px-5">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center"
          >
            <SmartImage
              src={ASSETS.logo}
              alt="PHILEdev"
              className="h-9 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-blue-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="group flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
            >
              Start a Project
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-900 lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl lg:hidden"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-sm font-semibold ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-between rounded-xl bg-blue-700 px-4 py-3 font-bold text-white"
            >
              Start a Project
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>
        )}
      </div>
    </header>
  );
}

/* =========================================================
   SHARED UI
========================================================= */

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="font-mono text-xs font-bold text-blue-600">
        {number}
      </span>

      <span className="h-px w-8 bg-blue-200" />

      <span className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
        {children}
      </span>
    </div>
  );
}

function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children: ReactNode;
}) {
  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-white px-5 pb-16 pt-36 md:px-8 md:pb-24 md:pt-44">
        <div className="absolute right-[-10rem] top-20 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="absolute left-[-10rem] top-56 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <SectionLabel number="PHILE">{eyebrow}</SectionLabel>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-8xl">
            {title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            {description}
          </p>

          {children}
        </div>
      </section>
    </PageTransition>
  );
}

function ProjectArrow() {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
      <ArrowUpRight size={19} />
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-[#f3f9ff] to-cyan-50 px-5 pb-20 pt-36 md:px-8 md:pt-44">
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(14,47,147,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(14,47,147,0.045) 1px, transparent 1px)",
            backgroundSize: "54px 54px",
          }}
        />
      </div>

      <div className="absolute right-[-12rem] top-20 h-[34rem] w-[34rem] rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute bottom-[-12rem] left-[-8rem] h-[28rem] w-[28rem] rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={revealTransition}
            className="mb-7 flex items-center gap-3"
          >
            <span className="rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-black tracking-[0.18em] text-blue-700 shadow-sm">
              WEB • SOFTWARE • DIGITAL • EXPERIENCE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...revealTransition, delay: 0.08 }}
            className="max-w-5xl text-[4.3rem] font-black leading-[0.88] tracking-[-0.065em] text-slate-950 sm:text-7xl lg:text-[8.2rem]"
          >
            THERE'S
            <br />
            MORE
            <span className="text-blue-600">.</span>
            <br />
            TO BUILD
            <span className="text-cyan-500">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...revealTransition, delay: 0.16 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl"
          >
            PHILEdev is where ideas become digital experiences, products and
            systems built for what comes next.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...revealTransition, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              to="/contact"
              className="group flex items-center justify-center gap-3 rounded-2xl bg-blue-700 px-6 py-4 font-bold text-white shadow-xl shadow-blue-700/20 transition hover:-translate-y-1 hover:bg-blue-800"
            >
              Start a Project
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              to="/work"
              className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 font-bold text-slate-900 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:text-blue-700"
            >
              Explore Our Work
              <ArrowDownRight size={18} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-square max-w-[520px]">
            <div className="absolute inset-8 rounded-[3rem] bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 opacity-20 blur-2xl" />

            <div className="absolute inset-0 rounded-[3rem] border border-blue-100 bg-white/70 shadow-[0_40px_100px_rgba(14,47,147,0.14)] backdrop-blur-sm" />

            <div className="absolute left-8 top-8 rounded-2xl bg-white px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-slate-700">
                  BUILD MODE: ON
                </span>
              </div>
            </div>

            <div className="absolute right-8 top-28 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3">
              <p className="font-mono text-xs text-blue-700">
                POSSIBILITY // 001
              </p>
            </div>

            <div className="absolute inset-16 flex items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-blue-700 to-cyan-500 shadow-2xl">
              <div className="text-center text-white">
                <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white/15 backdrop-blur">
                  <Zap size={48} strokeWidth={1.5} />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-100">
                  PHILEdev
                </p>

                <p className="mt-3 text-2xl font-black tracking-tight">
                  BUILD
                  <br />
                  WHAT'S NEXT.
                </p>
              </div>
            </div>

            <div className="absolute bottom-7 left-7 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl">
              <p className="text-xs font-bold text-slate-500">
                DIGITAL POSSIBILITY
              </p>
              <p className="mt-1 font-mono text-sm text-blue-700">
                ∞ / 01
              </p>
            </div>

            <div className="absolute bottom-8 right-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-xl">
              <Code2 size={25} />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-20 flex max-w-7xl items-center justify-between border-t border-slate-200 pt-5">
        <p className="font-mono text-[10px] font-bold tracking-[0.2em] text-slate-400">
          PHILEDEV / 001
        </p>

        <p className="text-xs font-semibold text-slate-400">
          THE LOVE OF DEVELOPMENT
        </p>
      </div>
    </section>
  );
}

/* =========================================================
   STATEMENT
========================================================= */

function Statement() {
  const reveal = useReveal();

  return (
    <section className="bg-white px-5 py-24 md:px-8 md:py-36">
      <motion.div {...reveal} className="mx-auto max-w-7xl">
        <SectionLabel number="01">The Philosophy</SectionLabel>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 md:text-7xl">
            WE BELIEVE
            <br />
            THERE'S
            <br />
            <span className="text-blue-600">MORE.</span>
          </h2>

          <div>
            <p className="max-w-2xl text-2xl font-semibold leading-relaxed text-slate-700 md:text-3xl">
              More to create. More to experience. More to discover. More to
              build.
            </p>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-500">
              PHILEdev exists for people and organisations who refuse to stop
              at what already exists. We turn ideas, ambitions and possibilities
              into useful digital experiences and technology.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* =========================================================
   SERVICES PREVIEW
========================================================= */

const services = [
  {
    icon: MonitorSmartphone,
    title: "Digital Experiences",
    text: "Websites, landing pages and responsive digital experiences designed to make your brand impossible to overlook.",
  },
  {
    icon: Layers3,
    title: "Digital Products",
    text: "Web applications, software products and interfaces built around real people, real needs and real outcomes.",
  },
  {
    icon: Settings2,
    title: "Intelligent Systems",
    text: "Automation, APIs, databases and connected systems that make digital operations smarter and more efficient.",
  },
  {
    icon: Rocket,
    title: "Digital Growth",
    text: "Digital strategy, SEO, content and technology designed to help ideas reach the people they were created for.",
  },
];

function ServicesPreview() {
  const reveal = useReveal();

  return (
    <section className="bg-[#f2f8ff] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          {...reveal}
          className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <SectionLabel number="02">What We Build</SectionLabel>

            <h2 className="max-w-3xl text-5xl font-black tracking-[-0.05em] text-slate-950 md:text-6xl">
              TECHNOLOGY WITH
              <br />
              <span className="text-blue-600">INTENTION.</span>
            </h2>
          </div>

          <Link
            to="/services"
            className="group flex items-center gap-2 font-bold text-blue-700"
          >
            Explore services
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                {...reveal}
                transition={{
                  ...revealTransition,
                  delay: index * 0.06,
                }}
                className="group rounded-[2rem] border border-blue-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 md:p-9"
              >
                <div className="flex items-start justify-between gap-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <span className="font-mono text-xs text-slate-300">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-black tracking-tight text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-slate-500">
                  {service.text}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-blue-700">
                  Explore capability
                  <ChevronRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
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
   PROJECT DATA
========================================================= */

const completedProjects = [
  {
    slug: "fwl-travels-tours",
    number: "01",
    title: "FWL Travels & Tours",
    category: "Travel • Tourism • Digital Experience",
    description:
      "A premium travel experience designed around discovery, destinations and the future of digital travel.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "kaycee",
    number: "02",
    title: "Kaycee",
    category: "Artist • Personal Brand • Web",
    description:
      "A clean digital presence built to give an artist a focused, memorable and professional online home.",
    image:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "zoba-elite-spa",
    number: "03",
    title: "ZOBA ELITE SPA & MORE",
    category: "Luxury • Beauty • Brand Experience",
    description:
      "A refined digital experience created to communicate luxury, beauty and a premium customer journey.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "dreta-cares",
    number: "04",
    title: "DRETA Cares",
    category: "Social Impact • Counselling • Platform",
    description:
      "An anonymous counselling platform designed around privacy, accessibility and human connection.",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1400&q=85",
  },
];

const ongoingProjects = [
  {
    title: "EduTek",
    description:
      "An education-focused technology project being developed to connect learning with the possibilities of modern digital tools.",
  },
  {
    title: "Onje",
    description:
      "A digital product currently in development, built around a focused experience and a clear product vision.",
  },
  {
    title: "Rektify",
    description:
      "A developing digital solution exploring how technology can simplify problems and create better outcomes.",
  },
];

/* =========================================================
   SELECTED WORK
========================================================= */

function SelectedWork() {
  const reveal = useReveal();

  return (
    <section className="bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          {...reveal}
          className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <SectionLabel number="03">Selected Work</SectionLabel>

            <h2 className="max-w-4xl text-5xl font-black tracking-[-0.05em] text-slate-950 md:text-7xl">
              IDEAS WE'VE
              <br />
              <span className="text-blue-600">BROUGHT TO LIFE.</span>
            </h2>
          </div>

          <Link
            to="/work"
            className="group flex items-center gap-2 font-bold text-blue-700"
          >
            View all work
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {completedProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              {...reveal}
              transition={{
                ...revealTransition,
                delay: index * 0.07,
              }}
            >
              <Link
                to={`/work/${project.slug}`}
                className="group block overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <SmartImage
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-60" />

                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 font-mono text-xs font-bold text-slate-700 backdrop-blur">
                    {project.number}
                  </div>

                  <div className="absolute bottom-5 right-5">
                    <ProjectArrow />
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
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
   ONGOING
========================================================= */

function OngoingWork() {
  const reveal = useReveal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 px-5 py-24 text-white md:px-8 md:py-32">
      <div className="absolute right-[-12rem] top-[-12rem] h-[35rem] w-[35rem] rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div {...reveal}>
          <SectionLabel number="04">
            <span className="text-blue-100">Currently Building</span>
          </SectionLabel>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
                SOME THINGS
                <br />
                ARE STILL
                <br />
                <span className="text-cyan-200">BECOMING.</span>
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-blue-50">
              These projects are actively in development. They are not presented
              as completed products. They represent ideas currently being shaped,
              tested and built.
            </p>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {ongoingProjects.map((project, index) => (
            <motion.div
              key={project.title}
              {...reveal}
              transition={{
                ...revealTransition,
                delay: index * 0.07,
              }}
              className="rounded-[2rem] border border-white/15 bg-white/10 p-7 backdrop-blur-sm"
            >
              <span className="font-mono text-xs text-blue-100">
                IN DEVELOPMENT / 0{index + 1}
              </span>

              <h3 className="mt-8 text-3xl font-black">{project.title}</h3>

              <p className="mt-4 leading-7 text-blue-50/85">
                {project.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-white">
                Currently building
                <span className="h-2 w-2 rounded-full bg-cyan-200" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FOUNDER
========================================================= */

function Founder() {
  const reveal = useReveal();

  return (
    <section className="bg-white px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <motion.div {...reveal} className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-blue-100 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-100">
            <SmartImage
              src={ASSETS.founderPortrait}
              alt="PHILEdev founder portrait"
              className="aspect-[4/5] h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 -right-5 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
              Founder
            </p>
            <p className="mt-1 font-black text-slate-950">
              Ugoji Michael Chidera
            </p>
          </div>
        </motion.div>

        <motion.div {...reveal}>
          <SectionLabel number="05">The Person Behind PHILEdev</SectionLabel>

          <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 md:text-7xl">
            BUILT BY
            <br />
            CURIOSITY.
            <br />
            <span className="text-blue-600">DRIVEN BY POSSIBILITY.</span>
          </h2>

          <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-slate-600">
            <p>
              PHILEdev comes from a simple idea: there is always more to learn,
              more to experience, more to create and more to build.
            </p>

            <p>
              Its founder, Ugoji Michael Chidera, is driven by a deep interest
              in technology and development and by the belief that more people
              can build meaningful things with the opportunities technology
              creates.
            </p>

            <p>
              PHILEdev is an expression of that belief: technology should not
              simply exist. It should create possibility.
            </p>
          </div>

          <div className="mt-9">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 font-bold text-blue-700"
            >
              More about PHILEdev
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   WHY PHILEdev
========================================================= */

const principles = [
  {
    title: "Think Beyond the Brief",
    text: "We don't only ask what needs to be built. We ask what the thing could become.",
  },
  {
    title: "Design with Intention",
    text: "Every interface, interaction and decision should have a reason behind it.",
  },
  {
    title: "Build for the Future",
    text: "Technology changes. We build with adaptability, scalability and possibility in mind.",
  },
  {
    title: "Make the Ordinary Uncomfortable",
    text: "If something has always been done one way, that does not mean it has to stay that way.",
  },
];

function WhyPhiledev() {
  const reveal = useReveal();

  return (
    <section className="bg-[#f5f7fa] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div {...reveal}>
          <SectionLabel number="06">Why PHILEdev</SectionLabel>

          <h2 className="max-w-5xl text-5xl font-black tracking-[-0.05em] text-slate-950 md:text-7xl">
            WE DON'T BUILD
            <br />
            <span className="text-blue-600">FOR THE SAKE OF BUILDING.</span>
          </h2>
        </motion.div>

        <div className="mt-14 divide-y divide-slate-200 border-y border-slate-200">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              {...reveal}
              transition={{
                ...revealTransition,
                delay: index * 0.05,
              }}
              className="grid gap-5 py-8 md:grid-cols-[100px_0.8fr_1fr] md:items-center"
            >
              <span className="font-mono text-sm text-blue-600">
                0{index + 1}
              </span>

              <h3 className="text-2xl font-black tracking-tight text-slate-950">
                {item.title}
              </h3>

              <p className="max-w-xl leading-7 text-slate-500">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Discover",
    text: "We understand the idea, audience, problem, opportunity and desired outcome.",
  },
  {
    number: "02",
    title: "Define",
    text: "We turn the idea into a clear digital direction, structure and project scope.",
  },
  {
    number: "03",
    title: "Design",
    text: "We shape the experience, interface and visual language around the people using it.",
  },
  {
    number: "04",
    title: "Develop",
    text: "We transform the approved direction into a functional digital product.",
  },
  {
    number: "05",
    title: "Deploy",
    text: "We prepare the project for launch and help move it from idea into the real world.",
  },
];

function Process() {
  const reveal = useReveal();

  return (
    <section className="bg-[#f2f8ff] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div {...reveal}>
          <SectionLabel number="07">The Process</SectionLabel>

          <div className="grid gap-8 lg:grid-cols-2">
            <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 md:text-7xl">
              FROM
              <br />
              <span className="text-blue-600">IDEA</span>
              <br />
              TO REALITY.
            </h2>

            <p className="max-w-xl text-lg leading-8 text-slate-600 lg:pt-8">
              A simple process designed to keep ideas moving without losing
              sight of the people, business and purpose behind them.
            </p>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-3 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              {...reveal}
              transition={{
                ...revealTransition,
                delay: index * 0.05,
              }}
              className="rounded-[1.75rem] border border-blue-100 bg-white p-6 shadow-sm"
            >
              <span className="font-mono text-xs font-bold text-blue-600">
                {step.number}
              </span>

              <h3 className="mt-10 text-xl font-black text-slate-950">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FINAL CTA
========================================================= */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 px-5 py-24 text-white md:px-8 md:py-32">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-5xl">
          <p className="mb-6 text-xs font-black uppercase tracking-[0.25em] text-blue-100">
            What are you building?
          </p>

          <h2 className="text-6xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl">
            WHAT IF
            <br />
            THERE'S
            <br />
            MORE?
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-blue-50">
            Tell us what you have in mind. An idea, a business, a problem, a
            product or something that does not exist yet.
          </p>

          <Link
            to="/contact"
            className="group mt-9 inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 font-black text-blue-700 shadow-2xl transition hover:-translate-y-1"
          >
            Let's Build Something
            <ArrowUpRight
              size={19}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="bg-slate-950 px-5 py-14 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.7fr_0.9fr]">
          <div>
            <div className="inline-flex rounded-xl bg-white p-2">
              <SmartImage
                src={ASSETS.logo}
                alt="PHILEdev"
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Technology, digital experiences and software built around the
              belief that there is always more to create.
            </p>

            <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-blue-400">
              The love of development.
            </p>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
              Explore
            </p>

            <div className="mt-5 space-y-3">
              <Link
                to="/work"
                className="block text-sm text-slate-300 transition hover:text-white"
              >
                Work
              </Link>
              <Link
                to="/services"
                className="block text-sm text-slate-300 transition hover:text-white"
              >
                Services
              </Link>
              <Link
                to="/about"
                className="block text-sm text-slate-300 transition hover:text-white"
              >
                About
              </Link>
              <Link
                to="/process"
                className="block text-sm text-slate-300 transition hover:text-white"
              >
                Process
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
              Projects
            </p>

            <div className="mt-5 space-y-3">
              <Link
                to="/work/fwl-travels-tours"
                className="block text-sm text-slate-300 transition hover:text-white"
              >
                FWL Travels & Tours
              </Link>
              <Link
                to="/work/kaycee"
                className="block text-sm text-slate-300 transition hover:text-white"
              >
                Kaycee
              </Link>
              <Link
                to="/work/zoba-elite-spa"
                className="block text-sm text-slate-300 transition hover:text-white"
              >
                ZOBA ELITE SPA
              </Link>
              <Link
                to="/work/dreta-cares"
                className="block text-sm text-slate-300 transition hover:text-white"
              >
                DRETA Cares
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
              Contact
            </p>

            <div className="mt-5 space-y-4">
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className="block text-sm text-slate-300 transition hover:text-white"
              >
                {PHONE_NUMBER}
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-400"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} PHILEdev. All rights reserved.</p>

          <p>Learn. Build. Experience. Evolve.</p>
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
   WORK PAGE
========================================================= */

function WorkPage() {
  return (
    <PageShell
      eyebrow="Selected Work"
      title={
        <>
          BUILT FOR
          <br />
          <span className="text-blue-600">REAL WORLD</span>
          <br />
          POSSIBILITY.
        </>
      }
      description="A collection of digital experiences, products and platforms created by PHILEdev."
    >
      <div className="mt-16 grid gap-7 md:grid-cols-2">
        {completedProjects.map((project) => (
          <Link
            key={project.slug}
            to={`/work/${project.slug}`}
            className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <SmartImage
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />

              <div className="absolute bottom-5 left-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-100">
                  {project.category}
                </p>
                <h2 className="mt-2 text-3xl font-black text-white">
                  {project.title}
                </h2>
              </div>

              <div className="absolute right-5 top-5">
                <ProjectArrow />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-24 rounded-[2.5rem] bg-gradient-to-br from-blue-700 to-cyan-500 p-8 text-white md:p-12">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-100">
          Currently Building
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
          EduTek. Onje. Rektify.
        </h2>

        <p className="mt-5 max-w-2xl leading-8 text-blue-50">
          These are ongoing projects and are intentionally separated from the
          completed portfolio.
        </p>
      </div>
    </PageShell>
  );
}

/* =========================================================
   PROJECT DETAIL
========================================================= */

function ProjectPage() {
  const { pathname } = useLocation();
  const slug = pathname.split("/").filter(Boolean).pop();

  const project = completedProjects.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    return <NotFound />;
  }

  return (
    <PageTransition>
      <section className="bg-white pt-32">
        <div className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-20">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-700"
          >
            <ArrowRight className="rotate-180" size={17} />
            Back to Work
          </Link>

          <div className="mt-12 max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
              {project.category}
            </p>

            <h1 className="mt-5 text-6xl font-black leading-[0.9] tracking-[-0.06em] text-slate-950 md:text-8xl">
              {project.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              {project.description}
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="overflow-hidden rounded-[2.5rem]">
            <SmartImage
              src={project.image}
              alt={project.title}
              className="aspect-[16/8]
