/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: "#4ade80", // bleu par défaut
            light: "#f7f7f7",
            dark: "#333",
          },
          secondary: {
            DEFAULT: "#F59E0B", // orange par défaut
            light: "#FBBF24",
            dark: "#B45309",
          },
        },
      },
    },
    plugins: [],
  }
  