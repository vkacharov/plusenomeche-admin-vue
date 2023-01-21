import { API } from 'aws-amplify';

export class BaseSearchApi {
    #search;
    #searchQuery;
    #createMutation;
    #onCreateSubscription;
    #updateMutation;
    #deleteMutation;

    constructor(props) {
        this.#search = props.search;
        this.#searchQuery = props.searchQuery;
        this.#createMutation = props.createMutation;
        this.#onCreateSubscription = props.onCreateSubscription;
        this.#updateMutation = props.updateMutation;
        this.#deleteMutation = props.deleteMutation;
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
        console.log('RESULT', result)
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

    async delete(id) {
      try {
        const result = await API.graphql({
          query: this.#deleteMutation,
          variables: { 
            input: {
              id: id
            }
          },
          authMode: 'AMAZON_COGNITO_USER_POOLS'
        });
        
        return result;
      } catch (exception) {
        throw exception.errors[0];
      }  
    }
  
    parseApiItems(apiItems) {
        return [];
    }
}