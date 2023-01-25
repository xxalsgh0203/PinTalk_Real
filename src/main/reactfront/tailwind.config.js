/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        homeBounce: {
          '0%, 100%': { transform: 'translateY(-25%)', opacity: '0' },
          '50%': { transform: 'translateY(0)', opacity: '0.7' },
        },
      },
      colors: {
        'pintalk-light-yellow': '#ffcf0f;',
        'pintalk-dark-yellow': '#ffb700;',
        'pintalk-dark-brown': '#5f584c;',
        'slide-whitespace': '#E1EBF4;',
      },
      backgroundImage: {
        silde1: "url('reactfront/src/img/slideshow.jpeg')",
        homeBgUrl:
          "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlJTIwYXQlMjB3b3JrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
