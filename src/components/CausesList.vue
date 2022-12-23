<script>
import { reactive, inject } from 'vue'
import TableLite from "vue3-table-lite";
import FilterComponent from './FilterComponent.vue';
import AggregatesComponent from './AggregatesComponent.vue';
import AddEditForm from './AddEditForm.vue';
import {createSumAggregate} from '../helpers/filter-helpers.js';

export default {
  components: { TableLite, FilterComponent, AggregatesComponent, AddEditForm},

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
          label: "Сума",
          field: "amount",
          width: "3%",
        },
        {
          label: "Вид",
          field: "type",
          width: "3%",
        },
        {
          label: "Използвани",
          field: "expensesSum",
          width: "3%",
        },
        {
          label: "Оставащи",
          field: "remaining",
          width: "3%",
        },
      ],
      rows: [],
      totalRecordCount: 0
    });

    const causesApi = inject('causesApi');

    const searchCauses = async (filter) => {
      const apiCauses = await causesApi.search(filter);
      const rows = parseApiCauses(apiCauses.items);
      table.rows = rows;
      table.totalRecordCount = apiCauses.total;
      table.isLoading = false;
    }

    const loadAggregates = async () => {
      const aggr = await createSumAggregate(causesApi, 'amount');
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
      {name: 'type', label: 'вид', type: 'string'},
    ];

    const addEditConfig = [... filterConfig, {name: 'amount', label: 'сума', type: 'number'}];

    const createCause = async (item) => {
      causesApi.create(item);
    }

    await searchCauses();
    await loadAggregates();

    return {
      table,
      searchCauses,
      createCause,
      aggregates,
      filterConfig,
      addEditConfig
    };
  }
}

function parseApiCauses(apiCauses) {
  return apiCauses.map(cause => {
    let expensesSum;

    if (cause.Expenses && cause.Expenses.items) {
      expensesSum = 0;
      cause.Expenses.items.forEach(expense => {
        expensesSum += expense.amount;
      });

    }
    return {
      name: cause.name, 
      date: cause.date,
      description: cause.description,
      amount: cause.amount,
      type: cause.type,
      expensesSum: expensesSum, 
      remaining: cause.amount - expensesSum
    }
  });
}
</script>

<template>

<FilterComponent 
  :config="filterConfig"
  @filterButtonClick="searchCauses"  
>  
</FilterComponent>

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
    :title="'Създай нова кауза'"
    @addEditButtonClick="createCause"
  />
</template>
