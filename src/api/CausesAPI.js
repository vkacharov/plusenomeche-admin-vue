import { BaseSearchApi } from "./BaseSearchApi";
import { searchCauses } from '../graphql/queries';
import { createCause, updateCause, deleteCause } from '../graphql/mutations';
import { onCreateCause } from '../graphql/subscriptions';

export class CausesApi extends BaseSearchApi {
    constructor() {
        super({
              entity: 'cause',
              search: 'searchCauses', 
              searchQuery: searchCauses, 
              createMutation: createCause, 
              onCreateSubscription: onCreateCause, 
              updateMutation: updateCause, 
              deleteMutation: deleteCause
            });
    }

    parseApiItems(apiCauses) {
        return apiCauses.map(cause => {

            return {
              _version: cause._version,
              causeName: cause.causeName, 
              date: cause.date,
              description: cause.description,
              amount: cause.amount,
              type: cause.type
            }
          });
    }
}