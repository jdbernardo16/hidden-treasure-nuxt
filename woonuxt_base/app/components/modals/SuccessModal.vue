<template>
    <BaseModal :show="show" :max-width="maxWidth" @close="$emit('close')">
        <div class="bg-white px-9 py-[60px] rounded-none border">
            <div class="flex flex-col items-center text-center space-y-3 mb-6">
                <div
                    class="w-[48px] h-[48px] flex justify-center items-center bg-brand-gold bg-opacity-10 rounded-full"
                >
                    <Check
                        class="h-5 w-5 stroke-1 stroke-primary-600 text-brand-gold"
                        aria-hidden="true"
                    />
                </div>
                <p class="text-xl font-bold text-primary-600">{{ title }}</p>
                <p class="">{{ description }}</p>
                <slot name="headerText"></slot>
            </div>
            <slot name="content" class="mb-6"></slot>
            <div class="flex space-x-2 justify-center">
                <slot name="button"></slot>
            </div>
        </div>
    </BaseModal>
</template>

<script setup lang="ts">
import { Check } from 'lucide-vue-next';
defineProps({
    id: {
        type: String,
    },
    title: {
        type: String,
        default: null,
    },
    description: {
        type: String,
        default: null,
    },
    show: {
        default: false,
    },
    maxWidth: {
        default: 'lg',
    },
    form: {
        type: Object,
    },
    items: {
        type: Object,
    },
});
const emit = defineEmits(['close']);
</script>
