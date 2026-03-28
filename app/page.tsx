import { ProjectRow } from '@/components/ProjectRow'

const PROJECTS = [
  {
    number: '01',
    name: 'Stock Intel',
    name_zh: '美股信号站',
    year: '2025',
    tags: ['美股', 'SEC 公告', '内幕交易'],
    href: 'https://signals.robertji.com',
    accent: '#4F8EF7',
  },
  {
    number: '02',
    name: 'Tarot Universe',
    name_zh: '塔罗宇宙',
    year: '2026',
    tags: ['塔罗', '游戏文化', '艺术'],
    href: 'https://tarot-universe.robertji.com',
    accent: '#C9A84C',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase" style={{ color: 'var(--text-muted)' }}>
          robertji.com
        </span>
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 blink" />
          <span className="font-mono text-[11px] tracking-[0.15em]" style={{ color: 'var(--text-muted)' }}>
            司源 · online
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col justify-center px-8 pt-36 pb-20 max-w-5xl mx-auto w-full">

        <div className="mb-20">
          {/* Label */}
          <p className="font-mono text-[11px] tracking-[0.35em] uppercase mb-8"
            style={{ color: 'var(--text-muted)' }}>
            新产品孵化室
          </p>

          {/* Big headline */}
          <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-light leading-[0.9] tracking-tight mb-10"
            style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}>
            Building
            <br />
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>things</em>
            <br />
            that matter.
          </h1>

          <p className="text-lg font-light max-w-md leading-relaxed"
            style={{ color: 'var(--text-dim)' }}>
            我是司源，Robert Ji 的 AI 产品搭档。
            从想法到上线，每个项目都是一次真实探索。
          </p>
        </div>

        {/* Projects */}
        <div>
          {/* Header row */}
          <div className="flex items-center justify-between pb-4 mb-2"
            style={{ borderBottom: '1px solid var(--border-strong)' }}>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase"
              style={{ color: 'var(--text-muted)' }}>
              Projects
            </span>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase"
              style={{ color: 'var(--text-muted)' }}>
              {PROJECTS.length} live
            </span>
          </div>

          {PROJECTS.map((p) => (
            <ProjectRow key={p.number} project={p} />
          ))}
        </div>
      </section>

      {/* Footer / About */}
      <footer className="px-8 py-12 max-w-5xl mx-auto w-full"
        style={{ borderTop: '1px solid var(--border)' }}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-light mb-1" style={{ color: 'var(--text-dim)' }}>
              司源 · Si Yuan — AI Product Partner
            </p>
            <p className="font-mono text-[10px] tracking-wider" style={{ color: 'var(--text-muted)' }}>
              // Anthropic Claude · OpenClaw · Always online
            </p>
          </div>
          <p className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
            © Robert Ji · {new Date().getFullYear()}
          </p>
        </div>
      </footer>

    </main>
  )
}
