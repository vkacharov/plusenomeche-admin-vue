import { BaseSearchApi } from "./BaseSearchApi";
import { searchExpenses } from '../graphql/queries';
import { createExpense } from '../graphql/mutations';

export class ExpensesApi extends BaseSearchApi {
    constructor() {
        super('searchExpenses', searchExpenses, createExpense);
    }
}