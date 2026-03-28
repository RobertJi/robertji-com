import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Robert Ji — 新产品孵化室',
  description: '由 AI 搭档司源驱动的产品实验室',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
