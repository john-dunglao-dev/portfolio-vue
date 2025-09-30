<script setup lang="ts">
import MyLogoMini from '@/components/icons/MyLogoMini.vue';
import { Switch } from '@headlessui/vue';
import { useColorMode, useCycleList, useDark } from '@vueuse/core';
import { computed, watchEffect } from 'vue';
import { Theme } from '@/components/layouts/models/Theme';


// TODO: implement other themes later
const mode = useColorMode({
  emitAuto: true,
  initialValue: useDark() ? Theme.DARK : Theme.LIGHT,
  modes: {
    dracula: Theme.DRACULA,
  }
});

const { state, next } = useCycleList([Theme.LIGHT, Theme.DARK, Theme.DRACULA, Theme.AUTO]);
watchEffect(() => mode.value = state.value);
</script>

<template>
  <header class="bg-white dark:bg-gray-400 dracula:bg-gray-800 shadow">
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <div class="text-lg font-bold flex gap-2 items-center text-primary">
        <MyLogoMini class="h-8 w-auto" />
        <span>John Florentino Dunglao</span>
      </div>
      <nav class="flex items-center gap-2">
        <ul class="flex space-x-4">
          <li><a href="#" class="text-gray-700 hover:text-gray-900">Home</a></li>
          <li><a href="#" class="text-gray-700 hover:text-gray-900">About</a></li>
          <li><a href="#" class="text-gray-700 hover:text-gray-900">Contact</a></li>
        </ul>

        <ul>
          <li>
            <button @click="next()">
              <span v-if="state === Theme.LIGHT">🌙</span>
              <span v-if="state === Theme.DARK">☀️</span>
              <span v-if="state === Theme.DRACULA">🧛‍♂️</span>
              <span v-if="state === Theme.AUTO">🔄</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
