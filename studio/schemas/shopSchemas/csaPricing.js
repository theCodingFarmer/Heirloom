export default {
    name: 'csaPricing',
    title: 'Pricing',
    type: 'object',
    fields: [
        {
            name: 'pricingSmallShare',
            title: 'Small',
            type: 'number',
            validation: Rule => [
                Rule.required(),
                Rule.precision(2).error('Only 2 decimal places allowed.'),
                Rule.positive()
            ]
        },
        {
            name: 'pricingMediumShare',
            title: 'Medium',
            type: 'number',
            validation: Rule => [
                Rule.required(),
                Rule.precision(2).error('Only 2 decimal places allowed.'),
                Rule.positive()
            ]
        },
        {
            name: 'pricingLargeShare',
            title: 'Large',
            type: 'number',
            validation: Rule => [
                Rule.required(),
                Rule.precision(2).error('Only 2 decimal places allowed.'),
                Rule.positive()
            ]
        }
    ]
}
