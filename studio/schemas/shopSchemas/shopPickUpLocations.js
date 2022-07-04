export default {
    name: 'shopPickupLocations',
    title: 'Pickup Hours & Locations',
    type: 'document',
    preview: {
        select: {
            title: 'shopPickupLocationsDayOfWeek',
            subtitle: 'shopPickupLocationsLocationTitle'
        }
    },
    fields: [
        {
            name: 'shopPickupLocationsDayOfWeek',
            title: 'Day of the Week',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'shopPickupLocationsLocationTitle',
            title: 'Location Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'shopPickupLocationsTimeRange',
            title: 'Time Range',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'shopPickupLocationsAddress',
            title: 'Address',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'shopPickupLocationsStripeId',
            title: 'Stripe API Id',
            description: 'The associated Stripe API ID for this specific pickup time and location. This is needed so the pickup information will show during the checkout process and for the customer receipt.',
            type: 'string',
            validation: Rule => Rule.required()
        }
    ]
}
