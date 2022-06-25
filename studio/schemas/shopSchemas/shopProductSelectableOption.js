export default {
    name: 'shopProductSelectableOption',
    title: 'Product Selectable Option',
    type: 'object',
    fields: [
        {
            name: 'shopProductSelectableOptionTitle',
            title: 'Selectable Option Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'shopProductSelectableOptionStripeId',
            title: 'Stripe API Id',
            description: 'The associated Stripe API ID for this specific product.',
            type: 'string',
            validation: Rule => Rule.required()
        },
    ]
}
