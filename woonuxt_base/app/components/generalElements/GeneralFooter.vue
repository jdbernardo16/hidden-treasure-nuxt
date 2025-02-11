<script setup lang="ts">
const config = useRuntimeConfig();
const API_BASE_URL = config.public.API_BASE_URL;
import { ChevronUp } from 'lucide-vue-next';
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

const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

const handleClick = (title, link) => {
    gtag('event', 'social_media_click', {
        event_category: 'Outbound Link',
        event_label: title,
        event_value: link,
        non_interaction: false,
    });
};
</script>
<template>
    <footer class="order-last">
        <div class="relative">
            <div
                class="w-10 h-10 rounded-full bg-brand-gold absolute -top-5 lg:right-20 right-5 z-50 grid place-content-center cursor-pointer hover:bg-opacity-70 transition"
                @click="scrollToTop"
            >
                <ChevronUp class="w-6 h-6 text-white" />
            </div>
            <div
                class="px-4 lg:px-10 py-10 flex lg:flex-row flex-col lg:space-y-0 space-y-10 w-full justify-between relative z-10 bg-[#232027]/[0.85]"
            >
                <div class="text-neutral-200">
                    <nuxt-link class="block" to="/">
                        <NuxtImg
                            class="mb-4"
                            :src="data?.footer?.column_1?.footer_logo?.url"
                            alt="logo"
                            width="204"
                            format="webp"
                            quality="90"
                            data-test-id="logo-image"
                        />
                    </nuxt-link>
                    <p class="text-sm mb-1">{{ data?.footer?.column_1?.description }}</p>
                    <p class="text-sm">{{ data?.footer?.column_1?.location }}</p>
                </div>
                <div
                    class="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-20 footer-links"
                >
                    <div>
                        <p class="font-bold text-white mb-4">
                            {{ data?.footer?.column_2?.header }}
                        </p>
                        <div class="grid grid-cols-2 text-white gap-y-5 gap-x-10">
                            <nuxt-link
                                v-for="item in data?.footer?.column_2?.links"
                                :key="item"
                                :to="item?.link"
                                >{{ item?.label }}</nuxt-link
                            >
                        </div>
                    </div>
                    <div>
                        <p class="font-bold text-white mb-4">
                            {{ data?.footer?.column_3?.header }}
                        </p>
                        <div class="space-y-5 text-white flex flex-col">
                            <nuxt-link
                                v-for="item in data?.footer?.column_3?.links"
                                :key="item"
                                :to="item?.link"
                                >{{ item?.label }}</nuxt-link
                            >
                            <!-- <nuxt-link to="/">Sitemap</nuxt-link> -->
                        </div>
                    </div>
                </div>
                <div class="text-white text-sm footer-links">
                    <div class="flex space-x-2 mb-3 lg:ml-auto w-fit">
                        <a
                            v-for="item in data?.footer?.column_4?.social_media_links"
                            :key="item"
                            :href="item?.link"
                            target="_blank"
                            @click="handleClick(item?.title, item?.link)"
                        >
                            <nuxt-img
                                format="webp"
                                quality="80"
                                width="24"
                                height="24"
                                :src="item?.icon?.url"
                                :alt="item?.icon?.name"
                            />
                        </a>
                    </div>
                    <nuxt-link
                        :to="`mailto: ${data?.footer?.column_4?.admin_email}`"
                        target="_blank"
                        >{{ data?.footer?.column_4?.admin_email }}</nuxt-link
                    >
                </div>
            </div>
            <img
                class="absolute top-0 left-0 w-full h-full"
                src="/images/footer.png"
                alt="footer"
            />
        </div>
        <div class="bg-brand-dark1 text-center text-brand-gold py-3">
            <p>{{ data?.footer?.copyright }}</p>
        </div>
    </footer>
</template>

<style scoped>
.footer-links a {
    @apply transition hover:text-brand-gold;
}
</style>
