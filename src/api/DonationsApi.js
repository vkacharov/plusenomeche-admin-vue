import { BaseSearchApi } from "./BaseSearchApi";
import { searchDonations } from '../graphql/queries';
import { createDonation } from '../graphql/mutations';

export class DonationsApi extends BaseSearchApi {
    constructor() {
        super('searchDonations', searchDonations, createDonation);
    }

    parseApiItems(apiDonations) {
        return apiDonations.map(donation => {
          let expensesSum, remaining;
          
          if (donation.Expenses && donation.Expenses.items) {
            expensesSum = 0;
            donation.Expenses.items.forEach(expense => {
              expensesSum += expense.amount;
            });
      
            remaining = donation.amount - expensesSum;
          }
      
          return {
            name: donation.name, 
            date: donation.date,
            description: donation.description,
            amount: donation.amount,
            type: donation.type,
            donor: donation.Donor.name,
            expensesSum: expensesSum,
            remaining: remaining
          }
        });
    }
}