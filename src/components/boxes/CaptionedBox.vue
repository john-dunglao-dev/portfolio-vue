<script setup lang="ts">
</script>

<template>
  <fieldset class="border px-6 pt-3 pb-6 rounded-md">
    <legend class="px-2">
      <slot name="legend"></slot>
    </legend>

    <slot></slot>
  </fieldset>
</template>