import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '指南 | 小觅法务',
  description: '中小企业日常法务指南：没有法务怎么审合同、合同审查重点看哪些条款、入职文件检查清单、解除与离职风险预检、对方拖欠货款怎么办、合同里的定金最多是多少、解除劳动合同经济补偿怎么算。答案前置、引用法条原文，给可验证的做法。',
  alternates: { canonical: '/guide' },
  openGraph: {
    title: '指南 | 小觅法务',
    description: '中小企业日常法务指南：没有法务怎么审合同、合同审查重点看哪些条款、入职文件检查清单、解除与离职风险预检、对方拖欠货款怎么办、合同里的定金最多是多少、解除劳动合同经济补偿怎么算。答案前置、引用法条原文，给可验证的做法。',
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
      description: '中小企业日常法务指南：没有法务怎么审合同、合同审查重点看哪些条款、入职文件检查清单、解除与离职风险预检、对方拖欠货款怎么办、合同里的定金最多是多少、解除劳动合同经济补偿怎么算。',
      url: 'https://mjvia.com/guide',
      isPartOf: { '@type': 'WebSite', name: '小觅法务', url: 'https://mjvia.com/' },
      hasPart: [
        { '@type': 'Article', headline: '中小企业没有法务，怎么审合同', url: 'https://mjvia.com/guide/sme-contract-review' },
        { '@type': 'Article', headline: '合同审查重点看哪些条款', url: 'https://mjvia.com/guide/contract-key-clauses' },
        { '@type': 'Article', headline: '入职文件检查清单', url: 'https://mjvia.com/guide/onboarding-document-checklist' },
        { '@type': 'Article', headline: '解除与离职风险预检', url: 'https://mjvia.com/guide/termination-risk-check' },
        { '@type': 'Article', headline: '对方拖欠货款怎么办', url: 'https://mjvia.com/guide/overdue-payment-recovery' },
        { '@type': 'Article', headline: '合同里的定金最多是多少？', url: 'https://mjvia.com/guide/deposit-max-amount' },
        { '@type': 'Article', headline: '解除劳动合同，经济补偿怎么算？', url: 'https://mjvia.com/guide/severance-pay-calculation' },
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
        <li>
          <a href="/guide/onboarding-document-checklist">
            <h2>入职文件检查清单</h2>
            <p>新员工入职，先查合同、社保、证件与试用期四件事。书面合同一个月内订立、社保三十天内登记，照着清单走一遍，入职风险当天看清。</p>
          </a>
        </li>
        <li>
          <a href="/guide/termination-risk-check">
            <h2>解除与离职风险预检</h2>
            <p>解除劳动合同先分清是哪一种，再算补偿、走程序。经济补偿按工作年限每满一年一个月工资，违法解除赔偿金是补偿标准的二倍。</p>
          </a>
        </li>
        <li>
          <a href="/guide/overdue-payment-recovery">
            <h2>对方拖欠货款怎么办</h2>
            <p>对方拖欠货款，先固定证据、书面催告，再选支付令或诉讼。诉讼时效一般三年，拖得越久越要先留痕。</p>
          </a>
        </li>
        <li>
          <a href="/guide/deposit-max-amount">
            <h2>合同里的定金最多是多少？</h2>
            <p>定金最多是主合同标的额的百分之二十，超过部分不产生定金的效力。100 万元的合同，定金最多 20 万元。</p>
          </a>
        </li>
        <li>
          <a href="/guide/severance-pay-calculation">
            <h2>解除劳动合同，经济补偿怎么算？</h2>
            <p>每满一年一个月工资，六个月以上不满一年按一年，不满六个月半个月。3 年 8 个月、月薪 1 万，补偿 4 万元。</p>
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
