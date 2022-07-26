/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    maxWidth: {
      '90': "90px",
    },
    maxHeight: {
      '48': '48px',
    },
    extend: {},
  },
  plugins: [{
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    }
  }],
}
