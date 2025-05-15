import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'listModule',
  title: 'List Module',
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
      name: 'listItems',
      title: 'List Items',
      type: 'array',
      of: [
        defineField({
            name: 'listItem',
            title: 'List Item',
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
          type: 'string',
          description: "ex: Person's name in a list of Team members."
        }),
        defineField({
          name: 'subheader',
          title: 'Subheader',
          type: 'string',
        description: "ex: Person's title in a list of Team members."
        }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'blockContent'
        }),
            ]
        })
        
      ]
    })

    
  ],
})
