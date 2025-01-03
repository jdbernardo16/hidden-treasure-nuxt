<script setup lang="ts">
const { toggleCart } = useCart();
</script>

<template>
    <div class="flex flex-col items-center justify-center flex-1 mb-20 text-gray-400">
        <Icon name="ion:cart-outline" size="96" class="opacity-75 mb-5" />
        <div class="mb-2 text-xl font-semibold">{{ $t('messages.shop.cartEmpty') }}</div>
        <span class="mb-8">{{ $t('messages.shop.addProductsInYourCart') }}</span>
        <NuxtLink to="/products" @click="toggleCart(false)">
            <Button>
                {{ $t('messages.shop.browseOurProducts') }}
            </Button>
        </NuxtLink>
    </div>
</template>
