<template>
    <div class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md">
        <div class="flex place-content-end mb-4">
            <div class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
                <router-link :to="{ name: 'companies.create' }" class="text-sm font-medium">Create company</router-link>
            </div>
        </div>
        <table class="min-w-full border divide-y divide-gray-200">
            <thead>
            <tr>
                <th class="px-6 py-3 bg-gray-50">
                    <span
                        class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Name</span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span
                        class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Email</span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span
                        class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Address</span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                    <span
                        class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Website</span>
                </th>
                <th class="px-6 py-3 bg-gray-50">
                </th>
                <th class="px-6 py-3 bg-gray-50">
                </th>
            </tr>
            </thead>

            <tbody class="bg-white divide-y divide-gray-200 divide-solid">
            <template v-for="item in companies" :key="item.id">
                <tr class="bg-white">
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.name }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.email }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.address }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        {{ item.website }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        <router-link :to="{name: 'companies.edit',params: {id : item.id}}">Update</router-link>
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                        <button @click="deleteCompany(item.id)">Delete</button>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>
<script>
import useCompanies from '../../composables/companies';
import {onMounted} from 'vue';

export default ({
    setup() {

        const {companies,getCompanies,destroyCompany} = useCompanies();
        onMounted(getCompanies);
        const deleteCompany = async(id)=>{
            await destroyCompany(id);
            await getCompanies();
        }
        return {
            companies,
            deleteCompany
        }
        
    }
})
</script>
