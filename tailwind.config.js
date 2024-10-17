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
        white: "#FFFFFF",
        red: "#ff004f"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sora: ["sora", "sans-serif"]
      }
    },
  },
  plugins: [],
}