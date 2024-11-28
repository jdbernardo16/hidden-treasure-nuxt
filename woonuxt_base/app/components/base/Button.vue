<template>
    <button class="transition" :class="[variantClasses, sizeClasses, classes]" :disabled="disabled" @click="$emit('click', $event)">
        <slot />
    </button>
</template>

<script setup lang="ts">
interface Props {
    variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info';
    size?: 'lg' | 'md' | 'sm';
    disabled?: boolean;
    classes?: string;
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    size: 'md',
    disabled: false,
    classes: '',
});

const variantClasses = computed(() => {
    switch (props.variant) {
        case 'primary':
            return 'bg-brand-gold text-white hover:bg-brand-gold/[0.8]';
        case 'secondary':
            return 'border-brand-gold border text-brand-gold hover:bg-brand-gold hover:text-white';
        case 'danger':
            return 'bg-brand-red-500 text-white hover:bg-brand-red-600';
        case 'success':
            return 'bg-brand-green-500 text-white hover:bg-brand-green-600';
        case 'warning':
            return 'bg-brand-yellow-500 text-white hover:bg-brand-yellow-600';
        case 'info':
            return 'bg-brand-blue-500 text-white hover:bg-brand-blue-600';
        default:
            return 'bg-brand-gold text-white hover:bg-brand-gold-dark';
    }
});

const sizeClasses = computed(() => {
    switch (props.size) {
        case 'lg':
            return 'px-4 py-3';
        case 'md':
            return 'px-3 py-2';
        case 'sm':
            return 'px-2 py-1';
        default:
            return 'px-3 py-2';
    }
});
</script>