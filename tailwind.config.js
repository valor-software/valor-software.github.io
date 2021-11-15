const colors = require('tailwindcss/colors')

module.exports = {
  prefix: '',
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './apps/valor-software-site/src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class',
  theme: {
    colors: {
      pink: '#E24E63',
      grey: '#1B1B1C',
      grey_bg: '#161617',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      light_title: '#E3E3E3',
      dark_title: '#202020',
      light_font: '#E1E1E1 '
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
