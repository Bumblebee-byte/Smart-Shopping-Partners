import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'heroSlideshow',
    title: 'Hero Slideshow',
    type: 'document',
    fields: [
        defineField({
            name: 'slides',
            title: 'Hero Images',
            type: 'array',
            of: [{
                type: 'image',
                options: { hotspot: true } // Allows you to crop images in the CMS
            }],
            validation: (Rule) => Rule.required().min(1)
        }),
    ],
})