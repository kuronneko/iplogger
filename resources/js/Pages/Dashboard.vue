<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                My List
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
                            <form method="get" class="flex mt-2" @submit.prevent="submit">
                                <jet-input v-model="form.search" class="w-full"
                                    placeholder="Search by IP or Host" type="text" />
                                <button type="submit" class="ml-2 btn btn-primary">Search</button>
                            </form>
                            <table class="table-auto w-full">
                                <thead>
                                    <tr>
                                        <th class="p-3">IP</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="logger in loggers.data" :key="logger.id">
                                        <td class="p-3 border">{{ logger.ip }}</td>
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
                                            ">Borrar</Link>
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
import JetButton from "@/Components/Button.vue";
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
        JetButton,
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
