/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  mode: "jit",
  plugins: [],
  theme: {
    container: {
      center: true,
    },
    extend: {},
    fontFamily: {
      mono: ["YuGothic"],
    },
    fontSize: {
      "2xl": "1.5rem",
      base: "1rem",
      sm: ".875rem",
      "3xl": "1.875rem",
      tiny: ".875rem",
      xs: ".75rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      lg: "1.125rem",
      "7xl": "5rem",
      xl: "1.25rem",
    },
    prefix: "tw-",

    screens: {
      // => @media (min-width: 768px) { ... }
      lg: "1000px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 1000px) { ... }
      // xl: "1000px",
      // => @media (min-width: 1000px) { ... }
      mmd: { max: "767px" },
      sm: "640px",
      // => @media (max-width: 767px) { ... }
    },
  },
};
