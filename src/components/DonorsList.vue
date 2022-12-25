<script>
import { inject, ref } from 'vue'
import FilterComponent from './FilterComponent.vue';
import AddEditForm from './AddEditForm.vue';
import PaginatedTable from './PaginatedTable.vue';
import { notify } from "@kyvg/vue3-notification";

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

    const editDonor = (item) => {
      donorsApi.update(item);
    }

    const formConfig = [
      {name: 'name', label: 'име', type: 'string'}, 
      {name: 'description', label: 'описание', type: 'string'}, 
      {name: 'date', label: 'дата', type: 'date'}];

    const forceUpdate = () => {
      notify({
          title: 'Успех',
          text: 'Дарителят беше създаден успешно. Рефрешнете страницата след няколко секунди.',
          type: 'success',
          duration: 10000
      });
    }
    donorsApi.onCreate(forceUpdate);

    return {
      columns,
      formConfig,
      createDonor,
      editDonor
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

  <AddEditForm 
    :config="formConfig" 
    :title="'Промени дарител'"
    @addEditButtonClick="editDonor"
    :apiName="'donorsApi'"
    :isEdit="true"
  />
</template>
