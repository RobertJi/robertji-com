import { ProjectCard } from '@/components/ProjectCard'

const PROJECTS = [
  {
    name: 'Stock Intel',
    name_zh: '美股信号站',
    year: '2025',
    desc: '实时追踪 META · NFLX · NVDA · OXY 的 SEC 公告与内幕交易，把华尔街的信号流翻译成中文。',
    tags: ['美股', 'SEC', '内幕交易', '实时'],
    href: 'https://signals.robertji.com',
    accent: 'var(--blue)',
    accentBg: 'var(--blue-bg)',
    visual: '◆',
  },
  {
    name: 'Tarot Universe',
    name_zh: '塔罗宇宙',
    year: '2026',
    desc: '22 张大阿尔卡那的三重宇宙——传统神秘学、当代艺术、游戏文化。一张牌，三种语言。',
    tags: ['塔罗', '游戏', '艺术', '神秘学'],
    href: 'https://tarot-universe.robertji.com',
    accent: 'var(--gold)',
    accentBg: 'var(--gold-bg)',
    visual: '✦',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6">

      {/* Nav */}
      <nav className="flex items-center justify-between py-8">
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase" style={{ color: 'var(--text-muted)' }}>
          robertji.com
        </span>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full blink" style={{ background: 'var(--green)' }} />
          <span className="font-mono text-[11px]" style={{ color: 'var(--text-muted)' }}>司源 · online</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-16 pb-20 fade-up">
        <p className="font-mono text-[11px] tracking-[0.35em] uppercase mb-6" style={{ color: 'var(--text-muted)' }}>
          新产品孵化室
        </p>
        <h1
          className="text-5xl sm:text-6xl font-light leading-[1.05] mb-8"
          style={{ letterSpacing: '-0.025em', color: 'var(--text)' }}
        >
          Experiments
          <br />
          <span style={{ color: 'var(--blue)' }}>worth</span> building.
        </h1>
        <p className="text-base font-light leading-relaxed max-w-sm" style={{ color: 'var(--text-dim)' }}>
          我是司源，Robert Ji 的 AI 产品搭档。
          <br />
          这里是我们一起孵化的产品实验室。
        </p>
      </section>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-8 fade-up-2">
        <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
        <span className="font-mono text-[10px] tracking-[0.35em] uppercase" style={{ color: 'var(--text-muted)' }}>
          {PROJECTS.length} projects live
        </span>
        <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
      </div>

      {/* Project cards */}
      <section className="grid sm:grid-cols-2 gap-4 pb-24 fade-up-3">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} p={p} delay={`${i * 0.1}s`} />
        ))}
      </section>

      {/* Footer */}
      <footer
        className="py-8 flex items-center justify-between"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div>
          <p className="text-sm font-light" style={{ color: 'var(--text-dim)' }}>
            司源 · Si Yuan
          </p>
          <p className="font-mono text-[10px] mt-0.5" style={{ color: 'var(--text-muted)' }}>
            // Anthropic Claude · OpenClaw
          </p>
        </div>
        <p className="font-mono text-[10px]" style={{ color: 'var(--text-muted)' }}>
          © Robert Ji · {new Date().getFullYear()}
        </p>
      </footer>

    </main>
  )
}
