import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '企业法务 Agent｜面向中小企业的法务智能体 | 小觅法务',
  description: '小觅法务企业法务 Agent（法务智能体、法务 AI 助手），面向中小企业日常法务：合同审查、用工预检与企业知识管理，把没有专职法务也能做的日常法务工作变成可执行的流程。',
  alternates: { canonical: '/enterprise-legal-agent' },
  openGraph: {
    title: '企业法务 Agent｜面向中小企业的法务智能体 | 小觅法务',
    description: '小觅法务企业法务 Agent（法务智能体、法务 AI 助手），面向中小企业日常法务：合同审查、用工预检与企业知识管理，把没有专职法务也能做的日常法务工作变成可执行的流程。',
    type: 'website',
    url: '/enterprise-legal-agent',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: '小觅法务 · 企业法务 AI' }],
  },
  twitter: { card: 'summary_large_image', title: '企业法务 Agent｜面向中小企业的法务智能体 | 小觅法务', description: '小觅法务企业法务 Agent（法务智能体、法务 AI 助手），面向中小企业日常法务：合同审查、用工预检与企业知识管理。', images: ['/images/og-image.png'] },
};

const faqs = [
  { q: '企业法务 Agent 是什么？', a: '面向企业日常法务的 AI 助手，也叫法务智能体、法务 AI 助手。小觅法务的企业法务 Agent 覆盖合同审查、用工预检与企业知识管理，按合同原文和本方立场工作。' },
  { q: '法务 Agent 会直接改我的合同吗？', a: '不会。审查与修改分开：先出审查意见，由你决定是否采纳；确认采纳后，再按当前合同版本生成修订，原件与处理记录保留。' },
  { q: '没有专职法务的公司能用吗？', a: '能。这页面向的就是没有专职法务的中小企业：合同审查、用工预检、知识管理三件事按流程做，人工只做决定和确认。' },
  { q: '企业法务 Agent 具体帮企业做什么？', a: '日常法务工作：合同审查、入职材料核对、解除风险预检、经济补偿测算、履约提醒与知识留存。合同里的金额、比例和期限，以合同原文和双方已确认的事实为准，不替用户填写默认条件。' },
  { q: '小觅法务怎么收费？', a: '按年收费，人民币 4,999 元/年。' },
  { q: '和面向律所、大企业的法务 Agent 方案有什么不同？', a: '定位不同：那类方案多为律所与大企业定制交付；小觅法务面向中小企业日常法务，按年收费、自助使用，重点是合同审查、用工预检与企业知识管理。' },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      headline: '企业法务 Agent｜面向中小企业的法务智能体',
      description: '小觅法务企业法务 Agent（法务智能体、法务 AI 助手），面向中小企业日常法务：合同审查、用工预检与企业知识管理，把没有专职法务也能做的日常法务工作变成可执行的流程。',
      author: { '@type': 'Organization', name: '小觅法务', url: 'https://mjvia.com/' },
      publisher: { '@type': 'Organization', name: '小觅法务', url: 'https://mjvia.com/' },
      datePublished: '2026-11-24',
      dateModified: '2026-11-24',
      mainEntityOfPage: 'https://mjvia.com/enterprise-legal-agent',
      image: 'https://mjvia.com/images/og-image.png',
    },
    {
      '@type': 'FAQPage',
      name: '企业法务 Agent｜面向中小企业的法务智能体',
      about: { '@type': 'Organization', name: '小觅法务', url: 'https://mjvia.com/' },
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://mjvia.com/' },
        { '@type': 'ListItem', position: 2, name: '企业法务 Agent', item: 'https://mjvia.com/enterprise-legal-agent' },
      ],
    },
  ],
};

export default function EnterpriseLegalAgent() {
  return (
    <article className="guide">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <p className="eyebrow">小觅法务 · 企业法务 Agent</p>
      <h1>企业法务 Agent｜面向中小企业的法务智能体</h1>
      <p className="lede">企业法务 Agent，也叫法务智能体、法务 AI 助手，是面向企业日常法务的 AI 助手。它按企业的立场和合同原文工作，覆盖合同审查、用工预检与企业知识管理三件事：合同先审清再签，用工材料先核对再办入职，公司的规则、确认过的决定和历史记录留存下来，下一次遇到同类问题不用从零开始。</p>
      <p className="guide-meta">发布于 2026-11-24 · 小觅法务</p>

      <h2>企业法务 Agent 是什么</h2>
      <p>小觅法务就是这样一个企业法务 Agent：面向中小企业日常法务，按年收费，人民币 4,999 元/年。</p>

      <h2>没有专职法务的中小企业，日常法务卡在哪里</h2>
      <p>很多中小企业没有专职法务，合同靠经验和信任签，入职材料靠人工逐项核对，公司定过的规则散在聊天记录和文件夹里。风险往往不在签约那一刻，而在履约、回款、解约时才暴露出来：主体有没有核对、金额和付款节点写没写清、解约条件和代价事先看没看清、入职材料缺了哪一项、之前确认过的规则这次还找不找得到。</p>
      <p>企业法务 Agent 解决的是这层日常工作：先看清，再动手，处理过程和依据留下来。</p>

      <h2>企业法务 Agent 是怎么做事的</h2>
      <ol>
        <li><strong>先看清原文和立场</strong>：结合合同原文和本方立场，把问题和待确认的条款列出来；审查意见对应原文，缺少的附件、事实和商业条件会明确提出确认，而不是替用户填写默认金额或期限。</li>
        <li><strong>审查和修改分开</strong>：先出审查意见，由你决定是否采纳；确认需要采纳的意见后，再按当前合同版本生成修订，原件和处理记录保留。</li>
        <li><strong>用工先核对再办</strong>：入职材料逐项核对，缺项、过期、不一致的地方先列出来，再办入职手续。</li>
        <li><strong>知识留存下来</strong>：公司资料、确认过的规则和历史记录留存下来，下一次审同类合同、办同类入职，就不用从零开始。</li>
        <li><strong>签完继续跟进</strong>：合同签完才是履约的开始，关键节点（交付、验收、付款、续约）设提醒，回款异常早发现，履行过程中的往来记录留存。</li>
      </ol>

      <h2>三个日常场景</h2>
      <h3>合同审查</h3>
      <p>签约前先看主体、标的、金额与付款、期限与解约、责任与争议这五件事，再看细节条款。相关指南：<a href="/guide/sme-contract-review">中小企业没有法务，怎么审合同</a>；<a href="/guide/contract-key-clauses">合同审查重点看哪些条款</a></p>
      <h3>用工预检</h3>
      <p>入职材料核对、解除风险预检、经济补偿测算，先把数字和条件算清楚。相关指南：<a href="/guide/onboarding-document-checklist">入职材料清单</a>；<a href="/guide/severance-pay-calculation">解除劳动合同，经济补偿怎么算</a>；<a href="/guide/termination-risk-check">解除劳动合同前先做风险检查</a></p>
      <h3>回款与履约</h3>
      <p>对方拖欠货款、定金写高了，先按合同原文和已确认的事实算清楚再行动。相关指南：<a href="/guide/overdue-payment-recovery">对方拖欠货款怎么办</a>；<a href="/guide/deposit-max-amount">合同里的定金最多是多少</a></p>

      <h2>适合谁用</h2>
      <p>适合没有专职法务、但天天要签合同、办入职、跟进回款的中小企业；也适合已有法务或行政兼着做法务的团队，把重复性的审查、核对和留存工作先交给 Agent，人工只做决定和确认。面向律所和大企业定制交付的方案文不在这页的定位里——这页只讲中小企业日常法务怎么做。</p>

      <h2>法务 AI、法务智能体、企业法务 Agent 是同一个东西吗</h2>
      <p>说法不同，指的东西相近。「法务AI」是品类词，范围最宽；「法务智能体」是中文里更常用的叫法；「企业法务 Agent」强调面向企业、能按流程连续做事的形态。选产品时不用纠结叫法，看三点：是不是按合同原文和本方立场审查、审查和修改是不是分开、处理记录和知识留不留得下来。</p>

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
        <a href="/legal-ai">相关页面：法务AI｜中小企业法务 AI 怎么选</a>
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
