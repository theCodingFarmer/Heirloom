export default {
    name: 'howItWorks',
    title: 'How It Works',
    type: 'object',
    fields: [
        {
            name: 'howItWorksSectionTitle',
            title: 'Section Title',
            type: 'string'
        },
        {
            name: 'howItWorksSteps',
            title: 'Steps',
            type: 'array',
            of: [
                {
                    name: 'stepTitle',
                    title: 'Step Title',
                    type: 'string',
                },
                {
                    name: 'stepDescription',
                    title: 'Step Description',
                    type: 'string',
                }
            ]
        }
    ]
}
