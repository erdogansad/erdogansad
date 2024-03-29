const path = require("path");

module.exports = {
  reactScriptsVersion: "react-scripts",
  webpack: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/@core/components"),
      "@layouts": path.resolve(__dirname, "src/@core/layouts"),
      "@pages": path.resolve(__dirname, "src/@pages"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
};
