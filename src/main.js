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

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

import './assets/main.css';

Amplify.configure(awsExports);

library.add(faPenToSquare, faRightFromBracket);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Notifications);

app.provide('donorsApi', new DonorsApi());
app.provide('causesApi', new CausesApi());
app.provide('donationsApi', new DonationsApi());
app.provide('expensesApi', new ExpensesApi());

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');