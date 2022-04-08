const nextConfig = (_) => {
  return {
    images: {
      domains: ["images.unsplash.com"],
    },
  };
};

module.exports = (phase) => nextConfig(phase);
