import { BaseSearchApi } from "./BaseSearchApi";
import { searchDonors } from '../graphql/queries';

export class DonorsApi extends BaseSearchApi {
    constructor() {
        super('searchDonors', searchDonors);
    }
}