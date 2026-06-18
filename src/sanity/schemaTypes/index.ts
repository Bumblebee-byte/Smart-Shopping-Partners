import { type SchemaTypeDefinition } from 'sanity';

// 1. Import all schema files
import brand from './brand';
import companyStats from './companyStats';
import heroSlideshow from './heroSlideshow';
import job from './job';
import leader from './leader';
import store from './store';
import news from './news';

// 2. Export the schema object with the 'types' array
export const schema = {
  types: [
    brand,
    companyStats,
    heroSlideshow,
    job,
    leader,
    store,
    news,
  ],
};