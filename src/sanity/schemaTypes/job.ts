import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'job',
    title: 'Job Posting',
    type: 'document',
    fields: [
        defineField({ name: 'title', title: 'Job Title', type: 'string' }),
        defineField({ name: 'location', title: 'Location', type: 'string' }),
        defineField({ name: 'department', title: 'Department', type: 'string' }),
        defineField({
            name: 'type',
            title: 'Employment Type',
            type: 'string',
            options: { list: ['Full-time', 'Part-time', 'Contract'] }
        }),
    ],
})