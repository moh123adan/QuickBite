/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFC107",
        background: "#ffffff",
        text: "#000000",
        // "background-dark": "#181818",
        // "text-dark": "#ffffff",
        // "primary-dark": "#ffa07a",
      },
    },
  },

  plugins: [],
};
