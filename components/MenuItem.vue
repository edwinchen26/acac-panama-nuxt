<template>
  <NuxtLink
    v-if="subMenu.length == 0"
    class="text-2xl lg:text-lg text-yellow-800 after:border-b-4 after:border-orange-300 after:block after:scale-x-0 after:transition-transform after:duration-200 after:ease-in-out hover:after:scale-x-100"
    :to="localePath(goTo)"
  >{{ itemName }}</NuxtLink>

  <div v-else class="text-white lg:text-yellow-800 group relative">
    <NuxtLink :to="localePath(goTo)" class="flex items-center">
      <span
        class="text-2xl w-full lg:text-lg after:border-b-4 after:border-orange-300 after:block after:scale-x-0 after:transition-transform after:duration-200 after:ease-in-out group-hover:after:scale-x-100 mr-1"
      >{{ itemName }}</span>

      <ChevronIcon
        size="16"
        direction="down"
        class="hidden lg:block mt-0.5 group-hover:-rotate-90 transition-transform"
      />
    </NuxtLink>

    <div class="absolute top-full -left-4 hidden lg:group-hover:block z-20">
      <div
        class="mt-2 font-normal min-w-[250px] rounded-xl bg-white shadow-lg w-max p-4 overflow-hidden"
      >
        <NuxtLink
          v-for="(item, index) in subMenu"
          :key="index"
          :to="localePath(item.goTo)"
          class="flex flex-col hover:bg-orange-100 p-4 rounded-xl cursor-pointer"
        >
          <span class="font-medium">{{ item.itemName }}</span>
          <span class="text-sm">{{ item.description }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemName: {
      type: String,
      required: true
    },
    goTo: {
      type: String,
      default: "/"
    },
    subMenu: {
      type: Array,
      default: () => []
    }
  }
}
</script>