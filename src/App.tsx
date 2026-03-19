import './App.css'
import React from 'react'
import { RiveHero } from './components/RiveHero'
import { useRive } from '@rive-app/react-canvas'

export default function App() {
  const sections = [
    { id: 'intro', label: 'Intro' },
    { id: 'what-is-rive', label: 'What is Rive' },
    { id: 'history', label: 'History' },
    { id: 'animation', label: 'Animation Basics' },
    { id: 'state-machines', label: 'State Machines' },
    { id: 'runtimes', label: 'Runtimes' },
    { id: 'use-cases', label: 'Use Cases' },
  ]

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="bg-black text-white min-h-screen selection:bg-white selection:text-black">
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 py-3 sm:py-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-4">
          <div className="min-w-0">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/50">
              Interactive microwebsite
            </p>
            <h1 className="text-sm sm:text-base font-medium leading-tight">
              Rive: Real-Time Interactive Animation
            </h1>
          </div>

          <div className="hidden lg:flex items-center gap-2 flex-wrap justify-end">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/70 transition hover:border-white/40 hover:text-white"
              >
                {section.label}
              </button>
            ))}
          </div>

          <div className="lg:hidden -mx-1 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max gap-2 px-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="shrink-0 rounded-full border border-white/15 px-3 py-1.5 text-[11px] sm:text-xs text-white/70 transition hover:border-white/40 hover:text-white"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="scroll-smooth">
        <Section id="intro">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-10 items-center">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/45">Overview</p>
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-semibold leading-[0.95] max-w-4xl">
                Rive is not just animation.
                <span className="block text-white/55 mt-2">
                  It is an interactive runtime for modern UI.
                </span>
              </h2>
            </div>
            <RiveHero />
          </div>
        </Section>

        <Section id="what-is-rive" title="What Rive is" eyebrow="Core idea">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 sm:gap-8 items-start">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 sm:p-4 sm:p-5">
              <img
                src="/rive_pipeline.png"
                alt="Rive end-to-end pipeline"
                className="w-full h-auto rounded-[1.5rem] object-contain"
              />
            </div>
            <FeatureGrid
              items={[
                ['Editor', 'Build artboards, timelines, and state machines in one workspace.'],
                ['.riv file', 'Compact asset format designed for playback in runtime environments.'],
                ['Runtime', 'Open-source runtimes render and control the file in apps and on the web.'],
                ['Interactivity', 'Animations are not just played! They react to inputs and transitions.'],
              ]}
            />
          </div>
        </Section>

        <Section id="history" title="Where it came from" eyebrow="History">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-6 sm:gap-8 items-start">
            <Timeline />
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 sm:p-4 sm:p-5">
              <div className="aspect-video rounded-[1.5rem] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src="/rive_history.gif"
                  alt="Rive history animation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-4 sm:pt-5 px-1">
                <h3 className="text-lg sm:text-xl font-semibold">Flare → Rive</h3>
                <p className="mt-2 text-sm sm:text-base text-white/65 leading-6 sm:leading-7">
                  From animation tooling for Flutter to a broader interactive design and runtime
                  platform.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="animation" title="Animation basics" eyebrow="Motion language">
          <div className="grid xl:grid-cols-[0.8fr_1.2fr] gap-6 sm:gap-8 items-start">
            <CopyBlock
              lead="Keyframes, easing, and interpolation"
              paragraphs={[
                'Keyframes define changes over time. Interpolation decides how values move between those points.',
                'That is why the same animation can feel mechanical, smooth, playful, or premium depending on easing and timing.',
              ]}
            />
            <div className="grid md:grid-cols-1 gap-5">
              <InterpolationTabs />
            </div>
          </div>
        </Section>

        <Section id="state-machines" title="Why state machines matter" eyebrow="Interactivity">
          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-6 sm:gap-8 items-start">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 sm:p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">State machines</p>

              <h3 className="mt-3 text-lg sm:text-xl lg:text-2xl font-semibold">Logic inside animation</h3>

              <p className="mt-4 text-sm sm:text-base text-white/65 leading-6 sm:leading-7">
                Inputs + states + transitions
              </p>

              <div className="mt-6 space-y-2 text-sm text-white/70">
                <p>• One asset → many states</p>
                <p>• Reacts to user interaction</p>
                <p>• No hardcoded animation logic</p>
              </div>

              <div className="mt-6 text-xs text-white/40">idle → hover → pressed → success</div>
            </div>
            <StateMachineTabs />
          </div>
        </Section>

        <Section id="runtimes" title="Runtimes and ecosystem" eyebrow="Platforms">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
            {[
              'Web',
              'Defold',
              'Apple',
              'Unity',
              'Android',
              'Unreal',
              'Flutter',
              'Framer',
              'React',
              'Webflow',
              'React Native',
              'Wix Studio',
              'C++',
            ].map((item) => (
              <a
                key={item}
                href="https://rive.app/docs/runtimes/getting-started"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-white/15 bg-black p-4 sm:p-6 min-h-[150px] sm:min-h-[170px] lg:min-h-[190px] flex flex-col items-center justify-center gap-4 sm:gap-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/40 hover:bg-white/[0.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
              >
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
                  <div className="absolute left-0 top-6 h-px w-0 bg-white/70 transition-all duration-500 group-hover:w-full" />
                  <div className="absolute right-0 bottom-6 h-px w-0 bg-white/50 transition-all duration-500 group-hover:w-full" />
                  <div className="absolute top-0 left-6 w-px h-0 bg-white/60 transition-all duration-500 group-hover:h-full" />
                  <div className="absolute bottom-0 right-6 w-px h-0 bg-white/40 transition-all duration-500 group-hover:h-full" />
                </div>

                <div className="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                  <img
                    src={`/icons/${item.toLowerCase().replace(/ /g, '-')}.svg`}
                    alt={item}
                    className="w-full h-full object-contain opacity-90 group-hover:opacity-100"
                  />
                </div>

                <p className="relative z-10 text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.18em] uppercase text-white/70 text-center transition-all duration-500 group-hover:text-white">
                  {item}
                </p>
              </a>
            ))}
          </div>
        </Section>

        <Section id="use-cases" title="Where Rive is used" eyebrow="Use cases">
          <UseCasesTabs />
        </Section>
      </main>
    </div>
  )
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section
      id={id}
      className="min-h-[auto] md:min-h-screen flex items-center border-b border-white/8 scroll-mt-28 sm:scroll-mt-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 pt-32 sm:pt-36 lg:pt-28 pb-12 sm:pb-16">
        {(eyebrow || title) && (
          <div className="mb-8 sm:mb-10 max-w-4xl">
            {eyebrow && (
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-white/45">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

function CopyBlock({ lead, paragraphs }) {
  return (
    <div>
      <p className="text-lg sm:text-2xl font-medium leading-8 sm:leading-9 text-white">{lead}</p>
      <div className="mt-5 sm:mt-6 space-y-4 text-white/70 leading-7 sm:leading-8 text-sm sm:text-lg">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </div>
  )
}

function UseCasesTabs() {
  const tabs = [
    {
      key: 'duolingo',
      label: 'Duolingo',
      source: '/usecase/duolingo.png',
      source2: '/usecase/lily.mp4',
      url: 'https://blog.duolingo.com/world-character-visemes/',
      description:
        'To make Lily feel expressive and responsive, the animation team relied on the Rive State Machine, a visual system that lets animations transition fluidly based on inputs.',
    },
    {
      key: 'brilliant',
      label: 'Brilliant',
      source: '/usecase/brilliant.avif',
      url: 'https://rive.app/blog/how-brilliant-org-motivates-learners-with-rive-animations',
      description:
        'Brilliant uses animation to make learning feel rewarding, guiding attention, celebrating progress, and turning abstract concepts into something more intuitive.',
    },
    {
      key: 'figma',
      label: 'Figma',
      source: '/usecase/figma.avif',
      source2: '/usecase/figma_rive.mp4',
      url: 'https://rive.app/blog/figma-s-new-homepage-is-full-of-rive-animations',
      description:
        'Figma uses Rive to bring the homepage to life with motion that feels polished, interactive, and tightly integrated with the product’s visual identity.',
    },
    {
      key: 'spotify',
      label: 'Spotify',
      source: '/usecase/spotify.webp',
      url: 'https://rive.app/blog/spotify-used-rive-for-spotify-wrapped-2025',
      description:
        'Spotify uses Rive for high-impact campaign moments, where motion, branding, and responsiveness need to feel dynamic across many screens and devices.',
    },
    {
      key: 'sentry',
      label: 'Sentry',
      source: '/usecase/sentry.gif',
      source2: '/usecase/sentry.mp4',
      url: 'https://sentry.io/welcome/',
      description:
        'Sentry uses motion to make a technical product feel more approachable, adding personality without losing clarity or speed.',
    },
    {
      key: 'notion',
      label: 'Notion',
      source: '/usecase/notion.webp',
      source2: '/usecase/notion.mp4',
      url: 'https://www.fastcompany.com/91192119/notions-new-animated-ai-assistant-looks-more-new-yorker-than-clippy',
      description:
        'Notion uses animation to give its AI assistant more character, making the experience feel friendlier, clearer, and more memorable.',
    },
    {
      key: 'intercom',
      label: 'Intercom',
      source: '/usecase/intercom.avif',
      source2: '/usecase/intercom_site.mp4',
      url: 'https://rive.app/blog/intercom-s-product-animation-evolution-embracing-rive',
      description:
        'Intercom uses Rive to evolve product animation from static decoration into interactive storytelling that better supports the product experience.',
    },
    {
      key: 'custom',
      label: 'Custom',
      type: 'rive',
      src: '/usecase/avatar_creation.riv',
    },
  ] as const

  const [activeTab, setActiveTab] = React.useState<
    'duolingo' | 'brilliant' | 'figma' | 'spotify' | 'sentry' | 'notion' | 'intercom' | 'custom'
  >('duolingo')

  const activeItem = tabs.find((tab) => tab.key === activeTab)!

  const { RiveComponent: CustomRive } = useRive({
    src: '/usecase/avatar_creation.riv',
    autoplay: activeTab === 'custom',
    autoBind: true,
    stateMachines: 'MainArtboardStateMachine',
  })

  return (
    <div className="relative rounded-[2rem] sm:rounded-[2.5rem] border border-white/15 bg-black p-4 sm:p-6 lg:p-8 min-h-[420px] sm:min-h-[520px] overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative z-10 -mx-1 mb-5 sm:mb-6 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max flex-nowrap gap-2 px-1 sm:flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`shrink-0 px-3 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs tracking-wide transition ${
                activeTab === tab.key
                  ? 'bg-white text-black'
                  : 'text-white/60 border border-white/10 hover:text-white hover:border-white/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {activeTab === 'custom' ? (
          <div className="w-full h-[320px] sm:h-[460px] lg:h-[600px] rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden border border-white/10 bg-black/50">
            <CustomRive className="w-full h-full" />
          </div>
        ) : activeItem.source2 ? (
          <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] lg:grid-cols-[1fr_300px] gap-4 items-center h-full w-full">
            <a
              href={activeItem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <img
                key={activeItem.source}
                src={activeItem.source}
                alt={activeItem.label}
                className="w-full h-auto md:h-full object-contain cursor-pointer max-h-[320px] sm:max-h-[420px] lg:max-h-[600px] md:min-h-[420px] lg:min-h-[600px]"
              />
            </a>

            <a
              href={activeItem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full"
            >
              <video
                src={activeItem.source2}
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-[320px] md:max-w-none rounded-xl border border-white/10 object-contain cursor-pointer"
              />
            </a>
          </div>
        ) : (
          <a
            href={activeItem.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <img
              key={activeItem.source}
              src={activeItem.source}
              alt={activeItem.label}
              className="w-full h-auto object-contain cursor-pointer max-h-[320px] sm:max-h-[420px] lg:max-h-[600px] lg:min-h-[600px]"
            />
          </a>
        )}

        {activeTab === 'custom' ? (
          <div className="mt-5 max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] px-4 sm:px-5 py-4 text-left">
            <p className="text-sm font-medium text-white mb-3">Custom avatar creator</p>
            <ul className="space-y-2 text-sm text-white/65">
              <li>
                • File size of <span className="text-white">.riv</span>:{' '}
                <span className="text-white">146KB</span> (1 audio, big state machine, assets)
              </li>
              <li>
                • Time spent: <span className="text-white">~16h</span>
              </li>
              <li className="pl-4">design creation: ~6h</li>
              <li className="pl-4">animation, state machines &amp; logic: ~10h</li>
              <li className="pl-4">export and code integration: ~15m</li>
            </ul>
          </div>
        ) : (
          <p className="mt-4 text-sm sm:text-base text-white/60 max-w-3xl leading-6 sm:leading-7">
            {'description' in activeItem ? activeItem.description : ''}
          </p>
        )}
      </div>
    </div>
  )
}

function FeatureGrid({ items }) {
  const icons = {
    Editor: '✏️',
    '.riv file': '📦',
    Runtime: '⚙️',
    Interactivity: '✨',
  }

  return (
    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
      {items.map(([title, text]) => (
        <div
          key={title}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] hover:shadow-[0_0_30px_rgba(255,255,255,0.06)]"
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_35%)]" />
          </div>

          <div className="relative z-10 flex flex-col justify-between">
            <div>
              <div className="mb-4 sm:mb-5 flex items-start justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg transition-all duration-300 group-hover:scale-105 group-hover:border-white/30 group-hover:bg-white/10">
                  {icons[title] || '•'}
                </div>
              </div>

              <h3 className="text-base font-semibold tracking-wide text-white">{title}</h3>

              <p className="mt-2 text-sm leading-6 text-white/65 group-hover:text-white/80 transition-colors duration-300">
                {text}
              </p>
            </div>

            <div className="mt-5 h-px w-full bg-white/8 transition-all duration-300 group-hover:bg-white/20" />
          </div>
        </div>
      ))}
    </div>
  )
}

function Timeline() {
  const items = [
    ['2018: Flare', '2D animation tool, mainly used with Flutter'],
    ['2019: Rive', 'Rebrand + shift to interactive animations'],
    ['Founders', 'Guido Rosso, Luigi Rosso'],
    ['Under the hood', 'C++ runtime + GPU renderer'],
    ['Core idea', 'No design–dev handoff'],
  ]

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:p-6 sm:p-8">
      <div className="space-y-5 sm:space-y-6">
        {items.map(([title, text], index) => (
          <div key={title} className="grid grid-cols-[20px_1fr] gap-4">
            <div className="flex flex-col items-center pt-1">
              <div className="h-3.5 w-3.5 rounded-full bg-white" />
              {index !== items.length - 1 && (
                <div className="mt-2 w-px flex-1 bg-white/20 min-h-14 sm:min-h-16" />
              )}
            </div>
            <div className="pb-2">
              <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm sm:text-base text-white/65 leading-6 sm:leading-7">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function InterpolationTabs() {
  const tabs = [
    { key: 'linear', label: 'Linear', type: 'gif', src: '/linear.gif' },
    { key: 'cubic', label: 'Cubic', type: 'gif', src: '/cubic.gif' },
    { key: 'hold', label: 'Hold', type: 'gif', src: '/hold.gif' },
    { key: 'rive', label: 'All 3 combined', type: 'rive', src: '/interpolation.riv' },
    // { key: 'something', label: 'Secret', type: 'rive', src: '/something.riv' },
  ] as const

  const [activeTab, setActiveTab] = React.useState<
    'linear' | 'cubic' | 'hold' | 'rive' | 'something'
  >('linear')
  const [showSecretTab, setShowSecretTab] = React.useState(false)

  const activeItem = tabs.find((tab) => tab.key === activeTab)!

  const { RiveComponent: InterpolationRive } = useRive({
    src: '/interpolation.riv',
    autoplay: activeTab === 'rive',
  })

  const { RiveComponent: SomethingRive } = useRive({
    src: '/something.riv',
    autoplay: activeTab === 'something',
    stateMachines: 'State Machine 1',
  })

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 sm:p-5 min-h-[280px] sm:min-h-[320px]">
      <div
        className="-mx-1 mb-5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onMouseEnter={() => setShowSecretTab(true)}
      >
        <div className="flex w-max flex-nowrap sm:flex-wrap gap-2 px-1">
          {tabs
            .filter((tab) => tab.key !== 'something' || showSecretTab)
            .map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`shrink-0 rounded-full border px-3 py-1.5 text-[11px] sm:text-xs transition ${
                  activeTab === tab.key
                    ? 'border-white/40 bg-white text-black'
                    : tab.key === 'something'
                    ? 'border-white/10 text-white/10 italic animate-pulse hover:border-white/40 hover:text-white'
                    : 'border-white/15 text-white/75 hover:border-white/40 hover:text-white'
                }`}
              >
                {tab.key === 'something' ? '...?' : tab.label}
              </button>
            ))}
        </div>
      </div>

      <div className="rounded-[1.25rem] sm:rounded-[1.5rem] border border-white/10 bg-black/40 min-h-[220px] sm:min-h-[300px] overflow-hidden flex items-center justify-center">
        {activeItem.type === 'gif' ? (
          <img
            key={activeItem.src}
            src={activeItem.src}
            alt={`${activeItem.label} interpolation`}
            className="w-full h-full object-contain"
          />
        ) : activeTab === 'rive' ? (
          <div className="w-full h-[260px] sm:h-[360px] lg:h-[420px]">
            <InterpolationRive className="w-full h-full" />
          </div>
        ) : (
          <div className="w-full h-[260px] sm:h-[360px] lg:h-[420px]">
            <SomethingRive className="w-full h-full" />
          </div>
        )}
      </div>
    </div>
  )
}

function StateMachineTabs() {
  const tabs = [
    { key: 'example', label: 'Example', type: 'rive', src: '/state_machine.riv' },
    { key: 'machine', label: 'State machine', type: 'gif', src: '/state_machine_1.gif' },
    { key: 'beginner', label: 'Beginner', type: 'gif', src: '/state_machine_2.gif' },
    { key: 'intermediate', label: 'Intermediate', type: 'gif', src: '/state_machine_3.gif' },
    { key: 'expert', label: 'Expert', type: 'gif', src: '/state_machine_4.gif' },
  ] as const

  const [activeTab, setActiveTab] = React.useState<
    'example' | 'machine' | 'beginner' | 'intermediate' | 'expert'
  >('example')

  const activeItem = tabs.find((tab) => tab.key === activeTab)!

  const { RiveComponent: StateMachineRive } = useRive({
    src: '/state_machine.riv',
    autoplay: activeTab === 'example',
    stateMachines: 'State Machine 1',
  })

  return (
    <div className="w-full max-w-full min-w-0 overflow-hidden rounded-[1.25rem] sm:rounded-[2rem] border border-white/10 bg-white/[0.03] p-2.5 sm:p-5">
      <div className="w-full max-w-full min-w-0 -mx-0.5 mb-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex min-w-max sm:min-w-0 sm:w-full flex-nowrap sm:flex-wrap gap-2 px-0.5">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`shrink-0 rounded-full border px-3 py-1.5 text-[11px] sm:text-xs whitespace-nowrap transition ${
                activeTab === tab.key
                  ? 'border-white/40 bg-white text-black'
                  : 'border-white/15 text-white/75 hover:border-white/40 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full max-w-full min-w-0 overflow-hidden rounded-[1rem] sm:rounded-[1.5rem] border border-white/10 bg-black/40">
        {activeItem.type === 'gif' ? (
          <div className="w-full h-[220px] sm:h-[400px] lg:h-[500px]">
            <img
              key={activeItem.src}
              src={activeItem.src}
              alt={activeItem.label}
              className="block w-full h-full object-contain"
            />
          </div>
        ) : (
          <div className="w-full h-[220px] sm:h-[400px] lg:h-[500px]">
            <StateMachineRive className="w-full h-full" />
          </div>
        )}
      </div>
    </div>
  )
}