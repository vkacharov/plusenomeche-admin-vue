<script>
import {reactive, inject, toRaw, ref } from 'vue';
import TableLite from "vue3-table-lite";
import { useFiltersStore } from '@/stores/filters';
import { useEditsStore } from '@/stores/edits';
import { Modal } from 'usemodal-vue3';

export default {
    components: {TableLite, Modal},

    props: {
        entity: {
            type: String
        },

        columns: {
            type: Array
        }
    },

    async setup(props, context) {
        const pageSize = 20;
        const editColumn = {
            label: "",
            field: "edit",
            sortable: false,
            width: "3%",
        };

        const columns = [... props.columns, editColumn];
        const table = reactive({
            isLoading: true,
            columns: columns,
            rows: [],
            totalRecordCount: 0,
            pageOptions: [{
                value: pageSize,
                text: pageSize
            }]
        });
        
        const entity = props.entity;
        const entityName = entity + 'Name';
        const apiName = entity + 'sApi';

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

        const editsStore = useEditsStore();
        const onEditButtonClicked = (item) => {
            editsStore.setEdit(apiName, toRaw(item));
            context.emit('tableEditButtonClick');
        }

        const deleteModalVisible = ref(false);
        const nameToDelete = ref("");
        const versionToDelete = ref(0);

        const onDeleteButtonClicked = (item) => {
            deleteModalVisible.value = true;
            nameToDelete.value = item.value[entityName];
            versionToDelete.value = item.value._version;
        }

        const onDeleteConfirmed = () => {
            deleteModalVisible.value = false;
            context.emit('tableDeleteConfirmed', {
                id: nameToDelete.value,
                _version: versionToDelete.value
            });
        }

        filtersStore.$reset();
        await search(0, pageSize);

        return {
            table,
            onPagination,
            onEditButtonClicked,
            onDeleteButtonClicked,
            onDeleteConfirmed,
            deleteModalVisible
        };
    }
}

</script>

<template>
    <div>
        <table-lite
            :is-static-mode="true"
            :is-slot-mode="true"
            :is-loading="table.isLoading"
            :columns="table.columns"
            :rows="table.rows"
            :total="table.totalRecordCount"
            @do-search="onPagination"
            @is-finished="table.isLoading = false"
            :page-options="table.pageOptions"
        >
            <template v-slot:edit="item">
                <a class="edit-button" @click.stop="onEditButtonClicked(item)">
                    <font-awesome-icon icon="fa-regular fa-pen-to-square" size="1x"></font-awesome-icon>
                </a>
                
                <a class="edit-button" @click.stop="onDeleteButtonClicked(item)">
                    <font-awesome-icon icon="fa-solid fa-trash-can" size="1x"></font-awesome-icon>
                </a>
            </template>
        </table-lite>
  </div>

  <Modal 
    v-model:visible="deleteModalVisible"
    :title="'Изтриване'"
    :okButton="{text:'Да', onclick: onDeleteConfirmed}" 
    :cancelButton="{text: 'Не'}"
  >
  Желаете ли да потвърдите изтриването?
  </Modal>
</template>

<style>
.edit-button {
    margin-right: 10px;
}

.edit-button:last-child {
    margin-right: 0px;
}
</style>