'use client'

interface Project {
  number: string
  name: string
  name_zh: string
  year: string
  tags: string[]
  href: string
  accent: string
}

export function ProjectRow({ project: p }: { project: Project }) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-row block py-7 group"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <div className="flex items-baseline justify-between gap-6">

        {/* Left: number + name */}
        <div className="flex items-baseline gap-6 min-w-0">
          <span
            className="project-number font-mono text-[11px] tracking-wider shrink-0 w-6 text-right"
            style={{ color: 'var(--text-muted)' }}
          >
            {p.number}
          </span>

          <div className="min-w-0">
            <div className="flex items-baseline gap-3 flex-wrap">
              <h2
                className="text-2xl sm:text-3xl font-light tracking-tight"
                style={{ color: 'var(--text)', letterSpacing: '-0.01em' }}
              >
                {p.name}
              </h2>
              <span
                className="text-sm font-light"
                style={{ color: p.accent }}
              >
                {p.name_zh}
              </span>
            </div>

            {/* Tags */}
            <div className="flex items-center gap-3 mt-2 flex-wrap">
              {p.tags.map(tag => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-wider uppercase"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: year + arrow */}
        <div className="flex items-center gap-5 shrink-0">
          <span
            className="font-mono text-[11px] hidden sm:block"
            style={{ color: 'var(--text-muted)' }}
          >
            {p.year}
          </span>

          {/* Live dot */}
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: '#34D399' }}
          />

          <span
            className="project-arrow text-lg font-light"
            style={{ color: 'var(--text)' }}
          >
            ↗
          </span>
        </div>

      </div>
    </a>
  )
}
