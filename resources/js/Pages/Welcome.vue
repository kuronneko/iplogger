<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import Welcome from '@/Components/Welcome.vue';
defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    date: Date,
    userAgent: String,
    location: Array,
    browser: String,
    browserVersion: String,
    platform: String,
    platformVersion: String,
    host: String,
});
</script>

<template>
    <Head title="Welcome" />
    <div v-if="canLogin" class="absolute top-0 right-0 px-6 py-4 sm:block">
        <Link v-if="$page.props.user" :href="route('dashboard')"
            class="text-sm text-gray-700 dark:text-gray-500 underline">Dashboard</Link>

        <template v-else>
            <Link :href="route('login')" class="text-sm text-gray-700 dark:text-gray-500 underline">Log in
            </Link>

            <Link v-if="canRegister" :href="route('register')"
                class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register</Link>
        </template>
    </div>
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <Welcome></Welcome>
            <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
                <pre class="text-white">
                    Date: {{ date }}
                    IP: {{ location.ip }}
                    Country: {{ location.countryName }}, {{ location.cityName }}
                    Browser: {{ browser }} ({{browserVersion}})
                    Platform: {{ platform }} {{ platformVersion }}
                    Agent: {{ userAgent }}
                    Host: {{ host }}
                </pre>
            </div>
        </div>
    </div>
</template>
