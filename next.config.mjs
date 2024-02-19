/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, options) =>
    {
        config.module.rules.push({
            test: /\.pdf$/i,
            use: 'url-loader'
        })

        return config
    },
};

export default nextConfig;
