import { BaseSearchApi } from "./BaseSearchApi";
import { searchCauses } from '../graphql/queries';

export class CausesApi extends BaseSearchApi {
    constructor() {
        super('searchCauses', searchCauses);
    }
}