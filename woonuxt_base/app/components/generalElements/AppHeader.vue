<script setup lang="ts">
const { wishlistLink } = useAuth();
const { isShowingSearch } = useSearching();
import { AlignLeft, X, ChevronDown } from 'lucide-vue-next';
const config = useRuntimeConfig();
const API_BASE_URL = config.public.API_BASE_URL;
const { data } = useFetch(`${API_BASE_URL}/wp-json/wp/v2/pages`, {
    query: {
        slug: 'header-footer',
        _fields: 'acf',
        acf_format: 'standard',
    },
    transform: (response) => {
        return response[0]?.acf || null;
    },
});

const open = ref(false);

const toggleMenu = () => {
    open.value = !open.value;
};

const closeMenu = () => {
    open.value = false;
};
</script>

<template>
    <header
        class="fixed w-full z-50 bg-brand-dark1 px-4 lg:px-10 flex items-center justify-between py-4"
    >
        <div class="flex items-center">
            <AlignLeft @click="toggleMenu" class="w-7 h-7 text-brand-gold lg:hidden mr-4" />
            <NuxtLink to="/" class="cursor-pointer block" @click="closeMenu">
                <div class="h-10 lg:h-[50px]">
                    <NuxtImg
                        class="w-full object-contain h-full"
                        :src="data?.header?.logo?.url"
                        :alt="data?.header?.logo?.name"
                        width="93"
                        height="50"
                        format="webp"
                        quality="90"
                        data-test-id="logo-image"
                    />
                </div>
            </NuxtLink>
        </div>

        <div class="lg:flex items-center space-x-6 text-brand-gold hidden">
            <div class="relative dropdown-parent">
                <div class="hover:text-white transition flex items-center" @click="closeMenu">
                    Services <ChevronDown class="w-5 h-5 ml-2" />
                </div>
                <div
                    class="dropdown-menu flex flex-col absolute top-full w-max bg-brand-dark1 p-4 space-y-3 text-sm"
                >
                    <NuxtLink
                        to="/services/digital-marketing"
                        class="hover:text-white transition"
                        @click="closeMenu"
                        >Digital Marketing</NuxtLink
                    >
                    <NuxtLink
                        to="/services/virtual-assistant"
                        class="hover:text-white transition"
                        @click="closeMenu"
                        >Virtual Assistant</NuxtLink
                    >
                    <!-- <NuxtLink to="/services/event-management" class="hover:text-white transition" @click="closeMenu">Event Management</NuxtLink> -->
                    <NuxtLink
                        to="/services/consignment-services"
                        class="hover:text-white transition"
                        @click="closeMenu"
                        >Consignment Services</NuxtLink
                    >
                </div>
            </div>
            <NuxtLink to="/about-us" class="hover:text-white transition" @click="closeMenu"
                >About Us</NuxtLink
            >
            <NuxtLink to="/shop" class="hover:text-white transition" @click="closeMenu"
                >Consignment</NuxtLink
            >
            <NuxtLink to="/portfolio" class="hover:text-white transition" @click="closeMenu"
                >Portfolio</NuxtLink
            >
            <NuxtLink to="/contact" class="hover:text-white transition" @click="closeMenu"
                >Contact Us</NuxtLink
            >
            <NuxtLink class="lg:hidden" :to="wishlistLink" :prefetch="false" @click="closeMenu"
                >Wishlist</NuxtLink
            >
            <NuxtLink class="lg:hidden" to="/my-account" :prefetch="false" @click="closeMenu"
                >My Account</NuxtLink
            >
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
            <div
                class="container mb-3 sm:hidden fixed top-[72px] px-4 left-0 bg-brand-dark1"
                v-if="isShowingSearch"
            >
                <ProductSearch class="flex w-full" />
            </div>
        </Transition>
    </header>
    <div class="spacer h-[72px] lg:h-[82px]"></div>

    <div
        class="fixed lg:hidden h-screen bg-brand-dark1 top-0 w-[90%] z-50 right-0 px-10 py-20 text-brand-gold flex flex-col space-y-6 text-xl transition duration-500"
        :class="open ? 'translate-x-0' : 'translate-x-[110%]'"
    >
        <div>
            <div class="hover:text-white transition" @click="closeMenu">Services</div>
            <div class="flex flex-col p-4 space-y-4 text-sm">
                <NuxtLink
                    to="/services/digital-marketing"
                    class="hover:text-white transition"
                    @click="closeMenu"
                    >Digital Marketing</NuxtLink
                >
                <NuxtLink
                    to="/services/virtual-assistant"
                    class="hover:text-white transition"
                    @click="closeMenu"
                    >Virtual Assistant</NuxtLink
                >
                <!-- <NuxtLink to="/services/event-management" class="hover:text-white transition" @click="closeMenu">Event Management</NuxtLink> -->
                <NuxtLink
                    to="/services/consignment-services"
                    class="hover:text-white transition"
                    @click="closeMenu"
                    >Consignment Services</NuxtLink
                >
            </div>
        </div>
        <NuxtLink to="/" class="hover:text-white transition" @click="closeMenu">About Us</NuxtLink>
        <NuxtLink to="/shop" class="hover:text-white transition" @click="closeMenu"
            >Consignment</NuxtLink
        >
        <NuxtLink to="/portfolio" class="hover:text-white transition" @click="closeMenu"
            >Portfolio</NuxtLink
        >
        <NuxtLink to="/contact" class="hover:text-white transition" @click="closeMenu"
            >Contact Us</NuxtLink
        >
        <NuxtLink class="lg:hidden" :to="wishlistLink" :prefetch="false" @click="closeMenu"
            >Wishlist</NuxtLink
        >
        <NuxtLink class="lg:hidden" to="/my-account" :prefetch="false" @click="closeMenu"
            >My Account</NuxtLink
        >
        <X @click="toggleMenu" class="w-6 h-6 text-brand-gold absolute top-0 right-5" />
    </div>
</template>

<style>
.dropdown-parent .dropdown-menu {
    display: none;
}
.dropdown-parent:hover .dropdown-menu {
    display: flex;
}
</style>
