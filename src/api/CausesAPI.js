import { BaseSearchApi } from "./BaseSearchApi";
import { searchCauses } from '../graphql/queries';
import { createCause } from '../graphql/mutations';

export class CausesApi extends BaseSearchApi {
    constructor() {
        super('searchCauses', searchCauses, createCause);
    }
}