/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dis/*.{html,js}"],
  theme: {
    screens: {
      'xs': '320px', // Example width for extra small screens
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  
    
    extend: {},
  },
  plugins: [],
}

