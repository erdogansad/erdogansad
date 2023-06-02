/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purpleHearth: "#4731d3",
        sulu: "#cbf281",
        mineShaft: "#3a3a3a",
        kournikova: "#ffe86e",
        malibu: "#8f88ff",
      },
    },
  },
  plugins: [],
};
