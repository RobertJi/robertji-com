'use client'

interface Project {
  name: string
  name_zh: string
  desc: string
  tags: string[]
  href: string
  accent: string
  accentBg: string
  visual: string  // emoji / icon for visual placeholder
  year: string
}

export function ProjectCard({ p, delay }: { p: Project; delay: string }) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      className="proj-card group block rounded-2xl overflow-hidden fade-up"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        animationDelay: delay,
      }}
    >
      {/* Visual area */}
      <div
        className="relative flex items-center justify-center h-48 sm:h-56"
        style={{ background: p.accentBg }}
      >
        {/* Big decorative character */}
        <span
          className="text-8xl sm:text-9xl select-none opacity-20"
          style={{ filter: `drop-shadow(0 0 40px ${p.accent})` }}
        >
          {p.visual}
        </span>

        {/* Top-right live badge */}
        <div
          className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
          style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full blink" style={{ background: 'var(--green)' }} />
          <span className="font-mono text-[10px] tracking-wider" style={{ color: 'var(--green)' }}>live</span>
        </div>

        {/* Year */}
        <div className="absolute bottom-4 left-4">
          <span className="font-mono text-[10px]" style={{ color: p.accent, opacity: 0.8 }}>{p.year}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h2 className="text-lg font-semibold leading-snug" style={{ color: 'var(--text)' }}>
              {p.name}
            </h2>
            <p className="text-sm mt-0.5 font-light" style={{ color: p.accent }}>
              {p.name_zh}
            </p>
          </div>
          <span
            className="text-lg mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            style={{ color: 'var(--text-muted)' }}
          >↗</span>
        </div>

        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-dim)', fontWeight: 300 }}>
          {p.desc}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {p.tags.map(tag => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-md"
              style={{
                background: p.accentBg,
                color: p.accent,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}
