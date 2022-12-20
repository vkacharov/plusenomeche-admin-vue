import { defineStore } from 'pinia'

export const useFiltersStore = defineStore('filters', {
  state: () => {
    return { 
      filters: {
        donorsApi: {},
        causesApi: {},
        donationsApi: {},
        expensesApi: {}  
      }
    }
  },
  actions: {
    setFilter(apiName, filter) {
      this.filters[apiName] = filter;
      return apiName;
    }
  }
})
