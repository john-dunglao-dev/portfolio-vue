<script setup lang="ts">
import ThemeChange from '@/components/layouts/ThemeChange.vue'
</script>

<template>
  <nav class="flex items-center flex-col lg:flex-row gap-3">
    <ul class="flex space-x-1 flex-col lg:flex-row" role="list">
      <li>
        <RouterLink
          :to="{ name: 'Landing' }"
          class="text-gray-700 hover:text-gray-900 focus:outline-none rounded-md px-2 py-1"
          :class="{
            'font-semibold text-primary pointer-events-none': $route.name === 'Landing',
          }"
          :aria-current="$route.name === 'Landing' ? 'page' : undefined"
          aria-label="Navigate to Home page"
        >
          Home
        </RouterLink>
      </li>
      <li>
        <RouterLink
          :to="{ name: 'AboutMe' }"
          class="text-gray-700 hover:text-gray-900 focus:outline-none rounded-md px-2 py-1"
          :class="{
            'font-semibold text-primary pointer-events-none': $route.name === 'AboutMe',
          }"
          :aria-current="$route.name === 'AboutMe' ? 'page' : undefined"
          aria-label="Navigate to About page"
        >
          About
        </RouterLink>
      </li>
      <li>
        <RouterLink
          :to="{ name: 'ContactMe' }"
          class="text-gray-700 hover:text-gray-900 focus:outline-none rounded-md px-2 py-1"
          :class="{
            'font-semibold text-primary pointer-events-none': $route.name === 'ContactMe',
          }"
          :aria-current="$route.name === 'ContactMe' ? 'page' : undefined"
          aria-label="Navigate to Contact page"
        >
          Contact
        </RouterLink>
      </li>
    </ul>

    <ul role="list" aria-label="Site control for changing theme">
      <li>
        <ThemeChange />
      </li>
    </ul>
  </nav>
</template>
