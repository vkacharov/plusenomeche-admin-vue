<script>
import { inject, ref } from 'vue'
import FilterComponent from './FilterComponent.vue';
import AddEditForm from './AddEditForm.vue';
import PaginatedTable from './PaginatedTable.vue';
import { Modal } from 'usemodal-vue3';
import {notifyCreateSuccess, notifyDeleteSuccess, notifyUpdateSuccess, notifyDeleteException, notifyUpdateException} from '../helpers/notification-helpers.js';

export default {
  components: { PaginatedTable, FilterComponent, AddEditForm, Modal },

  async setup() {
    const columns = [
        {
          label: "Име",
          field: "donorName",
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
      ];
      
    const donorsApi = inject('donorsApi');
    const createDonor = (item) => {
      donorsApi.create(item);
    }

    const editDonor = async (item) => {
      editModalVisible.value = false;
      try {
        await donorsApi.update(item);
        notifyUpdateSuccess('дарител')();
      } catch (exception) {
        console.error('Failed to update Donor', exception);
        notifyUpdateException('дарител')();
      }
    }

    const deleteDonor = async (item) => {
      try {
        await donorsApi.delete(item.id, item._version);
        notifyDeleteSuccess('дарител')();
      } catch (exception) {
        console.error('Failed to delete Donor', exception);
        notifyDeleteException('дарител')();
      }
    }

    const formConfig = [
      {name: 'donorName', label: 'име', type: 'string'}, 
      {name: 'description', label: 'описание', type: 'string'}, 
      {name: 'date', label: 'дата', type: 'date'}];

    const editModalVisible = ref(false);
    donorsApi.onCreate(notifyCreateSuccess('дарител'));

    return {
      columns,
      formConfig,
      createDonor,
      editDonor,
      deleteDonor,
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
      @tableDeleteConfirmed="deleteDonor"
    />
  </div>

  <h2>Създай нов дарител</h2>
  <AddEditForm 
    :config="formConfig"
    @addEditButtonClick="createDonor"
  />

  <div class="update-modal">
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
</div>
</template>
