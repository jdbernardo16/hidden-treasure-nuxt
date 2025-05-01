<script lang="ts" setup>
import { ref } from 'vue';

// SEO Meta
useHead({
    title: 'Consignment Services | Hidden Treasures',
    meta: [
        {
            name: 'description',
            content:
                'Sell your collectibles, vintage items, or overstock with ease. Full-service consignment and listing support available.',
        },
    ],
});

// Form state (example)
const formData = ref({
    fullName: '',
    email: '',
    phone: '',
    packageType: 'full-service',
    itemDescriptions: '',
    referralCode: '',
});

const handleFormSubmit = () => {
    console.log('Form submitted:', formData.value);
    // Add form submission logic (e.g., API call, Mailchimp integration)
    alert('Thank you for your submission!');
};

const scrollToForm = () => {
    const formElement = document.getElementById('intake-form');
    if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<template>
    <div class="consignment-page font-lato bg-brand-dark4 text-white">
        <!-- 1. Hero Section -->
        <section
            class="hero-section relative text-center py-20 md:py-32 bg-cover bg-center"
            style="background-image: url('/images/consignment/consignment.jpg')"
        >
            <div class="absolute inset-0 bg-black opacity-60"></div>
            <!-- Overlay -->
            <div class="container mx-auto px-4 lg:px-10 relative z-10">
                <h1 class="text-4xl md:text-6xl font-bold text-brand-gold mb-4 artegra">
                    Turn Clutter into Cash — Hassle—Free Consignment
                </h1>
                <p class="text-xl md:text-2xl text-white mb-8">
                    We handle the work. You keep the profits.
                </p>
                <Button @click="scrollToForm"> Start Selling Now → </Button>
            </div>
        </section>

        <!-- Main Content Area -->
        <div class="container mx-auto px-4 lg:px-10 py-16">
            <h2
                class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold text-center mb-12"
            >
                Consignment Options
            </h2>
            <!-- 2. Consignment Options -->
            <section class="consignment-options mb-16">
                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Card 1: Full-Service -->
                    <div
                        class="border-2 border-brand-gold rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 bg-brand-dark1 hover:bg-neutral-800"
                    >
                        <h3 class="text-2xl font-bold mb-3 artegra text-brand-gold">
                            Full—Service Consignment
                        </h3>
                        <p class="text-4xl font-bold mb-4 text-brand-gold">20%</p>
                        <p class="text-gray-300 mb-4 italic">“Hands—off, high—support”</p>
                        <ul class="list-disc list-inside space-y-2 text-gray-300">
                            <li>
                                <span class="font-semibold">Includes:</span> Photography, pricing
                                research, listing creation, buyer communications.
                            </li>
                            <li>Optional storage & shipping coordination ($5 fee applies).</li>
                            <li>Ideal for busy individuals or those new to selling online.</li>
                        </ul>
                    </div>
                    <!-- Card 2: Listing-Only -->
                    <div
                        class="border-2 border-brand-gold rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 bg-brand-dark1 hover:bg-neutral-800"
                    >
                        <h3 class="text-2xl font-bold mb-3 artegra text-brand-gold">
                            Listing—Only Service
                        </h3>
                        <p class="text-4xl font-bold mb-4 text-brand-gold">$3 / $2*</p>
                        <p class="text-gray-300 mb-4 italic">“Low-cost, high-control”</p>
                        <ul class="list-disc list-inside space-y-2 text-gray-300">
                            <li>
                                <span class="font-semibold">Includes:</span> We list your item based
                                on the details you provide via our intake form.
                            </li>
                            <li>
                                You handle pricing, description writing, and all buyer
                                communication.
                            </li>
                            <li>* $3/item for standard listings, $2/item for bulk (10+ items).</li>
                        </ul>
                    </div>
                </div>
            </section>

            <h2
                class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold text-center mt-16 mb-12"
            >
                Who It is For
            </h2>
            <!-- 3. Who It's For -->
            <section class="who-its-for mb-16">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div class="p-4 border-2 border-brand-gold rounded-lg bg-brand-dark1">
                        <!-- Replace emoji with actual icon component if available -->
                        <div class="text-4xl mb-3 text-brand-gold">🏺</div>
                        <h4 class="text-xl font-semibold mb-2 artegra text-brand-gold">
                            Collectors
                        </h4>
                        <p class="text-gray-300">
                            Sell individual pieces or entire collections of valuables.
                        </p>
                    </div>
                    <div class="p-4 border-2 border-brand-gold rounded-lg bg-brand-dark1">
                        <div class="text-4xl mb-3 text-brand-gold">📦</div>
                        <h4 class="text-xl font-semibold mb-2 artegra text-brand-gold">
                            People Moving
                        </h4>
                        <p class="text-gray-300">
                            Downsize efficiently and turn unwanted items into cash.
                        </p>
                    </div>
                    <div class="p-4 border-2 border-brand-gold rounded-lg bg-brand-dark1">
                        <div class="text-4xl mb-3 text-brand-gold">🏢</div>
                        <h4 class="text-xl font-semibold mb-2 artegra text-brand-gold">
                            Businesses
                        </h4>
                        <p class="text-gray-300">
                            Liquidate overstock, returned goods, or unused assets.
                        </p>
                    </div>
                    <div class="p-4 border-2 border-brand-gold rounded-lg bg-brand-dark1">
                        <div class="text-4xl mb-3 text-brand-gold">🏠</div>
                        <h4 class="text-xl font-semibold mb-2 artegra text-brand-gold">
                            Estate Liquidators
                        </h4>
                        <p class="text-gray-300">
                            Partner with us for professional handling of estate sales.
                        </p>
                    </div>
                </div>
            </section>

            <!-- 4. Referral Program -->
            <section
                class="referral-program bg-brand-dark1 text-white py-16 mb-16 rounded-lg border-2 border-brand-gold"
            >
                <div class="container mx-auto px-4 text-center">
                    <div class="text-4xl mb-4 text-brand-gold">🏆</div>
                    <h3 class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold mb-4">
                        Know Someone Who is Selling?
                    </h3>
                    <p class="text-lg mb-6 max-w-3xl mx-auto text-gray-300">
                        Refer a client who uses our Full-Service Consignment Package. When their
                        sales hit $1,000+, you get
                        <span class="font-bold text-brand-gold text-xl">$100</span>.
                    </p>
                    <ul
                        class="list-disc list-inside space-y-1 mb-8 inline-block text-left text-gray-300"
                    >
                        <li>No limit on referrals</li>
                        <li>Paid out when sales threshold is met</li>
                        <li>Applies to Full-Service Consignment only</li>
                    </ul>
                    <div>
                        <Button @click="scrollToForm"> Send a Referral → </Button>
                        <!-- Note: This button currently scrolls to the main form. Needs specific referral logic/form later. -->
                    </div>
                </div>
            </section>

            <h2
                class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold text-center mt-16 mb-12"
            >
                Platform Fees
            </h2>
            <!-- 5. Platform Fees Accordion -->
            <section class="platform-fees mb-16">
                <div
                    class="border-2 border-brand-gold rounded-lg overflow-hidden bg-brand-dark1 p-4"
                >
                    <div class="p-4">
                        <p class="mb-4 text-gray-300">
                            Platform fees are deducted directly by the selling platform (eBay,
                            Poshmark, etc.) and are separate from our consignment commission. These
                            are estimates and subject to change based on platform policies.
                        </p>
                        <div class="overflow-x-auto">
                            <table
                                class="min-w-full divide-y divide-gray-600 border border-gray-600 m-auto"
                            >
                                <thead class="bg-neutral-700">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                                        >
                                            Platform
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                                        >
                                            Typical Fee Structure
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                                        >
                                            Notes
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-brand-dark1 divide-y divide-gray-600">
                                    <tr>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap font-medium text-brand-gold"
                                        >
                                            eBay
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-gray-300">
                                            ~13-15% (varies by category) + Listing Fees
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-gray-300">
                                            Complex structure, includes final value fee + potential
                                            extras.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap font-medium text-brand-gold"
                                        >
                                            Poshmark
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-gray-300">
                                            $2.95 for sales under $15, 20% for sales $15+
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-gray-300">
                                            Simple flat rate or percentage. Includes shipping label.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap font-medium text-brand-gold"
                                        >
                                            Mercari
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-gray-300">
                                            10% Selling Fee + 2.9% + $0.50 Payment Processing
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-gray-300">
                                            Lower commission but separate payment processing fee.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            class="px-6 py-4 whitespace-nowrap font-medium text-brand-gold"
                                        >
                                            Etsy
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-gray-300">
                                            6.5% Transaction Fee + Listing Fee ($0.20) + Payment
                                            Processing (~3-4%)
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-gray-300">
                                            Best for handmade/vintage. Multiple small fees add up.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <h2
                class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold text-center mt-16 mb-12"
            >
                How It Works
            </h2>
            <!-- 6. How It Works Timeline -->
            <section class="how-it-works mb-16">
                <div class="space-y-12 md:space-y-16 max-w-[900px] m-auto">
                    <!-- Step 1 -->
                    <div class="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        <div
                            class="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-brand-gold rounded-full text-black text-3xl md:text-4xl font-bold flex items-center justify-center shadow-lg"
                        >
                            📝
                        </div>
                        <div class="text-center md:text-left">
                            <h4
                                class="text-xl md:text-2xl font-semibold font-sans text-brand-gold mb-2"
                            >
                                1. Submit Intake Form
                            </h4>
                            <p class="text-gray-300">
                                Fill out our simple online form with details about your items.
                            </p>
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div class="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-10">
                        <div
                            class="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-brand-gold rounded-full text-black text-3xl md:text-4xl font-bold flex items-center justify-center shadow-lg"
                        >
                            🚚
                        </div>
                        <div class="text-center md:text-right">
                            <h4
                                class="text-xl md:text-2xl font-semibold font-sans text-brand-gold mb-2"
                            >
                                2. Pickup or Drop-Off
                            </h4>
                            <p class="text-gray-300">
                                Arrange for local pickup (select areas) or drop off items at our
                                location.
                            </p>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div class="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        <div
                            class="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-brand-gold rounded-full text-black text-3xl md:text-4xl font-bold flex items-center justify-center shadow-lg"
                        >
                            📢
                        </div>
                        <div class="text-center md:text-left">
                            <h4
                                class="text-xl md:text-2xl font-semibold font-sans text-brand-gold mb-2"
                            >
                                3. We List & Promote
                            </h4>
                            <p class="text-gray-300">
                                We photograph, price, list, and market your items across relevant
                                platforms.
                            </p>
                        </div>
                    </div>

                    <!-- Step 4 -->
                    <div class="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-10">
                        <div
                            class="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-brand-gold rounded-full text-black text-3xl md:text-4xl font-bold flex items-center justify-center shadow-lg"
                        >
                            💰
                        </div>
                        <div class="text-center md:text-right">
                            <h4
                                class="text-xl md:text-2xl font-semibold text-brand-gold font-sans mb-2"
                            >
                                4. Item Sells
                            </h4>
                            <p class="text-gray-300">
                                We handle buyer communication and finalize the sale.
                            </p>
                        </div>
                    </div>

                    <!-- Step 5 -->
                    <div class="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        <div
                            class="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-brand-gold rounded-full text-black text-3xl md:text-4xl font-bold flex items-center justify-center shadow-lg"
                        >
                            💸
                        </div>
                        <div class="text-center md:text-left">
                            <h4
                                class="text-xl md:text-2xl font-semibold font-sans text-brand-gold mb-2"
                            >
                                5. You Get Paid
                            </h4>
                            <p class="text-gray-300">
                                Receive your earnings (minus commission/fees) via your preferred
                                method.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <h2
                id="intake-form-title"
                class="text-3xl lg:text-[40px] leading-tight artegra text-brand-gold text-center mt-16 mb-12"
            >
                Get Started
            </h2>
            <!-- 7. Intake Form -->
            <section id="intake-form" class="intake-form mb-16 scroll-mt-20">
                <div
                    class="max-w-2xl mx-auto p-8 border-2 border-brand-gold rounded-lg shadow-md bg-brand-dark1"
                >
                    <form @submit.prevent="handleFormSubmit">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label
                                    for="fullName"
                                    class="block text-sm font-medium text-gray-300 mb-1"
                                    >Full Name</label
                                >
                                <input
                                    type="text"
                                    id="fullName"
                                    v-model="formData.fullName"
                                    required
                                    class="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold bg-neutral-800 text-white placeholder-gray-500"
                                />
                            </div>
                            <div>
                                <label
                                    for="email"
                                    class="block text-sm font-medium text-gray-300 mb-1"
                                    >Email Address</label
                                >
                                <input
                                    type="email"
                                    id="email"
                                    v-model="formData.email"
                                    required
                                    class="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold bg-neutral-800 text-white placeholder-gray-500"
                                />
                            </div>
                        </div>
                        <div class="mb-6">
                            <label for="phone" class="block text-sm font-medium text-gray-300 mb-1"
                                >Phone Number</label
                            >
                            <input
                                type="tel"
                                id="phone"
                                v-model="formData.phone"
                                required
                                class="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold bg-neutral-800 text-white placeholder-gray-500"
                            />
                        </div>
                        <div class="mb-6">
                            <label
                                for="packageType"
                                class="block text-sm font-medium text-gray-300 mb-1"
                                >Type of Package</label
                            >
                            <select
                                id="packageType"
                                v-model="formData.packageType"
                                class="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold bg-neutral-800 text-white"
                            >
                                <option value="full-service" class="bg-brand-dark1 text-white">
                                    Full-Service Consignment (20%)
                                </option>
                                <option value="listing-only" class="bg-brand-dark1 text-white">
                                    Listing-Only Service ($3/$2 per item)
                                </option>
                            </select>
                        </div>
                        <div class="mb-6">
                            <label
                                for="itemDescriptions"
                                class="block text-sm font-medium text-gray-300 mb-1"
                                >Item Descriptions</label
                            >
                            <textarea
                                id="itemDescriptions"
                                v-model="formData.itemDescriptions"
                                rows="4"
                                required
                                class="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold bg-neutral-800 text-white placeholder-gray-500"
                                placeholder="Briefly describe the items you wish to consign (e.g., 'Vintage comic books', 'Designer handbag', 'Collection of antique toys')."
                            ></textarea>
                        </div>
                        <div class="mb-8">
                            <label
                                for="referralCode"
                                class="block text-sm font-medium text-gray-300 mb-1"
                                >Referral Code (Optional)</label
                            >
                            <input
                                type="text"
                                id="referralCode"
                                v-model="formData.referralCode"
                                class="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-brand-gold focus:border-brand-gold bg-neutral-800 text-white placeholder-gray-500"
                            />
                        </div>
                        <div class="text-center">
                            <Button type="submit" class="w-full md:w-auto">
                                Submit Consignment Request
                            </Button>
                        </div>
                        <!-- Add reCAPTCHA here if needed -->
                    </form>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>
/* Ensure Lato is loaded (usually done globally) */
.font-lato {
    font-family: 'Lato', sans-serif;
}

/* Define Artegra font (ensure it's loaded via @font-face in global CSS or Nuxt config) */
.artegra {
    font-family: 'Artegra Sans', sans-serif; /* Adjust font name if needed */
}

/* Add specific styles if needed */
.hero-section {
    /* Example: Ensure text is readable over image */
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

/* Style form inputs for dark mode */
.intake-form input,
.intake-form select,
.intake-form textarea {
    appearance: none; /* Optional: removes default browser styling */
}

.intake-form select {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23D4AF37' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem;
}

/* Style accordion table for dark mode */
.platform-fees table th {
    @apply text-gray-300;
}
.platform-fees table td {
    @apply text-gray-300;
}
.platform-fees table td.font-medium {
    @apply text-brand-gold;
}
</style>
