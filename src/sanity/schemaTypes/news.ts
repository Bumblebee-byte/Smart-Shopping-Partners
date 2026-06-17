import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'news',
    title: 'News Article',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Headline',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: ['Expansion', 'Partnership', 'ESG', 'Finance', 'Awards', 'Leadership']
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'publishedAt',
            title: 'Publish Date',
            type: 'date',
            options: { dateFormat: 'MMM DD, YYYY' },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'excerpt',
            title: 'Summary / Excerpt',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'isFeatured',
            title: 'Feature this story?',
            type: 'boolean',
            description: 'Turn this on to make this the massive main story at the top left of the page.',
            initialValue: false
        })
    ],
})