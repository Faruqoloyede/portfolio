export default {
    name: 'tools',
    title: 'Tools',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Tools Name',
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
    ]
}