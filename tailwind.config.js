/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-blue": "#232e44",
        "nav-selected": "#1d2338",
        "nav-hover": "#1f2739",
      },
    },
  },
  plugins: [],
};
