<i18n>
{
  "es": {
    "address": {
      "heading": "Dirección",
      "content": "Iglesia Evangélica China de Panamá.\nAve. Cincuentenario, Costa del Este."
    },
    "phone": {
      "heading": "Teléfono",
      "content": "(+507) 6733-7272"
    }
  },

  "zh": {
    "address": {
      "heading": "地址",
      "content": "巴拿马基督教华人教会.\nAve. Cincuentenario, Costa del Este"
    },    
    "phone": {
      "heading": "电话",
      "content": "(+507) 6733-7272"
    }
  }
}
</i18n>

<template>
  <div class="w-full center-section flex justify-between py-4 lg:py-8 border-b border-orange-200">
    <NuxtLink :to="localePath('/')" class="flex justify-center items-center">
      <nuxt-img
        format="webp"
        src="logo_mini.png"
        alt="Academia de Arte y Cultura de Panama - Logo"
        class="self-center"
      />
      <div
        class="hidden md:flex md:flex-col ml-2 lg:text-xl 2xl:text-2xl font-semibold text-blueGray-600"
      >
        <span>Academia de Cultura y Arte</span>
        <span>China Panamá</span>
      </div>
    </NuxtLink>

    <div class="lg:hidden">
      <Menu mobile />
    </div>

    <div class="hidden lg:flex flex-col xl:flex-row gap-2 xl:gap-4">
      <div class="flex items-center xl:justify-center">
        <div class="rounded-3xl bg-orange-200 p-2 xl:p-4 mr-2">
          <LocationIcon color="#854D0E" css="w-4 h-4 xl:w-6 xl:h-6" />
        </div>
        <div class="flex flex-col">
          <div class="hidden xl:block font-bold text-yellow-800">{{ $t('address.heading') }}</div>
          <div class="text-yellow-700 whitespace-pre-line">{{ $t('address.content') }}</div>
        </div>
      </div>

      <div class="flex items-center xl:justify-center">
        <div class="rounded-3xl bg-orange-200 p-2 xl:p-4 mr-2">
          <PhoneIcon color="#854D0E" css="w-4 h-4 xl:w-6 xl:h-6" />
        </div>
        <div class="flex flex-col">
          <div class="hidden xl:block font-bold text-yellow-800">{{ $t('phone.heading') }}</div>
          <div class="text-yellow-700">{{ $t('phone.content') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>