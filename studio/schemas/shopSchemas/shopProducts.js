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
            name: 'shopProductsOptions',
            title: 'Product Options',
            type: 'array',
            description: 'One option required but may include as many options needed for this product.',
            validation: Rule => [
                Rule.min(1).error('Must have at least one product option.')
            ],
            of: [
                {
                    name: 'shopProductSelectableOption',
                    type: 'shopProductSelectableOption'
                }
            ]
        }
    ]
}
