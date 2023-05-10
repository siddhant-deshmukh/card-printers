/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'pacifico': ["Pacifico", "cursive"],
        'caveat' : ['Caveat-Regular','cursive1'],
        'caveat-semi' : ['Caveat-Semi','cursive3'],
        'lobster': ['Lobster','cursive2'],
      }
    },
    screens: {
      '2xl' : '1390px',
      '2md' :'700px',
    }
  },
  plugins: [],
}

