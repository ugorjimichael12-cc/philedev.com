import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { FormEvent } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Globe2,
  Layers3,
  Menu,
  MessageCircle,
  MoveUpRight,
  Palette,
  Send,
  Sparkles,
  X,
  Zap,
} from 'lucide-react'
import { Link, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom'

type Project = {
  slug: string
  title: string
  category: string
  status: 'completed' | 'development'
  year: string
  description: string
  accent: string
  index: string
}

const completed: Project[] = [
  {
    slug: 'fwl-travels-tours',
    title: 'FWL Travels & Tours',
    category: 'Travel / Digital Experience',
    status: 'completed',
    year: '2026',
    description: 'A premium travel experience built around discovery, movement and a more editorial digital presence.',
    accent: 'blue',
    index: '01',
  },
  {
    slug: 'kaycee',
    title: 'Kaycee',
    category: 'Music / Artist Experience',
    status: 'completed',
    year: '2026',
    description: 'A cinematic artist landing experience designed to give the music a digital world of its own.',
    accent: 'cyan',
    index: '02',
  },
  {
    slug: 'zoba-elite-spa',
    title: 'ZOBA ELITE SPA & MORE',
    category: 'Beauty / Luxury Experience',
    status: 'completed',
    year: '2026',
    description: 'A refined digital presence for a luxury beauty and wellness brand, built around atmosphere and conversion.',
    accent: 'ice',
    index: '03',
  },
  {
    slug: 'dreta-cares',
    title: 'DRETA Cares',
    category: 'Digital / Platform',
    status: 'completed',
    year: '2026',
    description: 'A digital platform created to give care, connection and support a more intentional online experience.',
    accent: 'blue',
    index: '04',
  },
]

const development: Project[] = [
  { slug: 'edutek', title: 'EduTek', category: 'Education / Technology', status: 'development', year: 'In progress', description: 'An education-focused technology product currently being shaped into its next stage.', accent: 'cyan', index: '01' },
  { slug: 'onje', title: 'Onje', category: 'Digital Product', status: 'development', year: 'In progress', description: 'A product concept under active development, with the experience and system still evolving.', accent: 'blue', index: '02' },
  { slug: 'rektify', title: 'Rektify', category: 'Digital Product', status: 'development', year: 'In progress', description: 'An in-development digital product being refined from idea into a functional experience.', accent: 'ice', index: '03' },
]

const allProjects = [...completed, ...development]

const navItems = [
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Process', to: '/process' },
]

function useReveal() {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }
}

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 })
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <div className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Noise />
      <Header open={menuOpen} setOpen={setMenuOpen} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/currently-building" element={<Development />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

function Noise() {
  return <div className="noise" aria-hidden="true" />
}

function Header({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) {
  const location = useLocation()
  return (
    <>
      <header className="header">
        <Link to="/" className="brand" aria-label="PHILEdev home">
          <img src="/assets/philedev-logo.png" alt="PHILEdev" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.to} className={location.pathname.startsWith(item.to) ? 'nav-link active' : 'nav-link'} to={item.to}>{item.label}</Link>
          ))}
        </nav>
        <Link className="header-cta" to="/contact">Start a project <ArrowUpRight size={16} /></Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X /> : <Menu />}
        </button>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="mobile-menu-inner">
              <span className="eyebrow">PHILEdev / navigation</span>
              {[...navItems, { label: 'Contact', to: '/contact' }].map((item, i) => (
                <motion.div key={item.to} initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                  <Link to={item.to} className="mobile-nav-link">{item.label}<ArrowUpRight /></Link>
                </motion.div>
              ))}
              <div className="mobile-menu-foot">The love of development.</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text?: string }) {
  return (
    <section className="page-intro">
      <div className="container intro-grid">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
        </div>
        {text && <p className="intro-copy">{text}</p>}
      </div>
    </section>
  )
}

function Home() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero />
      <Statement />
      <Capabilities />
      <WorkPreview />
      <DevelopmentPreview />
      <Founder />
      <Why />
      <ProcessPreview />
      <Philosophy />
      <ContactCta />
    </motion.main>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" />
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="eyebrow-row">
            <span className="status-dot" />
            <span>Technology / Design / Development</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08, duration: .9, ease: [0.16, 1, .3, 1] }}>
            THERE'S MORE<br /><span>TO BUILD.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .7 }}>
            PHILEdev creates digital experiences, products and intelligent systems for people who believe their ideas can become more.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3, duration: .7 }}>
            <Link to="/contact" className="button button-primary">Start a project <ArrowUpRight size={18} /></Link>
            <Link to="/work" className="button button-ghost">Explore our work <ArrowRight size={18} /></Link>
          </motion.div>
        </div>
        <motion.div className="hero-portrait" initial={{ opacity: 0, scale: .97, x: 30 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ delay: .18, duration: 1, ease: [0.16, 1, .3, 1] }}>
          <div className="portrait-frame">
            <img src="/assets/founder-portrait.jpg" alt="PHILEdev founder portrait" />
            <div className="portrait-caption"><span>FOUNDER / PHILEdev</span><span>01 — 01</span></div>
          </div>
        </motion.div>
      </div>
      <div className="hero-bottom container">
        <div>WEB</div><span>•</span><div>SOFTWARE</div><span>•</span><div>DIGITAL</div><span>•</span><div>EXPERIENCE</div>
        <a href="#statement" aria-label="Scroll down"><ArrowDown size={18} /></a>
      </div>
    </section>
  )
}

function Statement() {
  return (
    <section id="statement" className="statement section">
      <div className="container statement-grid">
        <motion.span className="section-number" {...useReveal()}>01 / 08</motion.span>
        <motion.div {...useReveal()}>
          <span className="eyebrow">The PHILEdev statement</span>
          <h2>WE BELIEVE<br /><em>THERE'S MORE.</em></h2>
          <p className="large-copy">More to create. More to experience. More to discover. More to build.</p>
          <p>Technology should not simply make things possible. It should make better possibilities visible. That is the thinking behind PHILEdev.</p>
        </motion.div>
      </div>
    </section>
  )
}

function Capabilities() {
  const cards = [
    { n: '01', icon: Globe2, title: 'Digital Experiences', items: ['Websites', 'Landing pages', 'UI / UX design', 'Interactive experiences'] },
    { n: '02', icon: Layers3, title: 'Digital Products', items: ['Web applications', 'Software systems', 'Mobile applications', 'E-commerce'] },
    { n: '03', icon: Cpu, title: 'Intelligent Systems', items: ['AI solutions', 'Automation', 'API integrations', 'Database systems'] },
    { n: '04', icon: Palette, title: 'Digital Growth', items: ['Digital strategy', 'SEO', 'Digital marketing', 'Brand & visual design'] },
  ]
  return (
    <section className="section capabilities">
      <div className="container">
        <div className="section-head">
          <div><span className="eyebrow">02 / Capabilities</span><h2>WHAT WE<br /><em>BUILD.</em></h2></div>
          <p>From a sharp landing page to a complete digital product, PHILEdev combines design thinking with engineering to turn ideas into usable experiences.</p>
        </div>
        <div className="cap-grid">
          {cards.map((card) => <motion.article key={card.n} className="cap-card" {...useReveal()}>
            <div className="cap-top"><span>{card.n}</span><card.icon size={21} /></div>
            <h3>{card.title}</h3>
            <ul>{card.items.map((x) => <li key={x}>{x}<ArrowUpRight size={14} /></li>)}</ul>
          </motion.article>)}
        </div>
      </div>
    </section>
  )
}

function WorkPreview() {
  return (
    <section className="section work-section">
      <div className="container">
        <div className="section-head work-head"><div><span className="eyebrow">03 / Selected work</span><h2>MADE<br /><em>REAL.</em></h2></div><Link to="/work" className="text-link">View all work <ArrowUpRight /></Link></div>
        <div className="project-stack">
          {completed.map((project, i) => <ProjectCard key={project.slug} project={project} large={i === 0 || i === 3} />)}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <Link to={`/work/${project.slug}`} className={`project-card ${large ? 'large' : ''}`}>
      <div className={`project-visual ${project.accent}`}>
        <div className="visual-grid" />
        <span className="visual-index">{project.index}</span>
        <div className="visual-word">{project.title.split(' ')[0]}</div>
        <div className="visual-chip">PHILEdev / {project.category.split(' / ')[0]}</div>
        <MoveUpRight className="visual-arrow" size={32} />
      </div>
      <div className="project-meta"><div><span>{project.category}</span><h3>{project.title}</h3></div><span>{project.year}</span></div>
    </Link>
  )
}

function DevelopmentPreview() {
  return (
    <section className="section development-section">
      <div className="container">
        <div className="development-top"><div><span className="eyebrow">04 / In development</span><h2>CURRENTLY<br /><em>BUILDING.</em></h2></div><span className="development-note">Ideas in motion. Products taking shape.</span></div>
        <div className="dev-list">
          {development.map((project) => <Link to="/currently-building" key={project.slug} className="dev-row"><span>{project.index}</span><div><h3>{project.title}</h3><p>{project.category}</p></div><span className="dev-status">IN PROGRESS</span><ArrowUpRight /></Link>)}
        </div>
      </div>
    </section>
  )
}

function Founder() {
  return (
    <section className="section founder-section">
      <div className="container founder-grid">
        <motion.div className="founder-image" {...useReveal()}><img src="/assets/founder-full.jpg" alt="Ugoji Michael Chidera, founder of PHILEdev" /><span className="image-tag">UGOJI MICHAEL CHIDERA / FOUNDER</span></motion.div>
        <motion.div className="founder-copy" {...useReveal()}>
          <span className="eyebrow">05 / The founder</span>
          <h2>BUILT BY<br /><em>CURIOSITY.</em><br />DRIVEN BY<br /><em>POSSIBILITY.</em></h2>
          <p>I have always wanted to do more, experience more and know more. Technology became one of the places where that curiosity could become something tangible.</p>
          <p>PHILEdev was born from a simple belief: there is more to what we can build, and more potential in the future than we often see today.</p>
          <Link to="/about" className="text-link">Meet the founder <ArrowUpRight /></Link>
        </motion.div>
      </div>
    </section>
  )
}

function Why() {
  const principles = [
    ['01', 'Think beyond the brief', 'We do not only ask what needs to be built. We ask what it could become.'],
    ['02', 'Design with intention', 'Every interface, interaction and visual decision should have a reason.'],
    ['03', 'Build for the future', 'Technology changes. The things we build should be capable of changing with it.'],
    ['04', 'Make the ordinary uncomfortable', 'If something can be better, we keep pushing.'],
  ]
  return <section className="section principles-section"><div className="container"><div className="section-head"><div><span className="eyebrow">06 / Why PHILEdev</span><h2>NOT JUST<br /><em>CODE.</em></h2></div></div><div className="principles">{principles.map(([n, t, d]) => <motion.div className="principle" key={n} {...useReveal()}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></motion.div>)}</div></div></section>
}

function ProcessPreview() {
  return <section className="section process-section"><div className="container"><div className="section-head"><div><span className="eyebrow">07 / The process</span><h2>FROM IDEA<br /><em>→ REALITY.</em></h2></div><Link to="/process" className="text-link">See our process <ArrowUpRight /></Link></div><div className="process-line">{[['01', 'Discover'], ['02', 'Define'], ['03', 'Design'], ['04', 'Develop'], ['05', 'Deploy']].map(([n, t]) => <div className="process-node" key={n}><span>{n}</span><div className="node-line" /><h3>{t}</h3></div>)}</div></div></section>
}

function Philosophy() {
  return <section className="philosophy"><div className="container"><span className="eyebrow">08 / The question</span><h2>WHAT IF<br />THERE'S<br /><em>MORE?</em></h2><p>More possibilities. More experiences. More technology. More ways to solve the problem. More things worth building.</p><Link to="/contact" className="button button-light">Let's find out <ArrowUpRight /></Link></div></section>
}

function ContactCta() {
  return <section className="section final-cta"><div className="container"><span className="eyebrow">Have something worth building?</span><h2>LET'S BUILD<br /><em>SOMETHING.</em></h2><Link to="/contact" className="button button-primary">Start a project <ArrowUpRight /></Link></div></section>
}

function Work() {
  return <PageTransition><PageIntro eyebrow="01 / Work" title={<>SELECTED<br /><em>WORK.</em></>} text="A selection of digital experiences and products created through PHILEdev. Completed work is separated from ideas still taking shape." /><section className="section"><div className="container"><div className="portfolio-grid">{completed.map((project) => <ProjectCard project={project} large={project.index === '01' || project.index === '04'} key={project.slug} />)}</div></div></section><DevelopmentPreview /></PageTransition>
}

function Development() {
  return <PageTransition><PageIntro eyebrow="02 / Currently building" title={<>CURRENTLY<br /><em>BUILDING.</em></>} text="These products are still in development. Their presence here is intentional: they represent ideas in motion, not finished public launches." /><section className="section"><div className="container"><div className="dev-list large-list">{development.map((project) => <div className="dev-row" key={project.slug}><span>{project.index}</span><div><h3>{project.title}</h3><p>{project.category}</p><p className="dev-description">{project.description}</p></div><span className="dev-status">IN DEVELOPMENT</span><ArrowUpRight /></div>)}</div></div></section></PageTransition>
}

function Services() {
  const services: Array<[string, string, string, typeof Globe2]> = [
    ['01', 'Digital Experiences', 'Websites, landing pages, responsive interfaces and immersive digital experiences designed around the people using them.', Globe2],
    ['02', 'Digital Products', 'Web applications, software systems, mobile products and e-commerce experiences built from structure to interface.', Code2],
    ['03', 'Intelligent Systems', 'AI-assisted solutions, automation, API integrations and database-driven systems that connect the pieces.', Cpu],
    ['04', 'Digital Growth', 'SEO, digital strategy, marketing, visual identity and design support for brands moving into a stronger digital space.', Sparkles],
  ]
  return <PageTransition><PageIntro eyebrow="03 / Capabilities" title={<>WHAT WE<br /><em>BUILD.</em></>} text="PHILEdev sits between design and engineering. The exact combination changes with the problem, but the standard remains the same: purposeful, usable and built to evolve." /><section className="section service-list-section"><div className="container">{services.map(([n, title, desc, Icon]) => <motion.article className="service-row" key={n} {...useReveal()}><span>{n}</span><Icon /><div><h2>{title as string}</h2><p>{desc as string}</p></div><ArrowUpRight /></motion.article>)}</div></section><ContactCta /></PageTransition>
}

function About() {
  return <PageTransition><PageIntro eyebrow="04 / About" title={<>THE LOVE OF<br /><em>DEVELOPMENT.</em></>} text="PHILE is a word-form associated with love or a strong affinity. PHILEdev turns that idea into a working philosophy: a genuine love for developing, experimenting, learning and building." /><section className="section about-founder"><div className="container founder-grid"><div className="founder-image"><img src="/assets/founder-full.jpg" alt="Ugoji Michael Chidera" /><span className="image-tag">UGOJI MICHAEL CHIDERA / FOUNDER</span></div><div className="founder-copy"><span className="eyebrow">The person behind the work</span><h2>MORE TO DO.<br /><em>MORE TO KNOW.</em></h2><p>Driven by a desire to do more, experience more and know more, I became deeply interested in technology and development as a way of turning ideas into things people can actually use.</p><p>I believe there is more to the future, and more Nigerians can create, build and contribute to what that future becomes.</p><p>PHILEdev is the space where that belief becomes work.</p></div></div></section><section className="section manifesto"><div className="container"><span className="eyebrow">A simple principle</span><h2>DON'T BUILD<br /><em>JUST TO BUILD.</em></h2><p>Build because there is a problem worth solving, an experience worth improving, an idea worth exploring or a future worth making tangible.</p></div></section></PageTransition>
}

function Process() {
  const steps = [
    ['01', 'Discover', 'We understand the idea, the audience, the problem and the opportunity before we decide what to build.'],
    ['02', 'Define', 'We turn the vision into a clearer scope, structure, priorities and technical direction.'],
    ['03', 'Design', 'We shape the visual language, user experience and interface before development becomes expensive to change.'],
    ['04', 'Develop', 'We translate the approved direction into a working, responsive and maintainable digital product.'],
    ['05', 'Deploy', 'We prepare the product for launch, test the experience and create the foundation for continued iteration.'],
  ]
  return <PageTransition><PageIntro eyebrow="05 / Process" title={<>FROM IDEA<br /><em>→ REALITY.</em></>} text="A simple process keeps ambitious ideas moving without losing the human problem underneath them." /><section className="section process-detail"><div className="container">{steps.map(([n, title, desc], i) => <motion.div className="process-detail-row" key={n} {...useReveal()}><span>{n}</span><div className="process-detail-line"><div className="process-dot" /></div><div><h2>{title}</h2><p>{desc}</p></div>{i < steps.length - 1 && <ArrowDown className="process-next" />}</motion.div>)}</div></section><ContactCta /></PageTransition>
}

function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true) }
  return <PageTransition><PageIntro eyebrow="06 / Contact" title={<>HAVE SOMETHING<br /><em>WORTH BUILDING?</em></>} text="Tell us what you're imagining. This form is currently a frontend enquiry experience and is ready to connect to a real backend or email workflow when you choose one." /><section className="section contact-section"><div className="container contact-grid"><div className="contact-side"><span className="eyebrow">Start the conversation</span><h2>LET'S BUILD<br /><em>SOMETHING.</em></h2><a href="https://wa.me/234912027703101" target="_blank" rel="noreferrer" className="contact-method"><MessageCircle />+234 912 027 703101<ArrowUpRight /></a><p>Prefer WhatsApp? Start there and tell us what you need. We'll shape the next step from there.</p></div><form className="project-form" onSubmit={submit}>{[['Name', 'name', 'Your name'], ['Company / Organization', 'company', 'Company name'], ['Email / WhatsApp', 'contact', 'How should we reach you?']].map(([label, name, placeholder]) => <label key={name}>{label}<input name={name} placeholder={placeholder} required /></label>)}<label>What are you building?<select name="project" defaultValue=""><option value="" disabled>Select a project type</option><option>Website / Landing page</option><option>Web application</option><option>Software system</option><option>Mobile application</option><option>Brand / Digital experience</option><option>Other</option></select></label><label>Services required<input name="services" placeholder="e.g. UI/UX, development, AI, SEO" /></label><div className="form-two"><label>Budget range<select defaultValue=""><option value="" disabled>Select range</option><option>Under ₦250,000</option><option>₦250,000 – ₦500,000</option><option>₦500,000 – ₦1,000,000</option><option>₦1,000,000+</option><option>Let's discuss</option></select></label><label>Timeline<select defaultValue=""><option value="" disabled>Select timeline</option><option>As soon as possible</option><option>2–4 weeks</option><option>1–2 months</option><option>3+ months</option><option>Flexible</option></select></label></div><label>Project description<textarea name="description" placeholder="Tell us what you have in mind..." rows={6} required /></label><button className="button button-primary submit-button" type="submit">{sent ? <><Check size={18} /> Enquiry captured</> : <>Start the conversation <Send size={17} /></>}</button>{sent && <p className="form-note">Demo submission recorded on this page. No email has been sent yet because a live backend has not been connected.</p>}</form></div></section></PageTransition>
}

function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = allProjects.find((item) => item.slug === slug)
  if (!project) return <NotFound />
  const isDevelopment = project.status === 'development'
  return <PageTransition><section className="project-detail-hero"><div className="container"><button className="back-button" onClick={() => navigate(-1)}><ArrowLeft size={16} /> Back to work</button><span className="eyebrow">{project.category} / {project.year}</span><h1>{project.title}<span>.</span></h1><div className="detail-visual"><div className={`project-visual ${project.accent}`}><div className="visual-grid" /><span className="visual-index">{project.index}</span><div className="visual-word">{project.title.split(' ')[0]}</div><div className="visual-chip">{isDevelopment ? 'CURRENTLY BUILDING' : 'PHILEdev / COMPLETED'}</div></div></div></div></section><section className="section detail-copy"><div className="container detail-copy-grid"><div><span className="eyebrow">{isDevelopment ? 'In development' : 'Project overview'}</span><h2>{isDevelopment ? 'AN IDEA IN MOTION.' : 'MADE REAL.'}</h2></div><div><p className="large-copy">{project.description}</p><p>{isDevelopment ? 'This project page intentionally avoids presenting unfinished functionality as a live product. As development progresses, its actual features, visuals and story can replace this placeholder narrative.' : 'This project page is structured to become a proper case study. Once project-specific screenshots, objectives and measurable outcomes are added, they can be presented here without changing the overall PHILEdev architecture.'}</p><Link to="/contact" className="text-link">Build something with PHILEdev <ArrowUpRight /></Link></div></div></section><section className="section case-study-placeholder"><div className="container"><div className="case-grid"><div><span>01</span><h3>The challenge</h3><p>Project-specific challenge details can be added here.</p></div><div><span>02</span><h3>The approach</h3><p>Design, product and engineering decisions can be documented here.</p></div><div><span>03</span><h3>The result</h3><p>Outcome, launch status and measurable impact can be added here when verified.</p></div></div></div></section><ContactCta /></PageTransition>
}

function NotFound() { return <PageTransition><PageIntro eyebrow="404 / Not found" title={<>THAT PAGE<br /><em>DOESN'T EXIST.</em></>} text="Let's get you back to something worth building." /><section className="section"><div className="container"><Link to="/" className="button button-primary">Back home <ArrowRight /></Link></div></section></PageTransition> }

function PageTransition({ children }: { children: ReactNode }) {
  return <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: .45, ease: [0.16, 1, .3, 1] }}>{children}</motion.div>
}

function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-main"><div><img src="/assets/philedev-logo.png" alt="PHILEdev" className="footer-logo" /><p>The love of development.</p></div><div className="footer-links"><div><span>Explore</span><Link to="/work">Work</Link><Link to="/services">Services</Link><Link to="/about">About</Link><Link to="/process">Process</Link></div><div><span>Start</span><Link to="/contact">Start a project</Link><a href="https://wa.me/234912027703101" target="_blank" rel="noreferrer">WhatsApp</a></div></div></div><div className="footer-bottom"><span>© 2026 PHILEdev. All rights reserved.</span><span>Built with curiosity.</span></div></div></footer>
}

export default App
