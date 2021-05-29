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
            description: 'Create the cards. Drag and drop to change order.',
            of: [
                {
                    name: 'cardGridCard',
                    type: 'cardGridCard'
                }
            ]
        }
    ]
}
