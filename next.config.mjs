/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing config here
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },
};

// Use ESM export instead of module.exports
export default nextConfig;