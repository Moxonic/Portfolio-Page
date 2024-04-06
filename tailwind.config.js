/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  
      
      height: {
        76: '18rem',
        78: '19rem',
        82: '22rem',
        97: '28rem',
        98: '31rem',
        99: '38rem',
        100: '40rem',
        'fit-content': 'fit-content',
    }},
  },
  plugins: [],
}
