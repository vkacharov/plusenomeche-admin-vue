import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { DonorsApi } from './api/DonorsApi';
import { CausesApi } from './api/CausesApi';
import { DonationsApi } from './api/DonationsApi';
import { ExpensesApi } from './api/ExpensesApi';

import App from './App.vue'
import router from './router'
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

import Notifications from '@kyvg/vue3-notification';

Amplify.configure(awsExports);

import './assets/main.css'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Notifications);

app.provide('donorsApi', new DonorsApi());
app.provide('causesApi', new CausesApi());
app.provide('donationsApi', new DonationsApi());
app.provide('expensesApi', new ExpensesApi());

app.mount('#app');