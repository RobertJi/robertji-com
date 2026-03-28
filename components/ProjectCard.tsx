'use client'

interface Project {
  id: string
  name: string
  name_zh: string
  desc: string
  tags: string[]
  href: string
  accent: string
  glow: string
  icon: string
}

export function ProjectCard({ p }: { p: Project }) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card block rounded-2xl p-6 group"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = p.accent + '40'
        el.style.boxShadow = `0 8px 40px ${p.glow}`
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'var(--border)'
        el.style.boxShadow = 'none'
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
          style={{ background: p.accent + '15', color: p.accent }}
        >
          {p.icon}
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: 'var(--accent-green)' }} />
          <span className="font-mono text-[9px] tracking-widest uppercase" style={{ color: 'var(--accent-green)' }}>
            live
          </span>
        </div>
      </div>

      {/* Name */}
      <div className="mb-3">
        <h2 className="text-lg font-semibold leading-snug" style={{ color: 'var(--text)' }}>
          {p.name}
        </h2>
        <p className="font-mono text-xs mt-0.5" style={{ color: p.accent }}>
          {p.name_zh}
        </p>
      </div>

      {/* Desc */}
      <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-dim)', fontWeight: 300 }}>
        {p.desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {p.tags.map(tag => (
          <span
            key={tag}
            className="font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full"
            style={{ background: p.accent + '10', color: p.accent, border: `1px solid ${p.accent}20` }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <div className="mt-5 flex items-center gap-1.5 text-xs font-medium" style={{ color: p.accent, opacity: 0.7 }}>
        <span>访问项目</span>
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>
    </a>
  )
}
