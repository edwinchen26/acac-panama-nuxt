<i18n>
{
  "es": {
    "heading": "Anuncios",
    "read_button": "Ver más"
  },

  "zh": {
    "heading": "通告",
    "read_button": "更多"
  }
}
</i18n>

<template>
  <div class="center-section mb-8">
    <h2 class="text-blueGray-700 mt-8 lg:pb-8 lg:mt-0">{{ $t('heading') }}</h2>
    <div class="flex flex-col lg:grid lg:grid-cols-3 gap-4 xl:gap-16">
      <div
        v-if="!posts.length"
        class="text-lg italic text-blueGray-500"
      >There are no posts available at this moment</div>

      <div
        v-for="(post, index) in posts"
        v-else
        :key="index"
        class="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
      >
        <NuxtLink :to="localePath(`/post/${post.slug}`)">
          <nuxt-img
            format="webp"
            fit="cover"
            :src="`post/${post.slug}/cover.jpg`"
            :alt="post.description"
            class="w-full"
          />
        </NuxtLink>

        <div class="flex flex-col h-full p-4">
          <NuxtLink
            :to="localePath(`/post/${post.slug}`)"
            class="text-2xl font-semibold text-blueGray-700 hover:text-blueGray-800/75 self-start"
          >{{ post.title }}</NuxtLink>
          <span class="text-sm text-blueGray-400 mb-4 self-end">{{ formatDate(post.createdAt) }}</span>
          <div class="text-blueGray-500 grow">{{ post.description }}</div>
          <Button
            :text="$t('read_button')"
            :go-to="`/post/${post.slug}`"
            css="bg-orange-200 text-yellow-800 mt-8 text-sm self-end"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app }) {
    const posts = await $content(`post/${app.i18n.locale}`)
      .only(['title', 'description', 'slug', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch();

    return {
      posts
    }
  },
  methods: {
    formatDate(val) {
      return (new Date(val)).toLocaleDateString(this.$i18n.locale, { year: 'numeric', month: 'long', day: 'numeric' });
    }
  }
}
</script>

<style scoped>
</style>