/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  serverExternalPackages: ["@libsql/client"],
  turbopack: {},
  async rewrites() {
    return [{ source: "/cv", destination: "/cv.pdf" }];
  },
};

module.exports = withContentlayer(nextConfig);
