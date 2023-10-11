/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#4CAF4F",
        title: "#4D4D4D",
        paragraph: "#717171",
        behind: "#F5F7FA",
      },
      boxShadow: {
        cardShadow: "0px 2px 4px 0px rgba(171, 190, 209, 0.30)",
        commuinity: "0px 8px 16px 0px rgba(171, 190, 209, 0.40)",
      },
      screens: {
        mobile: "412px",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};


