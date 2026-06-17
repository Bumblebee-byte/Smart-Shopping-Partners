import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'brand',
    title: 'Brand Portfolio',
    type: 'document',
    fields: [
        defineField({ name: 'name', title: 'Brand Name', type: 'string' }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: { list: ['Fashion', 'Footwear', 'Beauty', 'Lifestyle'] }
        }),
        defineField({ name: 'region', title: 'Region/Origin', type: 'string' }),
        defineField({ name: 'stores', title: 'Store Count Description (e.g., "42 stores in India")', type: 'string' }),
        defineField({ name: 'badge', title: 'Badge (Optional - e.g., Bestseller, New)', type: 'string' }),
        defineField({
            name: 'bg',
            title: 'Background Color Class',
            type: 'string',
            description: 'Enter a Tailwind color class (e.g., bg-red-800, bg-blue-200, bg-gray-200)',
            initialValue: 'bg-gray-800'
        }),
    ],
})