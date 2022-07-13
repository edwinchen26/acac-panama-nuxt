<i18n>
{
  "es": {
    "home": "Inicio",
    "news": "Anuncios",
    "courses": {
      "text": "Cursos",
      "subMenu": {
        "sub_1": {
          "text": "Mandarín",
          "description": "Excelentes cursos para todas las edades"
        },
        "sub_2": {
          "text": "Música",
          "description": "Aprenda a tocar un nuevo instrumento musical"
        }
      }
    },
    "contact": "Contacto"
  },

  "zh": {
    "home": "首页",
    "news": "通告",
    "courses": { 
      "text": "课程",
      "subMenu": {
        "sub_1": {
          "text": "普通话课程",
          "description": "Brief description of this sub-menu item"
        },
        "sub_2": {
          "text": "音乐课程",
          "description": "Brief description of this sub-menu item"
        }
      }
    },
    "contact": "联络我们"
  }
}
</i18n>

<template>
  <div
    class="w-full h-full flex flex-col transition-all lg:static lg:p-0 lg:transition-none"
    :class="{ 'is-open': mobile && isMenuVisible }"
  >
    <MenuIcon
      v-if="mobile"
      :is-open="isMenuVisible"
      @click.native="isMenuVisible = !isMenuVisible"
    />
    <menu
      class="center-section hidden lg:flex items-center gap-12 flex-nowrap mt-4 p-4 font-medium text-lg"
    >
      <MenuItem go-to="/" :item-name="$t('home')" @click.native="isMenuVisible = !isMenuVisible" />
      <MenuItem
        go-to="/news"
        :item-name="$t('news')"
        @click.native="isMenuVisible = !isMenuVisible"
      />
      <MenuItem
        go-to="/courses"
        :item-name="$t('courses.text')"
        :sub-menu="getSubItems"
        @click.native="isMenuVisible = !isMenuVisible"
      />
      <MenuItem
        go-to="/contact"
        :item-name="$t('contact')"
        @click.native="isMenuVisible = !isMenuVisible"
      />
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        class="bg-transparent lg:hover:bg-blueGray-700 border-2 border-white lg:border-blueGray-700 lg:text-blueGray-800 hover:text-white text-sm flex items-center gap-2 mb-2 lg:ml-auto py-3 px-5 rounded-full transition-colors ease-in-out"
      >
        <TranslateIcon size="18" />
        {{ locale.name }}
      </nuxt-link>
    </menu>
  </div>
</template>
<script>
export default {
  props: {
    mobile: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isMenuVisible: false,
    };
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    },
    getSubItems() {
      return [
        { goTo: "/courses#mandarin", itemName: this.$t('courses.subMenu.sub_1.text'), description: this.$t('courses.subMenu.sub_1.description') },
        { goTo: "/courses#music", itemName: this.$t('courses.subMenu.sub_2.text'), description: this.$t('courses.subMenu.sub_2.description') }
      ]
    }
  },
}
</script>

<style scoped>
.is-open {
  background-color: #334155;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}

.is-open > menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.is-open > menu > a {
  color: white;
}
</style>