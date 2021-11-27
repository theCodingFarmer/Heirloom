export default {
    name: 'shopCsaMembership',
    title: 'CSA Membership',
    type: 'document',
    fields: [
        {
            name: 'season',
            title: 'Season Year',
            type: 'number',
            validation: Rule => [
                Rule.required().error('Must include the season year'),
                Rule.min(2000).error('Not a valid year'),
                Rule.max(2100).error('Not a valid year')
            ]
        },
    ]
}
