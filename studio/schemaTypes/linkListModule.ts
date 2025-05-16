import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'linkListModule',
  title: 'Link List Module',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: (_, {parent}) => {
          return parent.title
        },
        maxLength: 96,
      },
    }),
    defineField({
      name: 'listItems',
      title: 'List Items',
      type: 'array',
      of: [
        defineField({
          name: 'listItem',
          title: 'Link List Item',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'ex: Event title',
            }),
            defineField({
              name: 'subinfo',
              title: 'Supporting Info',
              type: 'string',
              description: 'ex: Event location',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
})
