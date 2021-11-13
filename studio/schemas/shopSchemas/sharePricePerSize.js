export default {
    name: 'sharePricePerSize',
    title: 'CSA Share Price Per Sizes',
    type: 'document',
    fields: [
        {
            name: 'sharePricePerSizeSmall',
            title: 'Small Share Price',
            type: 'number',
             validation: Rule => Rule.required()
        },
        {
            name: 'sharePricePerSizeMedium',
            title: 'Medium Share Price',
            type: 'number',
             validation: Rule => Rule.required()
        },
        {
            name: 'sharePricePerSizeLarge',
            title: 'Large Share Price',
            type: 'number',
             validation: Rule => Rule.required()
        }
    ]
}
