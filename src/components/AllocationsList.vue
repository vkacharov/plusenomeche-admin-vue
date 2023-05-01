<script>
import { reactive, inject, ref } from 'vue';
import TableLite from 'vue3-table-lite';
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
          field: "allocationName",
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
          label: "Дарение",
          field: "donation",
          width: "5%",
        },
        {
          label: "Кауза",
          field: "cause",
          width: "5%",
        },
        {
          label: "Сума",
          field: "amount",
          width: "3%",
        }
    ];

    const allocationsApi = inject('allocationsApi');

    const loadAggregates = async () => {
      const aggr = await createSumAggregate(allocationsApi, 'amount');
      aggregates.totalSum = aggr.totalSum;
      aggregates.totalNumber = aggr.totalNumber;
    } 

    const aggregates = reactive({
      totalSum: 0,
      totalNumber: 0
    });

    const filterConfig = [
      {name: 'allocationName', label: 'име', type: 'id'}, 
      {name: 'description', label: 'описание', type: 'string'}, 
      {name: 'date', label: 'дата', type: 'date'},
      {name: 'donationName', label: 'дарение', type: 'select', api: 'donationsApi'},
      {name: 'causeName', label: 'кауза', type: 'select', api: 'causesApi'},
    ];

    const addEditConfig = [... filterConfig, {name: 'amount', label: 'сума', type: 'number'}];

    const createAllocation = (item) => {
      allocationsApi.create(item);
    }

    const editAllocation = async (item) => {
        editModalVisible.value = false;
      try {
        await allocationsApi.update(item);
        notifyUpdateSuccess('заделена сума')();
      } catch (exception) {
        console.error('Failed to update Allocated Amount', exception);
        notifyUpdateException('заделена сума')();
      }
    }

    allocationsApi.onCreate(notifyCreateSuccess('заделена сума'));
    const editModalVisible = ref(false);

    const deleteAllocation = async (item) => {
      try {
        await allocationsApi.delete(item.id, item._version);
        notifyDeleteSuccess('заделена сума')();
      } catch (exception) {
        console.error('Failed to delete Allocated Amount', exception);
        notifyDeleteException('заделена сума')();
      }
    }

    await loadAggregates();

    return {
      columns,
      createAllocation,
      editAllocation,
      deleteAllocation,
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
  :apiName="'allocationsApi'" 
/>

  <div>
    <PaginatedTable
      :columns="columns"
      :entity="'allocation'"
      @tableEditButtonClick="editModalVisible = true"
      @tableDeleteConfirmed="deleteAllocation"
    />
  </div>

  <AggregatesComponent :aggregates="aggregates"/>

  <h2>Създай нова заделена сума</h2>
  <AddEditForm
    :config="addEditConfig"
    @addEditButtonClick="createAllocation"
  />

  <div class="update-modal">
    <Modal
      v-model:visible="editModalVisible"
      :title="'Промени заделена сума'"  
    >
      <AddEditForm 
        :config="addEditConfig"
        @addEditButtonClick="editAllocation"
        :apiName="'allocationsApi'"
        :isEdit="true"
      />
    </Modal>
  </div>
</template>
