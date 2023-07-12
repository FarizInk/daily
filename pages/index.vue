<script setup>
import Button from '@/components/Button.vue'
import HeartBreakIcon from '@/icons/HeartBreakIcon.vue'

onMounted(async () => {
})
</script>

<template>
  <div
    class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
    <div class="flex justify-center items-center">
      <HeartBreakIcon class="h-20 w-auto"/>
    </div>
    <span class="mt-2 block text-sm font-semibold text-gray-900">Empty Space</span>
  </div>
</template>