import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {DocumentIcon} from '@sanity/icons'
import {media, mediaAssetSource} from 'sanity-plugin-media'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['siteInfo', 'siteMetadata', 'homePage'])

export default defineConfig({
  name: 'default',
  title: 'regen',

  projectId: 'oflfnr14',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Metadata')
              .id('siteMetadata')
              .icon(DocumentIcon)
              .child(
                S.document()
                  .schemaType('siteMetadata')
                  .documentId('siteMetadata')
                  .title('Site Metadata'),
              ),
            S.divider(),
            S.listItem()
              .title('Site Info')
              .id('siteInfo')
              .icon(DocumentIcon)
              .child(S.document().schemaType('siteInfo').documentId('siteInfo').title('Site Info')),
            S.listItem()
              .title('Home Page')
              .id('homePage')
              .icon(DocumentIcon)
              .child(S.document().schemaType('homePage').documentId('homePage').title('Home Page')),
            S.divider(),
            S.documentTypeListItem('publication').title('Publications'),
          ]),
    }),
    visionTool(),
    media(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
  form: {
    image: {
      assetSources: () => [mediaAssetSource],
    },
  },
})
