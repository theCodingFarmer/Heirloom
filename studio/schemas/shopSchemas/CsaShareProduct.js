export default {
    name: 'ShopCsaShare',
    title: 'CSA Share',
    type: 'document',
    fields: [
        {
            name: 'csaShareProductTitle',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'csaShareProductMessage',
            title: 'Message',
            type: 'text',
            description: 'Small paragraph to explain how to select what they need and checkout.'
        },
        {
            name: 'csaShareProductSeasonYear',
            title: 'Season Year',
            type: 'string'
        },
        {
            name: 'csaSharePricePerSize',
            title: 'CSA Price Per Size',
            type: 'sharePricePerSize'

        }
    ],
    initialValue: {
        currency: 'usd'
    }
};
