<script setup>
import HomeIcon from '@/icons/HomeIcon.vue';
import BranchIcon from '@/icons/BranchIcon.vue';
import SettingIcon from '@/icons/SettingIcon.vue';
import ImageIcon from '@/icons/ImageIcon.vue';
import CheckListIcon from '@/icons/CheckListIcon.vue';
const props = defineProps({
  profile: {
    type: Boolean,
    default: false
  }
})

const route = useRoute()
const router = useRouter();

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, route: 'index' },
  { name: 'Tasks', href: '#', icon: CheckListIcon, route: 'tasks' },
  { name: 'Timeline', href: '#', icon: BranchIcon, route: 'timeline' },
  { name: 'Moments', href: '#', icon: ImageIcon, route: 'moments' },
  { name: 'Setting', href: '#', icon: SettingIcon, route: 'setting' },
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
</script>

<template>
  <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
    <div class="flex h-16 shrink-0 items-center">
      <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
    </div>
    <nav class="flex flex-1 flex-col">
      <ul role="list" class="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" class="-mx-2 space-y-1">
            <li v-for="item in navigation" :key="item.name">
              <NuxtLink :to="router.resolve({ name: item.route })?.path ?? '/'"
                :class="[route.name === item.route ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                <component :is="item.icon"
                  :class="[route.name === item.route ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'h-6 w-6 shrink-0']"
                  aria-hidden="true" />
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li>
          <div class="text-xs font-semibold leading-6 text-gray-400">Ghost Menu</div>
          <ul role="list" class="-mx-2 mt-2 space-y-1">
            <li v-for="team in teams" :key="team.name">
              <a :href="team.href"
                :class="[team.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                <span
                  :class="[team.current ? 'text-indigo-600 border-indigo-600' : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600', 'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white']">{{
                    team.initial }}</span>
                <span class="truncate">{{ team.name }}</span>
              </a>
            </li>
          </ul>
        </li>
        <li class="-mx-6 mt-auto">
          <a href="#"
            class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">
            <img class="h-8 w-8 rounded-full bg-gray-50"
              src="https://ui-avatars.com/api/?name=Z&background=random"
              alt="" />
            <span class="sr-only">Your profile</span>
            <span aria-hidden="true">Fariz</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>