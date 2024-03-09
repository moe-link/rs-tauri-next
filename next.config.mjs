/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    // 禁用图片优化
    unoptimized: true,
  },
  
};

export default nextConfig;
