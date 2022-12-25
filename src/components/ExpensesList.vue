<script>
import { reactive, inject, ref } from 'vue';
import TableLite from 'vue3-table-lite';
import FilterComponent from './FilterComponent.vue';
import AggregatesComponent from './AggregatesComponent.vue';
import AddEditForm from './AddEditForm.vue';
import {createSumAggregate} from '../helpers/filter-helpers.js';
import PaginatedTable from './PaginatedTable.vue';
import {notifyCreateSuccess} from '../helpers/notification-helpers.js';
import { Modal } from 'usemodal-vue3';

export default {
  components: { TableLite, FilterComponent, AggregatesComponent, AddEditForm, PaginatedTable, Modal },

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

    const expensesApi = inject('expensesApi');

    const loadAggregates = async () => {
      const aggr = await createSumAggregate(expensesApi, 'amount');
      aggregates.totalSum = aggr.totalSum;
      aggregates.totalNumber = aggr.totalNumber;
    } 

    const aggregates = reactive({
      totalSum: 0,
      totalNumber: 0
    });

    const filterConfig = [
      {name: 'name', label: 'име', type: 'string'}, 
      {name: 'description', label: 'описание', type: 'string'}, 
      {name: 'date', label: 'дата', type: 'date'},
      {name: 'donationID', label: 'дарение', type: 'select', api: 'donationsApi'},
      {name: 'causeID', label: 'кауза', type: 'select', api: 'causesApi'},
    ];

    const addEditConfig = [... filterConfig, {name: 'amount', label: 'сума', type: 'number'}];

    const createExpense = (item) => {
      expensesApi.create(item);
    }

    const editExpense = (item) => {
      expensesApi.update(item);
      editModalVisible.value = false;
    }

    expensesApi.onCreate(notifyCreateSuccess('разход'));
    const editModalVisible = ref(false);

    await loadAggregates();

    return {
      columns,
      createExpense,
      editExpense,
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
  :apiName="'expensesApi'" 
/>

  <div>
    <PaginatedTable
      :columns="columns"
      :apiName="'expensesApi'"
      @tableEditButtonClick="editModalVisible = true"
    />
  </div>

  <AggregatesComponent :aggregates="aggregates"/>
  <AddEditForm
    :config="addEditConfig"
    @addEditButtonClick="createExpense"
  />

  <Modal 
    v-model:visible="editModalVisible"
    :title="'Промени разход'"  
  >
    <AddEditForm 
      :config="addEditConfig"
      @addEditButtonClick="editExpense"
      :apiName="'expensesApi'"
      :isEdit="true"
    />
  </Modal>
</template>
