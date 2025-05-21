import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'

export default defineType({
    name: 'siteInfo',
    title: 'Site Info',
    type: 'document',
    icon: CogIcon,
    fields: [
        defineField({
            name: 'headerText',
            title: 'Header Blurb',
            description: 'Blurb that appears in the navigational header.',
            type: 'string'
        }),
        defineField({
            name: 'copyrightText',
            title: 'Copyright Text',
            description: 'Copyright text in the bottom left corner of the site.',
            type: 'string'
        }),
        defineField({
            name: 'publicationPageHeader',
            title: 'Publications Page Header',
            type: 'string'
        }),
        defineField({
            name: 'newsletterHeaderText',
            title: 'Newsleader Header',
            type: 'string'
        }),
        defineField({
            name: 'newsletterButtonText',
            title: 'Newsleader Submit Button Label',
            type: 'string'
        }),
        defineField({
            name: 'newsletterSuccessText',
            title: 'Newsleader Success Message',
            type: 'string'
        }),
        defineField({
            name: 'textOnlyPages',
            title: 'Text Only Pages',
            description: 'ex: Privacy Policy or Terms of Use',
            type: 'array',
            of: [
                defineField({
                    name: 'textOnlyPage',
                    title: 'Text Only Page',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string'
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
                            name: 'content',
                            title: 'Content',
                            type: 'blockContent'
                        }),
                    ]
                })
            ]
        })
    ]
})