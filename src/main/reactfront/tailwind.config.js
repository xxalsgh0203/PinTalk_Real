/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeOut: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        homeFadeEffect: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      colors: {
        'pintalk-light-yellow': '#ffcf0f;',
        'pintalk-dark-yellow': '#ffb700;',
        'pintalk-dark-brown': '#5f584c;',
        'slide-whitespace': '#E1EBF4;',
      },
      animation: {
        fade: 'fadeOut 0.5s ease-in-out',
        fadeEffect: 'homeFadeEffect 0.8s ease-in-out',
        slowFadeEffect: 'homeFadeEffect 1.2s ease-in-out',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
