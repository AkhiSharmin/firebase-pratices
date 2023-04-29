/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#87c1dd",

          "secondary": "#33c4bf",

          "accent": "#d89217",

          "neutral": "#1C242B",

          "base-100": "#EEECF3",

          "info": "#6BC0EB",

          "success": "#1AC796",

          "warning": "#F39735",

          "error": "#F01956",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

