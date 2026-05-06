/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me", // Testimonials ke liye zaroori
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;