<script>
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';
    import ApiSelectComponent from './ApiSelectComponent.vue';
    import {createSearchFilter} from '../helpers/filter-helpers.js';
    
    export default {
        components: {Datepicker, ApiSelectComponent},

        props: {
            config: {
                type: Array,
                default: () => []
            }
        },

        data() {
            const formInputs = {};
            this.config.forEach(field => {
                formInputs[field.name] = {
                    type: field.type, 
                };
            });

            return {
                formInputs: formInputs
            }
        }, 

        methods: {
            onfilterButtonClick() {
                const filter = {};
                for (let input in this.formInputs) {
                    filter[input] = {
                        type: this.formInputs[input].type,
                        value: this.formInputs[input].value
                    }
                }

                const searchFilter = createSearchFilter(filter);
                this.$emit('filterButtonClick', searchFilter);
            }
        }
    }
</script>

<template>
    <div class="filter-component">
        <div v-for="field in config" class="filter-field">
            <label>{{field.label}}</label>
            <div v-if="field.type == 'string'">
                <input v-model="formInputs[field.name].value">
            </div>
            <div v-if="field.type == 'date'">
                <Datepicker 
                    v-model="formInputs[field.name].value"
                    text-input 
                    range
                    :partial-range="true" 
                    :timezone="'UTC'"
                    :enable-time-picker="false"
                    />
            </div>
            <div v-if="field.type == 'select'">
                <ApiSelectComponent :api="field.api" v-model="formInputs[field.name].value" />
            </div>
        </div>
        <div class="filter-field">
            <div>
                <button @click="onfilterButtonClick">Търсене</button>
            </div>
        </div>
        
    </div>
</template>

<style>
    .filter-component {
        display: flex;
        align-items: flex-end;
        flex-flow: row wrap;
        width: 100%;
        justify-content: flex-start;
        padding: 1rem;
        margin-bottom: 10px;
    }

    .filter-field {
        margin-right: 1rem;
        width: 24rem;
    }

    .filter-field > div > input {
        width: 100%;
        line-height: 1.3rem;
        border: var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);
    }

    div[role=dialog] .dp__overlay {
        height: 311px;
    }
</style>