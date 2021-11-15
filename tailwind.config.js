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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
