export default {
    name: 'frontend',
    title: 'Frontend',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'frontend Name',
            type: 'string'
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            Options: {
                hotspot: true
            }
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'The order in which the service appears',
          },
    ]
}