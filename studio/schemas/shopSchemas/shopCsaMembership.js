import {GiBasket} from 'react-icons/all';

export default {
    name: 'shopCsaMembership',
    title: 'CSA Membership',
    type: 'document',
    fields: [
        {
            name: 'isCsaMembershipStatus',
            title: 'Season Status',
            type: 'array',
            description: 'Set current published season status.',
        },
    ]
}
