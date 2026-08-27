import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: '花园酒店评论分析',
  description: '酒店评论数据分析与智能问答平台',
};

function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 rounded-lg flex items-center justify-center ring-1 ring-white/25 shadow-lg shadow-blue-500/30">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  strokeLinecap="round"
                >
                  {/* 节点连线 */}
                  <path d="M9.94 10.41 7.25 8.34M14.06 10.41l2.69-2.07M12 14.6v2.05" />
                  {/* 外围节点 */}
                  <circle cx="5.5" cy="7" r="1.9" />
                  <circle cx="18.5" cy="7" r="1.9" />
                  <circle cx="12" cy="18.75" r="1.9" />
                  {/* 中心节点 */}
                  <circle cx="12" cy="12" r="2.25" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-gray-900">花园酒店评论分析</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
              评论浏览
            </Link>
            <Link href="/dashboard" className="px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
              数据看板
            </Link>
            <Link href="/qa" className="px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 transition-colors">
              智能问答
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full overflow-hidden">
      <body className="antialiased bg-gray-50 h-full flex flex-col overflow-hidden">
        <Navigation />
        <main className="flex-1 min-h-0 overflow-auto">{children}</main>
      </body>
    </html>
  );
}
