/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        port: '',
        pathname: '**',
      },
    ],
},


};

export default nextConfig;



// images: {
//     domains: ['tmdb.org', 'themoviedb.org', 'image.tmdb.org'],
//   },