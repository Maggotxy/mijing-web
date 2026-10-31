import type { Metadata } from 'next';
import SurveyForm from './survey-form';

export const metadata: Metadata = {
  title: '中小企业合同管理现状调研 2026 | 小觅法务',
  description: '小觅法务发起的中小企业合同管理现状调研：15 道题，约 3–5 分钟，完全匿名。结果将汇总公布，帮助更多中小企业看清合同管理的真实状况。',
  alternates: { canonical: '/survey/contract-management-2026' },
  openGraph: {
    title: '中小企业合同管理现状调研 2026 | 小觅法务',
    description: '15 道题，约 3–5 分钟，完全匿名。您的回答将汇总成公开的行业数字。',
    type: 'website',
    url: '/survey/contract-management-2026',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: '小觅法务 · 企业法务 AI' }],
  },
  twitter: { card: 'summary_large_image', title: '中小企业合同管理现状调研 2026 | 小觅法务', description: '15 道题，约 3–5 分钟，完全匿名。您的回答将汇总成公开的行业数字。', images: ['/images/og-image.png'] },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: '中小企业合同管理现状调研 2026',
      description: '小觅法务发起的中小企业合同管理现状调研：15 道题，约 3–5 分钟，完全匿名。结果将汇总公布。',
      url: 'https://mjvia.com/survey/contract-management-2026',
      inLanguage: 'zh-CN',
      datePublished: '2026-10-31',
      dateModified: '2026-10-31',
      author: { '@type': 'Organization', name: '小觅法务', url: 'https://mjvia.com/' },
      publisher: { '@type': 'Organization', name: '小觅法务', url: 'https://mjvia.com/' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://mjvia.com/' },
        { '@type': 'ListItem', position: 2, name: '中小企业合同管理现状调研 2026', item: 'https://mjvia.com/survey/contract-management-2026' },
      ],
    },
  ],
};

export default function SurveyContractManagement2026() {
  return (
    <article className="guide survey-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\u003c') }} />
      <p className="eyebrow">小觅法务 · 调研</p>
      <h1>中小企业合同管理现状调研 2026</h1>
      <p className="lede">没有法务的中小企业，合同到底是怎么管的？15 道题，约 3–5 分钟，完全匿名。您的回答会汇总成公开的行业数字，帮助更多企业看清真实状况。</p>
      <p className="guide-meta">调研时间：2026-10-31 至 2026-12-31 · 目标样本：100–300 家中小企业 · 小觅法务</p>

      <h2>为什么做这次调研</h2>
      <p>我们每天接触中小企业的合同问题：没人专门审合同、条款看不懂、回款拖着没人跟。但这些只是零散的感受，没有数字。公开的行业报告大多讲大企业，很少有人问中小企业——合同是谁在审、审一份要多久、一年被拖欠几次。这次调研就是想把这些问题问清楚，产出 1–2 个能公开引用的真实数字，写进我们的指南里，让更多企业参考。</p>

      <h2>关于匿名与结果公布</h2>
      <p>本问卷<strong>不收集公司名称、姓名、电话、邮箱等任何个人信息</strong>，回答只按整体汇总统计，不会对应到任何一家企业。调研结束后，我们会在小觅法务官网公布汇总结果（样本量、各题占比），并在指南页引用。调研方法说明：本次为自愿参与的在线问卷，属于便利样本（非随机抽样），公布的数字代表受访企业的情况，不直接推断为全部中小企业的整体水平；我们会同时公布样本量与收集时间。</p>

      <SurveyForm />

      <h2>调研结束后会发生什么</h2>
      <p>我们会把结果整理成一篇公开的调研小结：样本构成、各题占比，以及 1–2 个核心数字（例如没有专职法务的企业占比、审一份合同的平均耗时、过去一年遭遇拖欠的企业占比）。小结会发在官网，并同步更新到相关指南页。</p>

      <nav className="guide-nav" aria-label="相关链接">
        <a href="/guide/sme-contract-review">相关指南：中小企业没有法务，怎么审合同</a>
        <a href="/guide/overdue-payment-recovery">相关指南：对方拖欠货款怎么办</a>
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
