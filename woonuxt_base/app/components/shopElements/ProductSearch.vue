<script setup>
const { getSearchQuery, setSearchQuery, clearSearchQuery } = useSearching();
const searchQuery = ref(getSearchQuery());

const reset = () => {
    clearSearchQuery();
    searchQuery.value = '';
};

watch(getSearchQuery, (value) => {
    if (!value) reset();
});
</script>

<template>
    <form
        class="relative items-center flex-1 -space-x-px rounded-md shadow-sm"
        @submit.prevent="setSearchQuery(searchQuery)"
    >
        <Icon
            name="ion:search-outline"
            size="20"
            class="absolute z-10 opacity-50 pointer-events-none left-2 text-brand-gold"
        />
        <input
            id="product-search-input"
            v-model="searchQuery"
            type="text"
            :placeholder="$t('messages.shop.searchProducts')"
            class="z-0 inline-flex items-center w-full p-2 pl-10 text-sm text-gray-500 border border-brand-gold rounded-md shadow-inner outline-none bg-transparent"
        />
        <span
            v-if="searchQuery"
            class="absolute z-10 flex items-center gap-1 px-2 py-1 text-xs rounded cursor-pointer bg-brand-gold bg-opacity-10 hover:bg-opacity-20 text-brand-gold right-2"
            @click="reset"
        >
            <span>{{ $t('messages.general.clear') }}</span>
            <Icon name="ion:close-outline" size="18" />
        </span>
    </form>
</template>
