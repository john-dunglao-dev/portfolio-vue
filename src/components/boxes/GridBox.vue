<script setup lang="ts">
defineProps({
  as: {
    type: String,
    default: 'div',
  },
})
</script>

<template>
  <component :is="as" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
    <slot></slot>
  </component>
</template>
