<template>
    <swiper :modules="modules" :slides-per-view="1" :space-between="100" :direction="'horizontal'" :navigation="true"
        :pagination="true" :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
        }" :loop="true" :speed="1000" class="testimony-swiper">
        <swiper-slide v-for="(testimonial, index) in items" :key="index">
            <div class="border border-brand-gold p-4 lg:p-16 rounded-2xl lg:rounded-3xl relative">
                <div class="absolute -top-4 lg:-top-7 left-4 lg:left-10 bg-brand-dark1">
                    <img class="lg:w-16 w-8" src="/images/quote.svg" alt="quote">
                </div>
                <div class="absolute -bottom-4 lg:-bottom-7 right-4 lg:right-10 bg-brand-dark1 rotate-180">
                    <img class="lg:w-16 w-8" src="/images/quote.svg" alt="quote">
                </div>
                <div class="w-full bg-brand-gold rounded-2xl lg:rounded-3xl pb-10 px-4 lg:px-10">
                    <div
                        class="w-[100px] lg:w-[200px] rounded-full overflow-hidden m-auto -translate-y-[50%] border-4 lg:border-8 border-[#535353]">
                        <div class="aspect-[1/1]">
                            <img class="w-full h-full object-cover" :src="testimonial.image" alt="Testimonial Image">
                        </div>
                    </div>
                    <p class="lg:text-2xl lg:leading-10 text-white mb-6">{{ testimonial.text }}</p>
                    <div class="flex lg:items-end w-full justify-between lg:flex-row flex-col lg:space-y-0 space-y-4">
                        <div>
                            <p class="text-xl lg:text-3xl text-neutral-700">{{ testimonial.name }}</p>
                            <p class="lg:text-2xl text-neutral-700">{{ testimonial.position }}</p>
                        </div>
                        <div class="flex items-center">
                            <svg v-for="star in testimonial.rating" :key="star" width="32" height="32"
                                viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.4783 4.6832C14.9583 3.2096 17.0431 3.2096 17.5215 4.6832L19.2335 9.9504C19.3381 10.2712 19.5414 10.5507 19.8144 10.749C20.0874 10.9472 20.4161 11.0542 20.7535 11.0544H26.2927C27.8431 11.0544 28.4863 13.0384 27.2335 13.9504L22.7535 17.2048C22.48 17.4033 22.2763 17.6832 22.1716 18.0046C22.067 18.3259 22.0668 18.6721 22.1711 18.9936L23.8831 24.2608C24.3631 25.7344 22.6751 26.9616 21.4191 26.0496L16.9391 22.7952C16.6658 22.5968 16.3368 22.49 15.9991 22.49C15.6614 22.49 15.3324 22.5968 15.0591 22.7952L10.5791 26.0496C9.32471 26.9616 7.63831 25.7344 8.11671 24.2608L9.82871 18.9936C9.93299 18.6721 9.9328 18.3259 9.82818 18.0046C9.72355 17.6832 9.51986 17.4033 9.24631 17.2048L4.76791 13.952C3.51511 13.04 4.15991 11.056 5.70871 11.056H11.2463C11.584 11.0561 11.913 10.9493 12.1863 10.751C12.4597 10.5527 12.6632 10.273 12.7679 9.952L14.4799 4.6848L14.4783 4.6832Z"
                                    fill="#535353" />
                            </svg>
                        </div>
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
import "swiper/css/navigation";
import "swiper/css/free-mode";
import 'swiper/css';

defineProps({
    items: {
        type: Array,
        required: true,
    },
});

const modules = [Autoplay, Navigation, Pagination];

</script>

<style scoped>
.testimony-swiper {
    padding: 50px 0;
    --swiper-theme-color: #CFA560;
    --swiper-pagination-bullet-inactive-color: #CFA560;
    --swiper-pagination-bottom: -50px;
}
</style>