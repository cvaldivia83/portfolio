/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      boxShadow: {
        sandwich: "0 8px, 0px -8px ",
      },
      colors: {
        background: '#210A2E',
        lPurple: '#B868FF',
        lGray: '#d1cfcf',
        mGray: '#9888B0',
        dGray: '#140d42'
      },
    },
  },
  plugins: [],
};
