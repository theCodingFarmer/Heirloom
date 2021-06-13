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
            type: 'hero',
            description: 'Hero section details',
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
