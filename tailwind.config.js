/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: " #1865F2",
        secondary: "#3B4A78",
        link: "#1865F2",
        required: "#F54747",
        backgroundErr: "#f5474742",
      }
    },
  },
  plugins: [],
}

