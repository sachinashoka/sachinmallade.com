import { useEffect, useState } from 'react'

const themeOptions = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
]

const navItems = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Expertise', href: '#expertise', id: 'expertise' },
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

function SectionLabel({ children, className = '' }) {
  return <p className={`section-label ${className}`.trim()}>{children}</p>
}

function ThemeIcon({ value }) {
  if (value === 'light') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[0.95rem] w-[0.95rem] fill-none stroke-current" strokeWidth="1.9">
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9 5.3 5.3" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[0.95rem] w-[0.95rem] fill-current">
      <path d="M21.2 14.8A8.9 8.9 0 0 1 9.2 2.8a.5.5 0 0 0-.63-.63A10.4 10.4 0 1 0 21.83 15.4a.5.5 0 0 0-.63-.62Z" />
    </svg>
  )
}

export default function SachinMalladeSite() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light'
    }

    const storedTheme = window.localStorage.getItem('theme')
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const [activeSection, setActiveSection] = useState('about')

  const expertise = [
    {
      title: 'Agentic AI Architecture',
      text: 'Designing enterprise-grade multi-agent systems with clear coordination patterns, execution controls, and production-readiness.',
    },
    {
      title: 'AI Governance & Trust',
      text: 'Embedding validation, traceability, policy-driven execution, and human oversight into real-world AI systems.',
    },
    {
      title: 'Observability & Transparency',
      text: 'Improving visibility into agent decisions, workflow behavior, confidence signals, and operational outcomes.',
    },
    {
      title: 'Enterprise AI Systems',
      text: 'Building scalable, governed AI platforms for regulated domains including insurance and healthcare.',
    },
  ]

  const work = [
    {
      title: 'Trust-Aware Agentic AI Framework',
      text: 'A practical framework for trustworthy enterprise AI using validation layers, confidence-aware execution, traceability, and governance controls.',
      tag: 'Framework',
    },
    {
      title: 'Agent Registry for Multi-Agent Systems',
      text: 'A foundational architecture for governed agent lifecycle management, capability discovery, policy alignment, and controlled execution.',
      tag: 'Architecture',
    },
    {
      title: 'From Rules to Reasoning',
      text: 'A perspective on evolving enterprise decision systems from rigid rules toward hybrid architectures that combine policy, reasoning, and orchestration.',
      tag: 'White Paper',
    },
    {
      title: 'Securing Agentic AI in Enterprise Systems',
      text: 'A security-focused approach to building explainable, compliant, and risk-aware AI systems in high-trust environments.',
      tag: 'Research',
    },
  ]

  const highlights = [
    '14+ years across insurance, healthcare, enterprise architecture, and applied AI',
    'Focused on trustworthy Agentic AI, governance, observability, and multi-agent systems',
    'Technology Architect at Infosys with enterprise-scale platform and AI architecture experience',
  ]

  const experienceHighlights = [
    'Infosys · Technology Architect',
    'Insurance & Healthcare Domain Focus',
    'Multi-Agent Systems & Governance',
    'Enterprise AI Architecture',
  ]

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    if (!sections.length) {
      return undefined
    }

    const updateActiveSection = () => {
      const headerOffset = 112
      const viewportHeight = window.innerHeight
      const anchorLine = window.scrollY + Math.min(headerOffset + viewportHeight * 0.28, headerOffset + 180)

      let currentSectionId = sections[0].id

      sections.forEach((section) => {
        if (section.offsetTop <= anchorLine) {
          currentSectionId = section.id
        }
      })

      setActiveSection(currentSectionId)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <div id="home" className="site-shell min-h-screen text-neutral-950 dark:text-neutral-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[44rem] overflow-hidden">
        <div className="absolute left-[6%] top-12 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(214,227,237,0.7)_0%,_rgba(214,227,237,0)_72%)] blur-3xl dark:bg-[radial-gradient(circle,_rgba(64,90,110,0.44)_0%,_rgba(64,90,110,0)_72%)]" />
        <div className="absolute right-[7%] top-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(236,223,214,0.58)_0%,_rgba(236,223,214,0)_72%)] blur-3xl dark:bg-[radial-gradient(circle,_rgba(112,90,74,0.26)_0%,_rgba(112,90,74,0)_72%)]" />
        <div className="absolute left-1/3 top-56 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.34)_0%,_rgba(255,255,255,0)_72%)] blur-3xl dark:bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_72%)]" />
      </div>

      <header className="liquid-header sticky top-0 z-30">
        <div className="section-container flex items-center justify-between gap-6 py-4">
          <a href="#home" className="brand-link brand-name text-[1.18rem] text-neutral-950 dark:text-neutral-50 sm:text-[1.34rem] lg:text-[1.68rem]">
            Sachin Mallade
          </a>
          <div className="flex items-center gap-5 lg:gap-8">
            <nav className="top-nav hidden items-center gap-9 md:flex" aria-label="Primary">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`nav-link ${activeSection === item.id ? 'nav-link-active' : ''}`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div
              className="theme-switcher segmented-toggle"
              role="group"
              aria-label="Theme switcher"
            >
              <span
                aria-hidden="true"
                className="segment-thumb"
                style={{ transform: `translateX(${theme === 'dark' ? '1.92rem' : '0rem'})` }}
              />
              {themeOptions.map((option) => {
                const isActive = theme === option.value

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setTheme(option.value)}
                    aria-pressed={isActive}
                    aria-label={`Switch to ${option.label.toLowerCase()} theme`}
                    title={option.label}
                    className={`theme-toggle-button segment-option ${
                      isActive
                        ? 'segment-option-active'
                        : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                    }`}
                  >
                    <ThemeIcon value={option.value} />
                    <span className="sr-only">{option.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="section-container section-shell pb-20 pt-24 lg:pb-28 lg:pt-32">
          <div className="max-w-4xl">
            <div className="mb-9 space-y-2.5">
              <p className="text-lg font-medium tracking-[-0.02em] text-neutral-800 dark:text-neutral-100 sm:text-[1.18rem]">
                Architecting Trust-Aware, Scalable AI Systems
              </p>
              <p className="text-sm font-medium tracking-[0.01em] text-neutral-900/65 dark:text-neutral-100/65 sm:text-[0.96rem]">
                Enterprise AI · Multi-Agent Systems · Governance · Observability
              </p>
            </div>
            <h1 className="hero-display max-w-4xl text-4xl font-semibold tracking-[-0.025em] text-neutral-950 dark:text-neutral-50 sm:text-5xl lg:text-[4.25rem]">
              Designing trustworthy AI systems for enterprise scale.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-650 sm:text-xl">
              I build scalable, governed, and observability-driven AI architectures across insurance and healthcare, with a current focus on Agentic AI, multi-agent systems, trust, and policy-aware execution.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#work" className="liquid-button liquid-button-primary">
                View Featured Work
              </a>
              <a
                href="#contact"
                className="liquid-button liquid-button-secondary hero-connect-button"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>

          <div className="mt-18 grid gap-4 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="liquid-card summary-card rounded-[28px] p-6"
              >
                <p className="text-sm leading-6 text-neutral-700 dark:text-neutral-200">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section-container section-shell py-10 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <SectionLabel>About</SectionLabel>
            </div>
            <div className="space-y-6 text-base leading-8 text-neutral-700 dark:text-neutral-200 sm:text-lg">
              <p>
                I am a Technology Architect focused on Enterprise AI and Agentic AI system design. My work sits at the intersection of architecture, governance, and real-world adoption, helping organizations move from experimentation to scalable and trustworthy AI implementation.
              </p>
              <p>
                Over the past 14+ years, I have worked across insurance and healthcare platforms with experience spanning distributed systems, enterprise integration, automation, and AI-driven solution architecture. My current interests include multi-agent systems, policy-driven execution, validation layers, observability, and trust-aware AI design.
              </p>
            </div>
          </div>
        </section>

        <section id="expertise" className="section-container section-shell py-20">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Core Expertise</SectionLabel>
              <h2 className="display-type mt-3 text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-4xl">
                Building AI systems that are practical, governed, and production-ready.
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="liquid-card liquid-card-hover expertise-card rounded-[30px] p-7"
              >
                <h3 className="text-xl font-semibold leading-snug text-neutral-950 dark:text-neutral-50">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="section-container section-shell py-10 lg:py-14">
          <div className="mb-10 max-w-3xl">
            <SectionLabel>Featured Work</SectionLabel>
            <h2 className="display-type mt-3 text-3xl font-semibold tracking-tight text-neutral-950 dark:text-neutral-50 sm:text-4xl">
              Frameworks, architecture patterns, and thought leadership in enterprise AI.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {work.map((item) => (
              <div
                key={item.title}
                className="liquid-card liquid-card-hover feature-card rounded-[30px] p-7"
              >
                <div className="meta-pill feature-work-label inline-flex px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-300">
                  {item.tag}
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-snug text-neutral-950 dark:text-neutral-50">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-container section-shell py-20">
          <div className="feature-panel rounded-[32px] p-8 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
              <div className="space-y-5">
                <SectionLabel>Experience & Impact</SectionLabel>
                <p className="display-type max-w-md text-2xl font-semibold leading-[1.15] text-neutral-950 dark:text-neutral-50 sm:text-[2rem]">
                  14+ years across enterprise systems, insurance, healthcare, and AI-enabled architecture.
                </p>
                <p className="max-w-md text-base leading-7 text-neutral-650 dark:text-neutral-300">
                  Technology Architect focused on trust-aware AI systems, platform architecture, and enterprise-scale adoption in regulated environments.
                </p>
              </div>
              <div className="space-y-6 text-base leading-8 text-neutral-700 dark:text-neutral-200 sm:text-lg">
                <p>
                  My work includes AI platform architecture, multi-agent coordination models, trust-aware system design, and enterprise integration patterns for regulated environments.
                </p>
                <div className="grid gap-3 pt-2 sm:grid-cols-2">
                  {experienceHighlights.map((item) => (
                    <div key={item} className="support-chip rounded-2xl p-4 text-sm text-neutral-700 dark:text-neutral-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-container section-shell pb-24 pt-8">
          <div className="liquid-cta-surface rounded-[32px] p-8 text-white sm:p-10 lg:p-12">
            <SectionLabel className="!text-neutral-200/80 dark:!text-neutral-300/75">Contact</SectionLabel>
            <h2 className="display-type mt-6 text-3xl font-medium tracking-tight sm:text-4xl">
              Let&apos;s build something meaningful.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-300 dark:text-neutral-300 sm:text-lg">
              I am interested in architecture, research, and practical enterprise adoption of trustworthy Agentic AI systems.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/in/sachin-mallade/"
                target="_blank"
                rel="noreferrer"
                className="liquid-button liquid-button-primary inline-flex items-center gap-3"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white text-[0.8rem] font-black leading-none text-[#0A66C2]">
                  in
                </span>
                LinkedIn
              </a>
              <a
                href="mailto:connect@sachinmallade.com"
                className="liquid-button liquid-button-secondary hero-connect-button"
              >
                connect@sachinmallade.com
              </a>
            </div>
            <p className="mt-12 text-xs font-medium tracking-[0.02em] text-white/55 sm:text-sm">
              © Sachin Mallade · All rights reserved
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
