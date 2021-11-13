export default {
    name: 'shopAdditionalProducts',
    title: 'Additional Products',
    type: 'document',
    fields: [
        {
            name: 'additionalProductTitle',
            title: 'Product Title',
            type: 'string'
        },
        {
            name: 'additionalProductDescription',
            title: 'Product Description',
            type: 'text',
            description: 'Small paragraph to describe this product.'
        },
        {
            name: 'additionalProductPrice',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'additionalProductImage',
            title: 'Image',
            type: 'image'
        }
    ],
    initialValue: {
        currency: 'usd'
    }
}
