import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Database,
  Globe2,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  Monitor,
  PenTool,
  Rocket,
  Send,
  Settings2,
  Smartphone,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { motion, type Transition } from "framer-motion";
import {
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

/* =========================================================
   PHILEdev — ASSETS
========================================================= */

const ASSETS = {
  logo: "/philedev-logo.png",
  founderPortrait: "/founder-portrait.jpg",
  founderFull: "/founder-full.jpg",
};

const PHONE = "+234 912 077 0311";
const WHATSAPP = "https://wa.me/2349120770311";

/* =========================================================
   MOTION
========================================================= */

const revealTransition: Transition = {
  duration: 0.7,
  ease: "easeOut",
};

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: revealTransition,
  },
};

/* =========================================================
   DATA
========================================================= */

const completedProjects = [
  {
    slug: "fwl-travels-tours",
    title: "FWL Travels & Tours",
    category: "Travel / Digital Experience",
    description:
      "A premium travel experience designed to make discovery feel effortless, immersive and international.",
    number: "01",
  },
  {
    slug: "kaysleem",
    title: "Kaysleem",
    category: "Artist / Digital Presence",
    description:
      "A modern digital presence built around personality, creativity and a strong visual identity.",
    number: "02",
  },
  {
    slug: "zoba-elite-spa",
    title: "ZOBA ELITE SPA & MORE",
    category: "Beauty / Luxury",
    description:
      "A refined digital experience for a luxury spa brand focused on beauty, wellness and elegance.",
    number: "03",
  },
  {
    slug: "dreta-cares",
    title: "DRETA Cares",
    category: "Social Impact / Platform",
    description:
      "A digital counselling platform designed to create a more accessible and intentional support experience.",
    number: "04",
  },
];

const ongoingProjects = [
  {
    title: "EduTek",
    category: "Education / Technology",
    number: "01",
  },
  {
    title: "Onje",
    category: "Digital Product",
    number: "02",
  },
  {
    title: "Rektify",
    category: "Technology / Platform",
    number: "03",
  },
];

const services = [
  {
    icon: Globe2,
    number: "01",
    title: "Digital Experiences",
    description:
      "Websites and digital experiences that combine strong visual direction, thoughtful UX and modern technology.",
    items: [
      "Business websites",
      "Landing pages",
      "Corporate websites",
      "Portfolio websites",
      "Responsive experiences",
    ],
  },
  {
    icon: Code2,
    number: "02",
    title: "Digital Products",
    description:
      "Purpose-built digital products and applications designed around real users, real problems and real opportunities.",
    items: [
      "Web applications",
      "Software products",
      "Mobile applications",
      "E-commerce platforms",
      "Custom systems",
    ],
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Intelligent Systems",
    description:
      "Technology that connects ideas, information and automation into systems built for efficiency and scale.",
    items: [
      "AI solutions",
      "Automation",
      "API integration",
      "Database systems",
      "Business workflows",
    ],
  },
  {
    icon: Zap,
    number: "04",
    title: "Digital Growth",
    description:
      "Digital tools and strategies that help brands become more visible, useful and competitive.",
    items: [
      "SEO",
      "Digital marketing",
      "Brand experiences",
      "Content systems",
      "Digital optimisation",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand the idea, the problem, the audience and the opportunity before anything gets built.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We turn the raw idea into a clear structure, direction, scope and product strategy.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create the visual and interaction system that gives the product its personality and usability.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "The design becomes a functional digital product using modern development practices.",
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "We take the finished product into the real world and prepare it for continued growth.",
  },
];

/* =========================================================
   SCROLL TO TOP
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

/* =========================================================
   PAGE WRAPPER
========================================================= */

function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "Work", to: "/work" },
    { label: "Services", to: "/services" },
    { label: "About", to: "/about" },
    { label: "Process", to: "/process" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link to="/" className="relative z-50">
          <img
            src={ASSETS.logo}
            alt="PHILEdev"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
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
            className="rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
          >
            Start a Project
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 rounded-xl border border-slate-200 p-2.5 text-slate-800 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-6 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700"
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center rounded-xl bg-blue-700 px-5 py-3.5 font-bold text-white"
            >
              Start a Project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-[10px]">
        {number}
      </span>
      <span>{children}</span>
    </div>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="bg-[#07142f] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_.7fr_.7fr]">
          <div>
            <img
              src={ASSETS.logo}
              alt="PHILEdev"
              className="mb-6 h-12 w-auto rounded-lg bg-white object-contain p-1"
            />

            <p className="max-w-md text-3xl font-semibold leading-tight text-white">
              The love of development.
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              PHILEdev creates digital experiences, products and systems built
              around the possibilities of what comes next.
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
              Explore
            </p>

            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <Link className="hover:text-white" to="/">
                Home
              </Link>
              <Link className="hover:text-white" to="/work">
                Work
              </Link>
              <Link className="hover:text-white" to="/services">
                Services
              </Link>
              <Link className="hover:text-white" to="/about">
                About
              </Link>
              <Link className="hover:text-white" to="/process">
                Process
              </Link>
              <Link className="hover:text-white" to="/contact">
                Start a Project
              </Link>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
              Contact
            </p>

            <div className="space-y-4 text-sm text-slate-300">
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="flex items-start gap-3 hover:text-white"
              >
                <MessageCircle size={17} className="mt-0.5 shrink-0" />
                {PHONE}
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} PHILEdev. All rights reserved.</p>
          <p>Learn. Build. Experience what comes next.</p>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   HOME
========================================================= */

function HomePage() {
  return (
    <PageWrapper>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f3f9ff] to-[#e7f8ff] pt-32">
        <div className="absolute inset-0 opacity-50">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(37,99,235,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.07) 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10 lg:pb-32">
          <div className="max-w-6xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
            >
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                WEB • SOFTWARE • DIGITAL • EXPERIENCE
              </div>

              <h1 className="max-w-6xl text-[clamp(4rem,11vw,9.5rem)] font-black leading-[0.82] tracking-[-0.07em] text-slate-950">
                THERE&apos;S
                <br />
                MORE
                <span className="text-blue-700">.</span>
                <br />
                TO BUILD
                <span className="text-cyan-500">.</span>
              </h1>

              <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                  PHILEdev is where ideas become digital experiences,
                  products and systems built for what comes next.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-3 rounded-full bg-blue-700 px-6 py-4 font-bold text-white shadow-xl shadow-blue-700/20 transition hover:-translate-y-1 hover:bg-blue-800"
                  >
                    Start a Project
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    to="/work"
                    className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-6 py-4 font-bold text-slate-800 transition hover:-translate-y-1 hover:border-blue-300 hover:text-blue-700"
                  >
                    Explore Our Work
                    <ArrowDown size={17} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
            className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]"
          >
            <SectionLabel number="01">The Philosophy</SectionLabel>

            <div>
              <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-7xl">
                WE BELIEVE
                <br />
                THERE&apos;S
                <br />
                <span className="text-blue-700">MORE.</span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
                More to create. More to experience. More to discover. More to
                build. PHILEdev exists for people and organisations who refuse
                to settle for what already exists.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-[#f2f8ff] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionLabel number="02">What We Build</SectionLabel>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-blue-100 bg-blue-100 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={reveal}
                  transition={{
                    ...revealTransition,
                    delay: index * 0.05,
                  }}
                  className="group bg-white p-8 transition hover:bg-blue-700 hover:text-white sm:p-10"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-white/15 group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <span className="text-xs font-bold text-slate-400 group-hover:text-blue-100">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-10 text-3xl font-black tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 group-hover:text-blue-50">
                    {service.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.items.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 group-hover:border-white/20 group-hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionLabel number="03">Selected Work</SectionLabel>

              <h2 className="max-w-3xl text-5xl font-black leading-none tracking-[-0.05em] text-slate-950 sm:text-7xl">
                IDEAS,
                <br />
                <span className="text-blue-700">BUILT.</span>
              </h2>
            </div>

            <Link
              to="/work"
              className="group inline-flex items-center gap-2 font-bold text-blue-700"
            >
              View all work
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-16 divide-y divide-slate-200 border-y border-slate-200">
            {completedProjects.map((project) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className="group grid gap-5 py-8 transition sm:grid-cols-[80px_1fr_auto] sm:items-center"
              >
                <span className="text-sm font-bold text-slate-400">
                  {project.number}
                </span>

                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                    {project.category}
                  </p>

                  <h3 className="text-3xl font-black tracking-tight text-slate-950 transition group-hover:text-blue-700 sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                    {project.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={25}
                  className="text-slate-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-700"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENTLY BUILDING */}
      <section className="overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionLabel number="04">
            <span className="text-blue-100">Currently Building</span>
          </SectionLabel>

          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <h2 className="text-5xl font-black leading-none tracking-[-0.05em] sm:text-7xl">
                STILL
                <br />
                BUILDING.
              </h2>

              <p className="mt-7 max-w-md leading-7 text-blue-50">
                The work does not stop when a project launches. These are some
                of the products currently taking shape inside PHILEdev.
              </p>
            </div>

            <div className="divide-y divide-white/20 border-y border-white/20">
              {ongoingProjects.map((project) => (
                <div
                  key={project.title}
                  className="flex items-center justify-between gap-5 py-7"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-sm font-bold text-blue-100">
                      {project.number}
                    </span>

                    <div>
                      <h3 className="text-2xl font-black">{project.title}</h3>
                      <p className="mt-1 text-sm text-blue-100">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                    In Development
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="overflow-hidden rounded-[2rem] bg-slate-100"
            >
              <img
                src={ASSETS.founderPortrait}
                alt="PHILEdev founder"
                className="aspect-[4/5] w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
            >
              <SectionLabel number="05">The Person Behind PHILEdev</SectionLabel>

              <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-7xl">
                BUILT BY
                <br />
                CURIOSITY.
                <br />
                <span className="text-blue-700">DRIVEN BY</span>
                <br />
                POSSIBILITY.
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
                PHILEdev was founded by{" "}
                <strong className="text-slate-950">
                  Ugorji Michael Chidera
                </strong>
                , driven by a desire to do more, experience more and know more.
              </p>

              <p className="mt-5 max-w-2xl leading-7 text-slate-500">
                In love with technology and development, he believes there is
                more to the future and more that Nigerians can create, build
                and contribute to what comes next.
              </p>

              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 font-bold text-blue-700"
              >
                Discover the story
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-[#f5f7fa] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionLabel number="06">Why PHILEdev</SectionLabel>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-2">
            {[
              [
                "Think Beyond the Brief",
                "We look beyond what is requested to understand what could actually be possible.",
              ],
              [
                "Design with Intention",
                "Every interface, interaction and visual decision should have a reason.",
              ],
              [
                "Build for the Future",
                "Technology changes quickly. What we build should be ready to evolve with it.",
              ],
              [
                "Make the Ordinary Uncomfortable",
                "We challenge predictable digital experiences and search for something more meaningful.",
              ],
            ].map(([title, description], index) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={reveal}
                transition={{
                  ...revealTransition,
                  delay: index * 0.05,
                }}
                className="bg-white p-8 sm:p-10"
              >
                <span className="text-xs font-bold text-blue-700">
                  0{index + 1}
                </span>

                <h3 className="mt-7 text-2xl font-black text-slate-950">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-700">
            A question worth asking
          </p>

          <h2 className="mt-8 text-6xl font-black leading-none tracking-[-0.06em] text-slate-950 sm:text-8xl lg:text-[9rem]">
            WHAT IF
            <br />
            THERE&apos;S
            <br />
            <span className="text-blue-700">MORE?</span>
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-slate-500">
            That question is at the centre of everything we do.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-500 py-24 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
                Have something worth building?
              </p>

              <h2 className="mt-5 max-w-4xl text-5xl font-black leading-none tracking-[-0.05em] sm:text-7xl">
                LET&apos;S BUILD
                <br />
                SOMETHING.
              </h2>
            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-blue-700 shadow-xl transition hover:-translate-y-1"
            >
              Start a Project
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

/* =========================================================
   WORK PAGE
========================================================= */

function WorkPage() {
  return (
    <PageWrapper>
      <section className="bg-[#f2f8ff] pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionLabel number="01">Portfolio</SectionLabel>

          <h1 className="max-w-5xl text-6xl font-black leading-none tracking-[-0.06em] text-slate-950 sm:text-8xl">
            WORK
            <br />
            THAT
            <br />
            <span className="text-blue-700">EXISTS.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            A selection of digital experiences, products and platforms built
            through PHILEdev.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionLabel number="02">Completed Projects</SectionLabel>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {completedProjects.map((project) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className="group grid gap-6 py-10 sm:grid-cols-[100px_1fr_auto] sm:items-center"
              >
                <span className="text-sm font-bold text-slate-400">
                  {project.number}
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                    {project.category}
                  </p>

                  <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 group-hover:text-blue-700 sm:text-5xl">
                    {project.title}
                  </h2>

                  <p className="mt-3 max-w-2xl leading-7 text-slate-500">
                    {project.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={28}
                  className="text-slate-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-700"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fa] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionLabel number="03">Currently Building</SectionLabel>

          <div className="grid gap-5 md:grid-cols-3">
            {ongoingProjects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-slate-200 bg-white p-8"
              >
                <span className="text-xs font-bold text-blue-700">
                  {project.number}
                </span>

                <h2 className="mt-12 text-3xl font-black text-slate-950">
                  {project.title}
                </h2>

                <p className="mt-3 text-sm text-slate-500">
                  {project.category}
                </p>

                <div className="mt-10 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">
                  <span className="h-2 w-2 rounded-full bg-cyan-500" />
                  In Development
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

/* =========================================================
   PROJECT PAGE
========================================================= */

function ProjectPage() {
  const { pathname } = useLocation();
  const slug = pathname.split("/").filter(Boolean).pop();

  const project = completedProjects.find((item) => item.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  const details: Record<
    string,
    {
      intro: string;
      type: string;
      role: string;
      focus: string[];
    }
  > = {
    "fwl-travels-tours": {
      intro:
        "A premium travel and tours digital experience designed around discovery, trust and the excitement of going somewhere new.",
      type: "Travel & Tours",
      role: "Design & Development",
      focus: [
        "Premium travel presentation",
        "Responsive digital experience",
        "Destination-focused structure",
        "Conversion-oriented journey",
      ],
    },
    kaysleem: {
      intro:
        "A modern artist website created to give Kaysleem a distinctive digital home for identity, music and creative expression.",
      type: "Artist Website",
      role: "Design & Development",
      focus: [
        "Artist identity",
        "Responsive experience",
        "Creative presentation",
        "Digital presence",
      ],
    },
    "zoba-elite-spa": {
      intro:
        "A luxury-focused digital experience created for ZOBA ELITE SPA & MORE, bringing beauty, wellness and premium presentation together.",
      type: "Luxury Spa",
      role: "Design & Development",
      focus: [
        "Luxury visual direction",
        "Service presentation",
        "Mobile-first experience",
        "Contact conversion",
      ],
    },
    "dreta-cares": {
      intro:
        "A digital counselling platform created around accessibility, privacy-conscious presentation and a more intentional support experience.",
      type: "Digital Platform",
      role: "Product Design & Development",
      focus: [
        "Accessible interface",
        "Clear user journey",
        "Responsive experience",
        "Support-focused structure",
      ],
    },
  };

  const info = details[project.slug];

  return (
    <PageWrapper>
      <section className="bg-[#f2f8ff] pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Link
            to="/work"
            className="mb-12 inline-flex items-center gap-2 text-sm font-bold text-blue-700"
          >
            <ArrowLeft size={17} />
            Back to Work
          </Link>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
            {project.category}
          </p>

          <h1 className="mt-5 max-w-6xl text-6xl font-black leading-[0.9] tracking-[-0.06em] text-slate-950 sm:text-8xl">
            {project.title}
            <span className="text-blue-700">.</span>
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-8 text-slate-600">
            {info.intro}
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Project Information
              </p>

              <div className="mt-7 space-y-6">
                <div>
                  <p className="text-xs font-bold text-slate-400">TYPE</p>
                  <p className="mt-2 font-bold text-slate-950">{info.type}</p>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400">ROLE</p>
                  <p className="mt-2 font-bold text-slate-950">{info.role}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                Focus
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {info.focus.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">
                      <Check size={14} />
                    </span>

                    <span className="font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fa] py-20">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            More projects
          </p>

          <h2 className="mt-5 text-4xl font-black text-slate-950 sm:text-6xl">
            More is being built.
          </h2>

          <Link
            to="/work"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-700 px-6 py-4 font-bold text-white"
          >
            Explore Work
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}

/* =========================================================
   SERVICES PAGE
========================================================= */

function ServicesPage() {
  return (
    <PageWrapper>
      <section className="bg-[#f2f8ff] pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionLabel number="01">Capabilities</SectionLabel>

          <h1 className="max-w-6xl text-6xl font-black leading-[0.9] tracking-[-0.06em] text-slate-950 sm:text-8xl">
            TECHNOLOGY
            <br />
            WITH
            <br />
            <span className="text-blue-700">INTENTION.</span>
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-slate-600">
            From a first idea to a complete digital product, PHILEdev brings
            strategy, design and development together.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.number}
                  className="rounded-3xl border border-slate-200 p-8 sm:p-10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                      <Icon size={23} />
                    </div>

                    <span className="text-xs font-bold text-slate-400">
                      {service.number}
                    </span>
                  </div>

                  <h2 className="mt-10 text-3xl font-black text-slate-950">
                    {service.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-8 space-y-3">
                    {service.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                      >
                        <Check size={16} className="text-blue-700" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-700 to-cyan-500 py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <h2 className="max-w-4xl text-5xl font-black leading-none tracking-tight sm:text-7xl">
            HAVE AN IDEA?
            <br />
            LET&apos;S SEE WHAT IT CAN BECOME.
          </h2>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-blue-700"
          >
            Start a Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}

/* =========================================================
   ABOUT PAGE
========================================================= */

function AboutPage() {
  return (
    <PageWrapper>
      <section className="bg-[#f2f8ff] pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionLabel number="01">About PHILEdev</SectionLabel>

          <h1 className="max-w-6xl text-6xl font-black leading-[0.9] tracking-[-0.06em] text-slate-950 sm:text-8xl">
            THE LOVE
            <br />
            OF
            <br />
            <span className="text-blue-700">DEVELOPMENT.</span>
          </h1>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-lg leading-8 text-slate-600">
                PHILEdev is a technology and digital development brand built
                around a simple belief: there is always more that can be
                created.
              </p>

              <p className="mt-6 leading-8 text-slate-500">
                We work with people, businesses and organisations who want
                something beyond ordinary. Something useful. Something
                intelligent. Something that can evolve.
              </p>

              <p className="mt-6 leading-8 text-slate-500">
                The name PHILEdev reflects that philosophy. “Phile” represents
                a love or strong affinity, while “dev” represents development.
                Together, PHILEdev represents the love of development.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-slate-100">
              <img
                src={ASSETS.founderFull}
                alt="PHILEdev"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fa] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionLabel number="02">Founder</SectionLabel>

          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
                Ugorji Michael
                <br />
                Chidera
              </h2>

              <p className="mt-3 font-semibold text-blue-700">
                Founder / Developer
              </p>
            </div>

            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-slate-600">
                Driven by the desire to do more, experience more and know more.
              </p>

              <p className="mt-6 leading-8 text-slate-500">
                Michael&apos;s interest in technology and development grew from
                a belief that the future contains more possibilities than what
                we currently see. PHILEdev is an expression of that curiosity:
                building, experimenting and creating digital experiences that
                help turn possibility into something tangible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

/* =========================================================
   PROCESS PAGE
========================================================= */

function ProcessPage() {
  return (
    <PageWrapper>
      <section className="bg-[#f2f8ff] pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionLabel number="01">How We Work</SectionLabel>

          <h1 className="max-w-6xl text-6xl font-black leading-[0.9] tracking-[-0.06em] text-slate-950 sm:text-8xl">
            FROM
            <br />
            <span className="text-blue-700">IDEA</span>
            <br />
            TO
            <br />
            REALITY.
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-8 text-slate-600">
            Every PHILEdev project begins with a question, develops through
            clarity and design, and becomes something real through technology.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="grid gap-7 py-10 lg:grid-cols-[120px_300px_1fr] lg:items-start"
              >
                <span className="text-sm font-bold text-blue-700">
                  {step.number}
                </span>

                <h2 className="text-3xl font-black text-slate-950">
                  {step.title}
                </h2>

                <p className="max-w-2xl leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7fa] py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Sparkles className="mx-auto text-blue-700" size={32} />

          <h2 className="mt-7 text-5xl font-black tracking-tight text-slate-950 sm:text-7xl">
            GOOD PRODUCTS
            <br />
            START WITH
            <br />
            <span className="text-blue-700">GOOD QUESTIONS.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-500">
            Tell us what you are trying to build, improve or bring to life.
            We will start from there.
          </p>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-blue-700 px-7 py-4 font-bold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-1 hover:bg-blue-800"
          >
            Start a Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}

/* =========================================================
   CONTACT / START A PROJECT PAGE
========================================================= */

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.error ||
            "We could not send your enquiry. Please try again."
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (submitError) {
      console.error("PHILEdev enquiry submission error:", submitError);

      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong while sending your enquiry."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <PageWrapper>
        <section className="min-h-[80vh] bg-[#f2f8ff] px-5 pt-36 pb-24 sm:px-8 lg:px-10">
          <div className="mx-auto flex min-h-[65vh] max-w-4xl items-center justify-center">
            <div className="w-full rounded-[2rem] border border-blue-100 bg-white p-8 text-center shadow-xl shadow-blue-900/5 sm:p-14">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                <Check size={38} />
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                Enquiry Received
              </p>

              <h1 className="mt-4 text-5xl font-black leading-none tracking-[-0.05em] text-slate-950 sm:text-7xl">
                LET&apos;S
                <br />
                BUILD.
              </h1>

              <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-slate-600">
                Your project enquiry has been sent successfully. PHILEdev has
                received your information and will review your project details.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-4 font-bold text-white transition hover:bg-blue-800"
                >
                  Back Home
                  <ArrowRight size={18} />
                </Link>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 font-bold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
                >
                  <MessageCircle size={18} />
                  WhatsApp PHILEdev
                </a>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      {/* CONTACT HERO */}
      <section className="bg-[#f2f8ff] pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionLabel number="01">Start a Project</SectionLabel>

          <h1 className="max-w-6xl text-6xl font-black leading-[0.88] tracking-[-0.06em] text-slate-950 sm:text-8xl">
            HAVE
            <br />
            SOMETHING
            <br />
            <span className="text-blue-700">WORTH BUILDING?</span>
          </h1>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Tell PHILEdev what you have in mind. Whether it is an idea,
              business, digital product or something completely new, let&apos;s
              explore what it can become.
            </p>

            <div className="flex flex-col gap-3 text-sm font-semibold text-slate-600">
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="flex items-center gap-3 hover:text-blue-700"
              >
                <MessageCircle size={18} />
                {PHONE}
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-blue-700"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Project Enquiry
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
              LET&apos;S START WITH THE DETAILS.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-slate-500">
              The more context you provide, the better we can understand what
              you want to build.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* PERSONAL INFORMATION */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  Name *
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  Company / Organisation
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company or organisation name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </div>

            {/* CONTACT INFORMATION */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  Email *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="whatsapp"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  WhatsApp / Phone
                </label>

                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="+234..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </div>

            {/* PROJECT INFORMATION */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="projectType"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  Project Type *
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  required
                  defaultValue=""
                  className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                >
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option value="Website">
                    Website
                  </option>
                  <option value="Web Application">
                    Web Application
                  </option>
                  <option value="Mobile Application">
                    Mobile Application
                  </option>
                  <option value="Software / Custom System">
                    Software / Custom System
                  </option>
                  <option value="E-commerce">
                    E-commerce
                  </option>
                  <option value="AI / Automation">
                    AI / Automation
                  </option>
                  <option value="Digital Marketing / SEO">
                    Digital Marketing / SEO
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="services"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  Services Required
                </label>

                <input
                  id="services"
                  name="services"
                  type="text"
                  placeholder="e.g. UI/UX, development, SEO"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </div>

            {/* BUDGET + TIMELINE */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="budget"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  Budget Range
                </label>

                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option value="Below ₦100,000">
                    Below ₦100,000
                  </option>
                  <option value="₦100,000 – ₦250,000">
                    ₦100,000 – ₦250,000
                  </option>
                  <option value="₦250,000 – ₦500,000">
                    ₦250,000 – ₦500,000
                  </option>
                  <option value="₦500,000 – ₦1,000,000">
                    ₦500,000 – ₦1,000,000
                  </option>
                  <option value="₦1,000,000+">
                    ₦1,000,000+
                  </option>
                  <option value="Not sure yet">
                    Not sure yet
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="timeline"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  Desired Timeline
                </label>

                <select
                  id="timeline"
                  name="timeline"
                  defaultValue=""
                  className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                >
                  <option value="" disabled>
                    Select a timeline
                  </option>
                  <option value="As soon as possible">
                    As soon as possible
                  </option>
                  <option value="Within 2 weeks">
                    Within 2 weeks
                  </option>
                  <option value="Within 1 month">
                    Within 1 month
                  </option>
                  <option value="1 – 3 months">
                    1 – 3 months
                  </option>
                  <option value="3+ months">
                    3+ months
                  </option>
                  <option value="No fixed timeline">
                    No fixed timeline
                  </option>
                </select>
              </div>
            </div>

            {/* SOURCE */}
            <div>
              <label
                htmlFor="source"
                className="mb-2 block text-sm font-bold text-slate-800"
              >
                How did you find PHILEdev?
              </label>

              <select
                id="source"
                name="source"
                defaultValue=""
                className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="Google / Search">
                  Google / Search
                </option>
                <option value="WhatsApp">
                  WhatsApp
                </option>
                <option value="Referral">
                  Referral
                </option>
                <option value="Social Media">
                  Social Media
                </option>
                <option value="Portfolio / Website">
                  Portfolio / Website
                </option>
                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            {/* DESCRIPTION */}
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-bold text-slate-800"
              >
                Tell us about the project *
              </label>

              <textarea
                id="description"
                name="description"
                required
                rows={8}
                placeholder="What are you trying to build? What problem should it solve? Tell us as much as you can..."
                className="w-full resize-y rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 leading-7 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            {/* ERROR */}
            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm font-semibold leading-6 text-red-700">
                {error}
              </div>
            )}

            {/* SUBMIT */}
            <div className="flex flex-col gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-xs leading-5 text-slate-400">
                By submitting this form, you are sending your project details
                directly to PHILEdev for review.
              </p>

              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-blue-700 px-7 py-4 font-bold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-1 hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {submitting ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Project Enquiry
                    <Send
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* DIRECT CONTACT */}
      <section className="bg-[#f5f7fa] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] bg-white p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                  Prefer a direct conversation?
                </p>

                <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
                  LET&apos;S TALK.
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-slate-500">
                  You can also reach PHILEdev directly through WhatsApp or
                  phone.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-green-700"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>

                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 font-bold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
                >
                  <MessageCircle size={18} />
                  Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

/* =========================================================
   NOT FOUND
========================================================= */

function NotFound() {
  return (
    <PageWrapper>
      <section className="flex min-h-[80vh] items-center justify-center bg-[#f2f8ff] px-5 pt-24">
        <div className="max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            404
          </p>

          <h1 className="mt-5 text-6xl font-black tracking-[-0.06em] text-slate-950 sm:text-8xl">
            PAGE NOT
            <br />
            FOUND.
          </h1>

          <p className="mx-auto mt-7 max-w-lg leading-7 text-slate-500">
            The page you are looking for does not exist or may have moved.
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-700 px-6 py-4 font-bold text-white transition hover:bg-blue-800"
          >
            <ArrowLeft size={18} />
            Back Home
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}

/* =========================================================
   APP ROUTES
========================================================= */

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
