const colors = require('tailwindcss/colors')

module.exports = {
  prefix: '',
  mode: 'jit',
  purge: {
    content: [
      './apps/valor-software-site/src/**/*.{html,ts}',
      './libs/**/src/**/*.{html,ts}'
    ]
  },
  darkMode: 'class',
  theme: {
    colors: {
      pink: '#E24E63',
      grey: '#1B1B1C',
      grey_bg: '#161617',
      light_grey_bg: '#2C2C2D',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      light_title_col: '#E3E3E3',
      dark_title_col: '#202020',
      light_font_col: 'var($light_title_col)',
      header_font_col: '#C8C8C8'
    },
    borderColor: (theme) => ({
      ...theme('colors'),
    }),
    fontSize: {
      'base': '1rem'
    },
    minWidth: {
      '585': '585px',
    },
    extend: {
      fontFamily: {
        'workSans': ['Work Sans', 'Roboto', 'Arial', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography'), require('@tailwindcss/ui')],
};
