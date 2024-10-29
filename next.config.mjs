const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's3-alpha-sig.figma.com',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  
