export default {
    name: 'cardGrid',
    title: 'Card Grid',
    type: 'object',
    fields: [
        {
            name: 'cardGridSectionTitle',
            title: 'Section Title',
            type: 'string',
            description: 'The main header for this section. e.g. Our Farm is For You'
        },
        {
            name: 'cardGridSectionDescription',
            title: 'Section Description',
            type: 'string',
            description: 'One or two sentences to add to this section.'
        },
        {
            name: 'cardGridCards',
            title: 'Cards',
            type: 'array',
            of: [
                {
                    name: 'cardGridCardTitle',
                    title: 'Card Title',
                    type: 'string'
                },
                {
                    name: 'cardGridCardDescription',
                    title: 'Card Description',
                    type: 'text'
                },
                {
                    name: 'cardGridCardImage',
                    title: 'Card Background Image',
                    type: 'image'
                }
            ]
        }
    ]
}
