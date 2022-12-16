import { BaseSearchApi } from "./BaseSearchApi";
import { searchDonors } from '../graphql/queries';
import { createDonor } from '../graphql/mutations';

export class DonorsApi extends BaseSearchApi {
    constructor() {
        super('searchDonors', searchDonors, createDonor);
    }
}