require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from 'vue';
import router from './components/router';
import CompaniesIndex from './components/companies/CompaniesIndex';
import CompaniesCreate from './components/companies/CompaniesCreate';

createApp({
    components:{
        CompaniesIndex,
        CompaniesCreate
    }
})
.use(router)
.mount('#app');
