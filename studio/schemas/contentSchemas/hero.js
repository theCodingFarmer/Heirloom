export default {
    name: 'hero',
    title: "Hero",
    type: 'object',
    hidden: true,
    fields: [
        {
            name: 'introduction',
            title: 'Introduction',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'tagLine',
            title: 'Tag Line',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required()
        },
        {
            name: 'ctaButtonText',
            title: 'Call To Action Button Text',
            type: 'string',
        },
        {
            name: 'ctaButtonLink',
            title: 'Call To Action Button Link',
            type: 'string',
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            validation: Rule => Rule.required()
        }
    ]
}
