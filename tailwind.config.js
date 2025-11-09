/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#12352f",         // Dark green
        subHeading: "#526e5d",   // Soft green
        light: "#fffdf4",        // Crème/beige
        accent: "#9f845d",       // Muted gold
        lightAccent: "#f1ead5",  // Light gold
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
};
