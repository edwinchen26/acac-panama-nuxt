const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    // `layouts/**/*.vue`,
    `pages/**/*.vue`,
    // `plugins/**/*.{js,ts}`,
    // `nuxt.config.{js,ts}`
  ],
  theme: {
    fontFamily: {
      sans: 'Poppins, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      orange: colors.orange,
      yellow: colors.yellow,
      blueGray: colors.slate,
      blue: colors.blue
    },
    gradientColorStops: theme => ({
      ...theme('colors'),
      'main-background': '#FEF1E6',
    }),
    extend: {
      animation: {
        'bounce-x': 'bounce-x 1s infinite',
      },
      keyframes: {
        'bounce-x': {
          '0%, 100%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateX(25%)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
