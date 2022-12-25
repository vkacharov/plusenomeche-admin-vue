import { API } from 'aws-amplify';

export class BaseSearchApi {
    #search;
    #searchQuery;
    #createMutation;
    #onCreateSubscription;
    #updateMutation;

    constructor(search, searchQuery, createMutation, onCreateSubscription, updateMutation) {

        this.#search = search;
        this.#searchQuery = searchQuery;
        this.#createMutation = createMutation;
        this.#onCreateSubscription = onCreateSubscription;
        this.#updateMutation = updateMutation;
    }

    async search(filter, from, limit) {
        const result = await API.graphql({
              query: this.#searchQuery,
              variables: {
                filter: filter,
                from: from, 
                limit: limit
              },
              authMode: 'AMAZON_COGNITO_USER_POOLS'
            });
    
        const rows = result.data[this.#search];
        return rows;
    }

    create(item) {
        API.graphql({
            query: this.#createMutation,
            variables: { 
              input: item
            },
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
    }

    async aggregate(aggregates) {
        const result = await API.graphql({
            query: this.#searchQuery,
            variables: {
              aggregates: aggregates
            },
            authMode: 'AMAZON_COGNITO_USER_POOLS'
          });
  
      const rows = result.data[this.#search];
      return rows;        
    }

    onCreate(next) {
      API.graphql({
          query: this.#onCreateSubscription,
          authMode: 'AMAZON_COGNITO_USER_POOLS'
        })
        .subscribe({
          next: next
        });
    }

    update(item) {
      API.graphql({
        query: this.#updateMutation,
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