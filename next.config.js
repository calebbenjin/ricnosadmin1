module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['alpha.ricnoslogistics.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://alpha.ricnoslogistics.com/api*',
      },
    ];
  },
};
