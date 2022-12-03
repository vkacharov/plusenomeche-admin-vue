<script>
import { reactive } from 'vue'
import TableLite from "vue3-table-lite";
import { DonorsApi } from '../api/DonorsApi';
import { DonationsApi } from '../api/DonationsApi';
import ApiSelectComponent from '../components/ApiSelectComponent.vue';
import FilterComponent from './FilterComponent.vue';
import createSearchFilter from '../helpers/filter-helpers.js';

export default {
  components: { TableLite, ApiSelectComponent, FilterComponent },

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
          label: "Използвани",
          field: "expensesSum",
          width: "3%",
        },
      ],
      rows: [],
      totalRecordCount: 0
    });

    const donorsApi = new DonorsApi();
    const donationsApi = new DonationsApi();

    const searchDonations = async (filter = {}) => {
      const apiDonations = await donationsApi.search(filter);
      const rows = parseApiDonations(apiDonations.items);
      table.rows = rows;
      table.totalRecordCount = apiDonations.total;
      table.isLoading = false;
    }

    const formInputs = reactive({
        donorID: {
          type: 'string',
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
      await searchDonations(searchFilter);
      
    }

    await searchDonations();

    return {
      table,
      donorsApi,
      filterCallback,
      formInputs
    };
  }
}

function parseApiDonations(apiDonations) {
  return apiDonations.map(donation => {
    return {
      name: donation.name, 
      date: donation.date,
      description: donation.description,
      amount: donation.amount, 
      donor: donation.Donor.name
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
    <label>Дарител</label>
    <div>
      <ApiSelectComponent :api="donorsApi" v-model="formInputs.donorID.value" />
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
</template>

