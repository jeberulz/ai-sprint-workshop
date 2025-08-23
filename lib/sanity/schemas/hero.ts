import { defineField, defineType } from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main headline for the hero section',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Hero description text',
    }),
    defineField({
      name: 'primaryButtonText',
      title: 'Primary Button Text',
      type: 'string',
      description: 'Text for the main CTA button',
    }),
    defineField({
      name: 'secondaryButtonText',
      title: 'Secondary Button Text',
      type: 'string',
      description: 'Text for the secondary button',
    }),
    defineField({
      name: 'availabilityText',
      title: 'Availability Text',
      type: 'string',
      description: 'Text about spots and next sprint date',
    }),
    defineField({
      name: 'splineUrl',
      title: 'Spline Background URL',
      type: 'url',
      description: 'URL for the Spline 3D background',
    }),
    defineField({
      name: 'demoApp',
      title: 'Demo App',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'App Title',
          type: 'string',
        }),
        defineField({
          name: 'status',
          title: 'Status',
          type: 'string',
          options: {
            list: [
              { title: 'Live', value: 'live' },
              { title: 'Demo', value: 'demo' },
              { title: 'Development', value: 'development' },
            ],
          },
        }),
        defineField({
          name: 'inputPlaceholder',
          title: 'Input Placeholder',
          type: 'string',
        }),
        defineField({
          name: 'inputExample',
          title: 'Input Example',
          type: 'string',
        }),
        defineField({
          name: 'analysisResults',
          title: 'Analysis Results',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),
  ],
})