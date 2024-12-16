<template>
    <swiper
        :modules="modules"
        :space-between="24"
        :breakpoints="{
            '640': {
            slidesPerView: 1,
            spaceBetween: 16,
            },
            '768': {
            slidesPerView: 2,
            spaceBetween: 24,
            },
            '1024': {
            slidesPerView: 4,
            spaceBetween: 24,
            },
        }"
    >
        <swiper-slide v-for="item in data">
            <div class="space-y-6 px-4 pt-20 pb-16 rounded-t-full border-2 border-brand-gold">
                <img class="m-auto animateUp" :src="item.icon.url" alt="Target" width="130" height="130">
                <div class="text-center space-y-4">
                    <p class="text-brand-gold text-3xl font-semibold h-[72px] line-clamp-2 animateUp">{{item.title}}</p>
                    <p class="text-white line-clamp-3 animateUp lg:min-h-[72px]">
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </swiper-slide>
    </swiper>
   
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, FreeMode } from 'swiper/modules';
import "swiper/css/navigation";
import "swiper/css/free-mode";
import 'swiper/css';

const modules = [Autoplay, Navigation, FreeMode];

defineProps({
    data: {
        type: Object,
        default: null,
    },
})
</script>