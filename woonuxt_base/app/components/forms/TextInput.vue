<template>
  <div>
    <label :for="id" class="block text-sm text-white mb-1">{{ label }}<span v-if="required" class="text-semantic-error ml-0.5">*</span></label>
    <div class="relative rounded" :class="add_on_right || add_on_left ? 'flex' : ''">
      <textarea
        v-if="textarea"
        :name="name"
        :id="id"
        :rows="textAreaRows"
        class="block w-full pr-10 focus:outline-none text-sm py-2.5 disabled:text-dark-300 border-0 border-b border-brand-gold resize-none"
        :class="[
          error
            ? 'text-red-900 border-red-300 placeholder-red-300 focus:border-red-500'
            : 'border-brand-gold placeholder-dark-600 disabled:bg-gray-200 focus:ring-transparent focus:border-b-[3px] focus:border-primary-700',
          customInputClass,
        ]"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :disabled="disabled"
        :maxlength="maxlength"
        :required="required"
        :readonly="readonly" />

      <span
        v-if="add_on_left"
        class="inline-flex items-center pl-4 border-b border-brand-gold text-sm text-white"
        :class="error ? 'text-semantic-eror' : 'text-dark-800'"
        >{{ add_on_text }}</span
      >

      <input
        v-if="!textarea"
        :type="type"
        :pattern="type == 'tel' ? '[0-9]{10}' : undefined"
        :name="name"
        :id="id"
        class="block w-full focus:outline-none text-sm py-3 h-11 px-4 border-0"
        :class="[
          error
            ? 'text-red-900 border-brand-gold placeholder-red-300 focus:border-red-500 border-b'
            : add_on_left
              ? 'text-gray-800 border-b border-brand-gold placeholder-dark-600 flex-1 min-w-0 block w-full !px-3 py-3 rounded-none focus:ring-0 focus:border-b-[3px] focus:border-primary-700 text-sm'
              : add_on_right
                ? 'text-gray-800 border-b border-brand-gold placeholder-dark-600 flex-1 min-w-0 block w-full !px-3 py-3 rounded-none focus:ring-0 focus:border-b-[3px] focus:border-primary-700 text-sm'
                : 'text-gray-800 border-b border-brand-gold placeholder-dark-600 focus:ring-0 focus:border-b-[3px] focus:border-primary-700 disabled:text-dark-300',
          customInputClass,
        ]"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :disabled="disabled"
        :min="min"
        :max="max"
        :step="step"
        :maxlength="maxlength"
        :required="required"
        :readonly="readonly" />

      <span
        v-if="add_on_right"
        class="inline-flex items-center px-4 pl-3 border-b border-brand-gold group-focus:border-b-[3px] text-sm text-white"
        :class="error ? 'text-semantic-eror' : 'text-dark-800'"
        >{{ add_on_text }}</span
      >
    </div>

    <p v-if="helper" class="text-sm text-white mt-1">
      {{ helper }}
    </p>

    <p v-if="error" class="mt-2 text-sm" :class="error ? 'text-red-600' : 'text-gray-800'" :id="`${id}-error`">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    default: null,
    required: true,
  },
  error: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: 'text',
  },
  helper: {
    type: String,
  },
  customInputClass: {
    type: String,
    default: null,
  },
  textarea: {
    type: Boolean,
    default: false,
  },
  textAreaRows: {
    type: Number,
    default: 5,
  },
  add_on_right: {
    type: Boolean,
    default: false,
  },
  add_on_text: {
    type: String,
    default: null,
  },
  add_on_left: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
  },
  step: {
    type: Number,
    default: 1,
  },
  maxlength: {
    type: Number,
  },
  showInputLimit: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
});
</script>
