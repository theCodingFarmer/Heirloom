export default {
    name: 'cardGrid',
    title: 'Card Grid',
    type: 'object',
    fields: [
        {
            name: 'cardGridSectionTitle',
            title: 'Section Title',
            type: 'string'
        },
        {
            name: 'cardGridSectionDescription',
            title: 'Section Description',
            type: 'string'
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
