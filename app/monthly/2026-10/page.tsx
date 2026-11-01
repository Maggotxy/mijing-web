import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '小觅月报 2026-10 | 小觅法务',
  description: '小觅月报 2026 年 10 月：品牌统一为小觅法务，5 篇指南上线，官网视频换新，价格 4,999 元/年，百度收录推进中，中小企业合同管理现状调研启动。',
  alternates: { canonical: '/monthly/2026-10' },
  openGraph: {
    title: '小觅月报 2026-10 | 小觅法务',
    description: '品牌统一为小觅法务，5 篇指南上线，官网视频换新，价格 4,999 元/年，调研启动。',
    type: 'website',
    url: '/monthly/2026-10',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: '小觅法务 · 企业法务 AI' }],
  },
  twitter: { card: 'summary_large_image', title: '小觅月报 2026-10 | 小觅法务', description: '品牌统一为小觅法务，5 篇指南上线，官网视频换新，价格 4,999 元/年，调研启动。', images: ['/images/og-image.png'] },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: '小觅月报 2026-10',
      description: '小觅月报 2026 年 10 月：品牌统一为小觅法务，5 篇指南上线，官网视频换新，价格 4,999 元/年，百度收录推进中，中小企业合同管理现状调研启动。',
      url: 'https://mjvia.com/monthly/2026-10',
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
        { '@type': 'ListItem', position: 2, name: '小觅月报 2026-10', item: 'https://mjvia.com/monthly/2026-10' },
      ],
    },
  ],
};

export default function Monthly202610() {
  return (
    <article className="guide">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\u003c') }} />
      <p className="eyebrow">小觅法务 · 小觅月报</p>
      <h1>小觅月报 2026-10</h1>
      <p className="lede">小觅月报每月一期，汇总产品、内容与法规库的更新。2026 年 10 月：品牌统一为小觅法务，5 篇指南上线，官网视频换新，价格定为 4,999 元/年，调研启动。</p>
      <p className="guide-meta">2026 年 10 月 · 小觅法务</p>

      <h2>品牌统一为小觅法务</h2>
      <p>10 月 31 日，产品名由觅径统一改为小觅法务，全站、指南页与 AI 结构化文件已同步。公司主体仍为天津觅径科技有限公司，品牌英文名为 MIJING，官网域名 mjvia.com 不变。</p>

      <h2>5 篇指南上线</h2>
      <p>围绕中小企业真实场景的 5 篇指南已全部上线，每篇答案前置、引用法条原文、配检查清单：中小企业没有法务怎么审合同、合同审查重点看哪些条款、入职文件检查清单、解除与离职风险预检、对方拖欠货款怎么办。</p>

      <h2>官网视频换新</h2>
      <p>首页视频换成中国实拍三镜：江面落日航拍、中国 CBD 玻璃幕墙黄昏、签约落笔特写，按深绿 #005032 做绿调。大屏或视网膜屏播放 3840×2160 的 4K 版本，其余播放 1920×1080 版本。</p>

      <h2>价格：4,999 元/年</h2>
      <p>企业法务年费定为人民币 4,999 元/年，已写入官网事实卡与服务说明。小觅法务提供日常法务辅助，不是律师事务所，不提供执业法律意见。</p>

      <h2>搜索收录：百度为主</h2>
      <p>国内搜索以百度为主推进收录，360 与搜狗不再单做。Bing 方面已通过 IndexNow 提交全部 8 个页面。Google Search Console 的展示数据自 10 月 27 日起开始收集。</p>

      <h2>调研启动：中小企业合同管理现状</h2>
      <p>中小企业合同管理现状调研已开始收集回答（2026-10-31 至 12-31，目标 100–300 家，完全匿名）。结果汇总后将公开，并用于更新指南页。</p>

      <h2>下月预告</h2>
      <p>12 月将汇总调研结果，继续按真实提问增加指南页，并跟进百度收录与 AI 助手的引用情况。</p>

      <nav className="guide-nav" aria-label="相关链接">
        <a href="/survey/contract-management-2026">参与调研：中小企业合同管理现状调研 2026</a>
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
