import type { Metadata, Viewport } from 'next';
import { faqs } from './faq';
import './globals.css';
const title = '觅径 · 企业法务 AI | 纷繁之中，自有明径';
const description = '从一份合同开始。觅径结合原文与企业立场辅助审查，确认后修订，让每一步有据可查。';
export const metadata: Metadata = {
  metadataBase: new URL('https://mjvia.com'),
  title, description,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title, description, type: 'website', locale: 'zh_CN', siteName: '觅径 MIJING', url: '/',
    images: [{ url: '/images/mijing-original-poster.webp', width: 1344, height: 768, alt: '觅径原创山水影像' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/mijing-original-poster.webp'] },
  icons: { icon: '/favicon.svg' },
};
export const viewport: Viewport = { themeColor: '#294e3c' };
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', name: '觅径 MIJING', url: 'https://mjvia.com/', description, inLanguage: 'zh-CN' },
    { '@type': 'Organization', name: '觅径 MIJING', url: 'https://mjvia.com/' },
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
