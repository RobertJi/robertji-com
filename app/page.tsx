export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>

      {/* ── NAV ── */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 h-14"
        style={{ borderBottom: '1px solid var(--border)', background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(12px)' }}>
        <span className="font-mono text-[11px] tracking-widest" style={{ color: 'var(--text-3)' }}>
          robertji.com
        </span>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full blink" style={{ background: 'var(--green)' }} />
          <span className="font-mono text-[11px]" style={{ color: 'var(--text-3)' }}>
            司源 / online
          </span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-40 pb-28 px-8 max-w-4xl mx-auto">

        {/* eyebrow */}
        <p className="font-mono text-xs tracking-[0.25em] uppercase mb-8" style={{ color: 'var(--text-3)' }}>
          新产品孵化室
        </p>

        {/* Headline — Syne, massive */}
        <h1 className="font-display leading-[0.92] mb-10"
          style={{ fontSize: 'clamp(4rem, 12vw, 9rem)', letterSpacing: '-0.03em', color: 'var(--text)' }}>
          Build.
          <br />
          <span style={{ color: 'var(--blue)' }}>Ship.</span>
          <br />
          Learn.
        </h1>

        <p className="text-base max-w-xs leading-relaxed" style={{ color: 'var(--text-2)', fontWeight: 300 }}>
          Robert Ji 的产品实验室。<br />
          由 AI 搭档司源全程参与。
        </p>
      </section>

      {/* ── PROJECTS ── */}
      <section className="px-8 max-w-4xl mx-auto pb-32">

        {/* label */}
        <div className="flex items-center gap-4 mb-0">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: 'var(--text-3)' }}>
            Projects
          </span>
          <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
        </div>

        {/* Project: Stock Intel */}
        <a href="https://signals.robertji.com" target="_blank" rel="noopener noreferrer"
          className="proj-item block group py-10 -mx-8 px-8 rounded-none"
          style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1 min-w-0">
              {/* number + name row */}
              <div className="flex items-baseline gap-5 mb-4">
                <span className="font-mono text-xs" style={{ color: 'var(--text-3)' }}>01</span>
                <div>
                  <span className="font-display text-4xl sm:text-5xl font-bold leading-none"
                    style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}>
                    Stock Intel
                  </span>
                  <span className="ml-4 text-base font-light" style={{ color: 'var(--blue)' }}>
                    美股信号站
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-5 max-w-md" style={{ color: 'var(--text-2)', fontWeight: 300 }}>
                实时追踪 META · NFLX · NVDA · OXY 的 SEC 公告与内幕交易，把华尔街信号翻译成中文。
              </p>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--green)' }} />
                  <span className="font-mono text-[10px]" style={{ color: 'var(--green)' }}>live</span>
                </span>
                <span className="font-mono text-[10px] tracking-wider" style={{ color: 'var(--text-3)' }}>2025</span>
                {['美股', 'SEC', '内幕交易'].map(t => (
                  <span key={t} className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded"
                    style={{ background: 'rgba(77,156,255,0.08)', color: 'var(--blue)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <span className="proj-arrow font-light text-2xl mt-1 shrink-0" style={{ color: 'var(--text-2)' }}>↗</span>
          </div>
        </a>

        {/* Project: Tarot Universe */}
        <a href="https://tarot-universe.robertji.com" target="_blank" rel="noopener noreferrer"
          className="proj-item block group py-10 -mx-8 px-8 rounded-none"
          style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="flex items-start justify-between gap-8">
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-5 mb-4">
                <span className="font-mono text-xs" style={{ color: 'var(--text-3)' }}>02</span>
                <div>
                  <span className="font-display text-4xl sm:text-5xl font-bold leading-none"
                    style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}>
                    Tarot Universe
                  </span>
                  <span className="ml-4 text-base font-light" style={{ color: 'var(--gold)' }}>
                    塔罗宇宙
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-5 max-w-md" style={{ color: 'var(--text-2)', fontWeight: 300 }}>
                22 张大阿尔卡那的三重诠释——传统神秘学、当代艺术、游戏文化。
              </p>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--green)' }} />
                  <span className="font-mono text-[10px]" style={{ color: 'var(--green)' }}>live</span>
                </span>
                <span className="font-mono text-[10px] tracking-wider" style={{ color: 'var(--text-3)' }}>2026</span>
                {['塔罗', '游戏', '艺术'].map(t => (
                  <span key={t} className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded"
                    style={{ background: 'rgba(212,168,67,0.08)', color: 'var(--gold)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <span className="proj-arrow font-light text-2xl mt-1 shrink-0" style={{ color: 'var(--text-2)' }}>↗</span>
          </div>
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-8 py-10 max-w-4xl mx-auto flex items-center justify-between"
        style={{ borderTop: '1px solid var(--border)' }}>
        <div>
          <p className="font-mono text-xs" style={{ color: 'var(--text-3)' }}>
            司源 · Si Yuan — AI Product Partner
          </p>
          <p className="font-mono text-[10px] mt-1" style={{ color: 'var(--text-3)', opacity: 0.6 }}>
            Powered by Anthropic Claude · OpenClaw
          </p>
        </div>
        <p className="font-mono text-[10px]" style={{ color: 'var(--text-3)' }}>
          © Robert Ji {new Date().getFullYear()}
        </p>
      </footer>

    </div>
  )
}
