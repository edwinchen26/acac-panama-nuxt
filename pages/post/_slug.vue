<template>
  <div class="center-section my-8">
    <h2 class="title">{{ post.title }}</h2>
    <nuxt-img
      format="webp"
      fit="cover"
      :src="`post/${post.slug}/${post.coverImg || 'cover.jpg'}`"
      :alt="post.description"
      class="w-4/5 mt-8 mx-auto rounded-2xl shadow-lg relative z-10"
    />
    <div class="content">
      <nuxt-content :document="post" />
    </div>
  </div>
</template>


<script>
export default {
  async asyncData({ $content, params, app }) {
    const post = await $content(`post/${app.i18n.locale}`, params.slug).fetch();

    return { post }
  },
}
</script>

<style scoped>
.title {
  @apply text-center text-blueGray-700;
}

.content {
  @apply bg-white p-16 pt-32 rounded-2xl shadow-lg shadow-orange-600/10 text-lg text-blueGray-600 -translate-y-16;
}
</style>

<style>
.nuxt-content h1 {
  @apply text-4xl font-bold text-orange-300 pb-2 border-b-2 border-dashed border-blueGray-200;
}

.nuxt-content h2 {
  @apply text-2xl text-blueGray-500;
}

.nuxt-content p {
  @apply mb-4;
}

.nuxt-content img {
  @apply w-1/2 mx-auto rounded-lg;
}

.nuxt-content a {
  @apply break-all text-blue-500 underline;
}

.nuxt-content code {
  @apply p-1 bg-blueGray-200;
}
</style>