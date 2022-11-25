<script setup>
import { ref } from 'vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
import { useForm } from '@inertiajs/inertia-vue3';
import { inject } from 'vue'
import ActionSection from '@/Components/ActionSection.vue';
import DangerButton from '@/Components/DangerButton.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import DialogModal from '@/Components/DialogModal.vue';
import InputError from '@/Components/InputError.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Inertia } from "@inertiajs/inertia";

const swal = inject('$swal');

/* defineProps({
    user: Object,
});
 */

</script>

<template>
    <ActionSection>
        <template #title>
            Export Logs
        </template>

        <template #description>
            Export all your logs.
        </template>

        <template #content>
            <div class="max-w-xl text-sm text-gray-600">
                Export all your Logs in a XLSX file format.
            </div>

            <div class="mt-5">
                <PrimaryButton class="py-3">
                    <a :href="route('export')">Export All your Logs</a>
                </PrimaryButton>
            </div>
        </template>
    </ActionSection>
</template>
