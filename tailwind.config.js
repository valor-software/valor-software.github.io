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
      grey_2727_bg: '#272727',
      yellow_bg_col: '#EAB669',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      light_title_col: '#E3E3E3',
      dark_title_col: '#202020',
      light_font_col: 'var(--light_font_col)',
      grey_font_col: '#C0C0C0',
      header_font_col: '#C8C8C8',
      dar_grey_font_col: '#8C8C8C',
      dark_font_col: '#1E1C1C',
      input_col: '#343434',
      placeholder_col: '#585858',
      hover_pink_btn_col: '#C03247'
    },
    borderColor: (theme) => ({
      ...theme('colors'),
    }),
    extend: {
      fontFamily: {
        'workSans': ['Work Sans', 'Roboto', 'Arial', 'sans-serif']
      },
      lineHeight: {
        '44': '2.6rem',
        '66': '4.125rem'
      },
      width: {
        '45': '45%'
      },
      fontSize: {
        'base': '1rem',
        'xs': '0.65rem',
        'large': '2.5rem',
        '64': '4rem',
        '32': '2rem'
      },
      minWidth: {
        '585': '585px',
        '1110': '1110px',
        '450': '450px'
      },
      maxWidth: {
        '200': '200px',
        '90%': '90%',
        '1010': '1010px',
        '700': '700px',
        '455': '455px',
        '19%': '19%'
      },
      maxHeight: {
        '700': '700px'
      },
      boxShadow: {
        inner_radio_btn: 'inset 0 0 0 3px #272727'
      },
      inset: {
        'm5': '-5px',
        'm100%': '-100%'
      },
      borderRadius: {
        '20': '20px'
      },
      spacing: {
        '6.75': '6.75rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography'), require('@tailwindcss/ui')],
};
