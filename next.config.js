const API_KEY = process.env.API_KEY; // 이렇게 하면 rewrites 에러남 왜지???
//const API_KEY = "5d037153ef6ce7d47b77f819f0384ffa";

console.log("API_KEY", API_KEY);

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    console.log("Rewrites called", API_KEY);
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
