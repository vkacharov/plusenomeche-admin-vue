import { BaseSearchApi } from "./BaseSearchApi";
import { searchDonations } from '../graphql/queries';
import { createDonation, updateDonation, deleteDonation } from '../graphql/mutations';
import { onCreateDonation } from '../graphql/subscriptions';

export class DonationsApi extends BaseSearchApi {
    constructor() {
        super({
          entity: 'donation',
          search: 'searchDonations', 
          searchQuery: searchDonations, 
          createMutation: createDonation, 
          onCreateSubscription: onCreateDonation, 
          updateMutation: updateDonation, 
          deleteMutation: deleteDonation
        });
    }

    parseApiItems(apiDonations) {
        return apiDonations.map(donation => {      
          return {
            id: donation.id,
            _version: donation._version,
            donationName: donation.donationName, 
            date: donation.date,
            description: donation.description,
            amount: donation.amount,
            type: donation.type,
            donor: donation.donorName
          }
        });
    }
}