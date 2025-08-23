import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'Main site title',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      description: 'Site meta description',
    }),
    defineField({
      name: 'sectionTitles',
      title: 'Section Titles',
      type: 'object',
      fields: [
        defineField({
          name: 'testimonials',
          title: 'Testimonials Section Title',
          type: 'string',
        }),
        defineField({
          name: 'testimonialsSubtitle',
          title: 'Testimonials Section Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'faq',
          title: 'FAQ Section Title',
          type: 'string',
        }),
        defineField({
          name: 'faqSubtitle',
          title: 'FAQ Section Subtitle',
          type: 'string',
        }),
        defineField({
          name: 'outcomes',
          title: 'Outcomes Section Title',
          type: 'string',
        }),
        defineField({
          name: 'outcomesSubtitle',
          title: 'Outcomes Section Subtitle',
          type: 'string',
        }),
      ],
    }),
  ],
})