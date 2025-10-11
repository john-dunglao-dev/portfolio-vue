<script setup lang="ts">
import type { PropType } from 'vue'
import type { Color } from '@/components/layouts/models/Color'

defineProps({
  color: {
    type: String as PropType<Color>,
    default: 'primary',
  },
})
</script>

<template>
  <button
    class="px-4 py-1 rounded text-sm"
    :class="{
      'bg-blue-500 text-white hover:bg-blue-600': color === 'primary',
      'bg-gray-500 text-white hover:bg-gray-600': color === 'secondary',
      'bg-green-500 text-white hover:bg-green-600': color === 'success',
      'bg-red-500 text-white hover:bg-red-600': color === 'error',
      'bg-yellow-500 text-white hover:bg-yellow-600': color === 'warning',
      'bg-purple-500 text-white hover:bg-purple-600': color === 'info',
    }"
  >
    <slot />
  </button>
</template>
