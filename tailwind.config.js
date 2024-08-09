/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#005544',
        'royal-red': '#DE0000'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

