import { BaseSearchApi } from "./BaseSearchApi";
import { searchDonors } from '../graphql/queries';
import { createDonor } from '../graphql/mutations';
import { onCreateDonor } from '../graphql/subscriptions';

export class DonorsApi extends BaseSearchApi {
    constructor() {
        super('searchDonors', searchDonors, createDonor, onCreateDonor);
    }

    parseApiItems(apiDonors) {
        return apiDonors.map(donor => {
            let donationsSum, donationsNumber;

            if (donor.Donations && donor.Donations.items) {
              donationsSum = 0;
              donor.Donations.items.forEach(donation => {
                donationsSum += donation.amount;
              });
              donationsNumber = donor.Donations.items.length;
            }
            return {
              name: donor.name, 
              date: donor.date,
              description: donor.description,
              donationsSum: donationsSum, 
              donationsNumber: donationsNumber
            }
        });
    }
}