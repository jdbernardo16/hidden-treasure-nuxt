<template>
    <div class="portfolio-swiper">
        <swiper
            :modules="modules"
            :loop="true"
            :speed="10000"
            :autoplay="{ delay: 0, disableOnInteraction: false }"
            :breakpoints="{
                '640': {
                    slidesPerView: 1,
                    spaceBetween: 32,
                },
                '768': {
                    slidesPerView: 2,
                    spaceBetween: 32,
                },
                '1024': {
                    slidesPerView: 3,
                    spaceBetween: 32,
                },
            }"
        >
            <swiper-slide v-for="(item, index) in portfolio" :key="index">
                <div
                    @click="
                        showModal = true;
                        selectedWork = item;
                    "
                    class="aspect-[4/3] rounded-lg overflow-hidden border-4 hover:border-brand-gold transition border-transparent cursor-pointer"
                >
                    <NuxtImg
                        quality="80"
                        :src="item.image.url"
                        alt="Partner Logo"
                        class="m-auto w-full h-full object-cover"
                    />
                </div>
            </swiper-slide>
        </swiper>
    </div>

    <PortfolioModal :show="showModal" @close="showModal = false" :item="selectedWork" />
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css';

defineProps({
    portfolio: {
        type: Object,
        default: null,
    },
});

const modules = [Autoplay, FreeMode];

// Partner logos (replace with your actual image paths)
const works = [
    {
        title: 'Alpha Apparel',
        description:
            "For Alpha Apparel, a brand specializing in contemporary and unique clothing, I designed a logo that encapsulates the brand's values of style, durability, and community. The goal was to create a logo that would appeal to a young, fashion-conscious audience while maintaining a professional and timeless look.",
        image: 'images/aplha.jpg',
    },
    {
        title: 'Social Media Audit',
        description:
            'The Hidden Treasures marketing strategiest, designer and advertiser will conduct a complete social media audit on all your platforms. A full report on strengths, weaknesses, market placement and target audience will be provided along with next step suggestions.',
        image: 'images/social-media-audit.jpg',
    },
    {
        title: 'Branded Company Video',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illum repudiandae dicta dignissimos at minus alias incidunt perspiciatis harum quasi!',
        image: 'images/mm.jpg',
    },
    {
        title: 'One Page Flyer',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illum repudiandae dicta dignissimos at minus alias incidunt perspiciatis harum quasi!',
        image: 'images/flyers.jpg',
    },
    {
        title: 'Business Card Design',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illum repudiandae dicta dignissimos at minus alias incidunt perspiciatis harum quasi!',
        image: 'images/mockup.jpg',
    },
];

const showModal = ref(false);

const closeModal = () => {
    showModal.value = false;
};
</script>
