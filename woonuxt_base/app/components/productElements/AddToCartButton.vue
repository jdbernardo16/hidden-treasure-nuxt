<script setup>
const { cart } = useCart();
const props = defineProps({
    disabled: { type: Boolean, default: false },
    productUrl: { type: String, required: true },
});
const isLoading = ref(false);
const { t } = useI18n();
const addToCartButtonText = computed(() =>
    isLoading.value ? t('messages.shop.adding') : t('messages.shop.addToCart'),
);

const gtag_report_conversion = (url) => {
    gtag('event', 'conversion', {
        send_to: 'AW-16839371435/DzyfCO376pYaEKvV0d0-',
    });
    return false;
};

const handleAddToCart = () => {
    isLoading.value = true;
    // Assuming you have the product URL available
    gtag_report_conversion(props.productUrl);
    console.log(props.productUrl);
};

// stop loading when cart is updated
watch(cart, (val) => {
    isLoading.value = false;
});
</script>

<template>
    <!-- <button
    type="submit"
    class="rounded-lg flex font-bold bg-gray-800 text-white text-center min-w-[150px] p-2.5 gap-4 items-center justify-center focus:outline-none"
    :class="{ disabled: disabled }"
    :disabled="disabled"
    @click="isLoading = true">
    <span>{{ addToCartButtonText }}</span>
    <LoadingIcon v-if="isLoading" stroke="4" size="12" color="#fff" />
  </button> -->
    <Button
        type="submit"
        variant="secondary"
        :class="{ disabled: disabled }"
        :disabled="disabled"
        @click="handleAddToCart"
        class="flex items-center space-x-4 justify-center"
    >
        <span>{{ addToCartButtonText }}</span>
        <LoadingIcon v-if="isLoading" stroke="4" size="12" color="#fff" />
    </Button>
</template>

<style lang="postcss" scoped>
button {
    outline: none !important;
    transition: all 150ms ease-in;
}

button.disabled {
    @apply cursor-not-allowed bg-gray-400;
}
</style>
