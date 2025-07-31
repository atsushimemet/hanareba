import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hanareba - 夫婦のイベント進行管理アプリ',
  description: '夫婦ふたりの「これから」を一緒に考えるためのイベント進行管理アプリ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <div className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <h1 className="text-2xl font-bold text-gray-900">
                      Hanareba
                    </h1>
                    <span className="ml-2 text-sm text-gray-500">
                      はなれば
                    </span>
                  </Link>
                </div>
                <nav className="flex space-x-4">
                  <Link href="/" className="text-gray-700 hover:text-gray-900">
                    ホーム
                  </Link>
                  <Link href="/events" className="text-gray-700 hover:text-gray-900">
                    ライフイベント
                  </Link>
                  <Link href="/events" className="text-gray-700 hover:text-gray-900">
                    論点管理
                  </Link>
                </nav>
              </div>
            </div>
          </header>
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
