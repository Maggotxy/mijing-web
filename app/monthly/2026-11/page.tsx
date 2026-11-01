import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '小觅月报 2026-11 | 小觅法务',
  description: '小觅月报 2026 年 11 月：slogan 保留「明径」，百度备案号申诉已提交，4K 母带移出仓库，调研仍待分发，12 月汇总调研结果。',
  alternates: { canonical: '/monthly/2026-11' },
  openGraph: {
    title: '小觅月报 2026-11 | 小觅法务',
    description: 'slogan 保留「明径」，百度备案号申诉已提交，调研仍待分发，12 月汇总调研结果。',
    type: 'website',
    url: '/monthly/2026-11',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: '小觅法务 · 企业法务 AI' }],
  },
  twitter: { card: 'summary_large_image', title: '小觅月报 2026-11 | 小觅法务', description: 'slogan 保留「明径」，百度备案号申诉已提交，调研仍待分发，12 月汇总调研结果。', images: ['/images/og-image.png'] },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: '小觅月报 2026-11',
      description: '小觅月报 2026 年 11 月：slogan 保留「明径」，百度备案号申诉已提交，4K 母带移出仓库，调研仍待分发，12 月汇总调研结果。',
      url: 'https://mjvia.com/monthly/2026-11',
      inLanguage: 'zh-CN',
      datePublished: '2026-11-01',
      dateModified: '2026-11-01',
      author: { '@type': 'Organization', name: '小觅法务', url: 'https://mjvia.com/' },
      publisher: { '@type': 'Organization', name: '小觅法务', url: 'https://mjvia.com/' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://mjvia.com/' },
        { '@type': 'ListItem', position: 2, name: '小觅月报 2026-11', item: 'https://mjvia.com/monthly/2026-11' },
      ],
    },
  ],
};

export default function Monthly202611() {
  return (
    <article className="guide">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\u003c') }} />
      <p className="eyebrow">小觅法务 · 小觅月报</p>
      <h1>小觅月报 2026-11</h1>
      <p className="lede">小觅月报每月一期，汇总产品、内容与法规库的更新。10 月的全部变化已记在首期月报，本期只记首期出刊（10 月 31 日）后的新进展，并更正首期一处说法：调研结果汇总在 12 月，不是 11 月。</p>
      <p className="guide-meta">2026 年 11 月 · 小觅法务</p>

      <h2>Slogan 保留「明径」</h2>
      <p>11 月 1 日，slogan 定为保留「明径」：「纷繁之中，自有明径」等 7 处不动，零改动，无需部署。公司主体仍为天津觅径科技有限公司，品牌英文名 MIJING，官网域名 mjvia.com 不变。</p>

      <h2>百度备案号申诉已提交</h2>
      <p>10 月 31 日 23:58，百度备案号申诉提交成功，状态“未处理”。待百度补全备案信息后，再回站点属性填备案号；百度 sitemap 提交仍待配额恢复。国内搜索以百度为主推进，360 与搜狗不再单做。</p>

      <h2>部署小修：4K 母带移出仓库</h2>
      <p>首页 4K 母带（36MB）超出 Cloudflare Workers 25MiB 单文件上限，曾致官网短暂无法访问，现已移出仓库、改由服务器直接提供，视频地址不变；1080p 版本仍在仓库内。</p>

      <h2>调研仍待分发：目前 0 份回答</h2>
      <p>中小企业合同管理现状调研截至 11 月 1 日仍是 0 份回答。调研 2026-10-31 至 12-31 收集回答，目标 100–300 家，完全匿名；结果将于 12 月汇总公布，并用于更新指南页。</p>

      <h2>月度检查：AI 助手首次提及小觅法务</h2>
      <p>11 月 1 日首次正式月查（新名基线）：26 条提问中真正提及小觅法务的有 3 条，都出在“和小觅法务和律师事务所是一样的吗？”这一问，Qwen、豆包、Kimi 各 1 条，且都正确定性为法务公司、非律所；mjvia.com 被引用仍是 0 次、被推荐 0 次。站点文件核对无误。</p>

      <h2>下月预告</h2>
      <p>12 月将汇总调研结果（样本量、各题占比、1–2 个核心数字），继续按真实提问增加指南页，并跟进百度收录与 AI 助手的引用情况。</p>

      <nav className="guide-nav" aria-label="相关链接">
        <a href="/monthly/2026-10">上一期：小觅月报 2026-10</a>
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
