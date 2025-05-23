import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'publication',
  title: 'Publication',
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
                source: 'title',
                maxLength: 96,
            }
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date'
    }),
    defineField({
      name: 'showInListView',
      title: 'Show in List View?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'dek',
      title: 'Description',
      type: 'blockContent',
      description: "Short description that will show up in the publication list view."
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      type: 'string',
      description: "Link to an external site rather than creating an internal content page."
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
  ],
})
