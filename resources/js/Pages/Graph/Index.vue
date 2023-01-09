<template>
    <AppLayout title="Graph">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Graph
            </h2>
        </template>

        <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-md">
                <div class="p-4 sm:px-6">
                    <div class="container">
                        <Bar v-if="loaded" :data="chartData" />
                    </div>
                </div>
            </div>
        </div>

    </AppLayout>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import AppLayout from "@/Layouts/AppLayout.vue";


import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar, AppLayout },
    data() {
        return {
            loaded: false,
            chartData: null,
        };
    },
    async mounted() {
        this.getData();
    },
    methods: {
        async getData() {
            this.loaded = false;
            await this.axios.get(route('graph.get.loggers'))
                .then(response => {
                    this.loaded = true;
                    let customData = {
                        labels: response.data.labels,
                        datasets: [{
                            label: 'My First dataset',
                            backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgb(255, 99, 132)',
                            data: response.data.dataset,
                        }]
                    };
                    this.chartData = customData;
                })
                .catch(error => {
                    return null;
                })
        },
/*         data: function () {
            let customData
            return customData = {
                labels: this.labels,
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: this.datasets,
                }]
            };
        },
        labelAarray() {
            let labels;
            return labels = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
            ];
        },
        datasetArray() {
            let data;
            return data = [0, 10, 5, 2, 20, 30, 45, 11];
        }, */
    },
}

</script>

<style>

</style>
