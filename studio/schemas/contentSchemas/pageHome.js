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
        }
    ]
}
