/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracing: true,
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
}
module.exports = nextConfig
