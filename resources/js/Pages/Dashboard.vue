<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Logger
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
                            <form method="get" class="flex mt-2" @submit.prevent="submit">
                                <jet-input v-model="form.search" class="w-full" placeholder="Search by IP or Host"
                                    type="text" />
                                <jet-primary-button type="submit" class="ml-2 btn btn-primary">Search
                                </jet-primary-button>
                            </form>
                            <table class="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th class="p-3">Date</th>
                                        <th class="p-3">IP</th>
                                        <th class="p-3">Location</th>
                                        <th class="p-3">Browser</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="logger in loggers.data" :key="logger.id">
                                        <td class="p-3 border">{{ logger.updated_at }}</td>
                                        <td class="p-3 border">{{ logger.ip }}</td>
                                        <td class="p-3 border">{{ logger.country +','+ logger.city }}</td>
                                        <td class="p-3 border">{{ logger.browser }}</td>
                                        <td class="p-3 border">
                                            <Link class="btn btn-primary mr-2 inline-block" :href="
                                                route('logger.show', {
                                                    logger: logger,
                                                })
                                            ">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                            </Link>
                                            <Link method="DELETE" :href="
                                                route('logger.destroy', {
                                                    logger: logger,
                                                })
                                            "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <paginator class="mt-3" :paginator="loggers" />
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </AppLayout>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";

import AppLayout from "@/Layouts/AppLayout.vue";

//import JetDialogModal from "@/Components/DialogModal";
import JetPrimaryButton from "@/Components/PrimaryButton.vue";
import JetInput from "@/Components/Input.vue";
import { Link } from "@inertiajs/inertia-vue3";
import Paginator from "@/Components/Paginator.vue";

export default {
    props: {
        loggers: Object,
        search: String,
    },
    data() {
        return {
            form: {
                search: this.search,
            },
        };
    },
    components: {
        AppLayout,
        //JetDialogModal,
        JetPrimaryButton,
        //JetButton,
        JetInput,
        Paginator,
        Link,
    },
    methods: {
        submit: function () {
            Inertia.get(route("logger.index", this.form));
        },
    },
};
</script>
