<template>
    <section class="bg-brand-dark1 h-[calc(100vh-80px)] px-10 pb-10 pt-2 relative overflow-hidden"
        id="interactive-section">
        <div class="border-4 h-full border-brand-gold flex items-center">
            <div class="w-6/12 pl-16 h-fit py-16 space-y-16">
                <div class="space-y-6">
                    <h1 class="valery text-brand-gold text-[5rem] leading-tight whitespace-pre-wrap">{{ data?.f1_title
                        }}</h1>
                    <div class="max-w-[520px]">
                        <p class="text-white">{{ data?.f1_description }}</p>
                    </div>
                    <Button variant="secondary">
                        {{ data?.f1_button_text }}
                    </Button>
                </div>
                <!-- <div class="space-y-3 relative w-fit">
                    <div class="flex items-center space-x-3">
                        <p class="text-white">Trusted By Clients From Worldwide</p>
                        <img src="/images/sparkle.svg" alt="sparkle">
                    </div>
                    <div class="flex items-center">
                        <div v-for="item in data?.f1_clients.slice(0, 4)" class="w-10 text-white">
                            <div class="w-[50px] h-[50px] rounded-full overflow-hidden border border-brand-gold">
                                <img class="w-full h-full object-cover" :src="item.client_image.sizes.thumbnail"
                                    :alt="item.name">
                            </div>
                        </div>
                        <div v-if="data?.f1_clients.length > 4" class="w-10">
                            <div
                                class="w-[50px] h-[50px] rounded-full overflow-hidden border border-brand-gold bg-brand-gold flex items-center justify-center text-white">
                                <p>+{{ data?.f1_clients.length - 4 }}</p>
                            </div>
                        </div>
                    </div>
                    <img class="absolute top-0 -right-20" src="/images/twirl.svg" alt="twirl">
                </div> -->
            </div>
            <div class="w-6/12 p-20 relative">
                <img :src="data?.f1_image.url" placeholder-class="blur-xl" id="interactive-image"
                    class="transition-transform duration-500 ease-out" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";

defineProps({
    data: {
        type: Object,
        default: null,
    },
});

onMounted(() => {
    const section = document.getElementById("interactive-section");
    const image = document.getElementById("interactive-image");

    const handleMouseMove = (event) => {
        const rect = section.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        const intensity = 30; // Adjust for effect strength
        image.style.transform = `translate(${x / intensity}px, ${y / intensity}px)`;
    };

    section.addEventListener("mousemove", handleMouseMove);

    onBeforeUnmount(() => {
        section.removeEventListener("mousemove", handleMouseMove);
    });
});
</script>

<style scoped>
#interactive-image {
    transform: translate(0, 0);
    will-change: transform;
    /* Optimizes rendering performance */
}
</style>