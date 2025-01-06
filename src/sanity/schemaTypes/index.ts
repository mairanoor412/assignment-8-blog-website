import { type SchemaTypeDefinition } from 'sanity'
import PostType from './postType'
import Author from './author'
import PostImage from './postImage'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [PostType, Author, PostImage],
}
