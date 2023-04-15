// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Expense, Allocation, Cause, Donation, Donor } = initSchema(schema);

export {
  Expense,
  Allocation,
  Cause,
  Donation,
  Donor
};