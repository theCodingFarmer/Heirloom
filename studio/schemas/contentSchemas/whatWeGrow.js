export default {
    name: 'whatWeGrow',
    title: "What We Grow",
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Product',
            description: 'Name of the product or produce',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: Rule => Rule.required()
        },
        {
            name: 'highlights',
            title: 'Product Highlights',
            description: 'Small bullet points that show up on the landing page.',
            type: 'array',
            of: [
                {
                    name: 'highlight',
                    title: 'Product Highlight',
                    type: 'string'
                }
            ]
        }
    ]
}
