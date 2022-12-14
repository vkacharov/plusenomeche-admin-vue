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

        const searchOptions = async (search, loading) => {
        if (search.length > 2) {
            loading(true);
            const filter = {
                name: {
                    match: search
                }, 
            };

            const apiResult = await api.search(filter);
            const apiОptions = apiResult.items.map(item => {
                return {
                label: item.name, 
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
