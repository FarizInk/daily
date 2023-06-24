<template>
  <NuxtLayout name="custom">
    <main class="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-base font-semibold text-indigo-600">{{ error.statusCode }}</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">{{ error.statusMessage }}</h1>
      <p class="mt-6 text-base leading-7 text-gray-600">{{ error.message }}</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <button type="button" @click="handleError"
          class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go
          back home</button>
      </div>
    </div>
  </main>
  </NuxtLayout>
</template>
  
<script setup>
// default props available on error.vue
const props = defineProps({
  error: Object,
});

// customise 404 message from script section
const error = useError();
if (error.value.statusCode === 404 || '404') {
  error.value.message = '[script]: Oops! Page not found 😔';
}

// clear error and redirect to home page
const handleError = () => clearError({ redirect: '/' });
</script>