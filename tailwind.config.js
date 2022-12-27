/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#1d2025",

          "secondary": "#d8d7d9",

          "base-100": "white",

          "info": "#93A2F1",

          "success": "#14522F",

          "warning": "#E1B209",

          "error": "#EF2A65",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}