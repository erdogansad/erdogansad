const path = require("path");
const CracoEnvPlugin = require("craco-plugin-env");

module.exports = {
  reactScriptsVersion: "react-scripts",
  plugins: [
    {
      plugin: CracoEnvPlugin,
      options: {
        variables: {},
      },
    },
  ],
  webpack: {
    configure: {
      resolve: {
        fallback: {
          crypto: require.resolve("crypto-browserify"),
          buffer: require.resolve("buffer/"),
          stream: require.resolve("stream-browserify"),
          vm: require.resolve("vm-browserify"),
        },
      },
    },
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/@core/components"),
      "@layouts": path.resolve(__dirname, "src/@core/layouts"),
      "@pages": path.resolve(__dirname, "src/@pages"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@slices": path.resolve(__dirname, "src/redux/slices"),
    },
  },
};
