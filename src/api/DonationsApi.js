import { BaseSearchApi } from "./BaseSearchApi";
import { searchDonations } from '../graphql/queries';
import { createDonation } from '../graphql/mutations';

export class DonationsApi extends BaseSearchApi {
    constructor() {
        super('searchDonations', searchDonations, createDonation);
    }
}