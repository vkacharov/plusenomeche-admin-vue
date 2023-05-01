import { BaseSearchApi } from "./BaseSearchApi";
import { searchDonors } from '../graphql/queries';
import { createDonor, updateDonor, deleteDonor } from '../graphql/mutations';
import { onCreateDonor } from '../graphql/subscriptions';

export class DonorsApi extends BaseSearchApi {
    constructor() {
        super({
          entity: 'donor',
          search: 'searchDonors', 
          searchQuery: searchDonors, 
          createMutation: createDonor, 
          onCreateSubscription: onCreateDonor, 
          updateMutation: updateDonor, 
          deleteMutation: deleteDonor
        });
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
              id: donor.id,
              _version: donor._version,
              donorName: donor.donorName, 
              date: donor.date,
              description: donor.description,
              donationsSum: donationsSum, 
              donationsNumber: donationsNumber
            }
        });
    }
}