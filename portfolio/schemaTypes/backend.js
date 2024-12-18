export default {
    name: 'backend',
    title: 'Backend',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Backend Name',
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