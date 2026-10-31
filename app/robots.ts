import type { MetadataRoute } from 'next';

// 显式放行各家搜索引擎与 AI 搜索/助手爬虫，便于传统搜索（尤其 Bing、
// 百度等国内引擎）收录与生成式引擎（GEO）引用。360、搜狗、神马按用户
// 2026-10-31 决定不再单列（国内只做百度；User-agent: * Allow: / 仍覆盖）。
// 注意：线上 robots.txt 是 nginx 直接提供的 /var/www/seo/robots.txt
// 静态文件，改这里后必须同步把生成结果写到服务器静态文件，否则
// 线上还是旧版（与 sitemap.xml 同样的教训）。
const searchAgents = [
  // 国内引擎
  'Baiduspider',
  'Baiduspider-image',
  'Baiduspider-video',
  'Baiduspider-news',
  // 国际引擎
  'Googlebot',
  'Bingbot',
  'Applebot',
  'PetalBot',
  'DuckAssistBot',
];

const aiAgents = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Google-CloudVertexBot',
  'Applebot-Extended',
  'Bytespider',
  'Meta-ExternalAgent',
  'Meta-ExternalFetcher',
  'facebookexternalhit',
  'CCBot',
  'Amazonbot',
  'cohere-ai',
  'AI2Bot',
  'AI2Bot-Dolma',
  'xAI-Bot',
  'YouBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...searchAgents.map((userAgent) => ({ userAgent, allow: '/' })),
      ...aiAgents.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: 'https://mjvia.com/sitemap.xml',
  };
}
