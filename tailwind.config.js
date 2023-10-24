/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       blue: "#5a619c",
       grey: "#5e5c5c",
       grey2: "#D9D9D9",
       green: "#82c388",
       black: "#000000",
       white: "#ffffff"
      },
      fontSize: {
       t20: "1.25rem",
       t24: "1.5rem",
       t32: "2rem",
       t40: "2.5rem"
      },
      fontFamily: {
       notable: "Notable",
       montserrat: "Montserrat",
      }
     },
  },
  plugins: [],
}