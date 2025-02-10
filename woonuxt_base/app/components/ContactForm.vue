<template>
    <section class="bg-brand-dark1 overflow-hidden">
        <div class="max-w-[1440px] m-auto relative lg:px-12 lg:py-20 px-4 py-16">
            <div class="overlay">
                <img
                    class="absolute -bottom-[130px] -left-[110px]"
                    src="/images/envelop.svg"
                    alt="envelop"
                />
                <img
                    class="absolute lg:-right-5 -right-20 top-[100px] lg:top-[170px]"
                    src="/images/at.png"
                    alt="at"
                />
            </div>
            <div
                class="max-w-[1080px] m-auto flex flex-col lg:flex-row lg:space-x-20 relative z-10"
            >
                <div class="lg:w-[450px] lg:mb-0 mb-8">
                    <h2 class="lg:text-[40px] text-3xl leading-tight mb-6 artegra text-brand-gold">
                        Let’s Start Uncovering Hidden Opportunities
                    </h2>
                    <div class="text-white">
                        <p>
                            Reach out to Hidden Treasures today and discover how we can transform
                            your brand’s potential into measurable success. We’re here to help you
                            every step of the way.
                        </p>
                    </div>
                </div>

                <form @submit.prevent="handleSubmit" class="w-full lg:w-[calc(100%-530px)]">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        <TextInput
                            custom-input-class="bg-white"
                            v-model="form['your-name']"
                            :error="errors['your-name']"
                            type="text"
                            name="your-name"
                            id="your-name"
                            placeholder="Enter your name here"
                            label="Full Name"
                        />
                        <TextInput
                            custom-input-class="bg-white"
                            v-model="form['your-email']"
                            :error="errors['your-email']"
                            type="email"
                            name="your-email"
                            id="your-email"
                            placeholder="Enter email address here"
                            label="Email Address"
                        />

                        <TextInput
                            custom-input-class="bg-white"
                            v-model="form['your-subject']"
                            :error="errors['your-subject']"
                            type="text"
                            name="your-subject"
                            id="your-subject"
                            placeholder="Enter subject here"
                            class="col-span-full"
                            label="Subject"
                        />

                        <TextInput
                            custom-input-class="bg-white pl-4"
                            v-model="form['your-message']"
                            :error="errors['your-message']"
                            textarea
                            type="text"
                            name="your-message"
                            id="your-message"
                            placeholder="Enter message here"
                            label="Message"
                            class="col-span-full"
                            :maxlength="500"
                        />
                    </div>

                    <div>
                        <vue-recaptcha
                            :sitekey="sitekey"
                            @verify="verifySubmission"
                            @expired="expiredRecaptcha"
                            ref="grecaptcha"
                        />
                    </div>

                    <Button size="large" class="mt-6" :disabled="!recaptchaResponse">
                        {{ loading ? 'Submitting...' : 'SUBMIT INQUIRY' }}
                    </Button>
                </form>
            </div>
        </div>
    </section>

    <SuccessModal
        :show="showSuccessModal"
        @close="showSuccessModal = false"
        title="Inquiry Submitted!"
        description="Inquiry has been successfully submitted"
    >
        <template #button>
            <div class="flex items-center justify-end">
                <Button @click="closeModal" design-color="text-white"> Confirm </Button>
            </div>
        </template>
    </SuccessModal>
</template>

<script setup>
import { ref } from 'vue';
const config = useRuntimeConfig();
const API_BASE_URL = config.public.API_BASE_URL;
const VueRecaptcha = defineAsyncComponent({
    loader: () => import('vue-recaptcha').then((module) => module.VueRecaptcha),
    loadingComponent: () => '<div>Loading...</div>',
    delay: 4000,
});

const form = ref({
    'your-name': '',
    'your-email': '',
    subject: '',
    'your-message': '',
});

const loading = ref(false);
const recaptchaRef = ref(null);
const recaptchaResponse = ref(false);
const showSuccessModal = ref(false);
const errors = reactive({});

const verifySubmission = () => {
    recaptchaResponse.value = true;
};

const expiredRecaptcha = () => {
    form.recaptcha_response = false;
};

const handleSubmit = async () => {
    loading.value = true;

    // Prepare the form data as a FormData object
    const formData = new FormData();
    Object.entries(form.value).forEach(([key, value]) => {
        formData.append(key, value);
    });

    // Add required hidden fields
    formData.append('_wpcf7', '129'); // Replace with your form ID
    formData.append('_wpcf7_version', '5.8.5'); // Replace with your CF7 version
    formData.append('_wpcf7_locale', 'en_US'); // Replace with your locale
    formData.append('_wpcf7_unit_tag', 'wpcf7-f129-o1'); // Generate or replace with your unit tag
    formData.append('_wpcf7_container_post', '0'); // Replace with your container post ID

    try {
        const response = await $fetch(
            `${API_BASE_URL}/wp-json/contact-form-7/v1/contact-forms/129/feedback`,
            {
                method: 'POST',
                body: formData,
            },
        );

        if (response.status === 'validation_failed') {
            // Populate errors from the response
            response.invalid_fields.forEach((field) => {
                errors[field.field] = field.message;
            });
        } else {
            // Handle successful form submission
            showSuccessModal.value = true;

            gtag('event', 'conversion', {
                send_to: 'AW-16839371435/alLaCJS3i5waEKvV0d0-',
                value: 1.0,
                currency: 'USD',
            });

            gtag('event', 'form_submit', {
                event_category: 'Subscription',
                event_label: 'Subscription Form Submit',
            });

            // Clear the form and errors
            Object.keys(form.value).forEach((key) => {
                form.value[key] = ''; // Reset each form field
            });
            Object.keys(errors).forEach((key) => delete errors[key]); // Clear errors
        }

        // Handle the response
    } catch (error) {
        console.error('Error submitting the form:', error);
        alert('Failed to submit the form. Please try again.');
    } finally {
        loading.value = false;
    }
};

const closeModal = () => {
    showSuccessModal.value = false;
};

const sitekey = config.public.SITE_KEY;
</script>
