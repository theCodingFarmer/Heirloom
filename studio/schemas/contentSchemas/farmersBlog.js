import {formatDate, isUniqueAcrossAllDocuments, todayDate} from '../schema-helper-functions/helper-functions';
import {GiFarmer} from 'react-icons/gi';

export default {
    name: 'farmersBlogPost',
    title: "Farmer's Blog",
    type: 'document',
    icon: GiFarmer,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'publishDate',
            title: 'Publish Date',
            type: 'date',
            description: 'Date of post for public display.',
            validation: Rule => Rule.required(),
            options: {
                dateFormat: 'M-D-YYYY'
            }
        },
        {
            name: 'summary',
            title: 'Summary',
            description: 'Short summary of blog post. Displays on landing page and blog post tab.',
            type: 'text',
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            title: 'Cover Image',
            type: 'image',
            validation: Rule => Rule.required()
        },
        {
            name: 'body',
            title: 'Blog Post Article',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
                {
                    name: 'image',
                    type: 'object',
                    title: 'Image',
                    fields: [
                        {
                            name: 'image',
                            type: 'image',
                        },
                        {
                            name: 'altText',
                            title: 'Alt Text',
                            type: 'string'
                        },
                        {
                            name: 'imageCaption',
                            title: 'Image Caption',
                            type: 'text',
                            description: 'Optional image caption.'
                        }
                    ]
                }
            ],
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Click generate to create a unique slug from title for URL links. Will automatically add the publish date to end of slug.',
            validation: Rule => Rule.required(),
            options: {
                isUnique: isUniqueAcrossAllDocuments,
                source: (doc) => `${doc.title}-${formatDate(doc.publishDate)}`
            }

        },
    ]
}
