/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8D2D2D",
        secondary: "#A5513D",
        tertiary: "#C38455",
        accent: "#F9DF7A",
        orange: "#FD9038",
      },
      fontFamily: {
        mont: ["Montserrat", "sans - serif"],
      },
      backgroundImage: {
        noise: "url('/src/assets/noise.svg)",
      },
    },
  },
  plugins: [],
};

