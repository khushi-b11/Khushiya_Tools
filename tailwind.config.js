/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
 theme: {
 

    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}

