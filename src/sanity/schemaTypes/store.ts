import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'store',
    title: 'Store Location',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Store Name / Mall (e.g., Elante Mall Phase 1)',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'city',
            title: 'City',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'address',
            title: 'Full Address',
            type: 'text',
            rows: 3
        }),
        defineField({
            name: 'phone',
            title: 'Contact Number',
            type: 'string'
        }),
        defineField({
            name: 'hours',
            title: 'Operating Hours',
            type: 'string',
            initialValue: '10:00 AM - 9:30 PM'
        })
    ],
})