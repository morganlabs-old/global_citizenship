const { resolve } = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  sassOptions: {
    includePaths: [resolve(__dirname, "styles")],
    prependData: `@import "variables.scss";`,
  },
};

module.exports = nextConfig;
