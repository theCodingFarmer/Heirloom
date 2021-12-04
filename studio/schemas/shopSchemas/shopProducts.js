export default {
    name: 'shopProducts',
    title: 'Products',
    type: 'document',
    preview: {
        select: {
            title: 'shopProductsTitle',
            status: 'shopProductsStatus'
        },
        prepare(selection) {
            const {title, status} = selection;

            if (!title) {
                return {
                    title: ''
                }
            }

            return {
                title: `${title} ${status ?'✅' : '❌'}`,
            }
        }
    },
    fields: [
        {
            name: 'shopProductsStatus',
            title: 'Active',
            type: 'boolean',
            description: 'Order Status: ✅ Active | ❌ Inactive'
        },
        {
            name: 'shopProductsTitle',
            title: 'Product Title',
            type: 'string'
        },
        {
            name: 'shopProductsDescription',
            title: 'Product Description',
            type: 'text'
        },
        {
            name: 'shopProductsImage',
            title: 'Product Image',
            type: 'image'
        },
        {
            name: 'pricingShopProducts',
            title: 'Product Price',
            type: 'number',
            validation: Rule => [
                Rule.precision(2).error('Only 2 decimal places allowed.'),
                Rule.positive()
            ]
        },
        {
            name: 'shopProductsAdditionalOptions',
            title: 'Additional Options',
            type: 'array',
            description: 'Add as many options and optional price per option.',
            of: [
                {
                    name: 'shopProductOptions',
                    type: 'shopProductOptions'
                }
            ]
        }
    ]
}
