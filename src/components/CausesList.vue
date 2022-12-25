<script>
import { reactive, inject, ref } from 'vue';
import TableLite from "vue3-table-lite";
import FilterComponent from './FilterComponent.vue';
import AggregatesComponent from './AggregatesComponent.vue';
import AddEditForm from './AddEditForm.vue';
import {createSumAggregate} from '../helpers/filter-helpers.js';
import PaginatedTable from './PaginatedTable.vue';
import {notifyCreateSuccess} from '../helpers/notification-helpers.js';
import { Modal } from 'usemodal-vue3';

export default {
  components: { TableLite, FilterComponent, AggregatesComponent, AddEditForm, PaginatedTable, Modal},

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

    const causesApi = inject('causesApi');

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

    const createCause = (item) => {
      causesApi.create(item);
    }

    const editCause = (item) => {
      causesApi.update(item);
      editModalVisible.value = false;
    }

    causesApi.onCreate(notifyCreateSuccess('кауза'));
    const editModalVisible = ref(false);

    await loadAggregates();

    return {
      columns,
      createCause,
      editCause,
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
  :apiName="'causesApi'" 
>  
</FilterComponent>

  <div>
    <PaginatedTable
      :columns="columns"
      :apiName="'causesApi'"
      @tableEditButtonClick="editModalVisible = true"
    />
  </div>

  <AggregatesComponent :aggregates="aggregates" />
  <AddEditForm
    :config="addEditConfig"
    @addEditButtonClick="createCause"
  />

  <Modal 
    v-model:visible="editModalVisible"
    :title="'Промени кауза'"  
  >
    <AddEditForm 
      :config="addEditConfig"
      @addEditButtonClick="editCause"
      :apiName="'causesApi'"
      :isEdit="true"
    />
  </Modal>
</template>
