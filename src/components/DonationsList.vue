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

    const donorsApi = new inject('donorsApi');
    const donationsApi = inject('donationsApi');

    const searchDonations = async (filter) => {
      const aggr = createSumAggregate('amount');
      const apiDonations = await donationsApi.search(filter, aggr);
      const rows = parseApiDonations(apiDonations.items);
      table.rows = rows;
      table.totalRecordCount = apiDonations.total;
      table.isLoading = false;
      if (aggr) {
        aggregates.totalSum = apiDonations.aggregateItems.find(agg => agg.name == 'amountSum').result.value;
        aggregates.totalNumber = apiDonations.total;
      }
    }

    const aggregates = reactive({
      totalSum: 0,
      totalNumber: 0
    });

    const createDonation = async (item) => {
      donationsApi.create(item);
    }

    const filterConfig = [
      {name: 'name', label: 'име', type: 'string'}, 
      {name: 'description', label: 'описание', type: 'string'}, 
      {name: 'date', label: 'дата', type: 'date'},
      {name: 'donorID', label: 'дарител', type: 'select', api: 'donorsApi'},
      {name: 'type', label: 'вид', type: 'string'},
    ];

    const addEditConfig = [... filterConfig, {name: 'amount', label: 'сума', type: 'number'}];

    await searchDonations();

    return {
      table,
      donorsApi,
      searchDonations,
      createDonation,
      aggregates,
      filterConfig,
      addEditConfig
    };
  }
}

function parseApiDonations(apiDonations) {
  return apiDonations.map(donation => {
    let expensesSum, remaining;
    
    if (donation.Expenses && donation.Expenses.items) {
      expensesSum = 0;
      donation.Expenses.items.forEach(expense => {
        expensesSum += expense.amount;
      });

      remaining = donation.amount - expensesSum;
    }

    return {
      name: donation.name, 
      date: donation.date,
      description: donation.description,
      amount: donation.amount,
      type: donation.type,
      donor: donation.Donor.name,
      expensesSum: expensesSum,
      remaining: remaining
    }
  });
}
</script>

<template>
  <FilterComponent 
    :config="filterConfig"
    @filterButtonClick="searchDonations"  
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
    :title="'Създай ново дарение'"
    @addEditButtonClick="createDonation"
  />
</template>
