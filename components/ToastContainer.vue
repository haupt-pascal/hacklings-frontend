<script setup lang="ts">
import { useToast } from "~/composables/useToast";
const { toasts, removeToast } = useToast();
</script>

<template>
  <div class="fixed top-4 right-4 z-50 flex flex-col gap-2">
    <TransitionGroup name="toast">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="[
          'min-w-[300px] p-4 rounded-lg shadow-lg transform transition-all duration-300',
          {
            'bg-green-500': toast.type === 'success',
            'bg-red-500': toast.type === 'error',
            'bg-blue-500': toast.type === 'info',
            'bg-yellow-500': toast.type === 'warning',
          },
        ]"
      >
        <div class="flex items-start justify-between">
          <div>
            <h3 v-if="toast.title" class="font-semibold text-white mb-1">
              {{ toast.title }}
            </h3>
            <p class="text-white">{{ toast.message }}</p>
          </div>
          <button
            @click="removeToast(toast.id)"
            class="text-white hover:text-gray-200 transition-colors"
          >
            ×
          </button>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
