import {GiPlantRoots} from 'react-icons/gi';

export default {
    name: 'whatWeGrow',
    title: "What We Grow",
    type: 'document',
    icon: GiPlantRoots,
    fields: [
        {
            name: 'title',
            title: 'Product',
            type: 'string',
            description: 'Name of the product or produce.',
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Short description or features of this product.',
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: Rule => Rule.required()
        },
        {
            name: 'highlights',
            title: 'Product Highlights',
            description: 'Small bullet points that show up on the landing page.',
            type: 'array',
            of: [
                {
                    name: 'highlight',
                    title: 'Product Highlight',
                    type: 'string'
                }
            ]
        }
    ]
}
