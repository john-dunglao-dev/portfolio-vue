<script setup lang="ts">
import { PhList } from '@phosphor-icons/vue'
import MyLogoMini from '@/components/icons/MyLogoMini.vue'
import ThemeChange from '@/components/layouts/ThemeChange.vue'
</script>

<template>
  <header class="bg-comment/90 shadow backdrop-blur-[2px]" role="banner" aria-label="Site header">
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <!-- TODO: Implement mobile menu -->
      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button
          type="button"
          aria-label="Open mobile menu"
          aria-expanded="false"
          aria-controls="mobile-menu"
          class="focus:outline-none rounded-md p-1"
        >
          <PhList class="h-6 w-6 text-gray-700 hover:text-gray-900" aria-hidden="true" />
        </button>
      </div>

      <RouterLink
        :to="{ name: 'Landing' }"
        aria-label="Go to homepage - John Florentino Dunglao"
        class="focus:outline-none rounded-md"
      >
        <div class="text-lg font-bold flex gap-2 items-center text-primary">
          <MyLogoMini class="h-8 w-auto" aria-hidden="true" />
          <h6 class="text-foreground">John Florentino Dunglao</h6>
        </div>
      </RouterLink>

      <nav class="flex items-center gap-2" role="navigation" aria-label="Main navigation">
        <ul class="flex space-x-4" role="list">
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
    </div>
  </header>
</template>
