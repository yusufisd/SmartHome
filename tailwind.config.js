/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/Pages/*.{js,jsx,ts,tsx}" , "./src/Components/*.{js,jsx,ts,tsx}" ],
  theme: {
    extend: {
      colors:{
        "blue-bg" : "#ccd8e8", 
        "current-box": "#2666DE",
        "title-text" : "#516682",
        "currnet-title" : "#0280ff"
      }
    },
  },
  plugins: [],
}

