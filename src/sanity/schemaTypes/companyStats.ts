import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'companyStats',
    title: 'Company Statistics',
    type: 'document',
    fields: [
        defineField({
            name: 'stores',
            title: 'Total Stores',
            type: 'string',
            description: 'e.g., "350+"',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'brands',
            title: 'Brand Partners',
            type: 'string',
            description: 'e.g., "28"',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'cities',
            title: 'Cities Presence',
            type: 'string',
            description: 'e.g., "42"',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: 'footfalls',
            title: 'Annual Footfalls',
            type: 'string',
            description: 'e.g., "18M+"',
            validation: (Rule) => Rule.required()
        }),
    ],
})