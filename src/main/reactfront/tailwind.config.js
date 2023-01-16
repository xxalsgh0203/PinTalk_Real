/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'pintalk-light-yellow': '#ffcf0f;',
        'pintalk-dark-yellow': '#ffb700;',
        'pintalk-dark-brown': '#5f584c;',
        'slide-whitespace': '#E1EBF4;',
      },
      backgroundImage: {
        silde1: "url('reactfront/src/img/slideshow.jpeg')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
