/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'jost': ['Jost', 'Inter'],
      'cormorant': ["cormorant-garamond", 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {
      darkMode: 'class',
      backgroundImage: {
        'footer-bg': "url('https://i.ibb.co/MVGhDbg/testi-video-bg.webp')",
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
      },
      colors: {
        'primary': '#C09542',
        'primaryLight': '#FAF7F0',
        'secondary': '#DAC192',
        'headingColor': '#252525',
        'textColor': '#5e5e5e',
        'offWhite': '#ffffffcc',
        'borderLight': '#ffffff26',
      }
    },
  },
  plugins: [],
});