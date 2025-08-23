/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    domains: ['images.unsplash.com', 'my.spline.design', 'cdn.sanity.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'my.spline.design',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      }
    ]
  }
}

module.exports = nextConfig