/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        brand: {
          dark: "#12352f",      // Dark green
          subHeading: "#526e5d", // Soft green
          light: "#fffdf4",     // Crème/beige
          accent: "#9f845d",    // Muted gold
          lightAccent: "#f1ead5", // Light gold
        },
      },
    },
  },
  plugins: [],
};
