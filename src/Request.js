const apikey = "9190e4c097577c6ffc706d8a743f8f99";

const requests = {
  popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`,
  topRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`,
  trendingMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=2`,
  horrorMovies: `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=horror&page=1&include_adult=false`,
  Upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`,
};

export default requests;
