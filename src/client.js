import SanityClient from '@sanity/client'
import createImageUrlBuilder from '@sanity/image-url';

export const client =  SanityClient({
    projectId:  import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: "production"
})

const builder = createImageUrlBuilder(client);
export const UrlFor = (source) => builder.image(source)