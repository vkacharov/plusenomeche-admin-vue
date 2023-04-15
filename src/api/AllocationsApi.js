import { BaseSearchApi } from "./BaseSearchApi";
import { searchAllocations } from '../graphql/queries';
import { createAllocation, updateAllocation, deleteAllocation } from '../graphql/mutations';
import { onCreateAllocation } from '../graphql/subscriptions';

export class AllocationsApi extends BaseSearchApi {
    constructor() {
        super({
              search: 'searchAllocations', 
              searchQuery: searchAllocations, 
              createMutation: createAllocation, 
              onCreateSubscription: onCreateAllocation, 
              updateMutation: updateAllocation, 
              deleteMutation: deleteAllocation
            });
    }

    parseApiItems(apiAllocations) {
        return apiAllocations.map(allocation => {

            return {
              id: allocation.id,
              allocationName: allocation.allocationName, 
              date: allocation.date,
              description: allocation.description,
              amount: allocation.amount,
              donation: allocation.donationName,
              cause: allocation.causeName
            }
          });
    }
}