import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'leader',
    title: 'Leadership Team',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Full Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'role',
            title: 'Job Title',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'image',
            title: 'Headshot',
            type: 'image',
            options: {
                hotspot: true // This lets your team crop the image directly in the CMS!
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'bio',
            title: 'Short Bio',
            type: 'text',
            rows: 4
        }),
        defineField({
            name: 'linkedin',
            title: 'LinkedIn URL',
            type: 'url'
        })
    ],
})