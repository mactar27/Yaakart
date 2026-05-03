import { MetadataRoute } from 'next'

const collections = [
  'mariage',
  'portrait', 
  'mode',
  'evenementiel',
  'paysage',
  'urbain',
  'nature',
  'lifestyle'
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yaakart.com'
  
  const collectionUrls = collections.map(slug => ({
    url: `${baseUrl}/collections/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...collectionUrls,
  ]
}
