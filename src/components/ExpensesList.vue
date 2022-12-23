<script>
import { reactive, inject } from 'vue'
import TableLite from "vue3-table-lite";
import FilterComponent from './FilterComponent.vue';
import AggregatesComponent from './AggregatesComponent.vue';
import AddEditForm from './AddEditForm.vue';
import {createSumAggregate} from '../helpers/filter-helpers.js';

export default {
  components: { TableLite, FilterComponent, AggregatesComponent, AddEditForm },

  async setup() {
    const table = reactive({
      isLoading: true,
      columns: [
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
      ],
      rows: [],
      totalRecordCount: 0
    });

    const donationsApi = inject('donationsApi');
    const expensesApi = inject('expensesApi');
    const causesApi = inject('causesApi');

    const searchExpenses = async (filter) => {
      const apiExpenses = await expensesApi.search(filter);
      const rows = parseApiExpenses(apiExpenses.items);
      table.rows = rows;
      table.totalRecordCount = apiExpenses.total;
      table.isLoading = false;
    }

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

    const createExpense = async (item) => {
      expensesApi.create(item);
    }

    await searchExpenses();
    await loadAggregates();

    return {
      table,
      donationsApi,
      causesApi,
      searchExpenses,
      createExpense,
      aggregates,
      filterConfig, 
      addEditConfig
    };
  }
}

function parseApiExpenses(apiExpenses) {
  return apiExpenses.map(expense => {
    return {
      name: expense.name, 
      date: expense.date,
      description: expense.description,
      amount: expense.amount,
      donation: expense.Donation.name,
      cause: expense.Cause.name
    }
  });
}
</script>

<template>

<FilterComponent 
  :config="filterConfig"
  @filterButtonClick="searchExpenses"  
/>

  <div>
    <table-lite
      :is-loading="table.isLoading"
      :columns="table.columns"
      :rows="table.rows"
      :total="table.totalRecordCount"

      @is-finished="table.isLoading = false"
      :isHidePaging="true"
    />
  </div>

  <AggregatesComponent :aggregates="aggregates" />
  <AddEditForm
    :config="addEditConfig"
    :title="'Създай нов разход'"
    @addEditButtonClick="createExpense"
  />
</template>
