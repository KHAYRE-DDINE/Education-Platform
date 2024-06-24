/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: " #1865F2",
        secondary: { '100': '#3B4A78', '200': '#2D2C53' },
        link: "#1865F2",
        required: "#F54747",
        backgroundErr: "#f5474742",
        grayD: "#ccc",
        normalColor: "black"
      },
      height: {
        firstHeightFace: "838px",
        secondHeightFace: "730px"
      }
    },
  },
  plugins: [],
}

