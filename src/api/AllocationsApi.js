import { BaseSearchApi } from "./BaseSearchApi";
import { searchAllocations } from '../graphql/queries';
import { createAllocation, updateAllocation, deleteAllocation } from '../graphql/mutations';
import { onCreateAllocation } from '../graphql/subscriptions';

export class AllocationsApi extends BaseSearchApi {
    constructor() {
        super({
              entity: 'allocation',
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
              _version: allocation._version,
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