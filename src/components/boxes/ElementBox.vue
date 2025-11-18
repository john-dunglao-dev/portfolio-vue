<script setup lang="ts">
defineProps({
  tagType: {
    type: String,
    default: 'div',
  },
  tagTypeClasses: {
    type: String,
    default: '',
  },
  tagAttributeText: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div>
    <div class="opacity-50" :class="tagTypeClasses" contenteditable="false">
      <span>
        &lt;<span class="text-primary">{{ tagType }}</span
        >{{ tagAttributeText ? ` ${tagAttributeText}` : '' }}&gt;
      </span>
    </div>

    <div class="mx-2">
      <slot></slot>
    </div>

    <div class="opacity-50" :class="tagTypeClasses" contenteditable="false">
      <span
        >&lt;/<span class="text-primary">{{ tagType }}</span
        >&gt;</span
      >
    </div>
  </div>
</template>
