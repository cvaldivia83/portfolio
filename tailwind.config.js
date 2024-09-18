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
        background: '#FFF',
        lPurple: '#D9CCFE',
        mPurple: '#AA8EFE',
        dPurple: '#835AFD',
        DPurple: '#452F85',
        lGray: '#EEEDF1',
        mGray: '#C5C2D0',
        dGray: '#6E6A78', 
        DGray: '#403E46'
      },
    },
  },
  plugins: [],
};
