<script>
import { reactive } from 'vue'
import TableLite from "vue3-table-lite";
import { DonorsApi } from '../api/DonorsApi';
import FilterComponent from './FilterComponent.vue';
import {createSearchFilter} from '../helpers/filter-helpers.js';

export default {
  components: { TableLite, FilterComponent },

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
          label: "Брой дарения",
          field: "donationsNumber",
          width: "3%",
        },
        {
          label: "Общо дарени",
          field: "donationsSum",
          width: "3%",
        },
      ],
      rows: [],
      totalRecordCount: 0
    });

    const donorsApi = new DonorsApi();

    const searchDonors = async (filter, aggregates) => {
      const apiDonors = await donorsApi.search(filter, aggregates);
      const rows = parseApiDonors(apiDonors.items);
      table.rows = rows;
      table.totalRecordCount = apiDonors.total;
      table.isLoading = false;
    }

    const filterCallback = async (event) => {
      const filter = {};
      for (let e in event) {
        filter[e] = {
          type: input[e].type,
          value: input[e].value
        }
      };
      
      const searchFilter = createSearchFilter(filter);
      await searchDonors(searchFilter);
      
    }

    await searchDonors();

    return {
      table,
      filterCallback
    };
  }
}

function parseApiDonors(apiDonors) {
  return apiDonors.map(donor => {
    let donationsSum, donationsNumber;

    if (donor.Donations && donor.Donations.items) {
      donationsSum = 0;
      donor.Donations.items.forEach(donation => {
        donationsSum += donation.amount;
      });
      donationsNumber = donor.Donations.items.length;
    }
    return {
      name: donor.name, 
      date: donor.date,
      description: donor.description,
      donationsSum: donationsSum, 
      donationsNumber: donationsNumber
    }
  });
}
</script>

<template>

<FilterComponent 
  :config="[
      {name: 'name', label: 'име', type: 'string'}, 
      {name: 'description', label: 'описание', type: 'string'}, 
      {name: 'date', label: 'дата', type: 'date'}]"
  @filterButtonClick="filterCallback"  
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
</template>
