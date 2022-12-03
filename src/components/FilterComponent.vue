<script>
    export default {
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
                this.$emit('filterButtonClick', this.formInputs);
            }
        }
    }
</script>

<template>
    <div class="filter-component">
        <div v-for="field in config" class="filter-field">
            <label>{{field.label}}</label>
            <div>
                <input v-model="formInputs[field.name].value">
            </div>
        </div>

        <div class="filter-field">
            <slot name="filter1"></slot>
        </div>

        <div class="filter-field">
            <slot name="filter2"></slot>
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
        width: 16rem;
    }

    .filter-field > div > input {
        width: 100%;
        line-height: 1.3rem;
        border: var(--vs-border-width) var(--vs-border-style) var(--vs-border-color);
    }

    .filter-field button {
        width: 100%;
        line-height: 1.3rem;
        background-color: #f47d34;
        color: white;
        border-color: #f47d34;
    }
</style>