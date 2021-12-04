export default {
    name: 'shopProductOptions',
    title: 'Product Options',
    type: 'object',
    fields: [
        {
            name: 'shopProductsOptionTitle',
            title: 'Option Title',
            type: 'string'
        },
        {
            name: 'shopProductsSelectableOptions',
            title: 'Selectable Options',
            type: 'array',
            of: [
                {
                    name: 'shopProductSelectableOption',
                    type: 'shopProductSelectableOption'
                }
            ]
        },
    ]
}
