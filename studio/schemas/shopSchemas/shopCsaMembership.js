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

            if (!title || !status) {
                return {
                    title: ''
                }
            }

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
            name: 'csaSummary',
            title: 'CSA Membership Summary',
            description: 'Short summary about CSA memberships.',
            type: 'text'
        },
        {
            name: 'seasonStatus',
            title: 'Season Status',
            type: 'string',
            description: 'If "Open" is selected, /shop is open for orders. If "Preorder" is selected, /preorder is open for orders. If "Closed" is selected, order process is removed with no message. If "Sold Out" is selected, order is removed and replaced with a sold out message.',
            options: {
                list: [
                    {title: 'Open', value: 'open'},
                    {title: 'Closed', value: 'closed'},
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
            name: 'seasonStatusSummary',
            title: 'Season Status Summary',
            description: 'Short summary for messaging around current season status.',
            type: 'text'
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
