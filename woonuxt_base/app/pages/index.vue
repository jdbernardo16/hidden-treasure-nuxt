<script lang="ts" setup>
const { siteName, description, shortDescription, siteImage } = useAppConfig();
const { data } = useFetch('http://localhost:8000/wp-json/wp/v2/pages', {
    query: {
        slug: 'home',
        _fields: 'acf',
        acf_format: 'standard'
    },
    transform: (response) => {
        return response[0]?.acf || null
    }
})
import { ProductsOrderByEnum } from '#woo';
const { data: productData } = await useAsyncGql('getProducts', { first: 5, orderby: ProductsOrderByEnum.POPULARITY });
const popularProducts = productData.value.products?.nodes || [];

useSeoMeta({
  title: `Home`,
  ogTitle: siteName,
  description: description,
  ogDescription: shortDescription,
  ogImage: siteImage,
  twitterCard: `summary_large_image`,
});
</script>

<template>
    <HeroBanner :data="data" />

    <!-- Section 2: Services -->
    <section class="bg-brand-dark1">
        <div class="max-w-[1440px] m-auto px-10 pt-20 pb-20">
            <div class="flex w-full justify-between mb-20">
                <div class="flex space-x-4 items-start">
                    <div class="pt-1">
                        <img src="/images/spark.svg" alt="spark">
                    </div>
                    <div>
                        <h2 class="text-[40px] leading-tight valery text-brand-gold">{{ data?.f2_title }}</h2>
                        <p class="text-white">{{ data?.f2_description }}</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <ServiceSlider :data="data?.f2_services" />
            
        </div>
    </section>

    <!-- Section 3: Advantages -->
    <section class="bg-brand-dark1">
        <div class="max-w-[1440px] m-auto px-10 pt-20 pb-20">
            <div class="flex w-full justify-between mb-20 items-start">
                <div class="flex space-x-4 items-start">
                    <div class="pt-1">
                        <img src="/images/spark.svg" alt="spark">
                    </div>
                    <div>
                        <h2 class="text-[40px] leading-tight valery text-brand-gold">Our Work, Your Inspiration</h2>
                        <p class="text-white">Discover how we’ve helped brands uncover their true potential.</p>
                    </div>
                </div>
                <div class="flex items-center text-brand-gold space-x-2">
                    <p>View All</p>
                    <ArrowRight class="w-5 h-5" />
                </div>
            </div>

            <div class="space-y-20">
                <div v-for="i in 3" class="portfolio flex items-center px-20">
                    <div class="portfolio-image w-7/12">
                        <div class="w-[120%] aspect-[16/9] relative overflow-hidden image-item">
                            <img src="https://picsum.photos/id/237/800/450" alt="luxeglow" class="object-cover w-full h-full">
                            <div class="absolute top-0 left-0 h-full w-full bg-brand-gold opacity-80 overlay"></div>
                        </div>
                    </div>
                    <div class="portfolio-content w-5/12 text-right space-y-6 relative z-[1]">
                        <div class="w-[310px] port-title">
                            <p class="text-2xl valery text-brand-gold">LuxeGlow Skincare
                                Redefining Elegance Online</p>
                        </div>
                        <div class="w-full bg-neutral-600 p-4 right-0 text-white">
                            <p>We created a luxurious e-commerce experience for LuxeGlow, a premium skincare brand. Our team developed a sleek, responsive website paired with an engaging digital marketing campaign. The result? A 40% increase in online sales within three months.</p>
                        </div>

                        <div>
                            <p class="text-neutral-400 mb-6">E-Commerce • Branding • Digital Marketing</p>
                            <img class="port-link" src="/images/link.svg" alt="link">
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-brand-dark1">
        <div class="max-w-[1440px] m-auto px-10 pt-20 pb-20">
            <div class="text-center mb-16">
                <p class="valery text-[40px] text-brand-gold">Our Products</p>
            </div>
            <div class="grid grid-cols-3 gap-20 mb-16">
          
                <ProductCard
                v-for="(node, i) in popularProducts.slice(0, 3)"
                :key="node.databaseId"
                class="w-full"
                :node="node"
                :index="i"
                :class="{
                    hidden: i === popularProducts.length - 1,
                    'lg:block': i === popularProducts.length - 1,
                }" />
            </div>
            <div class="w-fit m-auto">
                <Button class="w-[185px]">View All</Button>
            </div>
        </div>
    </section>

    <section class="bg-brand-dark1">
        <div class="max-w-[1440px] m-auto px-10 py-20">
            <div class="flex space-x-4 items-start mb-20">
                <div class="pt-1">
                    <img src="/images/spark.svg" alt="spark">
                </div>
                <div>
                    <h2 class="text-[40px] leading-tight valery text-brand-gold">What Our Clients Say</h2>
                    <p class="text-white max-w-[489px]">Discover how Hidden Treasures has transformed brands and driven success through our innovative solutions and dedicated partnership.</p>
                </div>
            </div>
            <div class="w-full px-[160px]">
                <TestimonySlider />
            </div>
        </div>
    </section>

    <section>
        <PartnerSlider />
    </section>

    <section class="bg-brand-dark1 overflow-hidden">
        <div
            class="max-w-[1440px] m-auto relative lg:px-12 lg:py-20 px-4 py-16"
        >
            <div class="overlay">
                <img
                    class="absolute -bottom-[130px] -left-[110px]"
                    src="/images/envelop.svg"
                    alt="envelop"
                />
                <img
                    class="absolute lg:-right-5 -right-20 top-5 lg:top-[170px]"
                    src="/images/at.png"
                    alt="at"
                />
            </div>
            <div
                class="max-w-[1080px] m-auto flex flex-col lg:flex-row lg:space-x-20"
            >
                <div class="lg:w-[450px] lg:mb-0 mb-8">
                    <h2
                        class="lg:text-[40px] leading-tight mb-6 valery text-brand-gold"
                    >
                        Let’s Start Uncovering Hidden Opportunities
                    </h2>
                    <div
                        class="text-white"
                    >
                        <p>Reach out to Hidden Treasures today and discover how we can transform your brand’s potential into measurable success. We’re here to help you every step of the way.</p>
                    </div>
                </div>

                <form class="w-full lg:w-[calc(100%-530px)]">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        <TextInput
                            custom-input-class="bg-transparent"
                            type="text"
                            name="first-name"
                            id="first-name"
                            placeholder="Enter first name here"
                            label="First Name"
                        />
                        <TextInput
                            custom-input-class="bg-transparent"
                            type="text"
                            name="last-name"
                            id="last-name"
                            placeholder="Enter last name here"
                            label="Last Name"
                        />
                        <TextInput
                            custom-input-class="bg-transparent"
                            type="text"
                            name="email-address"
                            id="email-address"
                            placeholder="Enter email address here"
                            label="Email Address"
                        />

                        <MobileInput
                            name="mobile-number"
                            id="mobile-number"
                            placeholder="Enter mobile number here"
                            label="Mobile Number"
                        />
                        <TextInput
                            custom-input-class="bg-transparent"
                            textarea
                            type="text"
                            name="message"
                            id="message"
                            placeholder="Enter message here"
                            label="Message"
                            class="col-span-full"
                            :maxlength="500"
                        />
                    </div>

                   

                    <!-- <vue-recaptcha
                        class="mt-6"
                        :sitekey="sitekey"
                        @verify="verifySubmission"
                        @expired="expiredRecaptcha"
                        ref="grecaptcha"
                    ></vue-recaptcha> -->

                    <Button
                        size="large"
                        class="mt-6"
                    >
                        SUBMIT INQUIRY
                    </Button>
                </form>
            </div>
        </div>
    </section>
    <!-- <div
        class="container flex flex-wrap items-center justify-center my-16 text-center gap-x-8 gap-y-4 brand lg:justify-between">
        <img src="/images/logoipsum-211.svg" alt="Brand 1" width="132" height="35" />
        <img src="/images/logoipsum-221.svg" alt="Brand 2" width="119" height="30" />
        <img src="/images/logoipsum-225.svg" alt="Brand 3" width="49" height="48" />
        <img src="/images/logoipsum-280.svg" alt="Brand 4" width="78" height="30" />
        <img src="/images/logoipsum-284.svg" alt="Brand 5" width="70" height="44" />
        <img src="/images/logoipsum-215.svg" alt="Brand 6" width="132" height="40" />
    </div>

    <section class="container my-16">
        <div class="flex items-end justify-between">
            <h2 class="text-lg font-semibold md:text-2xl">{{ $t('messages.shop.shopByCategory') }}</h2>
            <NuxtLink class="text-primary" to="/categories">{{ $t('messages.general.viewAll') }}</NuxtLink>
        </div>
        <div class="grid justify-center grid-cols-2 gap-4 mt-8 md:grid-cols-3 lg:grid-cols-6">
            <CategoryCard v-for="(category, i) in productCategories" :key="i" class="w-full" :node="category" />
        </div>
    </section>

    <section class="container grid gap-4 my-24 md:grid-cols-2 lg:grid-cols-4">
        <div class="flex items-center gap-8 p-8 bg-white rounded-lg">
            <img src="/icons/box.svg" width="60" height="60" alt="Free Shipping" loading="lazy" />
            <div>
                <h3 class="text-xl font-semibold">Free Shipping</h3>
                <p class="text-sm">Free shipping on order over €50</p>
            </div>
        </div>
        <div class="flex items-center gap-8 p-8 bg-white rounded-lg">
            <img src="/icons/moneyback.svg" width="60" height="60" alt="Money Back" loading="lazy" />
            <div>
                <h3 class="text-xl font-semibold">Peace of Mind</h3>
                <p class="text-sm">30 days money back guarantee</p>
            </div>
        </div>
        <div class="flex items-center gap-8 p-8 bg-white rounded-lg">
            <img src="/icons/secure.svg" width="60" height="60" alt="Secure Payment" loading="lazy" />
            <div>
                <h3 class="text-xl font-semibold">100% Payment Secure</h3>
                <p class="text-sm">Your payment are safe with us.</p>
            </div>
        </div>
        <div class="flex items-center gap-8 p-8 bg-white rounded-lg">
            <img src="/icons/support.svg" width="60" height="60" alt="Support 24/7" loading="lazy" />
            <div>
                <h3 class="text-xl font-semibold">Support 24/7</h3>
                <p class="text-sm">24/7 Online support</p>
            </div>
        </div>
    </section>

    <section class="container my-16" v-if="popularProducts">
        <div class="flex items-end justify-between">
            <h2 class="text-lg font-semibold md:text-2xl">{{ $t('messages.shop.popularProducts') }}</h2>
            <NuxtLink class="text-primary" to="/products">{{ $t('messages.general.viewAll') }}</NuxtLink>
        </div>
        <ProductRow :products="popularProducts" class="grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-8" />
    </section> -->
</template>

<style>
.brand img {
    max-height: min(8vw, 120px);
    object-fit: contain;
    object-position: center;
}
</style>
