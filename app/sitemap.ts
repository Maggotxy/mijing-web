import type { MetadataRoute } from 'next';

const published = new Date('2026-10-31T00:00:00+08:00');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mjvia.com',
      lastModified: published,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://mjvia.com/about',
      lastModified: new Date('2026-10-28T00:00:00+08:00'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://mjvia.com/guide',
      lastModified: published,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://mjvia.com/guide/sme-contract-review',
      lastModified: published,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mjvia.com/guide/contract-key-clauses',
      lastModified: published,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mjvia.com/guide/onboarding-document-checklist',
      lastModified: published,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mjvia.com/guide/termination-risk-check',
      lastModified: published,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mjvia.com/guide/overdue-payment-recovery',
      lastModified: published,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
