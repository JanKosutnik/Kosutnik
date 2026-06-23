import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'
import { getWriting } from '@/lib/writing'

const BASE = 'https://kosutnik.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = (getWriting() as { slug: string }[]).map((p) => ({
    url: `${BASE}/writing/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }))

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...posts,
  ]
}
