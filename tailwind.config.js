/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flexGrow: {
        2: "2",
      },
    },
    fontFamily: {
      "roboto-serif": ["Roboto Serif", "serif"],
      "roboto-sans": ["Roboto", "serif"],
    },
    screens: {
      xsm: "512px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
