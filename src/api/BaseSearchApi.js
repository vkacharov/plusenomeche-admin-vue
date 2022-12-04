import { API } from 'aws-amplify';

export class BaseSearchApi {
    #api;
    #query;

    constructor(api, query) {
        this.#api = api;
        this.#query = query;
    }

    async search(filter, aggregates) {
        const result = await API.graphql({
              query: this.#query,
              variables: { 
                limit: 100,
                filter: filter,
                aggregates: aggregates
              }
            });
    
        const rows = result.data[this.#api];
        return rows;
    }
}