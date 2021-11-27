export default {
    name: 'csaShareSeason',
    title: 'Share Season',
    type: 'object',
    fields: [
        {
            name: 'totalWeeks',
            title: 'Total Weeks of Season',
            type: 'number',
            validation: Rule => Rule.required()
        },
        {
            name: 'seasonStart',
            title: 'Season Start',
            type: 'date',
            validation: Rule => Rule.required()
        },
        {
            name: 'seasonEnd',
            title: 'Season End',
            type: 'date',
            validation: Rule => Rule.required()
        },
        {
            name: 'availableProduce',
            title: 'Available Produce',
            description: 'Select available produce during this season.',
            type: 'array',
            of: [{
                type: 'reference',
                to: [
                    {
                        type: 'whatWeGrow'
                    }
                ]
            }]
        },
        {
            name: 'sharePricing',
            title: 'Share Pricing',
            type: 'csaPricing',
            description: 'Set the pricing for small, medium, and large shares.'
        }
    ]
}
