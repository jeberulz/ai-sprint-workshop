import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      description: 'The testimonial quote',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'Name of the person giving the testimonial',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Job title or role of the author',
    }),
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'string',
      description: 'Badge text (e.g., "Shipped in 5 days")',
    }),
    defineField({
      name: 'gradient',
      title: 'Gradient',
      type: 'string',
      description: 'Tailwind gradient classes for the avatar',
      options: {
        list: [
          { title: 'Blue to Indigo', value: 'from-blue-500 to-indigo-600' },
          { title: 'Emerald to Teal', value: 'from-emerald-500 to-teal-600' },
          { title: 'Rose to Pink', value: 'from-rose-500 to-pink-600' },
          { title: 'Purple to Violet', value: 'from-purple-500 to-violet-600' },
          { title: 'Orange to Red', value: 'from-orange-500 to-red-600' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order to display testimonials',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})