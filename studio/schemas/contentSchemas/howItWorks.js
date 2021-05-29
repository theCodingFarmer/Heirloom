export default {
    name: 'howItWorks',
    title: 'How It Works',
    type: 'object',
    fields: [
        {
            name: 'howItWorksSectionTitle',
            title: 'Section Title',
            type: 'string',
            description: 'The main header for this section. e.g. How it Works...'
        },
        {
            name: 'howItWorksSteps',
            title: 'Steps',
            type: 'array',
            of: [
                {
                    name: 'howItWorksStep',
                    type: 'howItWorksStep'
                }
            ]
        }
    ]
}
