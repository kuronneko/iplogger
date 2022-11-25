<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <FormSection>
                    <template #title>
                        IP Logger Settings
                    </template>

                    <template #description>
                        Update your account's information, and use the URL link to capture IPs.
                    </template>

                    <template #form>
                        <!-- URL -->
                        <div class="col-span-6 sm:col-span-12">
                            <InputLabel for="url" value="URL" />
                            <div class="flex">
                                <TextInput readonly v-model="url" type="text" class="mt-1 block w-full"
                                    autocomplete="url" />
                                <PrimaryButton @click="copyUrl()" class="ml-1">Copy
                                </PrimaryButton>
                            </div>
                        </div>

                        <div class="col-span-6 sm:col-span-12">
                            <InputLabel for="shortUrl" value="Short URL" />
                            <div class="flex">
                                <TextInput readonly v-model="shortUrl" type="text" class="mt-1 block w-full"
                                    autocomplete="url" />
                                <PrimaryButton @click="generateShortUrl(user)" v-if="user.setting.slug === null" class="ml-1">Generate
                                </PrimaryButton>
                                <PrimaryButton @click="copyShortUrl()" v-if="user.setting.slug" class="ml-1">Copy
                                </PrimaryButton>
                            </div>
                        </div>

                        <div class="col-span-6 sm:col-span-12">
                            <InputLabel for="silence_mode" value="Silent Mode" class="mb-2" />
                            <div>
                                <label preserve-scroll v-if="user.setting.silence_mode == 0"
                                    @click.once="toggleSilenceMode(user)" for="default-toggle"
                                    class="inline-flex relative items-center cursor-pointer">
                                    <input type="checkbox" value="" id="default-toggle" class="sr-only peer">
                                    <div
                                        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600">
                                    </div>
                                    <span class="ml-3 text-xs font-medium text-gray-900 dark:text-gray-300">Silent mode
                                        does
                                        not redirect when link is clicked</span>
                                </label>
                                <label preserve-scroll v-if="user.setting.silence_mode == 1"
                                    @click.once="toggleSilenceMode(user)" for="checked-toggle"
                                    class="inline-flex relative items-center cursor-pointer">
                                    <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" checked>
                                    <div
                                        class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600">
                                    </div>
                                    <span class="ml-3 text-xs font-medium text-gray-900 dark:text-gray-300">Silent mode
                                        does
                                        not redirect when link is clicked</span>
                                </label>
                            </div>
                        </div>
                        <!-- Redirect -->
                        <div class="col-span-6 sm:col-span-12">
                            <InputLabel for="redirect" value="Redirecto to" />

                            <form @submit.prevent="saveRedirect(user)" class="flex">
                                <TextInput v-model="redirect" :disabled="user.setting.silence_mode == 1" id="redirect"
                                    type="text" class="mt-1 block w-full"
                                    :class="v$.redirect.$error === true ? 'border-gray-300 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm' : ''" />
                                <PrimaryButton
                                    :disabled="user.setting.silence_mode == 1 || this.isLoading === true" class="ml-1">
                                    Save
                                </PrimaryButton>
                            </form>
                            <span class="text-danger small" v-for="error of v$.redirect.$errors" :key="error.$uid">
                                {{ error.$message }}
                            </span>
                        </div>
                    </template>
                </FormSection>

                    <SectionBorder />
                    <ExportAllLog class="mt-10 sm:mt-0"/>

                    <SectionBorder />
                    <DeleteAllLog class="mt-10 sm:mt-0"/>




            </div>
        </div>

    </AppLayout>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";

import AppLayout from "@/Layouts/AppLayout.vue";

//import JetDialogModal from "@/Components/DialogModal";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { Link } from "@inertiajs/inertia-vue3";
import Paginator from "@/Components/Paginator.vue";
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import FormSection from '@/Components/FormSection.vue';
import useVuelidate from '@vuelidate/core'
import { required, url } from '@vuelidate/validators'
import SectionBorder from '@/Components/SectionBorder.vue';
import DeleteAllLog from '@/Pages/Dashboard/DeleteAllLog.vue';
import ExportAllLog from "./Dashboard/ExportAllLog.vue";

export default {
    setup() {
        return { v$: useVuelidate() }
    },
    props: {
        user: Object,
    },
    data() {
        return {
            url: this.setUrl(),
            shortUrl: this.setShortUrl(),
            redirect: this.user.setting.redirect,
            isLoading: null,
        };
    },
    validations() {
        return {
            redirect: { required, url, $autoDirty: true },
        }
    },
    components: {
    DeleteAllLog,
    SectionBorder,
    useVuelidate,
    FormSection,
    InputError,
    InputLabel,
    TextInput,
    AppLayout,
    //JetDialogModal,
    PrimaryButton,
    //JetButton,
    Paginator,
    Link,
    ExportAllLog
},
    methods: {
        generateShortUrl: function (user) {
            if (user.setting.slug === null) {
                Inertia.post(route("setting.generate_slug", user),
                    {
                        _method: 'put',
                    });
                setTimeout(() => {
                    this.Toast().fire({
                        icon: 'success',
                        title: 'Redirect URL saved'
                    })
                    this.shortUrl = this.setShortUrl();
                }, 500)
            }
        },
        toggleSilenceMode: function (user) {
            setTimeout(() => {
                Inertia.post(route("setting.silence_mode", user),
                    {
                        _method: 'put',
                    });
                if (user.setting.redirect === null) {
                    this.redirect = 'https://www.google.com';
                }
                if (this.user.setting.silence_mode == 0) {
                    this.Toast().fire({
                        icon: 'success',
                        title: 'Silent mode ON'
                    })
                } else {
                    this.Toast().fire({
                        icon: 'success',
                        title: 'Silent mode OFF'
                    })
                }
            }, 500)
        },
        saveRedirect: function (user) {
            this.v$.$touch();
            if (!this.v$.$error && user.setting.silence_mode == 0) {
                this.isLoading = true;
                Inertia.post(route("setting.save_redirect", { 'user': user.id, 'redirect': this.redirect }),
                    {
                        _method: 'put',
                    });
                setTimeout(() => {
                    this.Toast().fire({
                        icon: 'success',
                        title: 'Redirect URL saved'
                    })
                    this.isLoading = null;
                }, 1000)

            }
        },
        setShortUrl() {
            if(this.user.setting.slug){
            //let [firstDetails] = this.personas;// es6 syntax of destructing the array
            let slug = this.user.setting.slug;
            let hostname = location.hostname;
            let protocol = 'https';
            return protocol + '://' + hostname + '/' + slug;
            }else{
                return '';
            }
        },
        setUrl() {
            //let [firstDetails] = this.personas;// es6 syntax of destructing the array
            let uuid = this.user.setting.uuid;
            let hostname = location.hostname;
            let protocol = 'https';
            return protocol + '://' + hostname + '/api/network/get/' + uuid;
        },
        copyUrl() {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(this.url);
                console.log(this.url)
                this.Toast().fire({
                    icon: 'success',
                    title: 'URL Copied to your clipboard'
                })
            }
        },
        copyShortUrl() {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(this.shortUrl);
                console.log(this.shortUrl)
                this.Toast().fire({
                    icon: 'success',
                    title: 'Short URL Copied to your clipboard'
                })
            }
        },
        Toast() {
            return this.$swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 1700,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', this.$swal.stopTimer)
                    toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                }
            })
        },
    },
};
</script>
