/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm': {'max': '639px'},
      },
      colors:{
        'navbg':'#FF9F3F',
        'nav2bg':'#F1C79E',
        'fieldborder':'#ADAAAA',
        'fieldbg':'#F9F9F9',
        'filebg':'#EBD6C1'
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'ananda_namaste': ['ananda_namaste', 'sans-serif'],
      },
      height:{
        '95vh':'89.5vh'
      },
      boxShadow:{
        'lg': '-0px 3px 10px 5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'sm': '-0px 2px 5px 2px rgba(0, 0, 0, 0.1), 0 2px 3px -2px rgba(0, 0, 0, 0.05)',
        'xl': '-5px 0px 20px 5px rgba(0, 0, 0, 0.1), 0 16px 24px -2px rgba(0, 0, 0, 0.05)',

        
      },
    },
  },
  plugins: [],
}

