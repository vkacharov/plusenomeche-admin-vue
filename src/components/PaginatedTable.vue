<script>
import {reactive, inject, toRaw } from 'vue';
import TableLite from "vue3-table-lite";
import { useFiltersStore } from '@/stores/filters';

export default {
    components: {TableLite},

    props: {
        apiName: {
            type: String
        },

        columns: {
            type: Array
        }
    },

    async setup(props) {
        const table = reactive({
            isLoading: true,
            columns: props.columns,
            rows: [],
            totalRecordCount: 0
        });
        
        const apiName = props.apiName;

        const api = inject(apiName);
        const filtersStore = useFiltersStore();
        
        const search = async (filter) => {
            table.isLoading = true;
            const apiResult = await api.search(filter);
            const rows = api.parseApiItems(apiResult.items);
            table.rows = rows;
            table.totalRecordCount = apiResult.total;
            table.isLoading = false;
        }

        filtersStore.$onAction(({
            name,
            store,
            args,
            after,
            onError,
        }) => {
            after(async (result) => {
                console.log('ON ACTION', apiName, result);
                if(apiName == result) {
                    const filter = toRaw(filtersStore.filters[result]);
                    await search(filter);
                }
            });
            
        });

        filtersStore.$reset();
        await search();

        return {
            table,
            search
        };
    }
}

</script>

<template>
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