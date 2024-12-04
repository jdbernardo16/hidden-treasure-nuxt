<template>
    <swiper
       :modules="modules"
       :slides-per-view="1"
       :space-between="100"
       :direction="'horizontal'"
       :pagination="true"
       :autoplay="{
           delay: 5000,
           disableOnInteraction: false,
       }"
       :loop="true"
       :speed="1000" class="shop-swiper h-full"
   >
       <swiper-slide v-for="i in 3">
            <div class="h-full relative">
                <NuxtImg
                    class="w-full h-full object-cover"
                    src="/images/package.png"
                    alt="package"
                    loading="lazy" 
                />
                <div class="overlay bg-gradient-to-t from-black w-full h-full absolute top-0 left-0 flex px-20 items-center">
                    <div class="max-w-[573px] space-y-8">
                        <h1 class="valery text-brand-gold text-[4rem] leading-tight slider-title">Legendary <br> Mystery Packs</h1>
                        <p class="text-white text-2xl leading-snug slider-description">Shop our curated selection of collectible sports cards, ensuring authenticity and quality in every item.</p>
                        <Button @click="navigateTo('/products')" class="slider-button" variant="secondary">Shop now</Button>
                    </div>
                </div>
            </div>
       </swiper-slide>
   </swiper>
</template>
<script setup lang="ts">
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/pagination';
import "swiper/css/free-mode";
import 'swiper/css';

defineProps({
   items: {
       type: Object
   }
})

const modules = [Autoplay, Pagination];


</script>

<style scoped lang="scss">
.shop-swiper {
    overflow: visible;
    --swiper-theme-color: #CFA560;
    --swiper-pagination-bullet-inactive-color: #CFA560;
    --swiper-pagination-bottom: 50px;

    .swiper-slide {
        .slider-title {
            opacity: 0;
            transform: translateY(20px);
            transition: 1s ease all;
            transition-delay: 0.5s;
        }
        .slider-description {
            opacity: 0;
            transform: translateY(20px);
            transition: 1s ease all;
            transition-delay: 0.75s;
        }

        .slider-button {
            opacity: 0;
            transform: translateY(20px);
            transition: 1s ease all;
            transition-delay: 1s;
        }
        &-active {
            .slider-title {
                opacity: 1;
                transform: translateY(0px);
            }
            .slider-description {
                opacity: 1;
                transform: translateY(0px);
            }
            .slider-button {
                opacity: 1;
                transform: translateY(0px);
            }
        }
    }
}
</style>