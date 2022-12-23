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
        const pageSize = 20;
        const table = reactive({
            isLoading: true,
            columns: props.columns,
            rows: [],
            totalRecordCount: 0,
            pageOptions: [{
                value: pageSize,
                text: pageSize
            }]
        });
        
        const apiName = props.apiName;

        const api = inject(apiName);
        const filtersStore = useFiltersStore();
        
        const search = async (from, limit) => {
            table.isLoading = true;
            const filter = toRaw(filtersStore.filters[apiName]);
            const apiResult = await api.search(filter, from, limit);
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
                if(apiName == result) {
                    await search(0, pageSize);
                }
            });
            
        });

        const onPagination = async (from, limit, order, sort) => {
            await search(from, limit);
        }

        filtersStore.$reset();
        await search(0, pageSize);

        return {
            table,
            onPagination
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
            @do-search="onPagination"
            @is-finished="table.isLoading = false"
            :page-options="table.pageOptions"
        />
  </div>
</template>