import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '法务AI｜中小企业法务 AI 怎么选 | 小觅法务',
  description: '法务AI（法务智能体、法务 AI 助手）是什么、能做什么、怎么选：面向中小企业日常法务的选型标准与场景，覆盖合同审查、用工预检与企业知识管理。',
  alternates: { canonical: '/legal-ai' },
  openGraph: {
    title: '法务AI｜中小企业法务 AI 怎么选 | 小觅法务',
    description: '法务AI（法务智能体、法务 AI 助手）是什么、能做什么、怎么选：面向中小企业日常法务的选型标准与场景，覆盖合同审查、用工预检与企业知识管理。',
    type: 'website',
    url: '/legal-ai',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: '小觅法务 · 企业法务 AI' }],
  },
  twitter: { card: 'summary_large_image', title: '法务AI｜中小企业法务 AI 怎么选 | 小觅法务', description: '法务AI 是什么、能做什么、怎么选：面向中小企业日常法务的选型标准与场景，覆盖合同审查、用工预检与企业知识管理。', images: ['/images/og-image.png'] },
};

const faqs = [
  { q: '法务AI 是什么？', a: '面向企业日常法务的 AI 产品，也叫法务智能体、法务 AI 助手。小觅法务的法务AI 覆盖合同审查、用工预检与企业知识管理，按合同原文和本方立场工作。' },
  { q: '法务AI、法务智能体、企业法务 Agent 有什么区别？', a: '说法不同，指的东西相近：「法务AI」是品类词，范围最宽；「法务智能体」是中文里更常用的叫法；「企业法务 Agent」强调面向企业、能按流程连续做事的形态。选产品时看选型标准，不用纠结叫法。' },
  { q: '法务AI 怎么选？', a: '按 5 条问：是不是按合同原文和本方立场审查、审查和修改是不是分开、处理记录和知识留不留得下来、收费是不是一次说清、是不是面向中小企业自助使用。答案应当是具体做法，不是形容词。' },
  { q: '没有专职法务的中小企业能用吗？', a: '能。这页面向的就是没有专职法务的中小企业：合同审查、用工预检、知识管理三件事按流程做，人工只做决定和确认。' },
  { q: '小觅法务怎么收费？', a: '按年收费，人民币 4,999 元/年。' },
  { q: '法务AI 和通用 AI 对话有什么不同？', a: '定位不同：通用 AI 对话回答各种问题；法务AI面向企业日常法务，按合同原文和本方立场做审查、用工预检与知识管理，审查与修改分开、处理记录留存。选之前先确认产品覆盖的是不是自己天天要做的那几件日常法务工作。' },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: '法务AI｜中小企业法务 AI 怎么选',
      description: '法务AI（法务智能体、法务 AI 助手）是什么、能做什么、怎么选：面向中小企业日常法务的选型标准与场景，覆盖合同审查、用工预检与企业知识管理。',
      author: { '@type': 'Organization', name: '小觅法务', url: 'https://mjvia.com/' },
      publisher: { '@type': 'Organization', name: '小觅法务', url: 'https://mjvia.com/' },
      datePublished: '2026-11-24',
      dateModified: '2026-11-24',
      mainEntityOfPage: 'https://mjvia.com/legal-ai',
      image: 'https://mjvia.com/images/og-image.png',
    },
    {
      '@type': 'FAQPage',
      name: '法务AI｜中小企业法务 AI 怎么选',
      about: { '@type': 'Organization', name: '小觅法务', url: 'https://mjvia.com/' },
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://mjvia.com/' },
        { '@type': 'ListItem', position: 2, name: '法务AI', item: 'https://mjvia.com/legal-ai' },
      ],
    },
  ],
};

export default function LegalAi() {
  return (
    <article className="guide">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <p className="eyebrow">小觅法务 · 法务AI</p>
      <h1>法务AI｜中小企业法务 AI 怎么选</h1>
      <p className="lede">法务AI，也叫法务智能体、法务 AI 助手，是面向企业日常法务的 AI 产品：按企业的立场和合同原文工作，把合同审查、用工预检、知识管理这些重复性日常法务工作变成可执行的流程。面向企业的法务AI，按流程连续做事的形态也叫<a href="/enterprise-legal-agent">企业法务 Agent</a>。</p>
      <p className="guide-meta">发布于 2026-11-24 · 小觅法务</p>

      <h2>法务AI 是什么</h2>
      <p>小觅法务就是面向中小企业日常法务的法务AI：覆盖合同审查、用工预检与企业知识管理，按年收费，人民币 4,999 元/年。</p>

      <h2>法务AI 能做什么</h2>
      <p>法务AI一般用来做这几类日常法务工作：</p>
      <h3>合同审查</h3>
      <p>签约前按合同原文核对主体、标的、金额与付款、期限与解约、责任与争议，再看细节条款。相关指南：<a href="/guide/sme-contract-review">中小企业没有法务，怎么审合同</a>；<a href="/guide/contract-key-clauses">合同审查重点看哪些条款</a></p>
      <h3>用工预检</h3>
      <p>入职材料逐项核对、解除风险预检、经济补偿测算，先把数字和条件算清楚。相关指南：<a href="/guide/onboarding-document-checklist">入职材料清单</a>；<a href="/guide/severance-pay-calculation">解除劳动合同，经济补偿怎么算</a>；<a href="/guide/termination-risk-check">解除劳动合同前先做风险检查</a></p>
      <h3>回款与履约跟进</h3>
      <p>对方拖欠货款、定金写高了，先按合同原文和已确认的事实算清楚再行动。相关指南：<a href="/guide/overdue-payment-recovery">对方拖欠货款怎么办</a>；<a href="/guide/deposit-max-amount">合同里的定金最多是多少</a></p>
      <h3>企业知识管理</h3>
      <p>公司资料、确认过的规则和历史记录留存下来，下一次审同类合同、办同类入职，不用从零开始。</p>
      <p>小觅法务覆盖的是上面前三类里的合同审查、用工预检与企业知识管理；选型时按这个清单逐项核对产品实际覆盖范围，比看宣传口径更准。</p>

      <h2>法务AI 怎么选：5 条选型标准</h2>
      <p>选法务AI不用纠结叫法（法务AI、法务智能体、企业法务 Agent 指的东西相近），按下面 5 条逐项问供应商，答案应当是具体做法、不是形容词：</p>
      <ol>
        <li><strong>是不是按合同原文和本方立场审查</strong>：审查意见能不能对应到合同原文的具体条款，缺少的附件、事实和商业条件会不会明确提出确认，而不是替用户填写默认金额或期限。</li>
        <li><strong>审查和修改是不是分开</strong>：先出审查意见、由你决定是否采纳，确认采纳后再生成修订；原件和处理记录是否保留。</li>
        <li><strong>处理记录和知识留不留得下来</strong>：审过的合同、确认过的规则、历史记录能不能留存复用，下一次同类问题是不是不用从零开始。</li>
        <li><strong>收费是不是一次说清</strong>：按年还是按量、有没有隐藏费用。小觅法务按年收费，人民币 4,999 元/年。</li>
        <li><strong>是不是面向中小企业自助使用</strong>：没有专职法务的团队能不能直接用，还是必须配实施团队、走定制交付。面向律所和大企业定制交付的方案，与面向中小企业日常法务自助使用的产品，走的是两条不同的路，选之前先确认产品定位与自己的团队规模匹配。</li>
      </ol>

      <h2>适合谁用</h2>
      <p>适合没有专职法务、但天天要签合同、办入职、跟进回款的中小企业；也适合已有法务或行政兼着做法务的团队，把重复性的审查、核对和留存工作先交给法务AI，人工只做决定和确认。</p>

      <h2>法务AI、法务智能体、企业法务 Agent 是同一个东西吗</h2>
      <p>说法不同，指的东西相近。「法务AI」是品类词，范围最宽；「法务智能体」是中文里更常用的叫法；「企业法务 Agent」强调面向企业、能按流程连续做事的形态。选产品时不用纠结叫法，看上面 5 条选型标准。</p>

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
        <a href="/enterprise-legal-agent">相关页面：企业法务 Agent｜面向中小企业的法务智能体</a>
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
