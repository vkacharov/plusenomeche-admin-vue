<script>
import { reactive, inject, ref } from 'vue';
import TableLite from 'vue3-table-lite';
import FilterComponent from './FilterComponent.vue';
import AggregatesComponent from './AggregatesComponent.vue';
import AddEditForm from './AddEditForm.vue';
import {createSumAggregate} from '../helpers/filter-helpers.js';
import PaginatedTable from './PaginatedTable.vue';
import { notify } from "@kyvg/vue3-notification";

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

    const forceUpdate = () => {
      notify({
          title: 'Успех',
          text: 'Разходът беше създаден успешно. Рефрешнете страницата след няколко секунди.',
          type: 'success',
          duration: 10000
      });
    }
    expensesApi.onCreate(forceUpdate);

    await loadAggregates();

    return {
      columns,
      createExpense,
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
  :apiName="'expensesApi'" 
/>

  <div>
    <PaginatedTable
      :columns="columns"
      :apiName="'expensesApi'"
    />
  </div>

  <AggregatesComponent :aggregates="aggregates"/>
  <AddEditForm
    :config="addEditConfig"
    :title="'Създай нов разход'"
    @addEditButtonClick="createExpense"
  />
</template>
