<script setup>
const { getOrderQuery, setOrderQuery } = await useSorting();
const { storeSettings } = useAppConfig();
const selectedOrder = ref(getOrderQuery());
const orderby = ref(selectedOrder.value.orderBy || 'date');
const order = ref(selectedOrder.value.order);

// Update the URL when the checkbox is changed
watch([orderby, order], () => {
    setOrderQuery(orderby.value, order.value);
});
</script>

<template>
    <div class="inline-flex ml-auto -space-x-px shadow-sm isolate">
        <button
            class="relative inline-flex items-center p-2 text-sm font-medium text-gray-500 bg-transparent border border-brand-gold focus:z-20"
            aria-label="Sort"
            @click="order = order === 'ASC' ? 'DESC' : 'ASC'"
        >
            <Icon
                name="ion:filter-outline"
                size="18"
                :class="order === 'ASC' ? 'rotate-180' : ''"
                class="transition-transform transform transform-origin-center text-brand-gold"
            />
        </button>
        <select
            id="orderby-dropdown"
            v-model="orderby"
            class="bg-transparent rounded-none border-brand-gold text-brand-gold hover:bg-transparent"
            aria-label="Order by"
        >
            <option value="date">{{ $t('messages.general.latest') }}</option>
            <option value="alphabetically">{{ $t('messages.general.alphabetically') }}</option>
            <option value="price">{{ $t('messages.shop.price') }}</option>
            <option v-if="storeSettings.showReviews" value="rating">
                {{ $t('messages.shop.rating') }}
            </option>
            <option value="discount">{{ $t('messages.shop.discount') }}</option>
        </select>
    </div>
</template>
