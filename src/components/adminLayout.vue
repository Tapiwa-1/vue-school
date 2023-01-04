<template>
    <div class="w-full bg-gray-900 dark:bg-gray-700">
        
        <div class="flex justify-between px-4 py-4 items-center">
            <span
        class=" text-white text-4xl top-5 left-4 cursor-pointer"
        >
            <Bars3Icon class="w-6 h-6  bg-gray-900 rounded-md" @click="display =! display"/>
        </span>
        <div class="flex items-center">
            <button class="m-3" @click="toggleDark()">
            <SunIcon  v-if="isDark" class="w-6 h-6 text-gray-800 dark:text-white font-bold"/>
            <MoonIcon  v-else class="w-6 h-6 text-gray-800 dark:text-white font-bold"/>
        </button>
            <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-3">
                <div>
                  <MenuButton class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt="" />
                  </MenuButton>
                </div>
                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                  <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                      <a :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item.name }}</a>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
        </div>
        </div>
    </div>
    <div v-if="display" 
      class="sidebar  fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 dark:bg-gray-700"
    >
      <div class="text-gray-100 text-xl" >
        <div class="p-2.5 mt-1 flex items-center">
          <i class="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
          <h1 class="font-bold text-gray-200 text-[15px] ml-3">TailwindCSS</h1>
          <XMarkIcon class="w-6 h-6 cursor-pointer ml-28 " @click="display = false"/>
        </div>
        <div class="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      <div
        class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"
      >
        <i class="bi bi-search text-sm"></i>
        <input
          type="text"
          placeholder="Search"
          class="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
        />
      </div>
      <div
        class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
      >
        <HomeIcon class="h-6 w-6"/>
        <span class="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
      </div>
      <div
        class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
      >
        <BookmarkIcon class="h-6 w-6"/>
        <span class="text-[15px] ml-4 text-gray-200 font-bold">Bookmark</span>
      </div>
      <div class="my-4 bg-gray-600 h-[1px]"></div>
      <div
        class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
      >
        <LockClosedIcon class="w-6 h-6"/>
        <span class="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
      </div>
    </div>
    <div class="container mx-auto">
        <slot name="content">

        </slot>
    </div>
</template>

    <script setup>
    import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
    import {
       HomeIcon,
       BookmarkIcon,
       ChevronDoubleDownIcon,
       LockClosedIcon,
       ChatBubbleLeftIcon,
       CursorArrowRaysIcon,
       XMarkIcon,
       Bars3Icon,
       SunIcon,
       MoonIcon
    } from '@heroicons/vue/24/outline'

    import { ref } from 'vue';
    const user = {


  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
    const userNavigation = [
        { name: 'Your Profile', href: '#' },
        { name: 'Settings', href: '#' },
        { name: 'Sign out', href: '#' },
    ]

    let display = ref(false);
    </script>
