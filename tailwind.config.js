/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
      primary: ' #737373',
      secondary: '#6A4DF4',
third: '#151515',
     },

     maxWidth: {
      'container': '1320px'
     },
    
     fontSize: {
      f45: '45px',
     },

        fontFamily: {
      inter: ["Inter", "sans-serif"],
        }


    },
  },
 
  plugins: [],
  }

