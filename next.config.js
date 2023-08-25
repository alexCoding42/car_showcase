/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
  },
  env: {
    NEXT_PUBLIC_RAPID_API_KEY: process.env.NEXT_PUBLIC_RAPID_API_KEY,
    NEXT_PUBLIC_IMAGIN_API_KEY: process.env.NEXT_PUBLIC_IMAGIN_API_KEY,
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_RAPID_API_KEY: process.env.NEXT_PUBLIC_RAPID_API_KEY,
    NEXT_PUBLIC_IMAGIN_API_KEY: process.env.NEXT_PUBLIC_IMAGIN_API_KEY,
  },
};

module.exports = nextConfig;
