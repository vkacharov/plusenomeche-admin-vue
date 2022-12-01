<script>
import { reactive } from 'vue'
import TableLite from "vue3-table-lite";
import { API } from 'aws-amplify';
import { searchDonors } from '../graphql/queries';

export default {
  components: { TableLite },

  async setup() {
    const donors = await API.graphql({
          query: searchDonors,
          variables: { limit: 100 }
        });

    console.log('DONORS', donors);
    const rows = donors.data.searchDonors.items;

    const table = reactive({
      isLoading: false,
      columns: [
        {
          label: "Име",
          field: "name",
          width: "3%",
          sortable: false,
          isKey: false,
        },
        {
          label: "Описание",
          field: "description",
          width: "15%",
          sortable: false,
        },
        {
          label: "Дата на започване",
          field: "date",
          width: "1%",
          sortable: false,
        },
      ],
      rows: rows,
      totalRecordCount: rows.length
    });

    return {
      table
    };
  }
}
</script>

<template>
  <main>
    <table-lite
      :is-loading="table.isLoading"
      :columns="table.columns"
      :rows="table.rows"
      :total="table.totalRecordCount"
      :sortable="false"
      @is-finished="table.isLoading = false"
      :isHidePaging="true"
    />
  </main>
</template>

<style scoped>
  main {
    display: flex;
    align-items: center;
  }
</style>

