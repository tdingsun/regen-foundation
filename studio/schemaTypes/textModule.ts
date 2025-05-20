import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'textModule',
  title: 'Text Module',
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
                source: (_, { parent }) => {return parent.title},
                maxLength: 96,
            }
    }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'blockContent'
    }),
    defineField({
      name: 'cta',
      title: 'Call To Action Button',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
        }),
        defineField({
          name: 'link',
          title: 'Link',
          type: 'string',
        })
      ]
    })
  ],
})
