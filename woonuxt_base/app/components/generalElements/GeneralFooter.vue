<template>
    <footer class="order-last">
        <div class="relative">
            <div class="px-4 lg:px-10 py-10 flex lg:flex-row flex-col lg:space-y-0 space-y-10 w-full justify-between relative z-10 bg-[#232027]/[0.85]">
                <div class="text-neutral-200">
                    <NuxtImg class="mb-4" src="/images/ht-logo.png" alt="logo" width="204" format="webp" quality="90" data-test-id="logo-image" />
                    <p class="text-sm mb-1">Uncover the Potential, Elevate Your Brand.</p>
                    <p class="text-sm">Newport Beach, CA</p>
                </div>
                <div class="flex flex-col lg:flex-row space-y-10 lg:space-x-20 footer-links">
                    <div>
                        <p class="font-bold text-white mb-4">Quick Links</p>
                        <div class="grid grid-cols-2 text-white gap-y-5 gap-x-10">
                            <nuxt-link to="/">About Us</nuxt-link>
                            <nuxt-link to="/">Projects</nuxt-link>
                            <nuxt-link to="/">Services</nuxt-link>
                            <nuxt-link to="/shop">Consignment</nuxt-link>
                            <nuxt-link to="/contact">Contact Us</nuxt-link>
                            <nuxt-link to="/products">Products</nuxt-link>
                            <nuxt-link to="/categories">Categories</nuxt-link>
                            <nuxt-link to="/">FAQs</nuxt-link>
                        </div>
                    </div>
                    <div>
                        <p class="font-bold text-white mb-4">Legal</p>
                        <div class="space-y-5 text-white flex flex-col">
                            <nuxt-link to="/">Terms and Conditions</nuxt-link>
                            <nuxt-link to="/">Privacy Policy</nuxt-link>
                            <nuxt-link to="/">Sitemap</nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="text-white text-sm footer-links">
                    <div class="flex space-x-2 mb-3 lg:ml-auto w-fit">
                        <img src="/images/linkedin.svg" alt="linkedin">
                        <img src="/images/twitter.svg" alt="twitter">
                        <img src="/images/facebook.svg" alt="facebook">
                        <img src="/images/instagram.svg" alt="instagram">
                    </div>
                    <nuxt-link to="mailto: info@hiddentreasurechests.com" target="_blank">info@hiddentreasurechests.com</nuxt-link>
                </div>
            </div>
            <img class="absolute top-0 left-0 w-full h-full" src="/images/footer.png" alt="footer">
        </div>
        <div class="bg-brand-dark1 text-center text-brand-gold py-3">
            <p>All rights reserved | © Hidden Treasures 2024</p>
        </div>
    </footer>
</template>

<style scoped>
.footer-links a {
    @apply transition hover:text-brand-gold;
}
</style>