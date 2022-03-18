import {createRouter , createWebHistory} from 'vue-router';
import CompaniesIndex from '../companies/CompaniesIndex'
import CompaniesCreate from '../companies/CompaniesCreate'
import CompaniesEdit from '../companies/CompaniesEdit';


const routes = [
    {
        path: '/dashboard',
        name: 'companies.index',
        component: CompaniesIndex
    },
    {
        path: '/companies/create',
        name: 'companies.create',
        component: CompaniesCreate
    },
    {
        path: '/companies/:id/edit',
        name: 'companies.edit',
        component: CompaniesEdit,
        props : true
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
});