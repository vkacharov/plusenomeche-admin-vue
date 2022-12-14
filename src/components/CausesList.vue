<script>
import { reactive, inject } from 'vue'
import TableLite from "vue3-table-lite";
import FilterComponent from './FilterComponent.vue';
import AggregatesComponent from './AggregatesComponent.vue';
import {createSumAggregate} from '../helpers/filter-helpers.js';

export default {
  components: { TableLite, FilterComponent, AggregatesComponent},

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
      const aggr = createSumAggregate('amount');
      const apiCauses = await causesApi.search(filter, aggr);
      const rows = parseApiCauses(apiCauses.items);
      table.rows = rows;
      table.totalRecordCount = apiCauses.total;
      table.isLoading = false;

      if (aggr) {
        aggregates.totalSum = apiCauses.aggregateItems.find(agg => agg.name == 'amountSum').result.value;
        aggregates.totalNumber = apiCauses.total;
      }
    }

    const aggregates = reactive({
      totalSum: 0,
      totalNumber: 0
    });

    await searchCauses();

    return {
      table,
      searchCauses,
      aggregates
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
  :config="[
      {name: 'name', label: 'име', type: 'string'}, 
      {name: 'description', label: 'описание', type: 'string'}, 
      {name: 'date', label: 'дата', type: 'date'},
      {name: 'type', label: 'вид', type: 'string'}
      ]"
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
</template>
