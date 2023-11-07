/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#C09542',
        'primaryLight': '#FAF7F0',
        'secondary': '#DAC192',
        'headingColor': '#252525',
        'textColor': '#333333',
      }
    },
  },
  plugins: [],
});