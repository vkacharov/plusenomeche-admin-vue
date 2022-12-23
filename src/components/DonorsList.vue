<script>
import { inject, ref } from 'vue'
import FilterComponent from './FilterComponent.vue';
import AddEditForm from './AddEditForm.vue';
import PaginatedTable from './PaginatedTable.vue';

export default {
  components: { PaginatedTable, FilterComponent, AddEditForm },

  async setup() {
    const columns = [
        {
          label: "Име",
          field: "name",
          width: "5%",
        },
        {
          label: "Описание",
          field: "description",
          width: "12%",
        },
        {
          label: "Дата",
          field: "date",
          width: "3%",
        },
        {
          label: "Брой дарения",
          field: "donationsNumber",
          width: "3%",
        },
        {
          label: "Общо дарени",
          field: "donationsSum",
          width: "3%",
        },
      ];
      
    const donorsApi = inject('donorsApi');
    const createDonor = (item) => {
      donorsApi.create(item);
    }

    const formConfig = [
      {name: 'name', label: 'име', type: 'string'}, 
      {name: 'description', label: 'описание', type: 'string'}, 
      {name: 'date', label: 'дата', type: 'date'}];

    const componentKey = ref(0);
    const forceUpdate = () => {
      // Wait 2.5 seconds for OpenSearch to index the new cause.
      setTimeout(() => { 
        componentKey.value += 1; // Forces a refresh of the components using this key
      }, 2500);
    }
    donorsApi.onCreate(forceUpdate);

    return {
      columns,
      formConfig,
      createDonor,
      componentKey
    };
  }
}
</script>

<template>

<FilterComponent 
  :config="formConfig"
  :apiName="'donorsApi'"
/>
  <div>
    <PaginatedTable
      :columns="columns"
      :apiName="'donorsApi'"
      :key = "componentKey"
    />
  </div>

  <AddEditForm 
    :config="formConfig" 
    :title="'Създай нов дарител'"
    @addEditButtonClick="createDonor"
  />
</template>
