import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '指南 | 小觅法务',
  description: '中小企业日常法务指南：没有法务怎么审合同、合同审查重点看哪些条款。答案前置、引用法条原文，给可验证的做法。',
  alternates: { canonical: '/guide' },
  openGraph: {
    title: '指南 | 小觅法务',
    description: '中小企业日常法务指南：没有法务怎么审合同、合同审查重点看哪些条款。答案前置、引用法条原文，给可验证的做法。',
    type: 'website',
    url: '/guide',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: '小觅法务 · 企业法务 AI' }],
  },
  twitter: { card: 'summary_large_image', title: '指南 | 小觅法务', description: '中小企业日常法务指南：没有法务怎么审合同、合同审查重点看哪些条款。', images: ['/images/og-image.png'] },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: '指南',
      description: '中小企业日常法务指南：没有法务怎么审合同、合同审查重点看哪些条款。',
      url: 'https://mjvia.com/guide',
      isPartOf: { '@type': 'WebSite', name: '小觅法务', url: 'https://mjvia.com/' },
      hasPart: [
        { '@type': 'Article', headline: '中小企业没有法务，怎么审合同', url: 'https://mjvia.com/guide/sme-contract-review' },
        { '@type': 'Article', headline: '合同审查重点看哪些条款', url: 'https://mjvia.com/guide/contract-key-clauses' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://mjvia.com/' },
        { '@type': 'ListItem', position: 2, name: '指南', item: 'https://mjvia.com/guide' },
      ],
    },
  ],
};

export default function GuideIndex() {
  return (
    <article className="guide">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\u003c') }} />
      <p className="eyebrow">小觅法务 · 指南</p>
      <h1>指南</h1>
      <p className="lede">中小企业日常法务的实操指南：答案前置、引用法条原文，给可验证的做法。涉及重大交易、复杂争议或事实不清的问题，请咨询专业律师。</p>
      <ul className="guide-list">
        <li>
          <a href="/guide/sme-contract-review">
            <h2>中小企业没有法务，怎么审合同</h2>
            <p>没有专职法务的中小企业，审合同先看什么、哪些条款不能漏、怎么留痕。小觅法务把合同审查变成可执行的日常流程。</p>
          </a>
        </li>
        <li>
          <a href="/guide/contract-key-clauses">
            <h2>合同审查重点看哪些条款</h2>
            <p>审合同先看哪几条、哪几类条款最容易埋雷、违约金和定金怎么写才有效。按《民法典》合同编逐条对照，附可直接用的检查清单。</p>
          </a>
        </li>
      </ul>
      <nav className="guide-nav" aria-label="相关链接">
        <a href="/">返回首页</a>
        <a href="/about">关于小觅法务</a>
      </nav>
      <div className="guide-cta">
        <p>进入工作台，从一份合同开始，了解与你业务相关的使用方式。</p>
        <a className="pill light" href="https://app.mjvia.com">进入工作台<span>→</span></a>
      </div>
    </article>
  );
}
