<script>
import { reactive } from 'vue'
import TableLite from "vue3-table-lite";
import ApiSelectComponent from './ApiSelectComponent.vue';
import FilterComponent from './FilterComponent.vue';
import AggregatesComponent from './AggregatesComponent.vue';
import {createSearchFilter, createSumAggregate} from '../helpers/filter-helpers.js';

export default {
  components: { TableLite, ApiSelectComponent, FilterComponent, AggregatesComponent },

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

    const formInputs = reactive({
        donationID: {
          type: 'string',
        },
        causeID: {
          type: 'string'
        }
      });

    const filterCallback = async (event) => {
      const filter = {};
      [event, formInputs].forEach(input => {
        for (let e in input) {
        filter[e] = {
          type: input[e].type,
          value: input[e].value
        }
      }
      });
      
      const searchFilter = createSearchFilter(filter);
      await searchExpenses(searchFilter);
    }

    const aggregates = reactive({
      totalSum: 0,
      totalNumber: 0
    });

    await searchExpenses();

    return {
      table,
      donationsApi,
      causesApi,
      filterCallback,
      formInputs,
      aggregates
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
  :config="[
      {name: 'name', label: 'име', type: 'string'}, 
      {name: 'description', label: 'описание', type: 'string'}, 
      {name: 'date', label: 'дата', type: 'date'},
      ]"
  @filterButtonClick="filterCallback"  
>
  <template #filter1>
    <label>Дарение</label>
    <div>
      <ApiSelectComponent :api="'donationsApi'" v-model="formInputs.donationID.value" />
    </div>
  </template>

  <template #filter2>
    <label>Кауза</label>
    <div>
      <ApiSelectComponent :api="'causesApi'" v-model="formInputs.causeID.value" />
    </div>
  </template>
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
