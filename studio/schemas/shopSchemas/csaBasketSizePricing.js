export default {
    name: 'csaBasketSizePricing',
    type: 'object',
    fields: [
        {
            name: 'csaBasketSizePricingStatus',
            title: 'Status',
            type: 'string',
            description: 'A way to control specific basket size ordering. If "Sold Out" is selected, this specific basket size shows sold out, preventing additional orders on this size only.',
            options: {
                list: [
                    {title: 'Open', value: 'open'},
                    {title: 'Sold Out', value: 'sold-out'}
                ],
                layout: 'radio'
            },
            validation: Rule => [
                Rule.required().error('Must select the current status for this basket size.')
            ]
        },
        {
            name: 'csaBasketSizePricingStripeId',
            title: 'Stripe API Id',
            description: 'The associated Stripe API ID for this specific product.',
            type: 'string',
            validation: Rule => Rule.required()
        }
    ]
}
