<script setup>

const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  size: {
    type: String,
    default: 'btn-md',
  },
  variant: {
    type: String,
    default: 'btn-primary',
  },
  isProcessing: {
    type: Boolean,
    default: false,
  },
  textProcess: {
    type: String,
    default: 'Processing...',
  },
})

const { size, isProcessing } = toRefs(props)

const svgGap = ref('gap-2')
const svgSize = ref('h-4 w-4')
if (size.value === 'btn-xs' || size.value === 'btn-sm') {
  svgGap.value = 'gap-1'
  svgSize.value = 'h-3 w-3'
}

</script>
<template>
  <button :type="type" :class="[variant, size, { 'disabled:opacity-100 active:scale-100': isProcessing }]">
    <template v-if="!isProcessing">
      <slot />
    </template>
    <div :class="['flex items-center justify-center', svgGap]" v-else>
      <svg :class="['animate-spin', svgSize]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
        </path>
      </svg>
      {{ textProcess }}
    </div>
  </button>
</template>