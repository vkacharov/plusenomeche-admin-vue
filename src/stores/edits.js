import { defineStore } from 'pinia';

export const useEditsStore = defineStore('edits', {
  state: () => {
    return { 
      edits: {
        donorsApi: {},
        causesApi: {},
        donationsApi: {},
        expensesApi: {}  
      }
    }
  },
  actions: {
    setEdit(apiName, edit) {
      this.edits[apiName] = edit;
      return apiName;
    }
  }
})
