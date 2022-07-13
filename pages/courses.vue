<i18n lang="es">
{
  "es": {
    "heading": "Nuestros cursos",
    "card_1": {
      "heading": "Curso de mandarín",
      "content": {
        "paragraph_1": "Actualmente tenemos un curso del idioma mandarín, el curso consta de hasta 12 niveles, en donde aprenderás desde los conceptos más básicos hasta las estructuras gramaticales del idioma mandarín y poder leer, escribir y llevar una conversación con otra persona.",
        "paragraph_2": {
          "heading": "Virtual",
          "list": {
            "_1": "Desde 7 años hasta 17 años.",
            "_2": "El periodo de clases tiene una duración por semestre (14 clases).",
            "_3": "El costo del curso es de B/. 30.00 (matrícula) + B/. 100.00 (semestre). Luego del período de matrícula se le cobrará adicional B/. 20.00."
          }
        },
        "paragraph_3": {
          "heading": "Presencial",
          "list": {
            "_1": "Desde 7 años hasta 17 años.",
            "_2": "El periodo de clases tiene una duración por semestre (20 clases).",
            "_3": "Contamos con 3 horarios diferentes y las clases se dan cada sábado.",
            "_4": "El costo del curso es de B/. 30.00 (matrícula) + B/. 200.00 (semestre), adicional B/. 20.00 de costo para gastos de seguros y deportes."
          }
        }
      }
    },
    "card_2": {
      "heading": "Curso de música",
      "content": {
        "paragraph_1": "Contamos con distintos cursos de música para que aprenda a tocar un instrumento musical. Entre los instrumentos musicales que puede aprender a tocar está: guitarra acústica, piano y violonchelo.",
        "paragraph_2": {
          "text": "El costo varía según la duración de las clases:",
          "list": {
            "_1": {
              "bold": "30 minutos:",
              "regular": "B/. 30.00 (matrícula) + B/. 17.00 (por clase práctica) + B/. 3.00 (por clase teórica)"
            },
            "_2": {
              "bold": "45 minutos:",
              "regular": "B/. 30.00 (matrícula) + B/. 25.00 (por clase práctica) + B/. 3.00 (por clase teórica)"
            }
          }
        }
      }
    },
    "highlighed_text": "* Si está interesado puede llenar el siguiente formulario",
    "button_text": "Ver formulario"
  },

  "zh": {
    "heading": "课程",
    "card_1": {
      "heading": "语言课程",
      "content": {
        "paragraph_1": "我们目前有一门普通话课程，该课程包括多达12个级别，您将可以从普通话的基础知识以及语法结构学起，直到能够阅读，写作和与他人进行交流",
        "paragraph_2": {
          "heading": "在线语言课程",
          "list": {
            "_1": "年龄从7岁到17岁。",
            "_2": "每个学期有20堂课。",
            "_3": "该课程的费用: 注册费 B/.30.00，每学期学费 B/. 100.00。 在注册期之后，将收取 B/.20.00 的超额费用。"
          }
        },
        "paragraph_3": {
          "heading": "语言课程",
          "list": {
            "_1": "年龄从7岁到17岁。",
            "_2": "每个学期有20堂课。",
            "_3": "逢星期六上课，有三个不同的时段。",
            "_4": "该课程的费用: 注册费 B/.30.00，每学期学费 B/. 100.00。 在注册期之后，将收取 B/.20.00 的超额费用。"
          }
        }
      }
    },
    "card_2": {
      "heading": "音乐课程",
      "content": {
        "paragraph_1": "我们有不同的音乐课程来学习演奏乐器，您可以学习演奏的乐器包括: 吉他，钢琴和大提琴。",
        "paragraph_2": {
          "text": "课程的时间和费用:",
          "list": {
            "_1": {
              "bold": "30分钟:",
              "regular": "注册费B / 30.00，每节课B/. 17.00，每节乐理课B/. 3.00"
            },
            "_2": {
              "bold": "45分钟:",
              "regular": "注册费B / 30.00，每节课B/. 25.00，每节乐理课B/. 3.00"
            }
          }
        }
      }
    },
    "highlighed_text": "* 有意者，请打印并填写以下报名表格",
    "button_text": "报名表格"
  }
}
</i18n>

<template>
  <div class="center-section">
    <h2 class="text-blueGray-700 mt-8 lg:mt-0">{{ $t('heading') }}</h2>

    <div class="flex flex-col gap-4">
      <div id="mandarin" class="py-4">
        <div class="card">
          <div class="card-img">
            <nuxt-img
              format="webp"
              fit="cover"
              src="pages/home/section2_01.jpg"
              alt="Academia de Arte y Cultura de Panama - Language course image"
            />
          </div>
          <div class="card-container">
            <div class="card-container_content">
              <h3>{{ $t('card_1.heading') }}</h3>
              <div class="text">
                <div class="mb-4">{{ $t('card_1.content.paragraph_1') }}</div>

                <div class="my-4">
                  <h5>{{ $t('card_1.content.paragraph_2.heading') }}</h5>
                  <ul class="list-disc ml-4">
                    <li>{{ $t('card_1.content.paragraph_2.list._1') }}</li>
                    <li>{{ $t('card_1.content.paragraph_2.list._2') }}</li>
                    <li>{{ $t('card_1.content.paragraph_2.list._3') }}</li>
                  </ul>
                </div>

                <div class="my-4">
                  <h5>{{ $t('card_1.content.paragraph_3.heading') }}</h5>
                  <ul class="list-disc ml-4">
                    <li>{{ $t('card_1.content.paragraph_3.list._1') }}</li>
                    <li>{{ $t('card_1.content.paragraph_3.list._2') }}</li>
                    <li>{{ $t('card_1.content.paragraph_3.list._3') }}</li>
                    <li>{{ $t('card_1.content.paragraph_3.list._4') }}</li>
                  </ul>
                </div>
                <div class="my-4 text-orange-700 font-semibold">{{ $t('highlighed_text') }}</div>
                <Button
                  :text="$t('button_text')"
                  go-to="../pdf/formulario.pdf"
                  :is-nuxt-link="false"
                  css="bg-orange-200 text-yellow-800 text-sm md:text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="music" class="py-4">
        <div class="card right">
          <div class="card-img">
            <nuxt-img
              format="webp"
              fit="cover"
              src="pages/home/section2_02.jpg"
              alt="Academia de Arte y Cultura de Panama - Music course image"
            />
          </div>
          <div class="card-container">
            <div class="card-container_content">
              <h3>{{ $t('card_2.heading') }}</h3>
              <div class="text">
                <div class="mb-4">{{ $t('card_2.content.paragraph_1') }}</div>
                <ul class="list-disc ml-4">
                  <span>{{ $t('card_2.content.paragraph_2.text') }}</span>
                  <li>
                    <span class="font-semibold">{{ $t('card_2.content.paragraph_2.list._1.bold') }}</span>
                    {{ $t('card_2.content.paragraph_2.list._2.regular') }}
                  </li>
                  <li>
                    <span class="font-semibold">{{ $t('card_2.content.paragraph_2.list._2.bold') }}</span>
                    {{ $t('card_2.content.paragraph_2.list._2.regular') }}
                  </li>
                </ul>
                <div class="my-4 text-orange-700 font-semibold">{{ $t('highlighed_text') }}</div>
                <Button
                  :text="$t('button_text')"
                  go-to="../pdf/formulario.pdf"
                  :is-nuxt-link="false"
                  css="bg-orange-200 text-yellow-800 text-sm md:text-base"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
h5 {
  @apply text-lg font-bold uppercase;
}
.card {
  @apply grid grid-cols-12 w-full my-4;
}
.card > .card-img {
  @apply row-start-1 col-start-3 row-end-3 col-end-11 md:row-start-2 md:col-start-1 md:row-end-4 md:col-end-5 overflow-hidden rounded-2xl shadow-lg order-1;
}
.card.right > .card-img {
  @apply md:row-start-2 md:col-start-9 md:row-end-4 md:col-end-13;
}
.card > .card-img > img {
  @apply w-full object-cover max-h-[350px];
}
.card > .card-container {
  @apply grid grid-cols-9 bg-white row-start-2 col-start-1 row-end-5 col-end-13 md:row-start-1 md:col-start-2 md:row-end-5 md:col-end-13 p-8 rounded-2xl shadow-lg;
}
.card.right > .card-container {
  @apply md:row-start-1 md:col-start-1 md:row-end-5 md:col-end-11;
}
.card > .card-container > .card-container_content {
  @apply bg-white col-start-1 col-end-11 mt-28 md:row-start-1 md:col-start-4 md:row-end-2 md:col-end-9 md:mt-0 self-center flex flex-col;
}
.card.right > .card-container > .card-container_content {
  @apply md:row-start-1 md:col-start-2 md:row-end-2 md:col-end-7;
}
.card > .card-container > .card-container_content > h3 {
  @apply text-blueGray-700 after:bg-yellow-500 mt-0;
}
.card > .card-container > .card-container_content > .text {
  @apply text-lg text-blueGray-600;
}
</style>