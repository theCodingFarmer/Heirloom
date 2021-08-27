import iconLib from '../../../client/src/assets/iconLib';

export default {
    name: 'farmersBlogPost',
    title: "Farmer's Blog",
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Click generate to create a unique slug from title for URL links.',
            validation: Rule => Rule.required(),
            options: {
                source: 'title'
            }
        },
        {
            name: 'summary',
            title: 'Summary',
            description: 'Short summary of blog post. Displays on landing page and blog post tab.',
            type: 'text',
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            title: 'Cover Image',
            type: 'image',
            validation: Rule => Rule.required()
        },
        {
            name: 'body',
            title: 'Blog Post Article',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
                {
                    name: 'image',
                    type: 'object',
                    title: 'Image',
                    fields: [
                        {
                            name: 'image',
                            type: 'image',
                            validation: Rule => Rule.required()
                        },
                        {
                            name: 'altText',
                            title: 'Alt Text',
                            type: 'string'
                        }
                    ]
                }
            ],
            validation: Rule => Rule.required()
        }
    ]
}
