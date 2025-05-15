import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gridModule',
  title: 'Grid Module',
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
      name: 'gridItems',
      title: 'Grid Items',
      type: 'array',
      of: [
        defineField({
          name: 'gridItem',
          title: 'Grid Item',
          type: 'object',
          fields: [
defineField({
          name: 'image',
          title: 'Image',
          type: 'image'
        }),
        defineField({
          name: 'header',
          title: 'Header',
          type: 'string'
        }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'blockContent'
        }),
        defineField({
          name: 'link',
          title: 'Link',
          type: 'string'
        }),
          ]
        })
        

      ]
    })

    
  ],
})
