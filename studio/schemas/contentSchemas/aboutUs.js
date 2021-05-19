export default {
    name: 'aboutUs',
    title: 'About Us',
    type: 'object',
    fields: [
        {
            name: 'aboutUsSectionTitle',
            title: 'Section Title',
            type: 'string'
        },
        {
            name: 'aboutUsHeader',
            title: 'Header',
            type: 'string',
        },
        {
            name: 'aboutUsDescription',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'aboutUsImage',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'aboutUsHighlights',
            title: 'Highlights',
            type: 'array',
            description: 'Small bullet points that show up on the landing page.',
            of: [
                {
                    name: 'aboutUsHighlight',
                    type: 'string'
                }
            ]
        }
    ]
}
