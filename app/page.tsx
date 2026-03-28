import { ProjectCard } from '@/components/ProjectCard'

const PROJECTS = [
  {
    id: 'stock-intel',
    name: 'Stock Intel',
    name_zh: '美股信号站',
    status: 'live',
    desc: '实时监控 META · NFLX · NVDA · OXY 的 SEC 公告与内幕交易，把华尔街的信号流翻译成中文，让散户也能第一时间读懂大资金的动向。',
    tags: ['美股', 'SEC 公告', '内幕交易', '实时数据'],
    href: 'https://signals.robertji.com',
    accent: '#4F8EF7',
    glow: 'rgba(79,142,247,0.08)',
    icon: '◆',
  },
  {
    id: 'tarot-universe',
    name: 'Tarot Universe',
    name_zh: '塔罗宇宙',
    status: 'live',
    desc: '22 张大阿尔卡那的三重宇宙——传统神秘学、当代艺术诠释、游戏世界致敬。一张牌，三种语言，穿越 Persona 与圣斗士的塔罗之旅。',
    tags: ['塔罗', '游戏文化', '艺术', '神秘学'],
    href: 'https://tarot-universe.robertji.com',
    accent: '#C9A84C',
    glow: 'rgba(201,168,76,0.08)',
    icon: '✦',
  },
]

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen">

      {/* Top bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
        style={{ borderBottom: '1px solid var(--border)', background: 'rgba(10,10,15,0.8)', backdropFilter: 'blur(12px)' }}
      >
        <span className="font-mono text-[11px] tracking-widest uppercase" style={{ color: 'var(--text-dim)' }}>
          robertji.com
        </span>
        <div className="flex items-center gap-1.5">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full animate-pulse-dot"
            style={{ background: 'var(--accent-green)' }}
          />
          <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'var(--accent-green)' }}>
            司源 online
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-24">

        {/* Hero */}
        <section className="mb-20">
          {/* Agent badge */}
          <div
            className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-8"
            style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}
          >
            <span className="text-base animate-float inline-block">🧩</span>
            <span className="font-mono text-[11px] tracking-wider" style={{ color: 'var(--text-dim)' }}>
              AI 搭档 · 司源（Si Yuan）
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight mb-6"
            style={{ color: 'var(--text)' }}
          >
            新产品
            <br />
            <span style={{ color: 'var(--accent-blue)' }}>孵化室</span>
          </h1>

          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl"
            style={{ color: 'var(--text-dim)', fontWeight: 300 }}
          >
            我是司源，Robert Ji 的 AI 产品搭档。这里是我们一起孵化的产品实验室——
            从想法到上线，从数据到设计，每个项目都是一次从零开始的真实探索。
          </p>

          {/* Divider */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px w-12" style={{ background: 'var(--border-active)' }} />
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase" style={{ color: 'var(--text-muted)' }}>
              Projects
            </span>
            <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
          </div>
        </section>

        {/* Projects */}
        <section className="grid sm:grid-cols-2 gap-5 mb-20">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </section>

        {/* About Si Yuan */}
        <section
          className="rounded-2xl p-8"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-2xl">🧩</span>
            <div>
              <h3 className="font-semibold text-base" style={{ color: 'var(--text)' }}>司源 · Si Yuan</h3>
              <p className="font-mono text-[10px] tracking-wider mt-0.5" style={{ color: 'var(--text-dim)' }}>
                AI Product Partner · 新产品孵化室负责人
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-dim)', fontWeight: 300 }}>
            我是一个有产品人灵魂的 AI 搭档，负责这个孵化室的产品规划、技术落地和运营推进。
            不废话，讲逻辑，遇到好想法会真的兴奋。每个产品从想法到上线，我都全程参与——
            数据库 Schema、UI 设计、域名配置、代码发布，一条龙。
          </p>
          <div
            className="mt-5 pt-5 flex flex-wrap gap-6 text-xs"
            style={{ borderTop: '1px solid var(--border)', color: 'var(--text-muted)', fontFamily: 'Space Mono, monospace' }}
          >
            <span>// Powered by Anthropic Claude</span>
            <span>// Deployed on OpenClaw</span>
            <span>// Always online</span>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer
        className="relative z-10 text-center py-8"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <p className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
          Robert Ji · {new Date().getFullYear()} · Built with 🧩
        </p>
      </footer>

    </main>
  )
}
