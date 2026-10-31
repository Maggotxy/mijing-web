import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '中小企业没有法务，怎么审合同 | 小觅法务',
  description: '没有专职法务的中小企业，审合同先看什么、哪些条款不能漏、怎么留痕。小觅法务把合同审查变成可执行的日常流程。',
  alternates: { canonical: '/guide/sme-contract-review' },
  openGraph: {
    title: '中小企业没有法务，怎么审合同 | 小觅法务',
    description: '没有专职法务的中小企业，审合同先看什么、哪些条款不能漏、怎么留痕。小觅法务把合同审查变成可执行的日常流程。',
    type: 'article',
    url: '/guide/sme-contract-review',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: '小觅法务 · 企业法务 AI' }],
  },
  twitter: { card: 'summary_large_image', title: '中小企业没有法务，怎么审合同 | 小觅法务', description: '没有专职法务的中小企业，审合同先看什么、哪些条款不能漏、怎么留痕。小觅法务把合同审查变成可执行的日常流程。', images: ['/images/og-image.png'] },
};

const faqs = [
  { q: '中小企业没有法务，合同一定要审吗？', a: '建议审。合同是合作规则的书面化，签之前看清权责，比出问题后再补救成本低得多。日常合同可以用工具辅助审查，重大交易再找律师。' },
  { q: '审合同最先看什么？', a: '先看主体、标的、金额与付款、期限与解约、责任与争议这五件，再看细节条款。' },
  { q: 'AI 审查会直接改我的合同吗？', a: '不会。审查与修改分开：你确认需要采纳的意见后，系统才按当前合同版本生成修订，原件与处理记录保留。' },
  { q: '合同里的金额、比例和期限，系统会自己填吗？', a: '不会。只沿用有原文或已确认事实支持的条件，需要新增或调整的商业条件会明确提出，不替你填写默认金额或期限。' },
  { q: '审完的合同怎么留存和跟进？', a: '在工作台查看修订内容和理由，导出带修订标记的 Word；履约提醒、回款辅助帮你跟进关键节点。' },
  { q: 'AI 审查能替代律师吗？', a: '不能。小觅法务提供日常法务辅助，涉及重大交易、复杂争议或事实不清的问题，应结合实际材料咨询专业律师。' },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: '中小企业没有法务，怎么审合同',
      description: '没有专职法务的中小企业，审合同先看什么、哪些条款不能漏、怎么留痕。小觅法务把合同审查变成可执行的日常流程。',
      author: { '@type': 'Organization', name: '小觅法务', url: 'https://mjvia.com/' },
      publisher: { '@type': 'Organization', name: '小觅法务', url: 'https://mjvia.com/' },
      datePublished: '2026-10-31',
      dateModified: '2026-10-31',
      mainEntityOfPage: 'https://mjvia.com/guide/sme-contract-review',
    },
    {
      '@type': 'FAQPage',
      name: '中小企业没有法务，怎么审合同',
      about: { '@type': 'Organization', name: '小觅法务', url: 'https://mjvia.com/' },
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://mjvia.com/' },
        { '@type': 'ListItem', position: 2, name: '指南', item: 'https://mjvia.com/guide' },
        { '@type': 'ListItem', position: 3, name: '中小企业没有法务，怎么审合同', item: 'https://mjvia.com/guide/sme-contract-review' },
      ],
    },
  ],
};

export default function GuideSmeContractReview() {
  return (
    <article className="guide">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\u003c') }} />
      <p className="eyebrow">小觅法务 · 指南</p>
      <h1>中小企业没有法务，怎么审合同</h1>
      <p className="lede">没有专职法务的中小企业，审合同先看什么、哪些条款不能漏、怎么留痕。小觅法务把合同审查变成可执行的日常流程。</p>
      <p className="guide-meta">发布于 2026-10-31 · 小觅法务</p>

      <h2>没有法务，不等于合同只能凭感觉签</h2>
      <p>很多中小企业签合同靠经验和信任：对方是熟人、模板是网上找的、条款看不懂就先签了。风险往往不在签约那一刻，而在履约、回款、解约时才暴露出来。审合同的目的不是把每一条都改成对自己最有利，而是先看清：这份合同让我承担了什么、对方承诺了什么、出了问题按什么规则处理。</p>

      <h2>一份合同，先看这五件事</h2>
      <ol>
        <li><strong>主体对不对</strong>：对方公司全称、统一社会信用代码、签约代表有没有授权，是否和谈判对象一致。</li>
        <li><strong>标的清不清</strong>：交付的是什么、数量、标准、验收方式，写得越具体，争议越少。</li>
        <li><strong>钱怎么算</strong>：金额、付款节点、付款条件、逾期怎么办。金额、比例和期限要以合同原文和双方已确认的事实为准，不要凭印象补。</li>
        <li><strong>期限与解约</strong>：合同期限、续签条件、提前解约的条件和代价，退出机制要事先看清。</li>
        <li><strong>责任与争议</strong>：违约责任、赔偿上限、争议解决方式（诉讼还是仲裁、在哪里解决），这是出问题时真正起作用的部分。</li>
      </ol>

      <h2>审查和修改要分开</h2>
      <p>好的审查流程是两步：先结合合同原文和本方立场，把问题和待确认的条款列出来；确认需要采纳的意见后，再按当前合同版本生成修订，原件和处理记录保留。审查意见应当对应原文，缺少的附件、事实和商业条件要补充确认，而不是替用户填写默认金额或期限。</p>

      <h2>审完之后，别让合同躺在文件夹里</h2>
      <p>合同签完才是履约的开始：关键节点（交付、验收、付款、续约）设提醒，回款异常早发现；履行过程中的往来记录留存，发生争议时才有依据。企业知识管理的作用就在这里：公司资料、确认过的规则和历史记录留存下来，下一次审同类合同就不用从零开始。</p>

      <h2>小觅法务能帮什么，不能帮什么</h2>
      <p>小觅法务是面向企业日常法务的 AI 助手，当前重点是合同审查：结合原文和企业立场分析问题，由你决定是否修改；同时覆盖用工预检与企业知识管理。小觅法务提供日常法务辅助，不是律师事务所，不提供执业法律意见；重大、复杂法律事务，请咨询专业律师。</p>

      <h2>常见问题</h2>
      <div className="faq-list">
        {faqs.map(({ q, a }) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>

      <nav className="guide-nav" aria-label="相关链接">
        <a href="/guide/contract-key-clauses">下一篇：合同审查重点看哪些条款</a>
        <a href="/guide">全部指南</a>
        <a href="/">返回首页</a>
      </nav>
      <div className="guide-cta">
        <p>进入工作台，从一份合同开始，了解与你业务相关的使用方式。</p>
        <a className="pill light" href="https://app.mjvia.com">进入工作台<span>→</span></a>
      </div>
    </article>
  );
}
