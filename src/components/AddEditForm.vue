<script>
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';
    import ApiSelectComponent from './ApiSelectComponent.vue';
    
    export default {
        components: {Datepicker, ApiSelectComponent},
        props: {
            config: {
                type: Array
            },
            title: {
                type: String
            }
        },

        data() {
            const formInputs = {};
            this.config.forEach(field => {
                formInputs[field.name] = '';
            });

            return {
                formInputs: formInputs
            }
        },  
    
        methods: {
            onAddEditButtonClick() {
                const item = {};
                for (let input in this.formInputs) {
                    if(input == 'date') {
                        //TODO find a better way to make Datepicker output the ISO date without time
                        item[input] = this.formInputs[input].toISOString().substring(0, 10);
                    } else {
                        item[input] = this.formInputs[input];
                    }
                }
                this.$emit('addEditButtonClick', item);
            }
        }
    }
</script>

<template>
    <div class="add-edit-form">
        <h3>{{title}}</h3>

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
            <button @click="onAddEditButtonClick">Създаване</button>
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