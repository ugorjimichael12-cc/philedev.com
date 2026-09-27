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
  ChevronRight,
  Code2,
  Database,
  Globe2,
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
   PHILEdev
   The love of development.
   ========================================================= */

/*
  IMPORTANT:
  These files are inside /public directly.
  Therefore they MUST NOT have /assets/ in front of them.
*/
const ASSETS = {
  logo: "/philedev-logo.png",
  founderPortrait: "/founder-portrait.jpg",
  founderFull: "/founder-full.jpg",
};

const WHATSAPP_NUMBER = "2349120770311";
const PHONE_NUMBER = "+234 912 077 0311";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

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
    viewport: { once: true, amount: 0.15 },
    transition,
  };
}

/* =========================================================
   Image component
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
        className={`flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 ${fallbackClassName} ${className}`}
      >
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
            <Code2 size={24} />
          </div>

          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">
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
      "A premium digital experience designed for a modern travel brand with a strong international feel.",
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
      "A refined digital experience translating beauty, calm and premium service into a modern online environment.",
    path: "/work/zoba",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "04",
    title: "DRETA Cares",
    category: "Wellbeing • Platform • Digital",
    description:
      "A digital platform concept created to make support and counselling services easier to approach online.",
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
      "A technology project currently in development, focused on building a purposeful and modern digital solution.",
  },
];

const services = [
  {
    number: "01",
    icon: MonitorSmartphone,
    title: "Digital Experiences",
    description:
      "Websites, landing pages and digital interfaces designed to make brands feel modern, intentional and memorable.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Digital Products",
    description:
      "Web applications and platforms that turn ideas into useful digital products built around real people.",
  },
  {
    number: "03",
    icon: Settings2,
    title: "Intelligent Systems",
    description:
      "Automation, APIs, databases and connected systems that help digital products work beyond the surface.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Digital Growth",
    description:
      "Digital strategy, optimisation and experiences created to help ambitious ideas move further.",
  },
];

const projectDetails: Record<
  string,
  {
    title: string;
    eyebrow: string;
    description: string;
    image: string;
    points: string[];
  }
> = {
  fwl: {
    title: "FWL Travels & Tours",
    eyebrow: "Travel • Digital Experience",
    description:
      "A premium travel experience designed to give FWL Travels & Tours a modern, international digital presence.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2000&q=85",
    points: [
      "Premium travel-focused interface",
      "Responsive experience across devices",
      "Clear destination and experience presentation",
      "Designed as a foundation for future booking functionality",
    ],
  },
  kaycee: {
    title: "Kaycee",
    eyebrow: "Artist • Personal Brand",
    description:
      "A focused artist website designed around personality, visual storytelling and a strong digital first impression.",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=2000&q=85",
    points: [
      "Artist-focused visual identity",
      "Responsive personal brand experience",
      "Strong typography and visual hierarchy",
      "Simple and memorable user journey",
    ],
  },
  zoba: {
    title: "ZOBA ELITE SPA & MORE",
    eyebrow: "Luxury • Beauty • Experience",
    description:
      "A refined digital experience created around luxury, beauty, calm and premium service.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=85",
    points: [
      "Luxury-focused visual direction",
      "Premium service presentation",
      "Mobile-friendly experience",
      "Direct appointment and enquiry pathway",
    ],
  },
  dreta: {
    title: "DRETA Cares",
    eyebrow: "Wellbeing • Platform • Digital",
    description:
      "A digital platform concept created to make support and counselling services easier to approach and experience online.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85",
    points: [
      "Purpose-driven digital platform",
      "Approachable user experience",
      "Clear information architecture",
      "Designed around privacy-conscious interaction",
    ],
  },
};

/* =========================================================
   Scroll
   ========================================================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

/* =========================================================
   Navbar
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
      <div className="mx-auto max-w-[1500px] px-4 pt-4 sm:px-6 lg:px-10">
        <div className="rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 shadow-[0_15px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-5">
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
                    `text-sm font-bold transition ${
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
                className="group inline-flex items-center gap-2 rounded-full bg-blue-700 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
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
                    className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700"
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

function PageTransition({ children }: { children: ReactNode }) {
  const transition: Transition = {
    duration: 0.45,
    ease: "easeOut",
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-[#f2f7ff] to-[#e8f8ff] pt-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full bg-blue-200/50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[550px] w-[550px] rounded-full bg-cyan-200/40 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0e2f93 1px, transparent 1px), linear-gradient(90deg, #0e2f93 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-[1500px] items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-blue-700 shadow-sm backdrop-blur"
          >
            <Sparkles size={14} />
            Web • Software • Digital • Experience
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="text-[clamp(4rem,9vw,9rem)] font-black leading-[0.84] tracking-[-0.075em] text-slate-950"
          >
            THERE'S
            <br />
            MORE
            <br />
            <span className="bg-gradient-to-r from-[#0e2f93] via-blue-600 to-cyan-500 bg-clip-text text-transparent">
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
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-700 px-7 py-4 font-black text-white shadow-xl shadow-blue-700/20 transition hover:-translate-y-1 hover:bg-blue-800"
            >
              START A PROJECT
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-300 bg-white px-7 py-4 font-black text-slate-800 transition hover:-translate-y-1 hover:border-blue-300 hover:text-blue-700"
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
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-blue-300/40 via-transparent to-cyan-300/40 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white p-2 shadow-[0_35px_100px_rgba(30,64,175,0.18)]">
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-100">
              <SmartImage
                src={ASSETS.founderPortrait}
                alt="PHILEdev founder"
                className="aspect-[4/5] w-full object-cover object-center"
                fallbackClassName="aspect-[4/5]"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent p-7 pt-28">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white/70">
                  PHILEdev
                </p>

                <p className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  Built by curiosity.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-xl">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">
              Philosophy
            </p>

            <p className="mt-1 font-black text-blue-700">
              WHAT IF THERE'S MORE?
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-slate-400 sm:flex">
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
        <motion.div
          {...reveal}
          className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"
        >
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-700">
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
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-700">
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
            className="group inline-flex items-center gap-2 font-black text-blue-700"
          >
            View all services
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
                key={service.number}
                {...reveal}
                transition={{
                  duration: 0.7,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                className="group rounded-[2rem] border border-blue-100 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-700/20 sm:p-10 lg:p-12"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-white/15 group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <span className="text-sm font-black text-slate-300 group-hover:text-white/50">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-12 text-2xl font-black text-slate-950 group-hover:text-white sm:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-slate-600 transition group-hover:text-white/75">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-black text-blue-700 transition group-hover:text-white">
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
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-700">
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
            className="inline-flex items-center gap-2 font-black text-blue-700"
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
                className="group block overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.06)] transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-blue-50">
                  <SmartImage
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    fallbackClassName="h-full w-full"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent opacity-70" />

                  <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-black text-slate-800 backdrop-blur">
                    {project.number}
                  </div>

                  <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-700 shadow-lg transition group-hover:rotate-45">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="p-7 sm:p-9">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">
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
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-[#0e2f93] py-28 text-white sm:py-36">
      <div className="absolute -right-48 top-20 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -left-48 bottom-0 h-[400px] w-[400px] rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <motion.div {...reveal} className="mb-14 max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-200">
            04 / Currently Building
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-[-0.05em] sm:text-7xl">
            THE WORK
            <br />
            ISN'T OVER.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Some ideas are already live. Others are still becoming. These are
            the projects currently being shaped inside PHILEdev.
          </p>
        </motion.div>

        <div className="divide-y divide-white/15 border-y border-white/15">
          {ongoingProjects.map((project) => (
            <motion.div
              key={project.title}
              {...reveal}
              className="grid gap-6 py-8 md:grid-cols-[80px_1fr_auto] md:items-center"
            >
              <span className="text-sm font-black text-white/40">
                {project.number}
              </span>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                  {project.category}
                </p>

                <h3 className="mt-2 text-3xl font-black">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-blue-100">
                  {project.description}
                </p>
              </div>

              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-white">
                In Development
              </span>
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
      <div className="mx-auto grid max-w-[1500px] gap-14 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:items-center">
        <motion.div {...reveal} className="relative">
          <div className="absolute -inset-5 rounded-[3rem] bg-blue-200/50 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white bg-white shadow-2xl">
            <SmartImage
              src={ASSETS.founderFull}
              alt="PHILEdev founder"
              className="aspect-[4/5] w-full object-cover"
              fallbackClassName="aspect-[4/5]"
            />
          </div>
        </motion.div>

        <motion.div {...reveal}>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-700">
            05 / The Founder
          </p>

          <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-7xl">
            BUILT BY
            <br />
            CURIOSITY.
            <br />
            <span className="text-blue-700">DRIVEN BY POSSIBILITY.</span>
          </h2>

          <div className="mt-9 max-w-2xl space-y-5 text-lg leading-8 text-slate-600">
            <p>
              PHILEdev was founded by{" "}
              <strong className="text-slate-950">
                Ugoji Michael Chidera
              </strong>
              , driven by a desire to do more, experience more and understand
              more.
            </p>

            <p>
              At the heart of PHILEdev is a love for technology and
              development, and a belief that there is more to the future than
              what already exists.
            </p>

            <p>
              The goal is simple: create digital experiences and systems that
              help people and businesses discover what is possible beyond the
              ordinary.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {["Curiosity", "Technology", "Development", "Possibility"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700"
                >
                  {item}
                </span>
              ),
            )}
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

  const reasons = [
    {
      number: "01",
      title: "Think Beyond the Brief",
      text: "We look beyond what is requested to understand what could actually be possible.",
      icon: Sparkles,
    },
    {
      number: "02",
      title: "Design with Intention",
      text: "Every visual and interaction should have a reason to exist.",
      icon: PenTool,
    },
    {
      number: "03",
      title: "Build for the Future",
      text: "Digital products should be able to evolve as ideas, people and businesses grow.",
      icon: Rocket,
    },
    {
      number: "04",
      title: "Make the Ordinary Uncomfortable",
      text: "We challenge familiar patterns when there is an opportunity to create something more meaningful.",
      icon: Zap,
    },
  ];

  return (
    <section className="bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <motion.div {...reveal} className="max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-700">
            06 / Why PHILEdev
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-[-0.05em] text-slate-950 sm:text-7xl">
            DIFFERENT BY
            <br />
            <span className="text-blue-700">DESIGN.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.number}
                {...reveal}
                className="group rounded-[2rem] border border-slate-200 bg-[#f8fbff] p-8 transition duration-500 hover:border-blue-200 hover:bg-blue-700 hover:text-white sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm transition group-hover:bg-white/15 group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <span className="font-black text-slate-300 group-hover:text-white/40">
                    {reason.number}
                  </span>
                </div>

                <h3 className="mt-12 text-2xl font-black">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 transition group-hover:text-white/75">
                  {reason.text}
                </p>
              </motion.div>
            );
          })}
        </div>
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
    {
      number: "01",
      title: "Discover",
      text: "We understand the idea, audience, problem and opportunity.",
    },
    {
      number: "02",
      title: "Define",
      text: "We turn the opportunity into a clear digital direction.",
    },
    {
      number: "03",
      title: "Design",
      text: "We create the experience, interface and visual language.",
    },
    {
      number: "04",
      title: "Develop",
      text: "We turn the design into a responsive working product.",
    },
    {
      number: "05",
      title: "Deploy",
      text: "We prepare the product for the real world and its next stage.",
    },
  ];

  return (
    <section className="bg-[#eef5ff] py-28 sm:py-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <motion.div {...reveal}>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-700">
            07 / Process
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-[-0.05em] text-slate-950 sm:text-7xl">
            FROM IDEA
            <br />
            TO <span className="text-blue-700">REALITY.</span>
          </h2>
        </motion.div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-blue-100 bg-white">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              {...reveal}
              className={`grid gap-6 p-8 sm:p-10 lg:grid-cols-[100px_280px_1fr] lg:items-center ${
                index !== steps.length - 1
                  ? "border-b border-slate-100"
                  : ""
              }`}
            >
              <span className="text-sm font-black text-blue-700">
                {step.number}
              </span>

              <h3 className="text-3xl font-black text-slate-950">
                {step.title}
              </h3>

              <p className="max-w-2xl leading-7 text-slate-600">
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
   Final CTA
   ========================================================= */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 py-28 text-white sm:py-36">
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <div className="max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-white/70">
            08 / Let's Build
          </p>

          <h2 className="mt-5 text-6xl font-black leading-[0.9] tracking-[-0.06em] sm:text-8xl">
            HAVE SOMETHING
            <br />
            WORTH BUILDING?
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            Tell us what you're imagining. Let's explore what it could become.
          </p>

          <Link
            to="/contact"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-black text-blue-700 shadow-2xl transition hover:-translate-y-1"
          >
            START A PROJECT
            <ArrowUpRight
              size={18}
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
    <footer className="bg-[#071633] py-16 text-white">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <SmartImage
              src={ASSETS.logo}
              alt="PHILEdev"
              className="h-10 w-auto rounded-md object-contain"
              fallbackClassName="h-10 w-28 rounded-lg"
            />

            <p className="mt-5 max-w-md text-lg leading-8 text-blue-100/70">
              The love of development. Building digital experiences,
              products and systems for what comes next.
            </p>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <Link className="text-blue-100/70 hover:text-white" to="/work">
                Work
              </Link>

              <Link
                className="text-blue-100/70 hover:text-white"
                to="/services"
              >
                Services
              </Link>

              <Link className="text-blue-100/70 hover:text-white" to="/about">
                About
              </Link>

              <Link
                className="text-blue-100/70 hover:text-white"
                to="/process"
              >
                Process
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
              Contact
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={`tel:${WHATSAPP_NUMBER}`}
                className="text-blue-100/70 hover:text-white"
              >
                {PHONE_NUMBER}
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-blue-100/70 hover:text-white"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-sm text-blue-100/40 sm:flex-row">
          <p>© {new Date().getFullYear()} PHILEdev. All rights reserved.</p>
          <p>The love of development.</p>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   Home
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
  const reveal = useReveal();

  return (
    <div className="bg-white pt-32">
      <section className="bg-[#f4f8ff] py-24 sm:py-32">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
          <motion.div {...reveal} className="max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-700">
              PHILEdev / Work
            </p>

            <h1 className="mt-5 text-6xl font-black leading-[0.9] tracking-[-0.06em] text-slate-950 sm:text-8xl">
              SELECTED
              <br />
              <span className="text-blue-700">WORK.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              A selection of digital experiences, products and platforms
              created by PHILEdev.
            </p>
          </motion.div>
        </div>
      </section>

      <SelectedWork />
      <OngoingWork />
      <FinalCTA />
    </div>
  );
}

/* =========================================================
   Services page
   ========================================================= */

function ServicesPage() {
  const reveal = useReveal();

  return (
    <div className="bg-white pt-32">
      <section className="bg-[#f4f8ff] py-24 sm:py-32">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
          <motion.div {...reveal} className="max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-700">
              PHILEdev / Services
            </p>

            <h1 className="mt-5 text-6xl font-black leading-[0.9] tracking-[-0.06em] text-slate-950 sm:text-8xl">
              WHAT WE
              <br />
              <span className="text-blue-700">BUILD.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              Digital experiences and technology solutions designed around
              ideas that deserve more.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  {...reveal}
                  className="rounded-[2rem] border border-slate-200 bg-[#f8fbff] p-8 sm:p-12"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white">
                    <Icon size={25} />
                  </div>

                  <p className="mt-10 text-xs font-black uppercase tracking-[0.2em] text-blue-700">
                    {service.number}
                  </p>

                  <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                    {service.title}
                  </h2>

                  <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}

/* =========================================================
   About page
   ========================================================= */

function AboutPage() {
  return (
    <div className="bg-white pt-32">
      <section className="bg-[#f4f8ff] py-24 sm:py-32">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div className="overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl">
              <SmartImage
                src={ASSETS.founderFull}
                alt="PHILEdev founder"
                className="aspect-[4/5] w-full object-cover"
                fallbackClassName="aspect-[4/5]"
              />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-700">
                PHILEdev / About
              </p>

              <h1 className="mt-5 text-6xl font-black leading-[0.9] tracking-[-0.06em] text-slate-950 sm:text-8xl">
                THERE'S
                <br />
                <span className="text-blue-700">MORE.</span>
              </h1>

              <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  PHILEdev comes from a simple idea: a love for development
                  and a belief that there is always more to build.
                </p>

                <p>
                  Founded by Ugoji Michael Chidera, PHILEdev exists to explore
                  the intersection between technology, creativity and
                  possibility.
                </p>

                <p>
                  We build digital experiences, products and systems for
                  people and businesses that believe their ideas can become
                  something greater.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyPhiledev />
      <FinalCTA />
    </div>
  );
}

/* =========================================================
   Process page
   ========================================================= */

function ProcessPage() {
  return (
    <div className="pt-32">
      <Process />
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-700">
            Philosophy
          </p>

          <h2 className="mt-5 text-5xl font-black tracking-[-0.05em] text-slate-950 sm:text-7xl">
            WHAT IF
            <br />
            <span className="text-blue-700">THERE'S MORE?</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Every project begins with curiosity. The process exists to turn
            that curiosity into something real.
          </p>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}

/* =========================================================
   Contact page
   ========================================================= */

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-white pt-32">
      <section className="bg-[#f4f8ff] py-24 sm:py-32">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-700">
                PHILEdev / Contact
              </p>

              <h1 className="mt-5 text-6xl font-black leading-[0.9] tracking-[-0.06em] text-slate-950 sm:text-8xl">
                LET'S
                <br />
                <span className="text-blue-700">BUILD.</span>
              </h1>

              <p className="mt-8 max-w-lg text-lg leading-8 text-slate-600">
                Have an idea, business or project that could become more?
                Tell us about it.
              </p>

              <div className="mt-10 space-y-4">
                <a
                  href={`tel:${WHATSAPP_NUMBER}`}
                  className="flex items-center gap-4 text-lg font-bold text-slate-900 hover:text-blue-700"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <MessageCircle size={19} />
                  </div>

                  {PHONE_NUMBER}
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-black text-blue-700 hover:text-blue-800"
                >
                  Continue on WhatsApp
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_25px_80px_rgba(15,23,42,0.07)] sm:p-10">
              {submitted ? (
                <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <Check size={28} />
                  </div>

                  <h2 className="mt-6 text-3xl font-black text-slate-950">
                    Enquiry prepared.
                  </h2>

                  <p className="mt-4 max-w-md leading-7 text-slate-600">
                    Your project details have been captured on this page.
                    Please continue the conversation through WhatsApp to
                    discuss your project.
                  </p>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 font-black text-white"
                  >
                    Message PHILEdev
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Name" placeholder="Your name" />
                    <Field label="Company" placeholder="Company / Brand" />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field
                      label="Email / WhatsApp"
                      placeholder="How can we reach you?"
                    />

                    <div>
                      <label className="mb-2 block text-sm font-black text-slate-800">
                        Project Type
                      </label>

                      <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white">
                        <option>Website</option>
                        <option>Web Application</option>
                        <option>Digital Product</option>
                        <option>Software</option>
                        <option>UI/UX Design</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Services Required" placeholder="What do you need?" />
                    <Field label="Budget Range" placeholder="Optional" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-black text-slate-800">
                      Timeline
                    </label>

                    <input
                      type="text"
                      placeholder="When would you like to begin?"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-black text-slate-800">
                      Project Description
                    </label>

                    <textarea
                      rows={6}
                      placeholder="Tell us what you're imagining..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-blue-700 px-6 py-4 font-black text-white shadow-xl shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
                  >
                    SEND PROJECT ENQUIRY
                    <Send
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
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
    <div>
      <label className="mb-2 block text-sm font-black text-slate-800">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white"
      />
    </div>
  );
}

/* =========================================================
   Project detail
   ========================================================= */

function ProjectPage({ slug }: { slug: string }) {
  const project = projectDetails[slug];

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="bg-white pt-32">
      <section className="bg-[#f4f8ff] py-20 sm:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-black text-blue-700"
          >
            ← Back to work
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-700">
                {project.eyebrow}
              </p>

              <h1 className="mt-5 text-6xl font-black leading-[0.9] tracking-[-0.06em] text-slate-950 sm:text-8xl">
                {project.title}
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
                {project.description}
              </p>
            </div>

            <div className="overflow-hidden rounded-[2.5rem] border-8 border-white bg-white shadow-2xl">
              <SmartImage
                src={project.image}
                alt={project.title}
                className="aspect-[16/10] w-full object-cover"
                fallbackClassName="aspect-[16/10]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-700">
            The Experience
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
            BUILT WITH
            <br />
            <span className="text-blue-700">INTENTION.</span>
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {project.points.map((point) => (
              <div
                key={point}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-[#f8fbff] p-6"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <Check size={17} />
                </div>

                <p className="font-bold leading-7 text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}

/* =========================================================
   404
   ========================================================= */

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f4f8ff] px-5 pt-24">
      <div className="text-center">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-700">
          404
        </p>

        <h1 className="mt-4 text-6xl font-black text-slate-950">
          Page not found.
        </h1>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-blue-700 px-7 py-4 font-black text-white"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}

/* =========================================================
   App
   ========================================================= */

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen bg-white text-slate-950">
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
                <ProjectPage slug="fwl" />
              </PageTransition>
            }
          />

          <Route
            path="/work/kaycee"
            element={
              <PageTransition>
                <ProjectPage slug="kaycee" />
              </PageTransition>
            }
          />

          <Route
            path="/work/zoba"
            element={
              <PageTransition>
                <ProjectPage slug="zoba" />
              </PageTransition>
            }
          />

          <Route
            path="/work/dreta"
            element={
              <PageTransition>
                <ProjectPage slug="dreta" />
              </PageTransition>
            }
          />

          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
