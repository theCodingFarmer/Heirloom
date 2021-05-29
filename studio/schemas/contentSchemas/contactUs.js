export default {
    name: 'contactUs',
    title: 'Contact Us',
    type: 'object',
    fields: [
        {
            name: 'contactUsSectionTitle',
            title: 'Section Title',
            type: 'string',
            description: 'The main header for this section. e.g. Contact Us'
        },
        {
            name: 'contactUsSectionDescription',
            title: 'Contact Us Message',
            type: 'text',
            description: 'More details about contacting your business.'
        },
        {
            name: 'contactUsAddress',
            title: 'Address',
            type: 'string'
        },
        {
            name: 'contactUsEmail',
            title: 'E-Mail',
            type: 'string'
        },
        {
            name: 'contactUsPhone',
            title: 'Phone Number',
            type: 'string'
        },
    ]
}
