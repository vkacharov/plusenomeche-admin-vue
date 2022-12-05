import { BaseSearchApi } from "./BaseSearchApi";
import { searchExpenses } from '../graphql/queries';

export class ExpensesApi extends BaseSearchApi {
    constructor() {
        super('searchExpenses', searchExpenses);
    }
}