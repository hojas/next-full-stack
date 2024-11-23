import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { ThemeProvider } from '@/app/components/theme-provider'
import { MainMenu } from './components/main-menu'
import './globals.css'

export const metadata: Metadata = {
  title: 'nuxt-full-stack',
  description: 'A tiny Next.js full-stack template.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainMenu />
          <div className="container mx-auto my-4">
            <div className="min-h-[calc(100vh_-_84px)] p-4 shadow">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
