import { defineField, defineType } from 'sanity'

export const agendaDay = defineType({
  name: 'agendaDay',
  title: 'Agenda Day',
  type: 'document',
  fields: [
    defineField({
      name: 'day',
      title: 'Day',
      type: 'string',
      description: 'Day identifier (e.g., "Day 1")',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title for the day',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of what happens on this day',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Lucide icon name',
      options: {
        list: [
          { title: 'Target', value: 'Target' },
          { title: 'Layout Dashboard', value: 'LayoutDashboard' },
          { title: 'Smartphone', value: 'Smartphone' },
          { title: 'Brain Circuit', value: 'BrainCircuit' },
          { title: 'Rocket', value: 'Rocket' },
        ],
      },
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Tailwind text color class',
      options: {
        list: [
          { title: 'Blue', value: 'text-blue-300' },
          { title: 'Indigo', value: 'text-indigo-300' },
          { title: 'Violet', value: 'text-violet-300' },
          { title: 'Emerald', value: 'text-emerald-300' },
          { title: 'Amber', value: 'text-amber-300' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order to display days',
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