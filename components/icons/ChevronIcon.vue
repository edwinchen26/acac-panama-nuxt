<template>
  <div :direction="direction">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      fill="none"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
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
      default: "currentColor"
    },
    direction: {
      type: String,
      default: "right",
    }
  }
}
</script>

<style scoped>
[direction="up"] {
  transform: rotate(270deg);
}
[direction="right"] {
  transform: rotate(0deg);
}
[direction="down"] {
  transform: rotate(90deg);
}
[direction="left"] {
  transform: rotate(180deg);
}
</style>