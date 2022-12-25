<script>
import { inject, ref } from 'vue'
import FilterComponent from './FilterComponent.vue';
import AddEditForm from './AddEditForm.vue';
import PaginatedTable from './PaginatedTable.vue';
import { Modal } from 'usemodal-vue3';
import {notifyCreateSuccess} from '../helpers/notification-helpers.js';

export default {
  components: { PaginatedTable, FilterComponent, AddEditForm, Modal },

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
      editModalVisible.value = false;
    }

    const formConfig = [
      {name: 'name', label: 'име', type: 'string'}, 
      {name: 'description', label: 'описание', type: 'string'}, 
      {name: 'date', label: 'дата', type: 'date'}];

    const editModalVisible = ref(false);
    donorsApi.onCreate(notifyCreateSuccess('дарител'));

    return {
      columns,
      formConfig,
      createDonor,
      editDonor,
      editModalVisible
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
      @tableEditButtonClick="editModalVisible = true"
    />
  </div>

  <h2>Създай нов дарител</h2>
  <AddEditForm 
    :config="formConfig"
    @addEditButtonClick="createDonor"
  />

  <Modal 
    v-model:visible="editModalVisible"
    :title="'Промени дарител'"  
  >
    <AddEditForm 
      :config="formConfig"
      @addEditButtonClick="editDonor"
      :apiName="'donorsApi'"
      :isEdit="true"
    />
  </Modal>
</template>
