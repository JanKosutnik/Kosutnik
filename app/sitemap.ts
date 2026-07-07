import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'
import { getWriting } from '@/lib/writing'

const BASE = 'https://kosutnik.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const notes = (getWriting() as { slug: string }[]).map((note) => ({
    url: `${BASE}/notes/${note.slug}`,
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
    {
      url: `${BASE}/notes`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/principles`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...notes,
  ]
}
