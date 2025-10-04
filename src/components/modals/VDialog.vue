<script setup lang="ts">
import { ref } from 'vue';


const dialogRef = ref<HTMLDialogElement | null>(null);

const show = () => {
  if (!dialogRef.value) {
    console.error('[Show Dialog] Referenced dialog is not found');
  }
  
  dialogRef.value?.showModal();
};
const hide = () => {
  if (!dialogRef.value) {
    console.error('[Hide Dialog] Referenced dialog is not found');
  }
  
  dialogRef.value?.close();
};

defineExpose({
  show,
  hide,
});
</script>

<template>
  <dialog ref="dialogRef" class="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300" @click.self="hide">
    <h2 class="text-xl font-semibold mb-2"><slot name="title">Default Title</slot></h2>
    <p class="text-gray-600 dark:text-gray-300 mb-4"><slot name="description">Default description text goes here.</slot></p>
    <div>
      <slot>Default content goes here.</slot>
    </div>

    <form method="dialog">
      <button>close</button>
    </form>
  </dialog>
</template>
