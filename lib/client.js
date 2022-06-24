import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: 'l5t5a2rx',
  dataset: 'production',
  apiVersion: '2022-06-21',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const UrlFor = (source) => builder.image(source)