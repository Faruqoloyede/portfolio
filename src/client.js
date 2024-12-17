import SanityClient from '@sanity/client'
import createImageUrlBuilder from '@sanity/image-url';

export const client =  SanityClient({
    projectId:  "gvqp4p2j",
    dataset: "production"
})

const builder = createImageUrlBuilder(client);
export const UrlFor = (source) => builder.image(source)