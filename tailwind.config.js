const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'm-sm': ['1em', {
          lineHeight: '120%',
          fontWeight: '400',
        }],
        'm-md': ['1.4em', {
          lineHeight: '120%',
          fontWeight: '400',
        }],
        'm-lg': ['1.7em', {
          lineHeight: '120%',
          fontWeight: '700',
        }],
        'm-xl': ['2.5em', {
          lineHeight: '120%',
          fontWeight: '700',
        }]
      },
      colors: {
        'dark': '#1D2123',
        'dark-alt': '#1A1E1F',
        'dark-opacity': 'rgba(66, 68, 70, 0.404)',
        'light': '#EFEEE0',
        'white-opacity': 'rgba(255, 255, 255, 0.5)',
        'secondary': '#FACD66',
        'turquoise':'#609EAF'
      },
      boxShadow: {
        'btn': ' 0px 0px 18px 0px rgba(255, 255, 255, 0.30)',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

