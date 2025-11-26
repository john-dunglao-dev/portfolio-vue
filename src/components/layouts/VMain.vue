<script setup lang="ts">
import VFooter from '@/components/layouts/VFooter.vue'
import VHeader from '@/components/layouts/VHeader.vue'
</script>

<template>
  <!-- remove overflow-scroll after implementing the planned layout -->
  <div class="bg-background relative">
    <div class="absolute inset-0 opacity-20 bg-grid-pattern z-0"></div>

    <div class="sticky top-0 z-10 relative">
      <VHeader />
    </div>

    <main class="container mx-auto min-h-[calc(100lvh-64px-24px)] z-10 relative">
      <RouterView v-slot="{ Component, route }">
        <!-- <FadeTransition>
          <Component :is="Component" :key="route.path" />
        </FadeTransition> -->

        <template v-if="Component">
          <!-- <Transition mode="out-in"> -->
          <!-- <KeepAlive> -->
          <Suspense timeout="0">
            <template #default>
              <Component :is="Component" :key="route.path" />
            </template>

            <template #fallback>
              <div
                class="w-full h-64 flex justify-center items-center absolute top-0 left-0 z-10 relative"
              >
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
              </div>
            </template>
          </Suspense>
          <!-- </KeepAlive> -->
          <!-- </Transition> -->
        </template>
      </RouterView>
    </main>

    <div class="sticky bottom-0 z-10 relative">
      <VFooter />
    </div>
  </div>
</template>

<style scoped>
.bg-grid-pattern {
  background-image:
    linear-gradient(currentColor 1px, transparent 1px),
    linear-gradient(90deg, currentColor 1px, transparent 1px);
  background-size: 65px 65px;
  color: rgb(from var(--color-foreground) r g b / 0.25);
}

/* Fallback for browsers that don't support rgb(from) */
@supports not (color: rgb(from white r g b)) {
  .bg-grid-pattern {
    color: var(--color-foreground);
  }
}
</style>
