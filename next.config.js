/** @type {import('next').NextConfig} */

const hostnames = ["media.tenor.com", "images.unsplash.com"];

const nextConfig = {
  images: {
    remotePatterns: hostnames.map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },
};

module.exports = nextConfig;
