import type { Metadata, Viewport } from 'next';
import { faqs } from './faq';
import './globals.css';
const title = '觅径 · 企业法务 AI | 纷繁之中，自有明径';
const description = '从一份合同开始。觅径结合原文与企业立场辅助审查，确认后修订，让每一步有据可查。';
export const metadata: Metadata = {
  metadataBase: new URL('https://mjvia.com'),
  title, description,
  alternates: { canonical: '/', types: { 'application/rss+xml': '/feed.xml' } },
  robots: { index: true, follow: true },
  openGraph: {
    title, description, type: 'website', locale: 'zh_CN', siteName: '觅径 MIJING', url: '/',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: '觅径 MIJING · 企业法务 AI' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/og-image.png'] },
  icons: { icon: '/favicon.svg', apple: '/images/apple-touch-icon.png' },
  manifest: '/manifest.json',
  authors: [{ name: '天津觅径科技有限公司' }],
  keywords: ['企业法务 AI', '合同审查', '条款修改', '觅径'],
};
export const viewport: Viewport = { themeColor: '#294e3c' };
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', name: '觅径 MIJING', url: 'https://mjvia.com/', description, inLanguage: 'zh-CN' },
    { '@type': 'Organization', name: '觅径 MIJING', legalName: '天津觅径科技有限公司', url: 'https://mjvia.com/', logo: 'https://mjvia.com/images/og-image.png' },
    { '@type': 'VideoObject', name: '觅径原创品牌影像', description: '觅径原创庭院建筑影像。', thumbnailUrl: 'https://mjvia.com/images/mijing-original-poster.webp', contentUrl: 'https://mjvia.com/images/mijing-original.mp4', uploadDate: '2026-10-27T00:00:00+08:00', duration: 'PT16S' },
    { '@type': 'SoftwareApplication', name: '觅径 MIJING', url: 'https://app.mjvia.com/', applicationCategory: 'BusinessApplication', operatingSystem: 'Web', description },
    { '@type': 'FAQPage', mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer },
    })) },
  ],
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>
    {children}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\u003c') }} />
  </body></html>;
}
