<script>
import { reactive, inject } from 'vue'
import TableLite from "vue3-table-lite";
import FilterComponent from './FilterComponent.vue';
import AddEditForm from './AddEditForm.vue';

export default {
  components: { TableLite, FilterComponent, AddEditForm },

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

    const donorsApi = inject('donorsApi');

    const searchDonors = async (filter) => {
      table.isLoading = true;
      const apiDonors = await donorsApi.search(filter);
      const rows = parseApiDonors(apiDonors.items);
      table.rows = rows;
      table.totalRecordCount = apiDonors.total;
      table.isLoading = false;
    }

    const createDonor = async (item) => {
      donorsApi.create(item);
    }

    const formConfig = [
      {name: 'name', label: 'име', type: 'string'}, 
      {name: 'description', label: 'описание', type: 'string'}, 
      {name: 'date', label: 'дата', type: 'date'}];

    await searchDonors();

    return {
      table,
      formConfig,
      searchDonors,
      createDonor
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
  :config="formConfig"
  @filterButtonClick="searchDonors"  
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
  <AddEditForm 
    :config="formConfig" 
    :title="'Създай нов дарител'"
    @addEditButtonClick="createDonor"
  />
</template>
