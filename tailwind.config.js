/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "3rem",
        lg: "3rem",
        xl: "3rem",
        "2xl": "0",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        purpleHearth: "#4731d3",
        sulu: "#cbf281",
        mineShaft: {
          500: "#3a3a3a",
          600: "#2B2727",
        },
        kournikova: "#ffe86e",
        malibu: "#8f88ff",
        alto: "#D9D9D9",
        boulder: "#777777",
        bilobaFlower: "#BAB2E7",
        bunting: "#171043",
        seaWeed: "#1A210B",
        balticSea: "#252128",
        trueV: "#8173DA",
      },
    },
  },
  plugins: [],
};
