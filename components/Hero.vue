<i18n>
{
  "es": {
    "heading": "Comienzo de clases 2022",
    "content": "Ya iniciamos de manera presencial los cursos de mandarín de todos los niveles. También se inició los cursos de instrumentos musicales.",
    "button": "Ver más"
  },

  "zh": {
    "heading": "2022年开学",
    "content": "我们已经开始了各级的普通话实体课程和学习乐器实体课程。",
    "button": "更多"
  }
}
</i18n>

<template>
  <div class="center-section grid lg:grid-cols-[4fr,3fr] gap-4 w-full my-7 lg:my-4">
    <div class="flex flex-col justify-center w-full lg:w-11/12 order-2 lg:order-1">
      <h1
        class="w-full 2xl:w-3/4 lg:w-11/12 text-blueGray-700 text-center lg:text-left mt-8"
      >{{ $t('heading') }}</h1>
      <div class="w-full 2xl:w-11/12 lg:w-full my-4 text-blueGray-600 text-xl">{{ $t('content') }}</div>
      <Button
        :text="$t('button')"
        css="mt-4 bg-blueGray-400 shadow-lg text-white self-end lg:self-start"
      />
    </div>
    <div class="order-1 lg:order-2 self-center">
      <nuxt-img
        format="webp"
        fit="cover"
        src="pages/home/hero.png"
        sizes="sm:100vw lg:848px"
        alt="Academia de Arte y Cultura de Panama - Hero image"
      />
    </div>
  </div>
</template>

<script>
export default {
}
</script>