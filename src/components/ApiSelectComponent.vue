<script>
import { ref, inject } from 'vue';
import vSelect from 'vue-select';

export default {
    components: {vSelect},
    
    props: {
        api: {
            type: String
        },
        modelValue: {
            type: String
        }
    },

    watch: {
        selectedOption(newSelectedOption, oldSelectedOption) {
            this.$emit('update:modelValue', newSelectedOption ? newSelectedOption.code : null);
        }
    },

    setup(props) {
        const api = inject(props.api);
        const options = ref([]);
        // api is something like 'causesApi'. From it we need to create 'causeName'
        const nameField = props.api.slice(0, -4) + 'Name';
        const searchOptions = async (search, loading) => {
        if (search.length > 2) {
            loading(true);
            const filter = {};
            filter[nameField] = {
                match: search
            };
            const apiResult = await api.search(filter);
            const apiОptions = apiResult.items.map(item => {
                return {
                label: item[nameField], 
                code: item.id
            }});
            options.value = apiОptions;
            loading(false);
            };
        }

        const selectedOption = ref(null);

        return {
            options,
            searchOptions,
            selectedOption
        }
    }
}
</script>

<template>
    <div><v-select 
        @search="this.searchOptions" 
        :options="options"
        v-model="selectedOption"
    /></div>
</template>
