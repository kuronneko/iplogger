<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import Welcome from '@/Components/Welcome.vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import moment from "moment";
import { computed } from 'vue';
defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    date: String,
    userAgent: String,
    location: Object,
    browser: String,
    browserVersion: String,
    platform: String,
    platformVersion: String,
    host: String,
});

const currentYear = computed(() => moment().year());

</script>

<template>

    <Head title="Welcome" />
    <div v-if="canLogin" class="absolute top-0 right-0 px-6 py-4 sm:block">
        <Link v-if="$page.props.user" :href="route('dashboard')" class="text-md text-gray-700 dark:text-gray-500">
        Dashboard</Link>

        <template v-else>
            <Link :href="route('login')" class="text-md text-gray-700 dark:text-gray-500">Log in
            </Link>

            <Link v-if="canRegister" :href="route('register')" class="ml-4 text-md text-gray-700 dark:text-gray-500">
            Register</Link>
        </template>
    </div>
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden sm:rounded-lg">

            <div class="p-6 sm:px-20">
                <div>
                    <ApplicationLogo class="block h-12 w-auto" />
                </div>

                <div class="mt-8 text-2xl">
                    Garbage information recollector.
                </div>

                <div class="mt-6 text-gray-500">
                    An IP logger application records IP addresses of devices connecting to a network or website,
                    capturing
                    details like timestamps and device types. It provides geolocation mapping, a user dashboard for
                    viewing
                    and filtering logs, and generates reports. Key features include alerts for suspicious activity, data
                    export, and integration with other tools. Ensuring data security and legal compliance, it is used
                    for
                    website analytics, security monitoring, compliance, and network management.
                </div>
            </div>

            <div class="flex justify-center mt-6">
                <a
                    class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Your Network
                        Properties</h5>
                    <div class="font-normal text-gray-700 dark:text-gray-400">
                        <p><span class="font-bold">Date/Time: </span>{{ moment(date).format('MMMM Do YYYY, h:mm:ss a')
                            }}</p>
                        <p><span class="font-bold">IP Address: </span>{{ location.ip }}</p>
                        <p><span class="font-bold">Country: </span>{{ location.countryName }}, {{ location.cityName }}
                        </p>
                        <p><span class="font-bold">Browser: </span>{{ browser }} ({{ browserVersion }})</p>
                        <p><span class="font-bold">Operating System: </span>{{ platform }} {{ platformVersion }}</p>
                        <p><span class="font-bold">User Agent: </span>{{ userAgent }}</p>
                        <p><span class="font-bold">Host Name: </span>{{ host }}</p>
                    </div>
                </a>
            </div>

            <div class="flex flex-col items-center justify-center mt-2 text-gray-500 p-6 sm:px-20">
                <span>
                    <Link v-if="canRegister" :href="route('register')" class="font-bold">Sing Up Here</Link>
                    <span class="ml-1">and start using our services!</span>
                </span>

                <div class="mt-1">
                    <span class="text-xs text-secondary mt-2">This website is powered by <a class="text-secondary"
                            href="https://cyberpunkwaifus.xyz" target="_blank">CBPW Technologies.</a>
                    </span>
                </div>
            </div>

        </div>
    </div>
</template>
