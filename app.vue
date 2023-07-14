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
  <VitePwaManifest/>
  <div class="bg-gray-100 min-h-screen">
    <NuxtLayout>
      <NuxtPage />
      <Toaster position="top-center" richColors />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>