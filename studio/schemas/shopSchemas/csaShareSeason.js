export default {
    name: 'csaShareSeason',
    title: 'Share Season',
    type: 'object',
    fields: [
        {
            name: 'shareSeasonStatus',
            title: 'Status',
            type: 'string',
            description: 'A way to control specific seasons ordering. If "Sold Out" is selected, this specific season shows sold out, preventing additional orders.',
            options: {
                list: [
                    {title: 'Open', value: 'open'},
                    {title: 'Sold Out', value: 'sold-out'}
                ],
                layout: 'radio'
            },
            validation: Rule => [
                Rule.required().error('Must select the current status for this season.')
            ]
        },
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
            name: 'csaBasketSizePricingSmall',
            title: 'Small Basket Share Pricing',
            type: 'csaBasketSizePricing'
        },
        {
            name: 'csaBasketSizePricingMedium',
            title: 'Medium Basket Share Pricing',
            type: 'csaBasketSizePricing'
        },
        {
            name: 'csaBasketSizePricingLarge',
            title: 'Large Basket Share Pricing',
            type: 'csaBasketSizePricing'
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
        }
    ]
}
