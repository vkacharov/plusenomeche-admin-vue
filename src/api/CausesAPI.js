import { BaseSearchApi } from "./BaseSearchApi";
import { searchCauses } from '../graphql/queries';
import { createCause, updateCause } from '../graphql/mutations';
import { onCreateCause } from '../graphql/subscriptions';

export class CausesApi extends BaseSearchApi {
    constructor() {
        super('searchCauses', searchCauses, createCause, onCreateCause, updateCause);
    }

    parseApiItems(apiCauses) {
        return apiCauses.map(cause => {
            let expensesSum;
        
            if (cause.Expenses && cause.Expenses.items) {
              expensesSum = 0;
              cause.Expenses.items.forEach(expense => {
                expensesSum += expense.amount;
              });
        
            }
            return {
              id: cause.id,
              name: cause.name, 
              date: cause.date,
              description: cause.description,
              amount: cause.amount,
              type: cause.type,
              expensesSum: expensesSum, 
              remaining: cause.amount - expensesSum
            }
          });
    }
}