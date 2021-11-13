export default {
    name: 'pageHome',
    title: "Home Page",
    type: 'document',
    preview: {
        prepare() {
            return {
                title: 'Home Page'
            }
        }
    },
    fields: [
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
            name: 'featuredProducts',
            title: 'Featured Products',
            type: 'featuredProducts'
        },
        {
            name: 'contactUs',
            title: 'Contact Us',
            type: 'contactUs'
        }
    ]
}
