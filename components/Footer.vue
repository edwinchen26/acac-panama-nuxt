<i18n>
{
  "es": {
    "contact": {
      "heading": "Contacto",
      "content": {
        "address": {
          "heading": "Dirección:",
          "content": "Iglesia Evangélica China de Panamá. Ave. Cincuentenario, Costa del Este."
        },
        "phone": {
          "heading": "Teléfono:",
          "content": "(+507) 6733-7272"
        }
      }
    },  
    "social_media": {
      "heading": "Redes sociales"
    }
  },

  "zh": {
    "contact": {
      "heading": "联络",
      "content": {
        "address": {
          "heading": "地址:",
          "content": "巴拿马基督教华人教会. Ave. Cincuentenario, Costa del Este"
        },    
        "phone": {
          "heading": "电话:",
          "content": "(+507) 6733-7272"
        }
      }
    },
    "social_media": {
      "heading": "社交媒体"
    }
  }
}
</i18n>

<template>
  <div class="bg-footer">
    <div class="center-section flex flex-col w-full py-4">
      <div class="w-full flex flex-col lg:grid lg:grid-cols-3 lg:gap-4 xl:gap-12">
        <div class="p-4 hidden lg:block">
          <NuxtLink :to="localePath('/')" class="flex justify-center items-center">
            <nuxt-img
              format="webp"
              src="logo_mini.png"
              alt="Academia de Arte y Cultura de Panama - Logo"
              class="self-center"
            />
            <div
              class="ml-2 2xl:text-lg font-medium text-white"
            >Academia de Cultura y Arte China Panamá</div>
          </NuxtLink>
        </div>

        <div class="p-4 text-white/80">
          <h5>{{ $t('contact.heading') }}</h5>
          <div class="flex pb-2">
            <div class="flex font-semibold">
              <LocationIcon size="18" css="mt-1" />
              <span class="mx-1 whitespace-nowrap">{{ $t('contact.content.address.heading') }}</span>
            </div>
            <div>{{ $t('contact.content.address.content') }}</div>
          </div>
          <div class="flex py-2">
            <div class="flex items-center font-semibold">
              <PhoneIcon size="18" />
              <span class="mx-1">{{ $t('contact.content.phone.heading') }}</span>
            </div>
            <div>
              <a
                href="tel:+5076733-7272"
                class="underline"
              >{{ $t('contact.content.phone.content') }}</a>
            </div>
          </div>
          <div class="flex py-2">
            <div class="flex items-center font-semibold mr-1">
              <WhatsappIcon size="18" />
              <span class="mx-1">Whatsapp:</span>
            </div>
            <div>
              <a href="https://wa.me/50767337272" class="underline">(+507) 6733-7272</a>
            </div>
          </div>
        </div>

        <div class="p-4 text-white/80">
          <h5>{{ $t('social_media.heading') }}</h5>
          <div class="flex">Instagram</div>
        </div>
      </div>

      <div
        class="w-full border-t border-white/30 pt-4 text-center text-white/40"
      >Academia de Cultura y Arte China Panamá © - 2022</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
h5 {
  @apply w-full text-lg font-bold text-white border-b-2 border-white mb-4 uppercase;
}
.bg-footer {
  background-color: #3a4654;
}
</style>