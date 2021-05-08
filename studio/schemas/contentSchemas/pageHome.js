export default {
    name: 'pageHome',
    title: "Home Page",
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Save As...',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'hero',
            title: 'Hero',
            type: 'object',
            fields: [
                {
                    name: 'introduction',
                    title: 'Introduction',
                    type: 'string',
                },
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    validation: Rule => Rule.required()
                },
                {
                    name: 'tagLine',
                    title: 'Tag Line',
                    type: 'string',
                },
                {
                    name: 'description',
                    title: 'Description',
                    type: 'text',
                    validation: Rule => Rule.required()
                },
                {
                    name: 'callToActionButton',
                    title: 'Call To Action Button Text',
                    type: 'string',
                }
            ]
        }
    ]
}
