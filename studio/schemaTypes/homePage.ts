import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'homepageContent',
      title: 'Homepage Content',
      type: 'blockContent',
      description: 'This content shows up before all of the other sections.'
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: 'textModule'},
        {type: 'gridModule'},
        {type: 'listModule'},
        {type: 'linkListModule'},
      ],
    }),
  ],
})
