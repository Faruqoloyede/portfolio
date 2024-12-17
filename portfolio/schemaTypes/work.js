import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title of Work',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image for the Work',
      type: 'image',
      options: {
        hotspot: true, 
      },
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon1',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true, 
              },
            },
            {
              name: 'icon2',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true, 
              },
            },
            {
              name: 'icon3',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true, 
              },
            },
          ],
        },
      ],
    },
    {
      name: 'liveSiteUrl',
      title: 'Link to Live Site',
      type: 'url',
    },
  ],
})