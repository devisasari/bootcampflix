const key = process.env.REACT_APP_TMDB_API_KEY

const requests = {
        requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=tr-TR&page=1`,
        requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=tr-TR&page=1`,
        requestCrime: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=tr-TR&query=crime&page=1&include_adult=false`,
        requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=tr-TR&page=1`,
        requestDiscover: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free`,
        requestWar: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=tr-TR&query=war&page=1&include_adult=false`,
        requestFamily: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=tr-TR&query=family&page=1&include_adult=false`,
      };

export default requests;