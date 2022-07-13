<i18n>
{
  "es": {
    "section_1": {
      "heading": "Somos la opción perfecta para sus hijos",
      "content": "Nuestra misión principal es evangelizar y dar a conocer la Palabra de Dios y su promesa de salvación por medio de Jesucristo.",
      "sub_1": {
        "heading": "Los estudiantes son nuestra prioridad",
        "content": "Nuestros estudiantes se merecen lo mejor, por eso nuestro equipo de maestras están completamente dedicadas a servir con amor ofreciendo educación de excelente calidad para dar siempre lo mejor."
      },
      "sub_2": {
        "heading": "Un entorno para crecer",
        "content": "Sabemos lo importante que es para usted que sus hijos puedan desarrollar todo su potencial desde pequeños, por eso ofrecemos un ambiente especial para que sus hijos puedan aprender y crecer físicamente, emocionalmente y espiritualmente. Rodeados de chicos del mismo rango de edad para que puedan socializar y a la vez aprender juntos mientras se divierten."
      }
    },
    "section_2": {
      "heading": "Nuestros cursos",
      "content": "Aprende gracias a un equipo de maestras de excelente calidad",
      "sub_1": {
        "heading": "Curso de mandarín",
        "content": "Excelentes cursos de mandarín desde un nivel básico hasta niveles más avanzados. Aprenderá a escribir, leer y tener conversaciones fluidas con otras personas."
      },
      "sub_2": {
        "heading": "Curso de música",
        "content": "Sus hijos encontrarán la pasión por la música a través de nuestros distintos cursos para aprender a tocar el instrumento musical que más les guste."
      }
    },
    "learn_more": "Conocer más"
  },

  "zh": {
    "section_1": {
      "heading": "我们是您孩子的最佳选择",
      "content": "我们的首要使命是传福音，宣扬上帝的话语和藉着耶稣基督而得救的应许。",
      "sub_1": {
        "heading": "学生的教育是我们的首要任务",
        "content": "我们的学生应该得到最好的教育，我们的教师团队完全致力于用爱心服务，提供优质的教育。"
      },
      "sub_2": {
        "heading": "学习和成长环境",
        "content": "我们知道让您的孩子从小就充分发挥他们的潜能对您来说是非常重要，在这里我们提供一个特别的环境，在学习的同时让您的孩子可以在身体、情感和精神上健康地成长，也可以结识更多的同龄朋友一起学习和玩乐。"
      }
    },
    "section_2": {
      "heading": "我们的课程",
      "content": "优秀的教师团队",
      "sub_1": {
        "heading": "普通话课程",
        "content": "优秀的普通话课程，从基础到高级课程。 您将学习写作、阅读并与其他人进行流利的对话。"
      },
      "sub_2": {
        "heading": "音乐课程",
        "content": "您的孩子将通过我们不同的课程找到对音乐的热情，学习演奏他们最喜欢的乐器。"
      }
    },
    "learn_more": "学到更多"
  }
}
</i18n>

<template>
  <div>
    <Hero />

    <div class="bg-gradient-to-b from-main-background to-white py-16 lg:py-32"></div>

    <div class="bg-white w-full pb-32 text-lg text-blueGray-600 lg:pt-4">
      <div class="center-section">
        <div class="flex flex-col items-center">
          <div class="w-full 2xl:w-3/5 lg:w-4/5 flex flex-col items-center text-center">
            <h1 class="text-blueGray-700 lg:pb-10">{{ $t('section_1.heading') }}</h1>
            <div
              class="text-blueGray-600 w-4/5 lg:text-xl lg:pb-10 italic"
            >{{ $t('section_1.content') }}</div>
          </div>
        </div>

        <div class="grid gap-4 mt-8 lg:grid-cols-4 lg:grid-rows-3 lg:gap-8 xl:gap-4 lg:mt-16">
          <div class="lg:col-span-2 lg:row-span-2 justify-self-center">
            <nuxt-img
              format="webp"
              fit="cover"
              src="pages/home/section1_01.png"
              alt="Academia de Arte y Cultura de Panama - Our goal image"
            />
          </div>
          <div class="w-full lg:w-11/12 lg:col-span-2">
            <h3 class="after:bg-yellow-500">{{ $t('section_1.sub_1.heading') }}</h3>
            <div class="w-full lg:w-11/12 text-blueGray-600">{{ $t('section_1.sub_1.content') }}</div>
          </div>
          <div class="mt-8 lg:col-span-2 lg:row-span-2 lg:mt-0 justify-self-center">
            <nuxt-img
              format="webp"
              fit="cover"
              src="pages/home/section1_02.png"
              alt="Academia de Arte y Cultura de Panama - Our vision image"
            />
          </div>
          <div class="lg:w-11/12 lg:col-span-2 lg:place-self-end">
            <h3 class="after:bg-yellow-500">{{ $t('section_1.sub_2.heading') }}</h3>
            <div class="w-full lg:w-11/12">{{ $t('section_1.sub_2.content') }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full py-8 2xl:p-32 xl:py-32 lg:py-16 text-lg text-blueGray-600 bg-[#90aacb]">
      <div class="center-section grid lg:grid-cols-4 gap-8 lg:gap-y-0">
        <!-- free line svg -->
        <div
          class="hidden 2xl:block 2xl:row-start-1 2xl:col-start-1 2xl:row-end-6 2xl:col-end-5 z-0"
        >
          <img src="~assets/images/svg/free-line-1.svg" class="object-cover" />
        </div>

        <!-- heading -->
        <div
          class="lg:row-start-1 lg:col-start-1 lg:row-end-2 lg:col-end-3 w-full xl:w-4/5 lg:bg-[#90aacb] z-10"
        >
          <h2
            class="text-center lg:text-left text-blueGray-700 my-8 lg:mb-4"
          >{{ $t('section_2.heading') }}</h2>
          <div class="hidden lg:block">{{ $t('section_2.content') }}</div>
        </div>

        <!-- svg-1 -->
        <div
          class="hidden lg:block 2xl:hidden md:row-start-2 md:col-start-1 md:row-end-3 md:col-end-4 md:justify-self-center"
        >
          <img src="~assets/images/svg/free-line-2.svg" alt />
        </div>

        <!-- area-1 -->
        <div
          class="lg:row-start-2 lg:col-start-3 lg:row-end-5 lg:col-end-5 xl:w-11/12 2xl:w-4/5 xl:justify-self-center z-10"
        >
          <div class="flex flex-col rounded-xl lg:rounded-3xl bg-white shadow-lg p-4 lg:p-8">
            <h4 class="text-blueGray-700 mb-0">{{ $t('section_2.sub_1.heading') }}</h4>
            <div class="w-full mt-4 mb-8 leading-5 lg:leading-7">{{ $t('section_2.sub_1.content') }}</div>
            <div class="rounded-xl overflow-hidden aspect-w-4 aspect-h-3">
              <nuxt-img
                format="webp"
                fit="contain"
                src="pages/home/section2_01.jpg"
                alt="Academia de Arte y Cultura de Panama - Language course image"
              />
            </div>
            <Button
              :text="$t('learn_more')"
              go-to="/courses#mandarin"
              css="bg-orange-200 text-yellow-800 mt-8 text-sm self-end"
            />
          </div>
        </div>

        <!-- svg-2 -->
        <div
          class="hidden lg:block 2xl:hidden md:row-start-4 md:col-start-2 md:row-end-6 md:col-end-4 md:mb-12 md:justify-self-center"
        >
          <img src="~assets/images/svg/free-line-3.svg" alt />
        </div>

        <!-- area-2 -->
        <div
          class="lg:row-start-3 lg:col-start-1 lg:row-end-6 lg:col-end-3 lg:mt-8 xl:w-11/12 2xl:w-4/5 xl:justify-self-center z-10"
        >
          <div class="flex flex-col rounded-xl lg:rounded-3xl bg-white shadow-lg p-4 lg:p-8">
            <h4 class="text-blueGray-700 mb-0">{{ $t('section_2.sub_2.heading') }}</h4>
            <div class="w-full mt-4 mb-8 leading-5 lg:leading-7">{{ $t('section_2.sub_2.content') }}</div>
            <div class="rounded-xl overflow-hidden aspect-w-4 aspect-h-3">
              <nuxt-img
                format="webp"
                fit="contain"
                src="pages/home/section2_02.jpg"
                alt="Academia de Arte y Cultura de Panama - Music course image"
              />
            </div>
            <Button
              :text="$t('learn_more')"
              go-to="/courses#music"
              css="bg-orange-200 text-yellow-800 mt-8  text-sm self-end"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'fade'
}
</script>