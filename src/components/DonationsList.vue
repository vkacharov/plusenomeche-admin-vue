<script>
import { reactive, inject, ref } from 'vue'
import TableLite from "vue3-table-lite";
import FilterComponent from './FilterComponent.vue';
import AggregatesComponent from './AggregatesComponent.vue';
import AddEditForm from './AddEditForm.vue';
import {createSumAggregate} from '../helpers/filter-helpers.js';
import PaginatedTable from './PaginatedTable.vue';
import {notifyCreateSuccess, notifyDeleteSuccess, notifyUpdateSuccess, notifyDeleteException, notifyUpdateException} from '../helpers/notification-helpers.js';
import { Modal } from 'usemodal-vue3';

export default {
  components: { TableLite, FilterComponent, AggregatesComponent, AddEditForm, PaginatedTable, Modal },

  async setup() {
    const columns = [
        {
          label: "Име",
          field: "donationName",
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
          label: "Дарител",
          field: "donor",
          width: "5%",
        },
        {
          label: "Сума",
          field: "amount",
          width: "3%",
        },
        {
          label: "Вид",
          field: "type",
          width: "3%",
        },
      ];

    const donationsApi = inject('donationsApi');

    const loadAggregates = async () => {
      const aggr = await createSumAggregate(donationsApi, 'amount');
      aggregates.totalSum = aggr.totalSum;
      aggregates.totalNumber = aggr.totalNumber;
    } 

    const aggregates = reactive({
      totalSum: 0,
      totalNumber: 0
    });

    const createDonation = (item) => {
      donationsApi.create(item);
    }

    const editDonation = async (item) => {
      editModalVisible.value = false;
      try {
        await donationsApi.update(item);
        notifyUpdateSuccess('дарение')();
      } catch (exception) {
        console.error('Failed to update Donation', exception);
        notifyUpdateException('дарение')();
      }
    }

    const filterConfig = [
      {name: 'donationName', label: 'име', type: 'string'}, 
      {name: 'description', label: 'описание', type: 'string'}, 
      {name: 'date', label: 'дата', type: 'date'},
      {name: 'donorID', label: 'дарител', type: 'select', api: 'donorsApi'},
      {name: 'type', label: 'вид', type: 'string'},
    ];

    const addEditConfig = [... filterConfig, {name: 'amount', label: 'сума', type: 'number'}];

    donationsApi.onCreate(notifyCreateSuccess('дарение'));
    const editModalVisible = ref(false);

    const deleteDonation = async (item) => {
      try {
        await donationsApi.delete(item.id, item._version);
        notifyDeleteSuccess('дарение')();
      } catch (exception) {
        console.error('Failed to delete donation', exception);
        notifyDeleteException('дарение')();
      }
    }

    await loadAggregates();

    return {
      columns,
      createDonation,
      editDonation,
      deleteDonation,
      aggregates,
      filterConfig,
      addEditConfig,
      editModalVisible
    };
  }
}
</script>

<template>
  <FilterComponent 
    :config="filterConfig"
    :apiName="'donationsApi'"
  />
  <div>
    <PaginatedTable
      :columns="columns"
      :apiName="'donationsApi'"
      @tableEditButtonClick="editModalVisible = true"
      @tableDeleteConfirmed="deleteDonation"
    />
  </div>

  <AggregatesComponent :aggregates="aggregates" />

  <h2>Създай ново дарение</h2>
  <AddEditForm
    :config="addEditConfig"
    @addEditButtonClick="createDonation"
  />
  <div class="update-modal">
    <Modal 
      v-model:visible="editModalVisible"
      :title="'Промени дарение'"  
    >
      <AddEditForm 
        :config="addEditConfig"
        @addEditButtonClick="editDonation"
        :apiName="'donationsApi'"
        :isEdit="true"
      />
    </Modal>
  </div>
</template>
