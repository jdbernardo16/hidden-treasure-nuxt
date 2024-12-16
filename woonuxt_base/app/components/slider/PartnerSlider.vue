<template>
    <div class="partner-swiper">
        <swiper 
            :modules="modules"
            :loop="true" 
            :speed="5000"
            :autoplay="{ delay: 0, disableOnInteraction: false }" 
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
                spaceBetween: 20,
                },
            }"
        >
            <swiper-slide v-for="(partner, index) in partners" :key="index">
                <img :src="partner" alt="Partner Logo" class="partner-logo m-auto" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, FreeMode } from 'swiper/modules';
import "swiper/css/free-mode";
import 'swiper/css';

const modules = [Autoplay, FreeMode];

// Partner logos (replace with your actual image paths)
const partners = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/ht-logo.png",
    "/logos/logo4.jpg",
];
</script>

<style scoped>
.partner-swiper {
    width: 100%;
    overflow: hidden;
    padding: 40px 0;
    background: #333;
    /* Adjust to your design */
}

.partner-logo {
    width: auto;
    height: 100px;
    object-fit: contain;
}
</style>