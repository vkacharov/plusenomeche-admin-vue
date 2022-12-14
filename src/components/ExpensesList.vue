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
      const aggr = createSumAggregate('amount');
      const apiExpenses = await expensesApi.search(filter, aggr);
      const rows = parseApiExpenses(apiExpenses.items);
      table.rows = rows;
      table.totalRecordCount = apiExpenses.total;
      table.isLoading = false;
      if (aggr) {
        aggregates.totalSum = apiExpenses.aggregateItems.find(agg => agg.name == 'amountSum').result.value;
        aggregates.totalNumber = apiExpenses.total;
      }
    }

    const aggregates = reactive({
      totalSum: 0,
      totalNumber: 0
    });

    const formConfig = [
      {name: 'name', label: 'име', type: 'string'}, 
      {name: 'description', label: 'описание', type: 'string'}, 
      {name: 'date', label: 'дата', type: 'date'},
      {name: 'donationID', label: 'дарение', type: 'select', api: 'donationsApi'},
      {name: 'causeID', label: 'кауза', type: 'select', api: 'causesApi'}
    ];

    await searchExpenses();

    return {
      table,
      donationsApi,
      causesApi,
      searchExpenses,
      aggregates,
      formConfig
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
  :config="formConfig"
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
    :config="formConfig"
    :title="'Създай нов разход'"
  />
</template>
