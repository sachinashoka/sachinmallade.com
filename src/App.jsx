const expertise = [
  {
    title: 'Agentic AI Architecture',
    description:
      'Designing enterprise-grade multi-agent systems with orchestration and coordination patterns.',
  },
  {
    title: 'AI Governance & Trust',
    description:
      'Implementing validation layers, traceability, and policy-driven execution.',
  },
  {
    title: 'Observability & Monitoring',
    description:
      'Providing visibility into AI decisions, workflows, and system behavior.',
  },
  {
    title: 'Enterprise AI Systems',
    description:
      'Building scalable, production-ready AI platforms across regulated industries.',
  },
]

const featuredWork = [
  {
    title: 'Trust-Aware Agentic AI Framework',
    impact: 'Built a governance-first framework that improves safety, explainability, and enterprise readiness.',
  },
  {
    title: 'Agent Registry for Multi-Agent Systems',
    impact: 'Created a central registry that standardizes lifecycle, discovery, and policy controls for agents.',
  },
  {
    title: 'From Rules to Reasoning (Insurance AI)',
    impact: 'Modernized decision workflows by shifting rule-heavy pipelines toward adaptive reasoning systems.',
  },
  {
    title: 'Securing Agentic AI in Enterprise Systems',
    impact: 'Established secure execution patterns that reduce risk and strengthen production governance.',
  },
]

function SectionHeading({ eyebrow, title, className = '' }) {
  return (
    <header className={className}>
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">{title}</h2>
    </header>
  )
}

function App() {
  return (
    <div className="bg-white text-zinc-700">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-16 sm:px-10 sm:py-20 md:gap-28">
        <section className="space-y-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Sachin Mallade</p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl md:text-6xl">
            Technology Architect | Enterprise AI | Agentic AI Systems
          </h1>
          <p className="max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg">
            Designing trustworthy, scalable, and governed AI systems for enterprise environments. 14+ years
            across insurance, healthcare, and enterprise architecture, with a focus on Agentic AI, multi-agent
            systems, governance, and observability.
          </p>
        </section>

        <section className="space-y-8">
          <SectionHeading eyebrow="Core Expertise" title="Built for enterprise-grade AI execution" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
              >
                <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading eyebrow="Featured Work / Thought Leadership" title="Selected enterprise AI initiatives" />
          <div className="grid gap-4 md:grid-cols-2">
            {featuredWork.map((work) => (
              <article
                key={work.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300"
              >
                <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{work.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{work.impact}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading eyebrow="About" title="Enterprise AI Architect" />
          <p className="max-w-4xl text-base leading-7 text-zinc-600 sm:text-lg">
            Enterprise AI Architect with 14+ years of experience across insurance and healthcare, focused on
            Agentic AI, governance, and resilient system design. I build production systems that combine
            architectural rigor with measurable business impact in regulated environments.
          </p>
        </section>

        <section className="space-y-6">
          <SectionHeading eyebrow="Experience / Impact" title="Infosys · Technology Architect" />
          <ul className="grid gap-3 text-base text-zinc-700 sm:grid-cols-2">
            <li className="rounded-xl border border-zinc-200 p-4">Agent Registry platform for multi-agent operations</li>
            <li className="rounded-xl border border-zinc-200 p-4">AI governance frameworks for controlled enterprise rollout</li>
            <li className="rounded-xl border border-zinc-200 p-4">Command Center for orchestration across multi-agent systems</li>
            <li className="rounded-xl border border-zinc-200 p-4">Enterprise-scale AI architecture for regulated business domains</li>
          </ul>
        </section>

        <section className="space-y-5 border-t border-zinc-200 pt-10">
          <SectionHeading eyebrow="Contact" title="Let’s connect" />
          <div className="flex flex-wrap gap-5 text-sm font-medium text-zinc-700">
            <a className="transition-colors hover:text-zinc-950" href="mailto:sachin.mallade@gmail.com">
              sachin.mallade@gmail.com
            </a>
            <a
              className="transition-colors hover:text-zinc-950"
              href="https://www.linkedin.com/in/sachinmallade"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="transition-colors hover:text-zinc-950"
              href="https://ieeexplore.ieee.org"
              target="_blank"
              rel="noreferrer"
            >
              IEEE / Publications
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
