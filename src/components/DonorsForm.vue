<script>
    import {Donor} from '../models';
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';

    export default {
        components: {Datepicker},

        data() {
            return {
                donor: {
                    name: '',
                    description: '',
                    date: '2022-11-21'
                }
            }
        },

        methods: {
            onAddEditButtonClick() {
                this.$emit('addEditButtonClick', this.donor);
            }
        }
    }
</script>

<template>
    <div class="add-edit-form">
        <h3>Създай нов дарител</h3>
        <div class="add-edit-field">
            <label>Име</label>
            <input v-model="donor.name">
        </div>
        <div class="add-edit-field">
            <label>Описание</label>
            <input v-model="donor.description">
        </div>
        <div class="add-edit-field">
            <label>Дата</label>
            <Datepicker 
                    v-model="donor.date"
                    text-input 
                    range
                    :partial-range="true" 
                    :timezone="'UTC'"
                    :enable-time-picker="false"
                    />
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