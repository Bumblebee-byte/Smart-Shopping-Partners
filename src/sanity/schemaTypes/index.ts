import { type SchemaTypeDefinition } from 'sanity'
import job from './job'
import brand from './brand'
import news from './news'
import leader from './leader'
import store from './store'
import companyStats from './companyStats' // Import the new schema

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [job, brand, news, leader, store, companyStats], // Add it to the array
}