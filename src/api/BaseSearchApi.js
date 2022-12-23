import { API } from 'aws-amplify';

export class BaseSearchApi {
    #api;
    #query;
    #create;

    constructor(api, query, create) {
        this.#api = api;
        this.#query = query;
        this.#create = create;
    }

    async search(filter, aggregates, from, limit) {
        const result = await API.graphql({
              query: this.#query,
              variables: {
                filter: filter,
                aggregates: aggregates,
                from: from, 
                limit: limit
              },
              authMode: 'AMAZON_COGNITO_USER_POOLS'
            });
    
        const rows = result.data[this.#api];
        return rows;
    }

    async create(item) {
        const result = await API.graphql({
            query: this.#create,
            variables: { 
              input: item
            },
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
    }

    parseApiItems(apiItems) {
        return [];
    }
}