<template>
    <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="100"
        :direction="'horizontal'"
        :navigation="true"
        :pagination="true"
        :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
        }"
        :loop="true"
        :speed="1000"
        class="portfolio-testimony-swiper"
    >
        <swiper-slide v-for="(testimonial, index) in items" :key="index">
            <div class="text-center max-w-[768px] m-auto">
                <p class="text-xl md:text-2xl font-bold text-primary mb-6 md:mb-8">
                    "{{ testimonial?.testimony }}"
                </p>
                <div class="w-fit m-auto">
                    <div class="w-16 h-16 rounded-full overflow-hidden m-auto mb-4">
                        <img
                            :src="testimonial?.image?.url"
                            alt="testimony"
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <div class="text-sm md:text-base">
                        <p class="font-bold">{{ testimonial?.name }}</p>
                        <p>{{ testimonial?.designation }}</p>
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script setup lang="ts">
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css';

defineProps({
    items: {
        type: Array,
        required: true,
    },
});

const modules = [Autoplay, Navigation, Pagination];
</script>
<style>
.portfolio-testimony-swiper {
    --swiper-theme-color: #cfa560;
    --swiper-pagination-bullet-inactive-color: #cfa560;
    --swiper-pagination-bottom: -50px;
}
</style>
