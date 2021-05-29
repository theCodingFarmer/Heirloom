export default {
    name: 'pageHome',
    title: "Home Page",
    type: 'document',
    fields: [
        {
            name: 'homePage',
            title: 'Save As...',
            type: 'string',
            description: 'Build out your home landing page.'
        },
        {
            name: 'homeHero',
            title: 'Hero Section',
            type: 'array',
            of: [{
                    name: 'hero',
                    type: 'hero'
                }],
            description: 'Hero section details',
            validation: Rule => [
                Rule.required().error('A hero is required'),
                Rule.min(1).error('Must setup a hero for home page'),
                Rule.max(1).error('Only 1 hero banner is allowed')
            ]
        },
        {
            name: 'howItWorks',
            title: 'How It Works',
            type: 'howItWorks'
        },
        {
            name: 'aboutUs',
            title: 'About Us',
            type: 'aboutUs'
        },
        {
            name: 'cardGrid',
            title: 'Card Grid',
            type: 'cardGrid',

        },
        {
            name: 'whatWeGrow',
            title: 'What We Grow',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{type: 'whatWeGrow'}]
            }],
            description: 'Select the products to feature on the home landing page. Drag and drop to change order.'
        },
        {
            name: 'contactUs',
            title: 'Contact Us',
            type: 'contactUs'
        }
    ]
}
