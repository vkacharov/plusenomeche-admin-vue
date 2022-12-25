<script>
    import { reactive, toRaw } from 'vue'
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';
    import ApiSelectComponent from './ApiSelectComponent.vue';
    import { useEditsStore } from '@/stores/edits';
    
    export default {
        components: {Datepicker, ApiSelectComponent},
        props: {
            config: {
                type: Array
            },
            apiName: {
                type: String
            },
            isEdit: {
                type: Boolean
            }
        },

        setup(props, context) {
            const formInputs = reactive({});
            if (props.isEdit) {
                const editsStore = useEditsStore();
                const edit = toRaw(editsStore.edits[props.apiName]).value;
                props.config.forEach(field => {
                    formInputs[field.name] = edit[field.name];
                });

                formInputs._version = edit.version;
                formInputs.id = edit.id;
            }

            const onAddEditButtonClick = () => {
                const item = {};
                for (let input in formInputs) {
                    if(input == 'date' && typeof formInputs[input] != 'string') {
                        //TODO find a better way to make Datepicker output the ISO date without time
                        item[input] = formInputs[input].toISOString().substring(0, 10);
                    } else {
                        item[input] = formInputs[input];
                    }
                }
                context.emit('addEditButtonClick', item);
            }

            return {
                formInputs,
                onAddEditButtonClick
            }
        },
    }
</script>

<template>
    <div class="add-edit-form">
        <div v-for="field in config" class="add-edit-field">
            <label>{{field.label}}</label>

            <div v-if="field.type == 'string'">
                <input v-model="formInputs[field.name]">
            </div>

            <div v-if="field.type == 'number'">
                <input type="number" v-model="formInputs[field.name]">
            </div>

            <div v-if="field.type == 'date'">
                <Datepicker 
                    v-model="formInputs[field.name]"
                    text-input
                    :timezone="'UTC'"
                    :enable-time-picker="false"
                    />
            </div>
            <div v-if="field.type == 'select'">
                <ApiSelectComponent :api="field.api" v-model="formInputs[field.name]" />
            </div>
        </div>
        <div class="add-edit-button add-edit-field">
            <button @click="onAddEditButtonClick">Запазване</button>
        </div>
        
    </div>
</template>

<style>
.add-edit-form {
    display: flex;
    flex-flow: column;
    width: 420px;
}

.add-edit-field label {
    display: block;
}

.add-edit-field input {
    width: 100%;
}

.add-edit-field {
    margin-top: 1rem;
}
</style>