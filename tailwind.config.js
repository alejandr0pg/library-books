/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          '--rounded-btn': require('daisyui/src/theming/themes')['cupcake'][
            '--rounded-btn'
          ],
          '.card:hover.image-full:before': {
            opacity: 0.9,
          },
        },
      },
      {
        cupcake: {
          ...require('daisyui/src/theming/themes')['cupcake'],
          '.card.image-full:before': {
            opacity: 0.55,
          },
          '.card:hover.image-full:before': {
            opacity: 0.8,
          },
        },
      },
    ],
  },
};
