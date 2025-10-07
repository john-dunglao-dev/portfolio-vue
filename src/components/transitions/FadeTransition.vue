<template>
  <div class="relative">
    <transition 
      name="fade"
      enter-from-class="opacity-0 scale-95 -translate-y-2"
      enter-to-class="opacity-100 scale-100 translate-y-0 absolute top-0 left-0 w-full h-full"
      enter-active-class="transition ease-out duration-300"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 -translate-y-2"
      leave-active-class="transition ease-in duration-200 absolute top-0 left-0 w-full h-full"
    >
      <slot></slot>
    </transition>
  </div>
</template>