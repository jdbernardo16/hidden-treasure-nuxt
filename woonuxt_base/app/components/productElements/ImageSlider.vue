<template>
    <div class="relative w-full">
        <!-- Main Slider -->
        <div class="main-slider mb-4 w-full">
            <Swiper
                :modules="[SwiperThumb, Navigation]"
                :thumbs="{ swiper: thumbsSwiper }"
                :navigation="true"
                class="w-full"
            >
                <SwiperSlide v-for="(image, index) in galleryImages" :key="index">
                    <div class="aspect-[1/1] relative overflow-hidden rounded bg-neutral-700 p-4">
                        <!-- Discount Badge -->
                        <NuxtImg
                            :src="image.sourceUrl"
                            :alt="`Product Image ${index + 1}`"
                            class="h-full w-full object-contain"
                            fetchpriority="high"
                            quality="80"
                            format="webp"
                            placeholder
                            placeholder-class="blur-xl"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

        <!-- Thumbnail Slider -->
        <div class="thumb-slider w-full">
            <Swiper
                :modules="[SwiperThumb]"
                :slides-per-view="5"
                :space-between="10"
                :watch-slides-progress="true"
                @swiper="setThumbsSwiper"
            >
                <SwiperSlide
                    v-for="(image, index) in galleryImages"
                    :key="index"
                    class="aspect-[1/1] cursor-pointer overflow-hidden border-neutral-500 rounded-lg border-2 transition-all p-1 bg-neutral-800"
                >
                    <NuxtImg
                        :src="image.sourceUrl"
                        :alt="`Thumbnail ${index + 1}`"
                        class="h-full w-full rounded object-contain"
                        fetchpriority="high"
                        quality="80"
                        format="webp"
                        placeholder
                        placeholder-class="blur-xl"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Thumbs as SwiperThumb, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper/types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const { FALLBACK_IMG } = useHelpers();

const props = defineProps({
    mainImage: { type: Object, required: true },
    gallery: { type: Object, required: true },
    node: { type: Object as PropType<Product>, required: true },
    activeVariation: { type: Object, required: false },
});

const primaryImage = computed(() => ({
    sourceUrl: props.mainImage.sourceUrl || FALLBACK_IMG,
    title: props.mainImage.title,
    altText: props.mainImage.altText,
    databaseId: props.mainImage.databaseId,
}));

const galleryImages = computed(() => {
    // Add the primary image to the start of the gallery and remove duplicates
    return [primaryImage.value, ...props.gallery.nodes].filter(
        (img, index, self) => index === self.findIndex((t) => t?.databaseId === img?.databaseId),
    );
});

const thumbsSwiper = ref<SwiperType | null>(null);
const activeIndex = ref(0);

const setThumbsSwiper = (swiper: SwiperType) => {
    thumbsSwiper.value = swiper;
};

onMounted(() => {
    activeIndex.value = 0;
});
</script>

<style scoped>
/* Custom Swiper Navigation Styles */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
    color: theme('colors.gray.500');
    background: theme('colors.white');
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

:deep(.swiper-button-next)::after,
:deep(.swiper-button-prev)::after {
    font-size: 20px;
}

:deep(.swiper-button-disabled) {
    opacity: 0.35;
    cursor: not-allowed;
}

/* Thumbnail hover effect */
.thumb-slider .swiper-slide {
    opacity: 0.7;
    transition: opacity 0.3s ease;
}

.thumb-slider .swiper-slide:hover,
.thumb-slider .swiper-slide-thumb-active {
    opacity: 1;
}

.swiper-slide-thumb-active {
    border-color: #cfa560;
}
</style>
