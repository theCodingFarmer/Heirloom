export default {
    name: 'featuredProducts',
    title: 'Featured Products',
    type: 'object',
    fields: [
        {
            name: 'featuredProductSectionTitle',
            title: 'Section Title',
            type: 'string',
            description: 'The main header for this section. e.g. What We Grow'
        },
        {
            name: 'featuredProductSectionDescription',
            title: 'Section Description',
            type: 'string',
            description: 'One or two sentences to add to this section.'
        },
        {
            name: 'featuredProductCards',
            title: 'Featured Product Cards',
            type: 'array',
            description: 'Select the products to feature on the home landing page. Drag and drop to change order.',
            of: [{
                type: 'reference',
                to: [{type: 'whatWeGrow'}]
            }]
        },
        {
            name: 'featuredProductLinkText',
            title: 'Link to All Products Text',
            type: 'string',
            description: 'e.g. See Everything We Grow (If no title is provided, link will be hidden.)'
        },
    ]
}
