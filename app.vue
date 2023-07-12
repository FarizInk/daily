<script setup lang="ts">
onMounted(() => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  // for now using light mode only
  document.documentElement.classList.remove('dark')
})
</script>

<template>
  <Toaster position="top-center" richColors />
  <div class="bg-gray-100 min-h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
