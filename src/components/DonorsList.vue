<script>
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

    const createDonor = async (item) => {
      donorsApi.create(item);
    }

    const formConfig = [
      {name: 'name', label: 'име', type: 'string'}, 
      {name: 'description', label: 'описание', type: 'string'}, 
      {name: 'date', label: 'дата', type: 'date'}];

    return {
      columns,
      formConfig,
      createDonor
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
    />
  </div>

  <AddEditForm 
    :config="formConfig" 
    :title="'Създай нов дарител'"
    @addEditButtonClick="createDonor"
  />
</template>
