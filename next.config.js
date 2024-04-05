/** @type {import('next').NextConfig} */


const nextConfig ={
    reactStrictMode: true,
    fastRefresh: true,
    concurrentFeatures: true,
    swcMinify: true,
    images: {
      unoptimized: true,
      domains: ["lh3.googleusercontent.com"],
    },
  }
module.exports = nextConfig;
