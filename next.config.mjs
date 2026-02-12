/** @type {import('next').NextConfig} */
const nextConfig = {
  
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        // port: '',
        // pathname: '/my-bucket/**',
        // search: '',
      },
    ],
  },
};

export default nextConfig;
