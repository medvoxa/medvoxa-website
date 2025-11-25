/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#5A3A2E",   // rich chocolaty Medvoxa color
          light: "#F4E9E4",
        },
      },
    },
  },
  plugins: [],
};
