<script setup lang="ts">
import { Search, User, ShoppingCart } from 'lucide-vue-next';
const { wishlistLink } = useAuth();
const { isShowingSearch } = useSearching();
</script>

<template>
  <!-- <header class="sticky top-0 z-40 bg-white shadow-sm shadow-light-500">
    <div class="container flex items-center justify-between py-4">
      <div class="flex items-center">
        <MenuTrigger class="lg:hidden" />
        <Logo class="md:w-[160px]" />
      </div>
      <MainMenu class="items-center hidden gap-6 text-sm text-gray-500 lg:flex lg:px-4" />
      <div class="flex justify-end items-center md:w-[160px] flex-1 ml-auto gap-4 md:gap-6">
        <ProductSearch class="hidden sm:inline-flex max-w-[320px] w-[60%]" />
        <SearchTrigger />
        <div class="flex gap-4 items-center">
          <div><SignInLink /></div>
          <CartTrigger />
        </div>
      </div>
    </div>
    <Transition name="scale-y" mode="out-in">
      <div class="container mb-3 -mt-1 sm:hidden" v-if="isShowingSearch">
        <ProductSearch class="flex w-full" />
      </div>
    </Transition>
  </header> -->

  <header class="fixed w-full z-50 bg-brand-dark1 px-10 flex items-center justify-between py-4">
    <NuxtLink to="/" class="cursor-pointer block">
      <div>
        <nuxt-img src="/images/ht-logo.png" alt="logo" width="93" height="50" format="webp" quality="90" data-test-id="logo-image" />
      </div>
    </NuxtLink>

    <div class="flex items-center space-x-6 text-brand-gold">

      <NuxtLink to="/shop">Shop</NuxtLink>
      <NuxtLink to="/products">{{ $t('messages.general.allProducts') }}</NuxtLink>
      <NuxtLink to="/categories">{{ $t('messages.shop.category', 2) }}</NuxtLink>
      <NuxtLink to="/contact">{{ $t('messages.general.contact') }}</NuxtLink>
      <NuxtLink class="lg:hidden" :to="wishlistLink" :prefetch="false">Wishlist</NuxtLink>
      <NuxtLink class="lg:hidden" to="/my-account" :prefetch="false">My Account</NuxtLink>
    </div>

    <div class="flex items-center space-x-3 w-[113px] justify-end">
      <Search class="w-6 h-6 text-brand-gold" />
      <User class="w-6 h-6 text-brand-gold" />
      <!-- <ShoppingCart class="w-6 h-6 text-brand-gold" /> -->
      <CartTrigger />
    </div>
  </header>
  <div class="spacer h-[82px]"></div>
</template>
