import type { MetadataRoute } from 'next';

// 显式放行主流 AI 搜索与助手爬虫，便于生成式引擎（GEO）收录与引用
const aiAgents = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Google-Extended',
  'Applebot-Extended',
  'Bytespider',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiAgents.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: 'https://mjvia.com/sitemap.xml',
  };
}
