<script setup>
import Modal from '@/components/Modal.vue'
import Button from '@/components/Button.vue'
import tinykeys from "@/utils/tinykeys"
import TinyGesture from 'tinygesture';

// alternatively, you can also use it here
const { $toast } = useNuxtApp()

const modalSignIn = ref(false)
const pin = ref('')

onMounted(() => {
  // trigger modal on gesture (mobile)
  const gesture = new TinyGesture(document.body);
  gesture.on('doubletap', () => setTimeout(() => modalSignIn.value = true, 100));

  // trigger modal on key shortcut
  tinykeys(window, {
    "$mod+KeyD": event => {
      event.preventDefault()
      modalSignIn.value = true
    },
  })
})

watch(pin, (val) => {
  if (String(val).length === 4) {
    console.log('processing...');
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("foo");
      }, 300);
    });
    $toast.promise(myPromise, {
      loading: 'Loading...',
      success: (data) => {
        modalSignIn.value = false
        pin.value = ''
        return `${data} toast has been added`;
      },
      error: (data) => {
        pin.value = ''
        return 'Error'
      },
    });

  }
})
</script>

<template>
  <Modal :is-open="modalSignIn" @close="() => modalSignIn = false" :use-footer="false" width="max-w-xs" align="items-end">
    <template #header>
      <div class="text-center">
        Enter Pin
      </div>
    </template>
    <div class="mt-1">
      <input type="password" class="input text-center" v-model="pin" :disabled="String(pin).length === 4" />
    </div>
  </Modal>
</template>