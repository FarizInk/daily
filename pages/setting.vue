<script setup>
import Modal from '@/components/Modal.vue'
import Button from '@/components/Button.vue'

const modalSignIn = ref(false)
const pin = ref('')

onMounted(() => {
  document.onkeyup = function (e) {
    console.log(e.shiftKey, e.key, e);
    if (e.shiftKey && e.key === 'A') {
      modalSignIn.value = true
    }
  };

  modalSignIn.value = true
})

watch(pin, (val) => {
  if (String(val).length === 4) {
    console.log('processing...');
    setTimeout(() => pin.value = '', 3000)
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