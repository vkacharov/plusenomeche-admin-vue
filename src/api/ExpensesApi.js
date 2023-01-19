import { BaseSearchApi } from "./BaseSearchApi";
import { searchExpenses } from '../graphql/queries';
import { createExpense, updateExpense, deleteExpense } from '../graphql/mutations';
import { onCreateExpense } from '../graphql/subscriptions';

export class ExpensesApi extends BaseSearchApi {
    constructor() {
        super('searchExpenses', searchExpenses, createExpense, onCreateExpense, updateExpense, deleteExpense);
    }

    parseApiItems(apiExpenses) {
        return apiExpenses.map(expense => {
            return {
                id: expense.id,
                name: expense.name, 
                date: expense.date,
                description: expense.description,
                amount: expense.amount,
                donation: expense.Donation.name,
                cause: expense.Cause.name
            }
        });
    }
}