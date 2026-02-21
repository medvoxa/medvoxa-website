/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#0B1220",
          secondary: "#1B1F3B",
          accent: "#3B2F80",
        },
        brand: {
          accent: "#4FD1C5", // Executive teal accent
        },
        text: {
          primary: "#F8FAFC",
          secondary: "#CBD5E1",
          muted: "#94A3B8",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #0B1220 0%, #1B1F3B 50%, #3B2F80 100%)",
      },
      boxShadow: {
        glow: "0 0 60px rgba(79, 209, 197, 0.15)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.35)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};