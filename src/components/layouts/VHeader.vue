<script setup lang="ts">
import { PhList } from '@phosphor-icons/vue'
import ThemeChangeButton from '@/components/buttons/ThemeChangeButton.vue'
import MyLogoMini from '@/components/icons/MyLogoMini.vue'
</script>

<template>
  <header class="bg-white dark:bg-gray-400 dracula:bg-gray-800 shadow">
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <!-- TODO: Implement mobile menu -->
      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button>
          <PhList class="h-6 w-6 text-gray-700 hover:text-gray-900" />
        </button>
      </div>

      <RouterLink :to="{ name: 'Landing' }">
        <div class="text-lg font-bold flex gap-2 items-center text-primary">
          <MyLogoMini class="h-8 w-auto" />
          <span>John Florentino Dunglao</span>
        </div>
      </RouterLink>

      <nav class="flex items-center gap-2">
        <ul class="flex space-x-4">
          <li>
            <RouterLink
              :to="{ name: 'Landing' }"
              class="text-gray-700 hover:text-gray-900"
              :class="{
                'font-semibold text-primary pointer-events-none': $route.name === 'Landing',
              }"
            >
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'AboutMe' }"
              class="text-gray-700 hover:text-gray-900"
              :class="{
                'font-semibold text-primary pointer-events-none': $route.name === 'AboutMe',
              }"
            >
              About
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'ContactMe' }"
              class="text-gray-700 hover:text-gray-900"
              :class="{
                'font-semibold text-primary pointer-events-none': $route.name === 'ContactMe',
              }"
            >
              Contact
            </RouterLink>
          </li>
        </ul>

        <ul>
          <li>
            <ThemeChangeButton />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
