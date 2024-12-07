<script setup lang="ts">
const { toggleSearch } = useSearching();
import { Search } from 'lucide-vue-next';
</script>

<template>
  <div class="relative cursor-pointer inline-flex sm:hidden" title="Cart" @click="toggleSearch">
    <Search class="w-6 h-6 text-brand-gold" />
  </div>
</template>
