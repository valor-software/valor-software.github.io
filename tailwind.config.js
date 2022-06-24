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
      light_pink: '#CE7783',
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
      dark_title_col_updated: '#2B2B2B',
      light_font_col: 'var(--light_font_col)',
      grey_font_col: '#C0C0C0',
      header_font_col: '#C8C8C8',
      dar_grey_font_col: '#8C8C8C',
      dark_font_col: '#1E1C1C',
      input_col: '#343434',
      placeholder_col: '#585858',
      hover_pink_btn_col: '#C03247',
      feedback_font_col: '#E1E1E1',
      darkPink: '#D85988',
      darkPinkHover: '#9C395E',
      blue_btn: '#1F5CF5',
      darkBlue: '#22469F',
      light_green: '#77CE9A',
      green: '#658B80',
      light_blue: '#71A5D2',
      popover_bg: '#282828'
    },
    borderColor: (theme) => ({
      ...theme('colors'),
    }),
    extend: {
      fontFamily: {
        'workSans': ['Work Sans', 'Roboto', 'Arial', 'sans-serif'],
        'workSansBold': ['Work Sans-Bold', 'Work Sans', 'Roboto', 'Arial', 'sans-serif']
      },
      lineHeight: {
        '44': '2.75rem',
        '40': '2.5rem',
        '66': '4.125rem',
        '200': '200px',
        '250': '250px',
        '150': '150px',
        '56': '56px',
        '28': '28px',
        '36': '36px',
        '75': '75px',
        '100': '100px'
      },
      fontSize: {
        'base': '1rem',
        'xs': '0.65rem',
        'large': '2.5rem',
        '64': '4rem',
        '32': '2rem',
        'title': '200px',
        'double_title': '180px',
        '56': '56px',
        '50': '50px',
        '150': '150px',
        '24': '24px',
        '20': '20px',
        '105': '105px',
        '80': '80px',
        '250': '250px'
      },
      minWidth: {
        '585': '585px',
        '1110': '1110px',
        '450': '450px',
        '1000': '1000px',
        '45%': '45%',
        '100': '100px',
        '70': '70px',
        '200': '200px'
      },
      maxWidth: {
        '200': '200px',
        '220': '220px',
        '90%': '90%',
        '1010': '1010px',
        '700': '700px',
        '735': '735px',
        '455': '455px',
        '19%': '19%',
        '140': '140px',
        '45%': '45%',
        '50%': '50%',
        '10.5': '10.5rem',
        '65%': '65%',
        '25%': '25%',
        '30%': '30%',
        '85%': '85%',
        '80%': '80%',
        '600': '600px',
        '630': '630px',
        '380': '380px',
        '75%': '75%',
        '400': '400px',
        '500': '500px',
        '540': '540px',
        '900': '900px'
      },
      maxHeight: {
        '700': '700px',
        '90%': '90%',
        '500': '500px',
        '200': '200px'
      },
      boxShadow: {
        inner_radio_btn: 'inset 0 0 0 3px #272727',
        inner_radio_btn_darker: 'inset 0 0 0 3px #161617'
      },
      inset: {
        'm5': '-5px',
        'm100%': '-105%'
      },
      borderRadius: {
        '20': '20px',
        '12': '12px'
      },
      spacing: {
        '6.75': '6.75rem'
      },
      width: {
        '1225': '1225px',
        '48%': '48%',
        '45%': '45%',
        '65%': '65%',
        '35%': '35%',
        '20%': '20%',
        '70': '70px',
        '31%': '31%',
        '35': '35px',
        '100': '100px',
        '90': '90px',
        '50': '50px',
        '130': '130px',
        '75': '75px'
      },
      minHeight: {
        '725': '725px',
        '525': '525px',
        '100': '100px'
      },
      height: {
        '420': '420px',
        '550': '550px',
        '350': '350px',
        '70': '70px',
        '300': '300px',
        '790': '790px',
        '90': '90px',
        '50': '50px',
        '115': '115px',
        '75': '75px'
      },
      zIndex: {
        '1': '1'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography'), require('@tailwindcss/ui')],
};
