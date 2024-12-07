<script setup lang="ts">
const { wishlistLink } = useAuth();
const { isShowingSearch } = useSearching();
import { AlignLeft, X } from 'lucide-vue-next';

const open = ref(false);

const toggleMenu = () => {
  open.value = !open.value;
};

const closeMenu = () => {
  open.value = false;
};
</script>

<template>
  <header class="fixed w-full z-50 bg-brand-dark1 px-4 lg:px-10 flex items-center justify-between py-4">

    <div class="flex items-center">
      <AlignLeft @click="toggleMenu" class="w-7 h-7 text-brand-gold lg:hidden mr-4" />
      <NuxtLink to="/" class="cursor-pointer block" @click="closeMenu">
        <div class="h-10 lg:h-[50px]">
          <NuxtImg class="w-full object-contain h-full" src="/images/ht-logo.png" alt="logo" width="93" height="50"
            format="webp" quality="90" data-test-id="logo-image" />
        </div>
      </NuxtLink>
    </div>

    <div class="lg:flex items-center space-x-6 text-brand-gold hidden">

      <NuxtLink to="/" class="hover:text-white transition" @click="closeMenu">Services</NuxtLink>
      <NuxtLink to="/" class="hover:text-white transition" @click="closeMenu">About Us</NuxtLink>
      <NuxtLink to="/shop" class="hover:text-white transition" @click="closeMenu">Consignment</NuxtLink>
      <!-- <NuxtLink to="/products" class="hover:text-white transition">{{ $t('messages.general.allProducts') }}</NuxtLink>
      <NuxtLink to="/categories" class="hover:text-white transition">{{ $t('messages.shop.category', 2) }}</NuxtLink> -->
      <NuxtLink to="/" class="hover:text-white transition" @click="closeMenu">Events</NuxtLink>
      <NuxtLink to="/contact" class="hover:text-white transition" @click="closeMenu">Contact Us</NuxtLink>
      <NuxtLink class="lg:hidden" :to="wishlistLink" :prefetch="false" @click="closeMenu">Wishlist</NuxtLink>
      <NuxtLink class="lg:hidden" to="/my-account" :prefetch="false" @click="closeMenu">My Account</NuxtLink>
    </div>

    <div class="flex items-center space-x-3justify-end space-x-3">
      <!-- <Search class="w-6 h-6 text-brand-gold" /> -->
      <div class="flex justify-end items-center flex-1 ml-auto gap-4 md:gap-6">
        <ProductSearch class="hidden sm:inline-flex max-w-[320px] w-[60%]" />
        <SearchTrigger />
      </div>

      <div class="h-6">
        <SignInLink />
      </div>
      <CartTrigger />
    </div>
    <Transition name="scale-y" mode="out-in">
      <div class="container mb-3 sm:hidden fixed top-[72px] px-4 left-0 bg-brand-dark1" v-if="isShowingSearch">
        <ProductSearch class="flex w-full" />
      </div>
    </Transition>
  </header>
  <div class="spacer h-[72px] lg:h-[82px]"></div>

  <div 
    class="fixed lg:hidden h-screen bg-brand-dark1 top-0 w-[90%] z-50 right-0 px-10 py-20 text-brand-gold flex flex-col space-y-6 text-xl transition duration-500"
    :class="open ? 'translate-x-0' : 'translate-x-[110%]'"
  >
    <NuxtLink to="/" class="hover:text-white transition" @click="closeMenu">Services</NuxtLink>
    <NuxtLink to="/" class="hover:text-white transition" @click="closeMenu">About Us</NuxtLink>
    <NuxtLink to="/shop" class="hover:text-white transition" @click="closeMenu">Consignment</NuxtLink>
    <NuxtLink to="/" class="hover:text-white transition" @click="closeMenu">Events</NuxtLink>
    <NuxtLink to="/contact" class="hover:text-white transition" @click="closeMenu">Contact Us</NuxtLink>
    <NuxtLink class="lg:hidden" :to="wishlistLink" :prefetch="false" @click="closeMenu">Wishlist</NuxtLink>
    <NuxtLink class="lg:hidden" to="/my-account" :prefetch="false" @click="closeMenu">My Account</NuxtLink>
    <X @click="toggleMenu" class="w-6 h-6 text-brand-gold absolute top-0 right-5" />
  </div>
</template>
