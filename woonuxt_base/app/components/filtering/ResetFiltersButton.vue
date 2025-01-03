<script setup>
const { resetFilter } = useFiltering();
</script>

<template>
    <Button @click="resetFilter">
        {{ $t('messages.general.clearFilters') }}
    </Button>
</template>
