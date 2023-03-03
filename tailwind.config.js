/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes:{
        morfo:{
          '0%': {border: 'solid 1px black'},
          '20%': {borderRadius: '50%', transform : 'rotate(180deg)', boxShadow: '2px 2px 2px 2px red, -2px -2px 2px 2px blue' },
          '40%': {borderRadius: '0%', transform : 'rotate(0deg) scale(0.7)'},
          '60%': {borderRadius: '50%'},
          '80%': {borderRadius: '0%', transform : 'rotate(0deg) scale(1.2)'},
          '100%': {borderRadius: '50%', transform : 'rotate(360deg) scale(1)', boxShadow: '2px 2px 16px gray, -2px -2px 16px gray'},
        },
      },

      animation:{
        morfo : 'morfo 1s ease-in forwards',
      }
    },
  },
  plugins: [],
}
