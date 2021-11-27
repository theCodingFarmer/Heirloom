export default {
    name: 'shopCsaMembership',
    title: 'CSA Membership',
    type: 'document',
    preview: {
        select: {
            title: 'season',
            status: 'seasonStatus'
        },
        prepare(selection) {
            const {title, status} = selection;
            return {
                title: `Season Year: ${title} (${status.toUpperCase()})`,
            }
        }
    },
    fields: [
        {
            name: 'season',
            title: 'Season Year',
            type: 'number',
            validation: Rule => [
                Rule.required().error('Must include the season year.'),
                Rule.min(2000).error('Not a valid year.'),
                Rule.max(2100).error('Not a valid year.')
            ]
        },
        {
            name: 'seasonStatus',
            title: 'Season Status',
            type: 'string',
            options: {
                list: [
                    {title: 'Open', value: 'open'},
                    {title: 'Preorder', value: 'preorder'},
                    {title: 'Sold Out', value: 'sold-out'}
                ],
                layout: 'radio'
            },
            validation: Rule => [
                Rule.required().error('Must select the current season status.')
            ]
        },
        {
            name: 'seasonDetailsSpring',
            title: 'Spring Season Details',
            type: 'csaShareSeason'
        },
        {
            name: 'seasonDetailsSummer',
            title: 'Summer Season Details',
            type: 'csaShareSeason'
        },
        {
            name: 'seasonDetailsFall',
            title: 'Fall Season Details',
            type: 'csaShareSeason'
        }
    ]
}
