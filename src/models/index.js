// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Donation, Donor } = initSchema(schema);

export {
  Donation,
  Donor
};