<template>
  <NuxtLink v-if="isNuxtLink" :to="localePath(goTo)" class="button group" :class="css">
    <span>{{ text }}</span>
    <ChevronIcon size="16" class="ml-1 group-hover:animate-bounce-x" />
  </NuxtLink>
  <a
    v-else
    :href="goTo"
    target="_blank"
    rel="noopener noreferrer"
    class="button group"
    :class="css"
  >
    <span>{{ text }}</span>
    <ChevronIcon size="16" class="ml-1 group-hover:animate-bounce-x" />
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Button"
    },
    css: {
      type: String,
      default: ""
    },
    goTo: {
      type: String,
      default: "/"
    },
    isNuxtLink: {
      type: Boolean,
      default: true
    }
  }
}
</script>