<template>
    <BaseModal :show="show" :max-width="maxWidth" @close="$emit('close')">
        <div class="rounded-[2rem]">
            <XIcon
                @click="() => emit('update:show', false)"
                class="w-5 h-5 text-brand-gold absolute top-4 right-4 cursor-pointer"
            />
            <div class="flex items-center w-full bg-black md:flex-row flex-col">
                <div class="w-full md:w-5/12 md:h-[500px] md:block hidden">
                    <img
                        class="w-full h-full object-cover"
                        :src="cms?.image?.url"
                        alt="shop banner"
                        loading="lazy"
                    />
                </div>
                <div class="w-full md:w-7/12 p-6 pt-10 md:p-6 md:h-full block">
                    <div class="text-center text-white mb-6">
                        <p class="font-bold text-2xl mb-2">{{ cms?.title }}</p>
                        <p>{{ cms?.description }}</p>
                    </div>
                    <form @submit.prevent="handleSubmit" class="space-y-4">
                        <TextInput
                            type="text"
                            v-model="form['your-name']"
                            :error="errors['your-name']"
                            name="your-name"
                            id="your-name"
                            placeholder="Enter your name here"
                            label="Full Name"
                        />
                        <TextInput
                            type="email"
                            v-model="form['your-email']"
                            :error="errors['your-email']"
                            name="your-email"
                            id="your-email"
                            placeholder="Enter email address here"
                            label="Email Address"
                        />
                        <div class="flex justify-center md:justify-end w-full">
                            <vue-recaptcha
                                :sitekey="sitekey"
                                @verify="verifySubmission"
                                @expired="expiredRecaptcha"
                                ref="grecaptcha"
                                class="w-fit"
                            />
                        </div>
                        <div class="w-full flex justify-end">
                            <Button class="w-full" :disabled="!recaptchaResponse">
                                SUBSCRIBE
                            </Button>
                        </div>
                        <p class="text-white text-xs text-center">
                            {{ cms?.footer_text }}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </BaseModal>

    <SuccessModal
        :show="showSuccessModal"
        @close="showSuccessModal = false"
        title="Subscribed!"
        description="Subscription has been successfully submitted"
    >
        <template #button>
            <div class="flex items-center justify-end">
                <Button @click="closeModal" design-color="text-white"> Confirm </Button>
            </div>
        </template>
    </SuccessModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const config = useRuntimeConfig();
const API_BASE_URL = config.public.API_BASE_URL;
import { XIcon } from 'lucide-vue-next';
const VueRecaptcha = defineAsyncComponent({
    loader: () => import('vue-recaptcha').then((module) => module.VueRecaptcha),
    loadingComponent: () => '<div>Loading...</div>',
    delay: 4000,
});
defineProps({
    id: {
        type: String,
    },
    show: {
        default: false,
    },
    maxWidth: {
        default: '2xl',
    },
    closeable: {
        default: true,
    },
    cstmClass: {
        type: String,
        default: 'rounded-none',
    },
    item: {
        type: Object,
        default: null,
    },
    cms: {
        type: Object,
        default: null,
    },
});
const emit = defineEmits(['close']);

const form = ref({
    'your-name': '',
    'your-email': '',
    'your-subject': 'New Subscription',
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
    formData.append('_wpcf7', '1191'); // Replace with your form ID
    formData.append('_wpcf7_version', '5.8.5'); // Replace with your CF7 version
    formData.append('_wpcf7_locale', 'en_US'); // Replace with your locale
    formData.append('_wpcf7_unit_tag', 'wpcf7-f1191-o1'); // Generate or replace with your unit tag
    formData.append('_wpcf7_container_post', '0'); // Replace with your container post ID

    try {
        const response = await $fetch(
            `${API_BASE_URL}/wp-json/contact-form-7/v1/contact-forms/1191/feedback`,
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
            emit('update:show', false);
            // Add a small delay before showing the success modal
            setTimeout(() => {
                showSuccessModal.value = true;
            }, 500);

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
