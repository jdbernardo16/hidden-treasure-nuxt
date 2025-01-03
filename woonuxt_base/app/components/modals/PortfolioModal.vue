<template>
    <BaseModal :show="show" :max-width="maxWidth" @close="$emit('close')">
        <div class="p-4 rounded-[2rem] bg-white">
            <XIcon
                @click="$emit('close')"
                class="w-5 h-5 text-brand-gold absolute top-4 right-4 cursor-pointer"
            />
            <div v-if="item">
                <NuxtImg
                    quality="80"
                    :src="item.image.url"
                    alt="Partner Logo"
                    class="m-auto w-full h-full object-cover"
                />
                <h2 class="mt-4 text-2xl font-bold">{{ item.title }}</h2>
                <p class="mt-2">{{ item.description }}</p>
            </div>
        </div>
    </BaseModal>
</template>

<script setup lang="ts">
import { XIcon } from 'lucide-vue-next';
defineProps({
    id: {
        type: String,
    },
    show: {
        default: false,
    },
    maxWidth: {
        default: '2xl',
    },
    closeable: {
        default: true,
    },
    cstmClass: {
        type: String,
        default: 'rounded-none',
    },
    item: {
        type: Object,
        default: null,
    },
});
const emit = defineEmits(['close']);
</script>
