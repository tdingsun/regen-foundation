import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'

export default defineType({
    name: 'siteMetadata',
    title: 'Site Metadata',
    type: 'document',
    icon: CogIcon,
    fields: [
        defineField({
            name: 'siteTitle',
            title: 'Site Title',
            description: 'For site meta tag. Recommended to be no more than around 60 characters.',
            type: 'string'
        }),
        defineField({
            name: 'siteDescription',
            title: 'Site Description',
            description: 'For site meta tag. Recommended to be no more than around 160 characters.',
            type: 'text'
        }),
        defineField({
            name: 'favicon',
            title: 'Favicon',
            type: 'file'
        }),
        defineField({
            name: 'siteImg',
            title: 'Open Graph Image',
            description: 'For Open Graph preview. IMPORTANT: File needs to be less that 300KB',
            type: 'image'
        }),
        defineField({
            name: 'siteImgURL',
            title: 'Open Graph Image URL',
            description: 'Click "Copy URL" from the image above, and paste it below.',
            type: 'string'
        }),
    ]

})