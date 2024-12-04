/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        bg: "#1f1f1f",
        base: "rgb(31 31 31)",
        white: "#FFFFFF",
        red: "#ff004f",
        accent: "#839392"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sora: ["sora", "sans-serif"]
      }
    },
  },
  plugins: [],
}