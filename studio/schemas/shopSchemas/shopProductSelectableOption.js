export default {
    name: 'shopProductSelectableOption',
    title: 'Product Selectable Option',
    type: 'object',
    fields: [
        {
            name: 'shopProductSelectableOptionChoice',
            title: 'Selectable Option Choice',
            type: 'string'
        },
        {
            name: 'pricingShopProductSelectableOption',
            title: 'Selectable Option Price',
            type: 'number',
            validation: Rule => [
                Rule.precision(2).error('Only 2 decimal places allowed.'),
                Rule.positive()
            ]
        }
    ]
}
