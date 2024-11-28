<template>
    <!-- <div class="relative mx-auto">
    <NuxtImg
      width="1400"
      height="800"
      class="object-cover w-full h-[420px] lg:h-[560px] xl:h-[640px]"
      src="/images/hero-4.jpg"
      alt="Hero image"
      loading="eager"
      sizes="sm:100vw md:1400px"
      fetchpriority="high"
      preload
      placeholder
      placeholder-class="blur-xl" />
    <div class="container absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-l from-gray-200 md:bg-none">
      <h1 class="text-3xl font-bold md:mb-4 md:text-4xl lg:text-6xl valery text-brand-gold">Just landed.</h1>
      <h2 class="text-lg font-bold md:mb-4 lg:text-3xl">The New Year Collection</h2>
      <div class="max-w-sm mb-8 text-md font-light lg:max-w-md text-balance">
        <p>Our latest collection is here. Discover the latest trends and styles for the new year.</p>
      </div>
      <NuxtLink class="px-6 py-3 font-bold text-white bg-gray-800 rounded-xl hover:bg-gray-800" to="/products">Shop now</NuxtLink>
    </div>
  </div> -->
<section class="bg-brand-dark1 h-[calc(100vh-80px)] px-10 pb-10 pt-2">
    <div class="border-4 h-full border-brand-gold flex items-center">
        <div class="w-7/12 pl-16 h-fit py-16 space-y-16">
            <div class="space-y-6">
                <h1 class="valery text-brand-gold text-[4rem] leading-tight whitespace-pre-wrap">{{ data?.f1_title }}</h1>
                <div class="max-w-[520px]">
                    <p class="text-white">{{ data?.f1_description }}</p>
                </div>
                <Button variant="secondary">
                    {{data?.f1_button_text}}
                </Button>
            </div>
            <div class="space-y-3 relative w-fit">
                <div class="flex items-center space-x-3">
                    <p class="text-white">Trusted By Clients From Worldwide</p>
                    <img src="/images/sparkle.svg" alt="sparkle">
                </div>
                <div class="flex items-center">
                    <div v-for="item in data?.f1_clients.slice(0, 4)" class="w-10 text-white">
                        <div class="w-[50px] h-[50px] rounded-full overflow-hidden border border-brand-gold">
                            <img class="w-full h-full object-cover":src="item.client_image.sizes.thumbnail" :alt="item.name">
                        </div>
                    </div>
                    <div v-if="data?.f1_clients.length > 4" class="w-10">
                        <div class="w-[50px] h-[50px] rounded-full overflow-hidden border border-brand-gold bg-brand-gold flex items-center justify-center text-white">
                            <p>+{{ data?.f1_clients.length - 4 }}</p>
                        </div>
                    </div>
                </div>
                <img class="absolute top-0 -right-20" src="/images/twirl.svg" alt="twirl">
            </div>
        </div>
        <div class="w-5/12 p-20">
            <img
            :src="data?.f1_image.url"
            placeholder-class="blur-xl" /> 
        </div>
    </div>
</section>
</template>
<script setup lang="ts">
defineProps({
    data: {
        type: Object,
        default: null,
    },
})
</script>
