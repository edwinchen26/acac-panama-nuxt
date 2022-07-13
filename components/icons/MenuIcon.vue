<template>
  <div class="relative z-10 self-end">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      fill="none"
      :stroke="color"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="cursor-pointer select-none"
      v-if="!isOpen"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="cursor-pointer select-none mt-4 mr-4"
      v-else
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: "#B45309"
    },
    isOpen: {
      type: Boolean,
      required: true
    }
  }
}
</script>