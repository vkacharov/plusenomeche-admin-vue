<script>
import { reactive, inject } from 'vue'
import TableLite from "vue3-table-lite";
import FilterComponent from './FilterComponent.vue';
import AggregatesComponent from './AggregatesComponent.vue';
import AddEditForm from './AddEditForm.vue';
import {createSumAggregate} from '../helpers/filter-helpers.js';
import PaginatedTable from './PaginatedTable.vue';

export default {
  components: { TableLite, FilterComponent, AggregatesComponent, AddEditForm, PaginatedTable },

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

    await loadAggregates();

    return {
      columns,
      createDonation,
      aggregates,
      filterConfig,
      addEditConfig
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
    />
  </div>

  <AggregatesComponent :aggregates="aggregates" />

  <AddEditForm
    :config="addEditConfig"
    :title="'Създай ново дарение'"
    @addEditButtonClick="createDonation"
  />
</template>
