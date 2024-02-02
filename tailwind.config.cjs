/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background-color': '#eeeeee', 
        'card-color': '#fbfbfb', 
      },
    },
    fontFamily: {
      work: ['Work Sans', 'sans-serif']
    }
  },
  plugins: [require('daisyui')],
}

