/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },

    screens: {
    sm: "640px",
    // => @media (min-width: 640px) { ... }
    md: "768px",
    // => @media (min-width: 768px) { ... }
    lg: "1000px",
    // => @media (min-width: 1024px) { ... }
    xl: "1000px",
    // => @media (min-width: 1280px) { ... }
  },
  fontFamily: {
   
    'mono': ['YuGothic'],
  }
  

  },
  plugins: [],
  
};

