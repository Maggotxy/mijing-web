import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: '觅径 · 企业法务 AI | 纷繁之中，自有明径',
  description: '觅径企业法务 AI，专注合同、用工与企业知识。理解你的企业，协助看清关键，让经营的每一步更有把握。',
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
