/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'kukmin-yellow': '#ffcf0f;',
        'kukmin-yellow2': '#ffb700;',
        'kukmin-dark-brown': '#5f584c;;',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
