<i18n>
{
  "es": {
    "heading": "Información de contacto",
    "address": {
      "heading": "Dirección",
      "content": "Iglesia Evangélica China de Panamá. Ave. Cincuentenario, Costa del Este."
    },
    "phone": {
      "heading": "Teléfono",
      "content": "(+507) 6733-7272"
    }
  },

  "zh": {
    "heading": "联络我们",
    "address": {
      "heading": "地址",
      "content": "巴拿马基督教华人教会. Ave. Cincuentenario, Costa del Este"
    },    
    "phone": {
      "heading": "电话",
      "content": "(+507) 6733-7272"
    }
  }
}
</i18n>

<template>
  <div>
    <h2 class="center-section text-blueGray-700 mt-8 md:pb-8 lg:mt-0">{{ $t('heading') }}</h2>
    <div class="w-full h-full flex flex-col">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5214110875736!2d-79.47370668512576!3d9.016107871806522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca98b2ccf5593%3A0x3195e6e3234307fe!2sIglesia%20Evangelica%20China%20Panama!5e0!3m2!1ses-419!2spa!4v1640988674640!5m2!1ses-419!2spa"
        allowfullscreen
        loading="lazy"
        class="bg-orange-100/10 w-11/12 xl:w-4/5 h-[320px] md:h-[480px] lg:h-[550px] 2xl:h-[600px] mx-auto border border-white rounded-2xl shadow-lg overflow-hidden z-10"
      ></iframe>

      <div class="bg-white md:px-8 pb-16 pt-24 lg:pt-48 -mt-16 lg:-mt-32">
        <div class="center-section flex flex-col md:items-center lg:grid lg:grid-cols-3 gap-8">
          <div class="card bg-orange-100">
            <div class="icon bg-orange-300/50">
              <LocationIcon css="text-orange-800" />
            </div>
            <div class="text">
              <h5 class="text-orange-800">{{ $t('address.heading') }}</h5>
              <div class="text-orange-700/75">{{ $t('address.content') }}</div>
            </div>
          </div>

          <div class="card bg-blue-100">
            <div class="icon bg-blue-300/50">
              <PhoneIcon css="text-blue-800" />
            </div>
            <div class="text">
              <h5 class="text-blue-800">{{ $t('phone.heading') }}</h5>
              <div class="text-blue-700/75">{{ $t('phone.content') }}</div>
            </div>
          </div>

          <div class="card bg-blueGray-200">
            <div class="icon bg-blueGray-300/50">
              <WhatsappIcon css="text-blueGray-600" />
            </div>
            <div class="text">
              <h5 class="text-blueGray-800">Whatsapp</h5>
              <div class="text-blueGray-700/75">{{ $t('phone.content') }}</div>
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
.card {
  @apply w-full h-full md:w-3/4 lg:w-full rounded-3xl p-4 flex flex-row gap-8 items-center;
}
.card > .icon {
  @apply p-4 rounded-2xl;
}
.card > .text {
  @apply flex flex-col;
}
.card > .text > h5 {
  @apply text-lg font-semibold;
}
</style>