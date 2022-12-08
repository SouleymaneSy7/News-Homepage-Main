/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {

    screens: {
      'sm': '480px',
      // => @media (min-width: 480px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '976px',
      // => @media (min-width: 976px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    fontFamily: {
      inter: ['inter', 'sans-serif']
    },

    extend: {

      colors: {
        // primary colors
        'soft-orange':  'hsl(35, 77%, 62%)',
        'soft-red': 'hsl(5, 85%, 63%)',
        // Neutrals colors
        'off-white': 'hsl(36, 100%, 99%)',
        'grayish-blue': ' hsl(233, 8%, 79%)',
        'dark-grayish-blue': 'hsl(236, 13%, 42%)',
        'very-dark-blue': 'hsl(240, 100%, 5%)',
      },

    },
  },
  plugins: [],
}
