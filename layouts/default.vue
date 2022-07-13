<template>
  <div class="bg-main">
    <Header />
    <Menu />

    <Nuxt />

    <Footer />
  </div>
</template>

<style scoped>
.bg-main {
  background-color: #fef1e6;
}
</style>

<script>
export default {
    head() {
        return {
            htmlAttrs: {
                lang: this.$i18n.locale
            }
        }
    },
}
</script>