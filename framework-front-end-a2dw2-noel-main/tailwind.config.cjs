/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'math':'#ffff',
        'mColor' : '#F3EDFB',
        'mColor2' : '#0A0909',
        'mColor3' : 'rgba(255, 255, 255, 0.3)',
      },
      spacing :{
        '1444' : '1444px',
      },
      backgroundImage :{
        'hImage' : "url('./public/Images/Rectangle 48.png')",
      },
      borderRadius:{
        '30' : '30px',
      },
      fontFamily :{
        'Poppins':'Poppins',
      },
      inset:{
        'mLeft' : 'calc(50% - 180px/2 - 134px)',
      },
      screens:{
        'mo':'375px',
      }
    },
  },
  plugins: [],
}
