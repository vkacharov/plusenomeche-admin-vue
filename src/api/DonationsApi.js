import { BaseSearchApi } from "./BaseSearchApi";
import { searchDonations } from '../graphql/queries';

export class DonationsApi extends BaseSearchApi {
    constructor() {
        super('searchDonations', searchDonations);
    }
}