<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { rightSpace } from '@/stores/store.ts'
import HeartBreakIcon from '@/icons/HeartBreakIcon.vue'
import Modal from '@/components/Modal.vue'
import Button from '@/components/Button.vue'
import tinykeys from "@/utils/tinykeys"
import TinyGesture from 'tinygesture';
import { mainMenus } from '@/stores/store'

const route = useRoute()
const router = useRouter();

// alternatively, you can also use it here
const { $toast } = useNuxtApp()

const modalSignIn = ref(false)
const pin = ref('')
const sidebarOpen = ref(false)

onMounted(() => {
  // trigger modal on gesture (mobile)
  const gesture = new TinyGesture(document.getElementById('bottom-nav'));
  gesture.on('swiperight', () => modalSignIn.value = true);
  gesture.on('swipeleft', () => sidebarOpen.value = true);

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
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-10 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
          enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex justify-end">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
            enter-from="translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0" leave-to="translate-x-full">
            <DialogPanel class="relative ml-16 flex w-full max-w-xs flex-1">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute right-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <Sidebar @click="() => sidebarOpen = false" />
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-72 lg:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <Sidebar @click="() => sidebarOpen = false" />
    </div>

    <div id="bottom-nav"
      class="fixed w-full bottom-0 z-10 flex items-center justify-between  gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
      <NuxtLink v-for="(item, index) in mainMenus" :key="index" :to="router.resolve({ name: item.route })?.path ?? '/'"
        :class="[route.name === item.route ? 'bg-indigo-100 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
        <component :is="item.icon"
          :class="[route.name === item.route ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']"
          aria-hidden="true" />
      </NuxtLink>
    </div>

    <main class="lg:pl-72">
      <div class="xl:pr-96">
        <div class="px-4 pb-14 sm:px-6 lg:px-8 lg:py-6">
          <slot />
        </div>
      </div>
    </main>

    <aside
      class="fixed inset-y-0 right-0 hidden w-96 overflow-y-auto border-l border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
      <template v-if="rightSpace">

      </template>
      <div v-else
        class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <div class="flex justify-center items-center">
          <HeartBreakIcon class="h-20 w-auto" />
        </div>
        <span class="mt-2 block text-sm font-semibold text-gray-900">Empty Space</span>
      </div>
    </aside>
  </div>
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